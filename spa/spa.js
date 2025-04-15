//Hamburger
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', function(){
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});
//Spa Toggle

spatoggle.addEventListener('click', function(){
    spanav.classList.toggle('active')
});

//Close menu when A is clicked
spanav.addEventListener('click', function(event){
    if(event.target.tagName =="A"){
        spanav.classList.toggle('active');
    }
});

//toggle Nav when clicked outside
document.addEventListener('click', (event)=> {
    if(!spanav.contains(event.target) && !spatoggle.contains(event.target) && spanav.classList.contains('active')){
        spanav.classList.remove('active');
    }
});

//Copyright footer
const d = new Date();
footerYear.textContent = d.getFullYear();

//Weather API 
fetch('https://api.openweathermap.org/data/2.5/weather?q=cancun&appid=76e7024c8cdf08475411f848e7840011&units=metric')
.then(response => response.json())
.then(data => {
    console.log(data);
    
    temperature.textContent = "Temperature: "+ Math.floor(data.main.temp)+ "\u2103";
   
    //Icon
    const weatherIcon = "https://openweathermap.org/img/wn/"+ data.weather[0].icon+"@2x.png"
    icon.src = weatherIcon;
    icon.alt = data.weather[0].description;
    
});