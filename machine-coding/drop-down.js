let selectCountry=document.querySelector(".container")
let countryContainer=document.querySelector(".country-container")
let countryList=document.querySelector(".country-list")
let input=document.querySelector(".input")
let countryName;

const countries=[{ id: 1, country: "America" },
{ id: 2, country: "Australia" },
{ id: 3, country: "Afghanistan" },
{ id: 4, country: "India" },
{ id: 5, country: "Indonesia" },
{ id: 5, country: "China" },
{ id: 6, country: "Japan" },
{ id: 7, country: "Pakistan" },]
selectCountry.addEventListener("click",()=>{
    countryContainer.classList.toggle("hide");
})

function showCountries(countries){

for(country of countries){
    let name=document.createElement("p");
    countryList.classList.add("name")
    name.classList.add("country-name")
    name.innerText=country.country;
    countryList.appendChild(name);
}
 countryName=document.querySelectorAll(".country-name");
 countryName.forEach( (name)=>name.addEventListener("click",()=>{
    console.log("clicked")
    input.value=name.innerText;
}))

}
showCountries(countries)

input.addEventListener("keyup",(e)=>{
    searchValue=e.target.value.toLocaleLowerCase();
    const filterbySearch=countries.filter(({country})=>country.toLocaleLowerCase().startsWith(searchValue))
    countryList.innerHTML="";
    showCountries(filterbySearch)
})

console.log(countryName)