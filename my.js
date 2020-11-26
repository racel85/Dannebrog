'use strict';

// Dannebrog 

const $ = function (foo) {return document.getElementById(foo); };

const dannebrog = function () {
    let canvas = $('myCanvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        canvas.style.background = '#e9e9e2';

        ctx.fillStyle = '#db2420';
        ctx.fillRect(60, 50, 120, 60);

        ctx.beginPath();
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(88, 50, 12, 60);

        ctx.beginPath();
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(60, 73, 120, 12);

        

    }
}

window.addEventListener('load', dannebrog);