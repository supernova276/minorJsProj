let formData=document.querySelector(".form")
let submissonButton=document.querySelector(".button")
let firstName,lastName,email, password;
let errorMessage=document.querySelectorAll(".error-message")
let emptyMessage=document.querySelectorAll(".empty-field")
let showPasswordButton=document.querySelector(".btn")
//to target the element and change their box boundary to red
let fnTarget,lnTarget,emailTarget,pwdTarget;
//flags to check if all the conditions are satisfied
let fnflag,lnflag,emailflag,pwdflag;

let nameRegex=/^[a-z]+$/i;
// let emailRegex=/^[A-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Z0-9.-]+$/;
let emailRegex=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
let passwordRegex=/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

for(error of errorMessage){
    // we alerady declare all the errors and then on the basis of the requireemnt we hide the errors
    error.classList.add("d-none")
}
for(error of emptyMessage){
    // we alerady declare all the errors and then on the basis of the requireemnt we hide the errors
    error.classList.add("d-none")
}
//using event delegation 
formData.addEventListener("keyup", (e)=>{   
    // we use the event key up because the the input is a text
     e.preventDefault();
    let field=e.target.dataset.key
    switch(field){
        //capturing the element
        case  "firstName" :
            firstName=e.target.value
            fnTarget=e.target
            break;
        case "lastName":
            lastName=e.target.value
            lnTarget=e.target
            break;
        case "email":
            email=e.target.value
            emailTarget=e.target
            break;
        case "password":
            password= e.target.value
            pwdTarget=e.target           
            break;
        default:
            firstName=lastName=email=password="";
            break;

    }
})

submissonButton.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log(firstName,lastName,email,password)
    if(firstName){
        if(!nameRegex.test(firstName)){
            console.log("name must only contain alphabets")
            errorMessage[0].classList.remove("d-none")
            fnTarget.classList.add("error")
            fnflag=false;
        }
        else {
            console.log("good to go")
            errorMessage[0].classList.add("d-none")
            fnTarget.classList.remove("error")
            fnflag=true;
        }
    }
else{
    console.log("please fill the field")
    // fnTarget.classList.add("error")
    emptyMessage[0].classList.remove("d-none")
}
//for last name
if(lastName){
    if(!nameRegex.test(lastName)){
        console.log("name must only contain alphabets")
        lnTarget.classList.add("error")
        errorMessage[1].classList.remove("d-none")
        lnflag=false
    }
    else {
        console.log("good to go")
        errorMessage[1].classList.add("d-none")
        lnTarget.classList.remove("error")
        lnflag=true;
    }
}
else{
console.log("please fill the field")
emptyMessage[1].classList.remove("d-none")
// lnTarget.classList.add("error")
}
////////for email
if(email){
    if(!emailRegex.test(email)){
        console.log("invalid email")
        errorMessage[2].classList.remove("d-none")
        emailTarget.classList.add("error")
        emailflag=false
    }
    else { 
        console.log("good to go")
        errorMessage[2].classList.add("d-none")
        emailTarget.classList.remove("error")
        emailflag=true;
    }
}
else{
emptyMessage[2].classList.remove("d-none")
console.log("please fill the field")
// emailTarget.classList.add("error")
}

if(password){
    if(!passwordRegex.test(password)){
        console.log("password is not correct")
        errorMessage[3].classList.remove("d-none")
        pwdTarget.classList.add("error")
        pwdflag=false;
    }
    else {
         console.log("good to go")
         errorMessage[3].classList.add("d-none")
         pwdTarget.classList.remove("error")
         pwdflag=true;
    }
}
else{
    emptyMessage[3].classList.remove("d-none")
    console.log("please fill the field")
    // pwdTarget.classList.add("error")
}
if(fnflag && lnflag && emailflag && pwdflag){
    fnTarget.value=lnTarget.value=pwdTarget.value=emailTarget.value="";
    window.location.href="/success.html";   
}
})

showPasswordButton.addEventListener("click",(e)=>{
e.preventDefault();
if(pwdTarget.getAttribute("type")==="text")pwdTarget.setAttribute("type","password")
else pwdTarget.setAttribute("type","text")
})