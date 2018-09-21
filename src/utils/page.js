export default function getCurrentPage() {
  const path = typeof window !== 'undefined'
    ? window.location.pathname.slice(1)
    : '';
  const parts = path.split('/');
  if(parts.length > 1) {
    return parts.pop();
  }
  return 'index';
}
