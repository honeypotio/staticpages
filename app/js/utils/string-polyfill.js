String.prototype.startsWith = String.prototype.startsWith || function(str) {
  return this.indexOf(str) === 0;
};

export default String;
