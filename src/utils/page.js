import { getPath } from './i18n';
export default function getCurrentPage() {
  const path = getPath();
  const parts = path.split('/');
  if(parts.length > 1) {
    return parts.pop();
  }
  return 'index';
}
