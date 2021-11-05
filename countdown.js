//countdown function for Timers Exercise 1
//Jae Kim



function displayDecrement()
{

}

function countdown(num){

    let currentCount = setInterval(function(){
        //start displaying the number after the num
        console.log(num-1);
        num--
        if (num === 0){
            console.log("DONE!!!");
            clearInterval(currentCount);
        }
    }, 1000)
    
}


console.log(countdown(7));