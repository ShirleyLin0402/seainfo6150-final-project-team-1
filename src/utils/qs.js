export function parseQS() {
  const query = window.location.search.substring(1);
  const vars = query.split('&');
  return vars.reduce((acc, cur) => {
    const [k, v] = cur.split('=');
    acc.set(k, v);
    return acc;
  }, new Map());
}
