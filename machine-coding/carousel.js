const slider=document.querySelectorAll(".carousel")
const nextBtn=document.querySelector(".btn-next")
const prevBtn=document.querySelector(".btn-prev")
let currentSlide=0;
let maxSlide=slider.length-1;

slider.forEach((image,index)=>image.style.transform=`translateX(${index*100}%)`)

function nextBtnClick(){
    if(currentSlide===maxSlide)currentSlide=0;
    else currentSlide++;
    slider.forEach((image,index)=>{image.style.transform=`translateX(${(index-currentSlide)*100}%)`
    // console.log(currentSlide)
console.log(index-currentSlide)})
}
function prevBtnClick(){
    if(currentSlide===0)currentSlide=maxSlide
    else currentSlide--;
    slider.forEach((image,index)=>image.style.transform=`translateX(${(index-currentSlide)*100}%)`)
}
prevBtn.addEventListener("click",prevBtnClick)
nextBtn.addEventListener("click",nextBtnClick)