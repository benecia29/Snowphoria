const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e5a83a9567msh3063c1db3407808p1c154djsn3f61c3b330b5',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (cities) => {
	for (let index = 0; index < cities.length; index++) {
		fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + cities[index], options)
			.then(response => response.json())
			.then((response) => {
				var nam = cities[index] + "temp";
				document.getElementById(nam).innerHTML = response.temp + "°C";
				var feel = cities[index] + "feelslike";
				document.getElementById(feel).innerHTML = response.feels_like + "°C";
			})
			.catch(err => console.error(err));
	}
}

hot = ["Delhi", "Ganganagar", "Mumbai"]
cold = ["Kargil", "Leh", "Pahalgam"]
rainy = ["Cherrapunji", "Mawsynram", "Gangtok"]
cities = ["New York", "Srinagar", "Mumbai"]
ids=["First", "Second", "Three"]

setHot=()=>{
	$("#maindiv").css("background-image", "url('./weatherimages/BluePassions.png')")
	cities = hot;
	for(let i=0; i<ids.length; i++) {
		document.getElementById(ids[i]).innerHTML = cities[i];
	}
	$("#city1 span").prop("id", cities[0] + "temp");
	$("#city2 span").prop("id", cities[1] + "temp");
	$("#city3 span").prop("id", cities[2] + "temp");
	$("#feels_like1 span").prop("id", cities[0] + "feelslike");
	$("#feels_like2 span").prop("id", cities[1] + "feelslike");
	$("#feels_like3 span").prop("id", cities[2] + "feelslike");
	$("#leftside img").prop("src", "./weatherimages/sun.svg");
	getWeather(cities);
}

setCold=()=>{
	$("#maindiv").css("background-image", "url('./weatherimages/snowfall.jpeg')")
	cities = cold;
	for(let i=0; i<ids.length; i++) {
		document.getElementById(ids[i]).innerHTML = cities[i]
	}
	$("#city1 span").prop("id", cities[0] + "temp");
	$("#city2 span").prop("id", cities[1] + "temp");
	$("#city3 span").prop("id", cities[2] + "temp");
	$("#feels_like1 span").prop("id", cities[0] + "feelslike");
	$("#feels_like2 span").prop("id", cities[1] + "feelslike");
	$("#feels_like3 span").prop("id", cities[2] + "feelslike");
	$("#leftside img").prop("src", "./weatherimages/snowflake.svg");
	getWeather(cities);
}

setRainy=()=>{
	$("#maindiv").css("background-image", "url('./weatherimages/RainAesthetic.jpeg')")
	cities = rainy;
	for(let i=0; i<ids.length; i++) {
		document.getElementById(ids[i]).innerHTML = cities[i];
	}
	$("#city1 span").prop("id", cities[0] + "temp");
	$("#city2 span").prop("id", cities[1] + "temp");
	$("#city3 span").prop("id", cities[2] + "temp");
	$("#feels_like1 span").prop("id", cities[0] + "feelslike");
	$("#feels_like2 span").prop("id", cities[1] + "feelslike");
	$("#feels_like3 span").prop("id", cities[2] + "feelslike");
	$("#leftside img").prop("src", "./weatherimages/cloud.svg");
	getWeather(cities);
}

function executeAfterDelay() {
	setTimeout(setCold, 1000); // Call function1 after 1 seconds
	setTimeout(setHot, 20000); // Call function2 after 15 seconds
	setTimeout(setRainy, 50000); // Call function3 after 50 seconds
}

executeAfterDelay();

setInterval(executeAfterDelay, 71000);

// var owl = $('.owl-carousel');
// owl.owlCarousel({
//     items:4,
//     loop:true,
//     margin:10,
//     autoplay:true,
//     autoplayTimeout:1000,
//     autoplayHoverPause:true
// });
// $('.play').on('click',function(){
//     owl.trigger('play.owl.autoplay',[1000])
// })
// $('.stop').on('click',function(){
//     owl.trigger('stop.owl.autoplay')
// })


//temperature logic below
// $(document).ready(function () {
//   const temp = 55;
//   if (temp > 35) {
//     $("#maindiv").css("background-image", "url('./weatherimages/RainAesthetic.jpeg')");
//   }
//   else {
//     $("#maindiv").css("background-image", "url('./weatherimages/snowfall.jpeg')");
//   }

//   let temp2 = $("#maindiv").css("background-image");
//   // alert(temp3);
//   if (temp2 === "url('./weatherimages/RainAesthetic.jpeg')") {
//     $("#First").text("SriNagar");
//   }
//   else {
//     $("#First").text("Chennai");
//   }
// });


// search button logic
// SubmitEvent.addEventListener("click", (e) => {
//   e.preventDefault()
//   getWeather(cityy.value)
// })