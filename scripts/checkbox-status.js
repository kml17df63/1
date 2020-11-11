
let chbox = function(_this) {
 if (!_this.classList.contains('is-active')) {
  _this.classList.add('is-active');

  const checkboxInput = document.querySelector("#contacts-checkbox");
  checkboxInput.checked = true;
 } else {
  _this.classList.remove('is-active');

  const checkboxInput = document.querySelector("#contacts-checkbox");
  checkboxInput.checked = false;
 }
}
