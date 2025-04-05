let btn = document.querySelector("#btn");

btn.addEventListener("click",randomBg);

function randomBg() {
    // Math.random().toString(16).slice(2,8);
    document.body.style.backgroundColor ='#'+Math.random().toString(16).slice(2,8);
    '#23ebc5'
}

// 0 1 2 3 4 5 6 7 8 9 A B C D E F 16 
///////////////////////////////////////
/* 
    Math.random(); // Random Number
    Math.random().toString(); // convert Random Number To String
    Math.random().toString(16); // convert Random Number To String and Convert String Hexadecimal 
*/