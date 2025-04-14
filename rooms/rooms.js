//Hamburger
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', function(){
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});
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

//Rooms Carousel
let slide = 1;
roomnext.addEventListener('click', function(){
    if(slide==1){
        roomone.classList.toggle('close')
        roomtwo.classList.toggle('close')
    }
    if(slide==2){
        roomtwo.classList.toggle('close')
        roomthree.classList.toggle('close')
    }
    if(slide==3){
        roomthree.classList.toggle('close')
        roomfour.classList.toggle('close')
    }
    if(slide==4){
        roomfour.classList.toggle('close')
        roomfive.classList.toggle('close')
    }
    if(slide==5){
        roomfive.classList.toggle('close')
        roomone.classList.toggle('close')
    }
    if(slide==5){
        slide=1;
    }
    else if(slide<5){
        slide++;
    }
})
//Prev
roomprev.addEventListener('click', function(){
    if(slide==1){
        roomone.classList.toggle('close')
        roomfive.classList.toggle('close')
    }
    if(slide==2){
        roomtwo.classList.toggle('close')
        roomone.classList.toggle('close')
    }
    if(slide==3){
        roomthree.classList.toggle('close')
        roomtwo.classList.toggle('close')
    }
    if(slide==4){
        roomfour.classList.toggle('close')
        roomthree.classList.toggle('close')
    }
    if(slide==5){
        roomfive.classList.toggle('close')
        roomfour.classList.toggle('close')
    }
    if(slide==1){
        slide=5;
    }
    else if(slide>0){
        slide--;
    }
});