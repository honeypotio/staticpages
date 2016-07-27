const getBase = (urlType) => {
  return urlType === 'url_base' ? $PROCESS_ENV_URL_BASE : $PROCESS_ENV_APP_HOST;
};

export default (url, urlType = 'url_base') => {
  const baseUrl = getBase(urlType) || '';
  return `${baseUrl}${url}`;
};
