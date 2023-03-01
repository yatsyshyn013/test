// import { getGeo } from "./scr/getGeo";

console.log(5);


    
const weatherContainer = document.querySelector('.container')

// async function getGeo(params) {
//      function geo_success(position) {
//         // do_something(position.coords.latitude, position.coords.longitude);
//         const latitude  = position.coords.latitude;
//          const longitude = position.coords.longitude;
//          console.log(latitude);
//          console.log(longitude);
         
//         const key = 'a0572400057a18022ba680699689d40f';
      
//         const responce = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit={limit}&appid=${key}`)
//         const result = await responce.json();
//         console.log(result);

        
//         }

//         function geo_error() {
//         alert("No Geo");
//         }

//         const geo_options = {
//         enableHighAccuracy: true,
//         maximumAge        : 30000,
//         timeout           : 27000
//         };

//     // console.log(position);

//         const wpid = navigator.geolocation.watchPosition(geo_success, geo_error, geo_options);
//         console.log(wpid);
    

// }
    

async function loadWeather(params) {

     async function geo_success(position) {
        // do_something(position.coords.latitude, position.coords.longitude);
        const latitude  = position.coords.latitude;
         const longitude = position.coords.longitude;
        //  console.log(latitude);
        //  console.log(longitude);
         
        // const key = 'a0572400057a18022ba680699689d40f';
      
        // const responce = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit={limit}&appid=${key}`)
        // const result = await responce.json();
        // console.log(result);

        const key = 'a0572400057a18022ba680699689d40f';

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
        getWeather(data)
    } else {
        weatherContainer.innerHTML = data.message;
    }
         
        }

        function geo_error() {
        alert("No Geo");
        }

        const geo_options = {
        enableHighAccuracy: true,
        maximumAge        : 30000,
        
    };
    
    // timeout           : 27000

    // console.log(position);

        const wpid = navigator.geolocation.watchPosition(geo_success, geo_error, geo_options);
        // console.log(wpid);

    weatherContainer.innerHTML = `<div class="loading"><img src="./Spinner-1s-200px.gif" alt="Loading"></div>`;

    
    
};

function getWeather(data) {
    // console.log(data);

    const location = data.name;
    const temp = Math.round(data.main.temp);
    const feelsLike = Math.round(data.main.feels_like);
    const weatherStatus = data.weather[0].main;
    const weatherIcon = data.weather[0].icon;
    const weatherDate = new Date(data.dt*1000).toDateString();

    const info = `
    <div class="header">
            <div class="weather-main">
                <div class="weather-city">${location}</div>
                <div class="weather-status">${weatherStatus}</div>
                <div class="weather-temp">${temp}</div>
            </div>
            <div class="weather-icon"><img src="http://openweathermap.org/img/wn/${weatherIcon}@2x.png" alt="${weatherIcon}"></div>
        </div>
        <div class="weather-date">${weatherDate}</div>
        <div class="weather-for-week"></div>`;
    
    weatherContainer.innerHTML = info;
    
};


if (weatherContainer) {
    loadWeather();
};



    // async function success(pos) {
    //      const key = 'a0572400057a18022ba680699689d40f';
    //     const crd = pos.coords;
    //     const responce = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${crd.latitude}&lon={lon}&limit=${crd.logitude}&appid=${key}`)
    //     const result = responce.json();
    //     console.log(result);
    // }


// success();


    // function fetchWeather(params) {
    //    return fetch(url)
    //     .then(response => response.json())
    //     .then(data => {
    //         // this.page += 1;
    //         console.log(data);
    //         console.log(data.city);
    //         return data;
    //     }); 
    // }
    

    // function renderWeather().then(data => {
    //     const renderGallery = data.map(({city, list})=>
    //     `<a class="gallery__link" href="${largeImageURL}">
    //     <div class="photo-card">
    //     <img class="gallery__image" src="${webformatURL}" alt="${tags}" loading="lazy" width="100px" />
       
    //     <div class="info">
    //         <p class="info-item">
    //         <b>Likes</b>
    //         ${likes} 
    //         </p>
    //         <p class="info-item">
    //         <b>Views</b>
    //         ${views}
    //         </p>
    //         <p class="info-item">
    //         <b> Comments</b>
    //         ${comments}
    //         </p>
    //         <p class="info-item">
    //         <b> Downloads</b>
    //         ${downloads}
    //         </p>
    //     </div> 
    //     </div>
    //     </a>`).join(' ');
    
    // refs.gallery.insertAdjacentHTML('beforeend', renderGallery);

    //     })
        

  // photoApiService.fetchPhoto()
    //     .then(data => {

    //     if (data.totalHits === 0) {
    //         Notiflix.Notify.failure(
    //             'Sorry, there are no images matching your search query. Please try again.'
    //         );
    //         // throw new Error(response.status);
    //     } else {
    //         Notiflix.Notify.info(
    //             `Hooray! We found ${data.totalHits} images.`
    //         );
    //         markup(data.hits);
    //         refs.loadMoreBtn.classList.remove('is-hidden');
    //     }

        
    // })
    //     .catch(error => console.log(error));



    
    
//     function markup(data) {
//     const renderGallery = data.map(({largeImageURL, webformatURL, tags, likes, views, comments, downloads})=>
//         `<a class="gallery__link" href="${largeImageURL}">
//         <div class="photo-card">
//         <img class="gallery__image" src="${webformatURL}" alt="${tags}" loading="lazy" width="100px" />
       
//         <div class="info">
//             <p class="info-item">
//             <b>Likes</b>
//             ${likes} 
//             </p>
//             <p class="info-item">
//             <b>Views</b>
//             ${views}
//             </p>
//             <p class="info-item">
//             <b> Comments</b>
//             ${comments}
//             </p>
//             <p class="info-item">
//             <b> Downloads</b>
//             ${downloads}
//             </p>
//         </div> 
//         </div>
//         </a>`).join(' ');
    
//     refs.gallery.insertAdjacentHTML('beforeend', renderGallery);

//     lightbox();
    
// }

    // return axios
    //     .get(url)
    //     .then(({ data }) => {
    //         this.page += 1;
    //         console.log(data);
    //         return data
    //     })
        
    // try {
    //     const data = await axios.get(url);
    //     // this.page += 1;
    //     console.log(data);
    //     return data;
            
    // } catch (error) {
    //     console.log(error);
    // }
