let currentTime=document.querySelector(".para")
let container=document.querySelector(".container")

// difference between innertext and innerelement
let seconds=0,minutes=0,hours=0;
var interval;
container.addEventListener("click",(e)=>{
    e.preventDefault();
    let type=e.target.name;
    switch(type){
        case "start":
             interval=setInterval(()=>{
                seconds++;
                if(seconds>59){
                    seconds=0;
                    minutes++;
                }
                if(minutes>59){
                    minutes=0;
                    seconds=0;
                    hours++;
                }
                currentTime.innerText=`${hours<10? `0${hours}`:`${hours}`}:${minutes<10?`0${minutes}`:`${minutes}`}
                :${seconds<10?`0${seconds}`:`${seconds}`}`   
            },100)
            break;
        
        case "stop":
            clearInterval(interval)
            break;
        case "reset":
            clearInterval(interval)
            seconds=hours=minutes=0;
            currentTime.innerText=`00:00:00`
            break



    }
})