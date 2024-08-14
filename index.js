
var time = 60;
var hit = 0;
var hitZero;
var timeVal ;
var score1;
var rn;


// Logic for change bubbles number
function makeBubb() {
    var bubble = "";
    for (let i = 1; i <= 98; i++) {
        
        rn = Number(Math.floor(Math.random() * 10))
        bubble +=  `<div class="bubble">${rn}</div>`;       
    }
   document.querySelector('.bubbleBox').innerHTML = bubble;
}
makeBubb()
//********************************************************************//



// Logic for change hit number
function hitNum() {
    var hitN = Number(Math.floor(Math.random() * 10))
   hitZero = document.querySelector('.hitNUm').textContent = `${hitN}`
   console.log(hitZero);
}
function hit_0() {
 document.querySelector('.hitNUm').textContent = 0
}

//********************************************************************//




// Logic for change timer 
function timer(){
    time--
 timeVal = document.querySelector('.score2').innerHTML = time
}

const gameTime = setInterval(() => {
    if (time > 0) {
        if (time == 60) {
            hitNum()
            
        }
        timer() 
    }else{
        bubbleBox.innerHTML = "";
        bubbleText.textContent = `Game Over`
        hit_0();
        clearInterval(gameTime)
    }
}, 1000);
//********************************************************************//



// Logic for change score 
function hitScore(){
    // hit += 10
    hit += 10
     score1 = document.querySelector('.score1').textContent = hit
}
//********************************************************************//

// Logic for press bubbles
var bubbleText = document.querySelector('.bubbleText')
var bubbleBox = document.querySelector('.bubbleBox')
bubbleBox.addEventListener('click',function(get){
    if (get.target.textContent === hitZero) {
        hitScore()
        hitNum()
        makeBubb()
    } else {
      alert(`Wrong Number Try again Press ${hitZero} `)  
    }  
})

//********************************************************************//