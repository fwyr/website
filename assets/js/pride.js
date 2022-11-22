const jsConfetti = new JSConfetti()
let r = document.querySelector(':root');
let s = "";

/* 
0 - confettiEmojis
1 - confettiColors
2 - emphasis
3 - anchor
4 - hover
*/

_ = ["", [], '#ddd', '#fff', '#ffffff80'];
transgender = [['🏳️‍🌈', '🏳️‍⚧️', '💎', '💗', '🤍'], ['#55CDFD', '#FFFFFF', '#F6AAB7'], '#55CDFD', '#F6AAB7', '#F6AAB7c7',];
nonbinary = [['🏳️‍🌈','💛','🤍','💜','🖤'], ['#FCF431', '#9D59D2', '#ffffff', '#2C2C2C'], '#FCF431', '#9D59D2', '#9D59D2c7',];
asexual = [['💜','🖤','🤍'], ['#A3A3A3', '#800080', '#000000', '#FFFFFF' ], '#A3A3A3', '#800080', '#800080c7',];
bisexual = [['🏳️‍🌈','🌈','💙','💜','💓'], ['#D60270', '#9B4F96', '#0038A8'], '#004FFF', '#D70071', '#9C4E97',];
pansexual = [['🏳️‍🌈','💗','💛','💙'], ['#FF218C', '#FFD800', '#21B1FF'], '#FFD800', '#FF218C', '#21B1FF',];
lesbian = [['💗','🧡','🤍','💖','💗'], [], '', '', '']
genderfluid = [['💖','🤍','💜','🖤','💙','🏳️‍🌈'], ['#FF76A4', '#FFFFFF', '#C011D7', '#000000', '#2F3CBE'], '', '', '']
lgbt = [['🏳️‍🌈','🌈'], ['#E40303', '#FF8C00', '#FFED00', '#008026', '#24408E', '#732982'], '', '', '',];

function cSet(x) {
    jsConfetti.addConfetti({emojis: x[0]});
    jsConfetti.addConfetti({confettiColors: x[1]});
}

function rSet(x) {
    r.style.setProperty('--main-emphasis-color', x[2])
    r.style.setProperty('--main-anchor-color', x[3])
    r.style.setProperty('--main-hover-anchor-color', x[4])
}

function sSet(x) {
    sessionStorage.setItem('--main-emphasis-color', x[2])
    sessionStorage.setItem('--main-anchor-color', x[3])
    sessionStorage.setItem('--main-hover-anchor-color', x[4])
}

function allSet(x) {
    cSet(x); rSet(x); sSet(x);
}

document.addEventListener("keypress", function (event) {
    event = event || window.event;
    var charCode = event.which || event.keyCode;
    var charStr = String.fromCharCode(charCode);
    s += charStr;

    if (s.includes('reset')) {
        rSet(_); sSet(_); s = "";
    } else if (s.includes('lgbt') || s.includes('pride') || s.includes('gay')) {
        cSet(lgbt); s = "";
    } else if (s.includes('transgender')) {
        allSet(transgender); s = "";
    } else if (s.includes('nonbinary')) {
        allSet(nonbinary); s = "";
    } else if (s.includes('asexual')) {
        allSet(asexual); s = "";
    } else if (s.includes('bisexual')) {
        allSet(bisexual); s = "";
    } else if (s.includes('pansexual')) {
        allSet(pansexual); s = "";
    } else if (s.includes('lesbian')) {
        cSet(lesbian); s = "";
    } else if (s.includes('genderfluid')) {
        cSet(genderfluid); s = '';
    }
})

window.onload = () => {
    if (sessionStorage.getItem('--main-emphasis-color')) {
        r.style.setProperty('--main-emphasis-color', sessionStorage.getItem('--main-emphasis-color'));
        r.style.setProperty('--main-anchor-color', sessionStorage.getItem('--main-anchor-color'));
        r.style.setProperty('--main-hover-anchor-color', sessionStorage.getItem('--main-hover-anchor-color'));
    }
}