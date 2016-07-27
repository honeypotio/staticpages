export default (pathname) => {
  return pathname.replace(/pr-[0-9]+\//, '');
}
