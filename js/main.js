[].forEach.call(document.querySelectorAll('.usb ,.sub-menu-1 li'), function (link) {
    link.addEventListener('mouseover', coloringHandler);
    link.addEventListener('mouseout', decoloringHandler);
});
var colorBackgroup;
function coloringHandler() {
    colorBackgroup = this.style.color;
    this.style.background = "red";
    
}

function decoloringHandler() {
    this.style.background = colorBackgroup;
}