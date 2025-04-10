const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', function(){
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});
//Weather API 
fetch('https://api.openweathermap.org/data/2.5/weather?q=hawaii&appid=76e7024c8cdf08475411f848e7840011&units=metric')
.then(response => response.json())
.then(data => {
    console.log(data);
    
    temperature.textContent = "Temperature: "+ Math.floor(data.main.temp)+ "\u2103";
   
    //Icon
    const weatherIcon = "https://openweathermap.org/img/wn/"+ data.weather[0].icon+"@2x.png"
    icon.src = weatherIcon;
    icon.alt = data.weather[0].description;
    
});



/*Activity carousel*/
//Next
let slide = 1;
next.addEventListener('click', function(){
    if(slide==1){
        one.classList.toggle('close')
        two.classList.toggle('close')
    }
    if(slide==2){
    two.classList.toggle('close')
    three.classList.toggle('close')
    }
    if(slide==3){
        three.classList.toggle('close')
        four.classList.toggle('close')
    }
    if(slide==4){
        four.classList.toggle('close')
        one.classList.toggle('close')
    }
    if(slide==4){
        slide=1;
    }
    else if(slide<4){
        slide++;
    }
})
//Prev
prev.addEventListener('click', function(){
    if(slide==4){
        three.classList.toggle('close')
        four.classList.toggle('close')
    }
    if(slide==3){
        three.classList.toggle('close')
        two.classList.toggle('close')
    }
    if(slide==2){
        two.classList.toggle('close')
        one.classList.toggle('close')
    }
    if(slide==1){
        one.classList.toggle('close')
        four.classList.toggle('close')
    }
    if(slide==1){
        slide=4;
    }
    else if(slide>0){
        slide--;
    }
});

