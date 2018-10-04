import { getPath, getLang } from './i18n';
export default function getCurrentPage() {
  const path = getPath();
  const parts = path.split('/');
  const last = parts.pop();
  if(parts.length > 1 && last !== getLang()) {
    return last;
  }
  return 'index';
}
