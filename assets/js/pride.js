let jsConfetti = new JSConfetti()
let r = document.querySelector(':root');
let s = "";

window.onload = () => {
    if (sessionStorage.getItem('--main-bold-color')) {
        r.style.setProperty('--main-bold-color', sessionStorage.getItem('--main-bold-color'));
        r.style.setProperty('--main-anchor-color', sessionStorage.getItem('--main-anchor-color'));
        r.style.setProperty('--hover-anchor-color', sessionStorage.getItem('--hover-anchor-color'));
    }
}

document.addEventListener("keypress", function (event) {
    event = event || window.event;
    var charCode = event.which || event.keyCode;
    var charStr = String.fromCharCode(charCode);
    s += charStr;

    if (s.includes('transgender')) {
        r.style.setProperty('--main-bold-color', '#5bcefa');
        r.style.setProperty('--main-anchor-color', '#f5a9b8');
        r.style.setProperty('--hover-anchor-color', '#f5a9b8c7');
        sessionStorage.setItem('--main-bold-color', '#5bcefa');
        sessionStorage.setItem('--main-anchor-color', '#f5a9b8');
        sessionStorage.setItem('--hover-anchor-color', '#f5a9b8c7');
        s = ""

        jsConfetti.addConfetti({
            emojis: [
                '🏳️‍🌈', '🏳️‍⚧️'
            ]
        });
        jsConfetti.addConfetti({
            confettiColors: [
                '#5bcefa', '#ffffff', '#f5a9b8'
            ],
        })

    } else if (s.includes('nonbinary')) {
        r.style.setProperty('--main-bold-color', '#fcf434');
        r.style.setProperty('--main-anchor-color', '#9c59d1');
        r.style.setProperty('--hover-anchor-color', '#9c59d1c7');
        sessionStorage.setItem('--main-bold-color', '#fcf434');
        sessionStorage.setItem('--main-anchor-color', '#9c59d1');
        sessionStorage.setItem('--hover-anchor-color', '#9c59d1c7');
        s = ""

        jsConfetti.addConfetti({
            emojis: [
                '🏳️‍🌈', '💛', '🤍', '💜', '🖤'
            ]
        });
        jsConfetti.addConfetti({
            confettiColors: [
                '#fcf434', '#9c59d1', '#ffffff', '#2c2c2c'
            ],
        })
    } else if (s.includes('asexual')) {
        r.style.setProperty('--main-bold-color', '#a3a3a3');
        r.style.setProperty('--main-anchor-color', '#800080');
        r.style.setProperty('--hover-anchor-color', '#800080c7');
        sessionStorage.setItem('--main-bold-color', '#a3a3a3');
        sessionStorage.setItem('--main-anchor-color', '#800080');
        sessionStorage.setItem('--hover-anchor-color', '#800080c7');
        s = ""

        jsConfetti.addConfetti({
            emojis: [
                '🏳️‍🌈', '💜', '🖤', '🤍', 
            ]
        });
        jsConfetti.addConfetti({
            confettiColors: [
                '#a3a3a3', '#800080', '#000000', '#ffffff' 
            ],
        })
    } else if (s.includes('bisexual')) {
        s = ""
        jsConfetti.addConfetti({
            emojis: [
                '🏳️‍🌈', '🌈', '💙', '💜', '💓'
            ]
        }); 
        jsConfetti.addConfetti({
            confettiColors: [
                '#D60270', '#9B4F96', '#0038A8'
            ],
        })
    } else if (s.includes('lgbt') || s.includes('pride')) {
        s = ""
        jsConfetti.addConfetti({
            emojis: [
                '🏳️‍🌈', '🌈'
            ]
        }); 
        jsConfetti.addConfetti({
            confettiColors: [
                '#E40303', '#FF8C00', '#FFED00', '#008026', '#24408E', '#732982'
            ],
        })
    } else if (s.includes('reset')) {
        r.style.setProperty('--main-bold-color', '#ffbb00');
        r.style.setProperty('--main-anchor-color', '#ef233c');
        r.style.setProperty('--hover-anchor-color', '#ef233cc7');
        sessionStorage.removeItem('--main-bold-color');
        sessionStorage.removeItem('--main-anchor-color');
        sessionStorage.removeItem('--hover-anchor-color');
        s = ""
    }
})