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


/*//Activity carousel
//Next
activitynext.addEventListener('click', function(){
    if(activityimg.src = 'media/1.jpg'){
        activityimg.src = 'media/2.jpg'
        activitytype.textContent = 'Infinity Pool'
        activitydesc.textContent = 'Relax by our stunning oceanfront infinity pool.'
    }

}); 
//Prev
activityback.addEventListener('click', function(){
       if(activityimg.src = 'media/2.jpg')
        activityimg.src= 'media/1.jpg'
        activitytype.textContent = 'Private Beach'
        activitydesc.textContent = 'Step onto our pristine, white-sand beach.'
});*/

//Spa button scroll
spatoggle.addEventListener('click', function(){
    spatoggle.classList.toggle('active')
    spanav.classList.toggle('active')
});
//make a button to close spanav when clicked 