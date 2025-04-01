const navMenu = document.getElementById('nav-menu');
const headerPic = document.getElementById('header-pic');

hamburger.addEventListener('click', function(){
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

fetch('https://api.openweathermap.org/data/2.5/weather?q=hawaii&appid=76e7024c8cdf08475411f848e7840011&units=metric')
.then(response => response.json())
.then(data => {
    console.log(data);
    
    temperature.textContent = "Temperature: "+ Math.floor(data.main.temp)+ "\u2103";
   
    //Icon
    const weatherIcon = "https://openweathermap.org/img/wn/"+ data.weather[0].icon+"@2x.png"
    console.log(icon);

    icon.src = weatherIcon;
    icon.alt = data.weather[0].description;
    
});

