const button =document.getElementById("search-button");
const input=document.getElementById("city-input")

const cityName=document.getElementById("city-name");
const cityTime=document.getElementById("city-time");
const cityTemp=document.getElementById("city-temp");




 async function getData(cityName){
 const promise= await 
 fetch(`http://api.weatherapi.com/v1/current.json?key=ce0350b599274f81a7774049242605&q=${cityName}&aqi=yes`);
 
return await promise.json()
}

button.addEventListener("click" , async()=>{
     const value=input.value;
     const result = await getData(value);
     cityName.innerText=` CITY=${result.location.name} , STATE=${result.location.region} , COUNTRY=${result.location.country}`;
     cityTime.innerText =`TIME=${result.location.localtime}`;
     cityTemp.innerText=` TEMP=${result.current.temp_c}`;

    
})