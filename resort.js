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

/*Activity carousel*/
activitynext.addEventListener('click', function(){
    
    if(activityimg.src = 'media/1.jpg'){
        activityimg.src = 'media/2.jpg'
        activitytype.textContent = 'Infinity Pool'
        activitydesc.textContent = 'Relax by our stunning oceanfront infinity pool.'
    }

    if(activityimg.src = 'media/2.jpg'){
        activityimg.src = 'media/3.jpg'
        activitytype.textContent = 'World-Class Spa'
        activitydesc.textContent = 'Rejuvenate your mind and body at our spa.'
    }

     if(activityimg.src = 'media/3.jpg'){
        activityimg.src = 'media/4.jpg'
        activitytype.textContent = 'Exquisite Dining'
        activitydesc.textContent = 'Savor culinary delights at our restaurants.'
    }


    if(activityimg.src = 'media/4.jpg'){
        activityimg.src = 'media/1.jpg'
        activitytype.textContent = 'Private Beach Access'
        activitydesc.textContent = 'Step onto our pristine, white-sand beach.'
    }
});

activityback.addEventListener('click', function(){
    if(activityimg.src = 'media/2.jpg'){
        activityimg.src = 'media/1.jpg'
        activitytype.textContent = 'Private Beach'
        activitydesc.textContent = 'Step onto our pristine, white-sand beach.'
    }
});