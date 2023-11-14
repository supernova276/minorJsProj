// let input =document.querySelector(".input");

// function apiCall(e){
//     console.log(e.target.value);
// }

// function delayApiCall(apiCall,delay){       //this is the debounce function that creates a delay over the actal
//                                        //api call and it always returns a function
//     let timerId;
//    return function(...args) {

//     clearTimeout(timerId)
//    timerId= setTimeout(()=>{
//              apiCall(...args);          //these args refer to the event/e inside the apicall since we dont 
//                    //know the exact event inside this functin so we use the args paramenter
//     },delay)
// }
// }

// let delayedApiCall=delayApiCall(apiCall,500)

//  input.addEventListener("keyup",delayedApiCall); //this callback is for the api i.e everytime we click the key the api would
//  //be called which is a very expensive task
//  //so we create a delay of 500ms after the keyup operation for the api to be called
// //it limits the api call on the servr

/////////////////////////////////////////////////////throttle///////////////////////////////////////////////////////

//when we 
function apiCall(){
console.log("scrolled");
}
function continuosApiCall(apiCall,delay){
let isWaiting=false;
   return (...args)=>{
    if(isWaiting)return;
    apiCall()
    isWaiting=true;
    setTimeout(()=>{
        isWaiting=false;
    },delay)
    }
}
const container=document.querySelector(".cont")
let contApiCall=continuosApiCall(apiCall,500);
container.addEventListener("scroll",contApiCall);