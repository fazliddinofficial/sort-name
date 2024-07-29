"use strict"
let free = null;
function fromAtoZ() {
    let names = prompt('enter names').split(' ');
    document.write(names.sort());
}
function fromZtoA() {
    let names = prompt('enter names').split(' ');
    free = names.sort();
    document.write(free.reverse());
    document.innerHtml = '<input type="text">';
}












// Muhammad Mustafo Imron Ali Umar Azizbek Sardor Abdulloh Ibrohim