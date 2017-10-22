// https://www.codewars.com/kata/custom-array-dot-concat-method/train/javascript

Array.prototype.customConcat = function(element) {
    Array.isArray(element) ? element.forEach(el => this[this.length] = el) : this[this.length] = element;
    return this;
};
