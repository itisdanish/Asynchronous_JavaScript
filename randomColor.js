// Random Color Change

const start = document.querySelector('.start')
const stop = document.querySelector('.stop')
const body = document.querySelector('body')
const h1 = document.querySelector('h1')
body.style.backgroundColor == 'red'

h1.innerText = 'Random Color Change'

let intervalId;

function startChange(){
    if(!intervalId){
        intervalId = setInterval(changeColor, 1000)
    }
    console.log('Start')
}

function changeColor(){
    if(body.style.backgroundColor !== 'black'){
        body.style.backgroundColor = 'black'
        body.style.color = 'white'
    }else{
        body.style.backgroundColor = 'white'
        body.style.color = 'black'
    }
}


function stopChange (){
    clearInterval(intervalId)
    console.log('Stop')
}

start.addEventListener('click', startChange)
stop.addEventListener('click', stopChange)