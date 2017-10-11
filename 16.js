// https://www.codewars.com/kata/are-all-elements-equal/train/javascript


Object.defineProperty(String.prototype, "eqAll", {
    value: function eqAll() {
        return 0 === this.replace(new RegExp(`${this[0]}`, 'g'), '').length;
    }
});

Object.defineProperty(Array.prototype, "eqAll", {
    value: function eqAll() {
        return this.length === this.filter(el => this[0] === el).length;
    }
});
