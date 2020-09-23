var link = "";
var num = "";
function addrandombinary() {
  var num = Math.floor(Math.random() * 2);
  link = link + num;
}
var i;
for (i = 0; i < 100; i++) {
  addrandombinary();
}
console.log(link);
console.log(
  "Now you have a long string of binary. Do this enough and you might get somethin significant."
);
