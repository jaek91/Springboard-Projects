//randomGame function for timer exercise 2
//Jae Kim

function randomGame()  {

let counter = 0;
let myFunc = setInterval(function(){

    let num = Math.random();
    counter++

    if (num > 0.75){
    clearInterval(myFunc)
    console.log(`It took ${counter} number of times to find the number and the number found was ${num.toFixed(3)}`)
    }


},1000)

}
