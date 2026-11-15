import os, re, io, hashlib, urllib.request, urllib.error
from PIL import Image

ROOT = '/Users/zhaojizong/Developer/creation/sleepy-zone-site'
ARCHIVE = os.path.join(ROOT, 'src/content/archive')
OUT = os.path.join(ROOT, 'public/img/archive')
os.makedirs(OUT, exist_ok=True)

files = [os.path.join(ARCHIVE, f) for f in os.listdir(ARCHIVE) if f.endswith('.md')]
urls = set()
for f in files:
    s = open(f, encoding='utf-8').read()
    urls.update(re.findall(r'!\[[^\]]*\]\((https?://[^)\s]+)\)', s))
    urls.update(re.findall(r'<img[^>]+src="(https?://[^"]+)"', s))

print('unique urls', len(urls))
mapping = {}
failed = []
for i, url in enumerate(sorted(urls), 1):
    name = hashlib.sha1(url.encode()).hexdigest()[:16]
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/124 Safari/537.36'})
        with urllib.request.urlopen(req, timeout=30) as res:
            data = res.read()
            ctype = res.headers.get('Content-Type', '')
        if 'svg' in ctype:
            path = f'/img/archive/{name}.svg'
            open(os.path.join(OUT, f'{name}.svg'), 'wb').write(data)
        else:
            im = Image.open(io.BytesIO(data))
            im.seek(0)
            im = im.convert('RGBA') if im.mode in ('RGBA', 'LA', 'P') else im.convert('RGB')
            w, h = im.size
            if w > 1500:
                im = im.resize((1500, round(h * 1500 / w)), Image.LANCZOS)
            path = f'/img/archive/{name}.webp'
            im.save(os.path.join(OUT, f'{name}.webp'), 'WEBP', quality=82, method=4)
            im.close()
        mapping[url] = path
        print(f'[{i}/{len(urls)}] ok {path} <- {url[:90]}')
    except Exception as e:
        failed.append((url, str(e)[:100]))
        mapping[url] = '/img/archive/missing.svg'
        print(f'[{i}/{len(urls)}] FAIL {url[:90]} :: {e}')

for f in files:
    s = open(f, encoding='utf-8').read()
    orig = s
    for url, path in mapping.items():
        s = s.replace(url, path)
    if s != orig:
        open(f, 'w', encoding='utf-8').write(s)

print('\nfailed', len(failed))
for u, e in failed:
    print(' ', u, '::', e)
print('mapped', len(mapping))
