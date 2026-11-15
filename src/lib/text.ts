export function plainText(markdown = '') {
  return markdown
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#>*_`~-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function excerpt(markdown = '', length = 80) {
  const text = plainText(markdown);
  return text.length > length ? `${text.slice(0, length)}…` : text;
}
