let r = document.querySelector(':root');
let s = "";

window.onload = () => {
    if (localStorage.getItem('--main-bold-color')) {
        r.style.setProperty('--main-bold-color', '#5bcefa');
        r.style.setProperty('--main-anchor-color', '#f5a9b8');
        r.style.setProperty('--hover-anchor-color', '#f5a9b8c7');
    }
}

document.addEventListener("keypress", function(event) {
    event = event || window.event;
    var charCode = event.which || event.keyCode;
    var charStr = String.fromCharCode(charCode);
    s += charStr;

    console.log(s);

    if (s.includes('transgender')) {
        r.style.setProperty('--main-bold-color', '#5bcefa');
        r.style.setProperty('--main-anchor-color', '#f5a9b8');
        r.style.setProperty('--hover-anchor-color', '#f5a9b8c7');
        localStorage.setItem('--main-bold-color', '#5bcefa');
        localStorage.setItem('--main-anchor-color', '#f5a9b8');
        localStorage.setItem('--hover-anchor-color', '#f5a9b8c7');
        s = ""
    } 
})