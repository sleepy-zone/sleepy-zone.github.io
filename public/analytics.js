/**
 * 轻量埋点层，与 char-db-cn 共用一套约定：
 *
 *   window.ANALYTICS = {
 *     providers: [{ provider: "clarity", id: "r1wmvdsf4a" }]
 *   };
 *
 * 业务事件统一走 window.track(name, params)，Clarity 里会同时写入
 * event 和 lib/type/value/label/mode/action/trigger/id 这些 tag。
 * 最近 200 条事件始终保存在 window.__trackLog，便于本地调试。
 *
 * 只在正式域名（sleepyzone.online / *.sleepy-zone.github.io）加载 provider，
 * 本地开发不会污染 Clarity 数据。
 */
(function () {
  var TRACKABLE_HOST =
    /(^|\.)sleepyzone\.online$/i.test(location.hostname) ||
    /(^|\.)sleepy-zone\.github\.io$/i.test(location.hostname);

  var cfg = window.ANALYTICS || {};
  var configured = [];
  if (cfg.providers && cfg.providers.length) {
    configured = cfg.providers.filter(function (x) {
      return x && x.provider && x.provider !== "none";
    });
  } else if (cfg.provider && cfg.provider !== "none") {
    configured = [{ provider: cfg.provider, id: cfg.id }];
  }

  window.__trackLog = [];
  function log(name, params) {
    var rec = { t: Date.now(), name: name, params: params || {} };
    window.__trackLog.push(rec);
    if (window.__trackLog.length > 200) window.__trackLog.shift();
    if (window.__trackDebug) console.log("[track]", name, rec.params);
  }

  var CLARITY_TAGS = ["lib", "type", "value", "label", "mode", "action", "trigger", "id"];

  function dispatch(provider, name, params) {
    try {
      if (provider === "ga4" && window.gtag) {
        window.gtag("event", name, params || {});
      } else if (provider === "baidu" && window._hmt) {
        var p = params || {};
        window._hmt.push(["_trackEvent", p.lib || "site", name, JSON.stringify(p)]);
      } else if (provider === "umami" && window.umami) {
        window.umami.track(name, params || {});
      } else if (provider === "clarity" && window.clarity) {
        window.clarity("event", name);
        var p2 = params || {};
        CLARITY_TAGS.forEach(function (key) {
          if (p2[key] !== undefined && p2[key] !== null && p2[key] !== "") {
            window.clarity("set", key, String(p2[key]).slice(0, 60));
          }
        });
      }
    } catch (error) {
      /* 埋点不能影响主流程 */
    }
  }

  window.track = function (name, params) {
    try {
      var payload = params || {};
      log(name, payload);
      configured.forEach(function (item) {
        dispatch(item.provider, name, payload);
      });
    } catch (error) {
      /* 埋点不能影响主流程 */
    }
  };

  function addScript(src, attrs) {
    var script = document.createElement("script");
    script.async = true;
    script.src = src;
    if (attrs) {
      Object.keys(attrs).forEach(function (key) {
        script.setAttribute(key, attrs[key]);
      });
    }
    document.head.appendChild(script);
  }

  function loadProviders() {
    configured.forEach(function (item) {
      var provider = item.provider;
      var id = item.id;
      if (!id) {
        console.warn("[analytics]", provider, "缺少 id，已跳过");
        return;
      }

      if (provider === "ga4") {
        window.dataLayer = window.dataLayer || [];
        window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
        window.gtag("js", new Date());
        window.gtag("config", id, { send_page_view: true, anonymize_ip: true });
        addScript("https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(id));
      } else if (provider === "baidu") {
        window._hmt = window._hmt || [];
        addScript("https://hm.baidu.com/hm.js?" + encodeURIComponent(id));
      } else if (provider === "umami") {
        addScript("https://cloud.umami.is/script.js", { "data-website-id": id });
      } else if (provider === "clarity") {
        (function (c, l, a, r, i) {
          c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
          var t = l.createElement(r);
          t.async = 1;
          t.src = "https://www.clarity.ms/tag/" + i;
          var y = l.getElementsByTagName(r)[0];
          y.parentNode.insertBefore(t, y);
        })(window, document, "clarity", "script", id);
      } else if (provider === "cloudflare") {
        addScript("https://static.cloudflareinsights.com/beacon.min.js", {
          "data-cf-beacon": JSON.stringify({ token: id }),
        });
      } else {
        console.warn("[analytics] 未知 provider:", provider);
      }
    });
  }

  if (TRACKABLE_HOST) loadProviders();

  function paramsFrom(el) {
    var params = { lib: el.getAttribute("data-track-lib") || "site" };
    ["id", "type", "value", "label", "mode", "action", "trigger"].forEach(function (key) {
      var value = el.getAttribute("data-track-" + key);
      if (value) params[key] = value;
    });
    return params;
  }

  document.addEventListener("click", function (event) {
    if (event.defaultPrevented) return;
    var target = event.target;
    if (!target || !target.closest) return;

    var tracked = target.closest("[data-track]");
    if (tracked) {
      var name = tracked.getAttribute("data-track");
      if (name) window.track(name, paramsFrom(tracked));
      return;
    }

    var link = target.closest('a[href^="http"]');
    if (link && link.hostname && link.hostname !== location.hostname) {
      window.track("outbound_click", {
        lib: "site",
        value: link.hostname,
        label: (link.textContent || "").trim().slice(0, 40),
      });
    }
  });
})();
