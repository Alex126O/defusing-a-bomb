'use strict'
let rightCode = [5, 2, 7, 3];
console.log(rightCode);

const numPad = document.querySelector('.container2');
// const entire = document.querySelector('.container3');
const timer = document.querySelector('.timer span');
const display = document.querySelector('.container');
const mainHeading = document.querySelector('.mainHeading');

let seconds = 60;
let verificatingCode = Array(4)
let bang = false;
let setInt = setInterval(interval => {
    if(seconds >= 0){
    timer.textContent = seconds;
    seconds--;
    } else {
        bang = true;
        mainHeading.textContent = 'You Lost!!!';
        clearInterval(setInt);
    }
}, 1000)

let exportNum = 0
let exportCount = 0

numPad.addEventListener('click',event => {
    // event.srcElement.innerHTML
    // Metode for taking num string

    if (bang === false) {
        console.log(event.srcElement.innerHTML);
        console.log(display.children);
        exportNum = parseInt(event.srcElement.innerHTML);

        let ss = '1234567890';
        if(ss.includes(event.srcElement.innerHTML)) {

            if (exportCount >= 4) {
                let codeVerification = () => {
                    // for (let i = 0; i < rightCode.length; i++) {
                    //     if (verificatingCode[i] !== rightCode[i]){
                    //         return false;
                    //     }
                    //     console.log('verified');
                    //     return true;
                    // }

                    if (verificatingCode[0] !== rightCode[0] &&
                        verificatingCode[1] !== rightCode[1] &&
                        verificatingCode[2] !== rightCode[2] &&
                        verificatingCode[3] !== rightCode[3]){
                        return false;
                    }else if(verificatingCode[0] === rightCode[0] &&
                        verificatingCode[1] === rightCode[1] &&
                        verificatingCode[2] === rightCode[2] &&
                        verificatingCode[3] === rightCode[3]) {

                        console.log('verified');
                        return true;
                    }
                }

                if(codeVerification()){
                    bang = true;
                    mainHeading.textContent = ('You Won');
                    clearInterval(setInt);

                }else {
                    exportCount = 0;
                    display.children[0].innerHTML = '+';
                    display.children[1].innerHTML = '+';
                    display.children[2].innerHTML = '+';
                    display.children[3].innerHTML = '+';
                    verificatingCode = verificatingCode.map(item => item = 0);
                    console.log(verificatingCode);
                }

            } else {

                // console.log(verificatingCode)
                display.children[exportCount].innerHTML = (event.srcElement.innerHTML);
                verificatingCode[exportCount] = parseInt(event.srcElement.innerHTML);
                exportCount++;
                console.log(verificatingCode);
                console.log(rightCode);
            }
        }
    } else {
        console.log('you lost');
        bang = true;
    }

}
)


