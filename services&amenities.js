window.addEventListener('DOMContentLoaded', ()=>{
//-------Code for toggle menu open and close
function toggleMenuBar(){
    const barsBtns = document.querySelectorAll('.bars')
    barsBtns.forEach(bars =>{
        bars.classList.toggle('active');
        if(bars.classList.contains('active')){
            toggleResponsiveNavbar();
        }else{
            removeToggleResponsiveNavbar();
        }
    });
}
function toggleResponsiveNavbar(){
    const resposiveNav = document.querySelector('nav')
    resposiveNav.classList.add('active');
}
function removeToggleResponsiveNavbar(){
    const resposiveNav = document.querySelector('nav')
    resposiveNav.classList.remove('active');
}
const barBtn = document.querySelector('.bar');
barBtn.addEventListener('click', ()=>{toggleMenuBar()});
const navLink = document.querySelectorAll('.nav-link');
navLink.forEach(navLinks => {
    navLinks.addEventListener('click',()=>{
        const barsBtns = document.querySelectorAll('.bars')
        barsBtns.forEach(bars =>{
        bars.classList.toggle('active');
    });
        removeToggleResponsiveNavbar();
    });
});




// ------------code for service and amenities
const blueBgBtn = document.querySelector('.blue-bg');
blueBgBtn.addEventListener('click', ()=>{
        blueBgBtn.style.backgroundColor = 'blue';
        blueBgBtn.style.color = 'white';
        blueBgBtn.classList.add('active');
        const blueBgBtn2 = document.querySelector('.blue-bg-2');
        blueBgBtn2.classList.remove('active');

        loadAmenities();
});
const blueBgBtn2 = document.querySelector('.blue-bg-2');
    blueBgBtn2.addEventListener('click', ()=>{
        blueBgBtn2.classList.add('active');
        const blueBgBtn = document.querySelector('.blue-bg');
        blueBgBtn.classList.remove('active');
        blueBgBtn.style.backgroundColor = 'transparent'
        blueBgBtn.style.color = 'black';

        loadServices();
});
const amenitiesServicesPage = document.querySelector('.amenities-services-page');
function loadAmenities(){
    amenitiesServicesPage.innerHTML = '';
    const createAmenities = document.createElement('div');
    createAmenities.innerHTML = `
        <div class="amenities-container">
        <h1 class="amenities-title">Amenities</h1>
            <div class="amenities-list">
                <div class="amenities-item">
                    <img src="./image/service and amenities image/gym.jpg" width="250"  height="200" alt=""/>
                    <div class="amenities-details">
                        <h3>Fitness Center</h3>
                    </div>
                </div>
                <div class="amenities-item">
                    <img src="./image/service and amenities image/Spa and Wellness Center.jpg" width="250" height="200" alt=""/>
                    <div class="amenities-details">
                        <h3>Spa and Wellness Center</h3>
                    </div>
                </div>
                <div class="amenities-item">
                    <img src="./image/service and amenities image/Swimming Pool.jpg" width="250" height="200" alt=""/>
                    <div class="amenities-details">
                        <h3>Swimming Pool</h3>
                    </div>
                </div>
                <div class="amenities-item">
                    <img src="./image/service and amenities image/Free Wi-Fi.jpg" width="250" height="200" alt=""/>
                    <div class="amenities-details">
                        <h3>Free Wi-Fi</h3>
                    </div>
                </div>
                <div class="amenities-item">
                    <img src="./image/service and amenities image/Flat-Screen TVs.jpg" width="250" height="200" alt=""/>
                    <div class="amenities-details">
                        <h3>Flat-Screen TVs</h3>
                    </div>
                </div>
                <div class="amenities-item">
                    <img src="./image/service and amenities image/Vending Machines.jpg" width="250" height="200" alt=""/>
                    <div class="amenities-details">
                        <h3>Vending Machines</h3>
                    </div>
                </div>
            </div>
            <div class="next-prev">
                <button class="next-btn"> >> </button>
            </div>
        </div>
    `;
    amenitiesServicesPage.appendChild(createAmenities);
    addEventListener();
}
function loadMoreAmenities(){
    amenitiesServicesPage.innerHTML = '';
    const createMoreAmenities = document.createElement('div');
    createMoreAmenities.innerHTML = `
        <div class="amenities-container">
        <h1 class="amenities-title">Amenities</h1>
            <div class="amenities-list">
                <div class="amenities-item">
                    <img src="./image/lobby.jpg" width="250" height="200" alt=""/>
                    <div class="amenities-details">
                        <h3>Room Services</h3>
                    </div>
                </div>
                <div class="amenities-item">
                    <img src="./image/profile.jpg" width="250" height="200" alt=""/>
                    <div class="amenities-details">
                        <h3>Front Desk and Reception</h3>
                    </div>
                </div>
                <div class="amenities-item">
                    <img src="./image/room-lobby.jpg" width="250" height="200" alt=""/>
                    <div class="amenities-details">
                        <h3>Room Services</h3>
                    </div>
                </div>
            </div>
            <div class="next-prev">
                <button class="prev-btn"><<</button>
            </div>
        </div>
    `;
    amenitiesServicesPage.appendChild(createMoreAmenities);
    prevaddEventListener();
}
function addEventListener(){
    const nextBtn = document.querySelector('.next-btn');
    nextBtn.addEventListener('click', ()=>{
        loadMoreAmenities();
    });
   
}
function prevaddEventListener(){
    const prevBtn = document.querySelector('.prev-btn');
    prevBtn.addEventListener('click', ()=>{
        loadAmenities();
    });
}
const nextBtn = document.querySelector('.next-btn');
    nextBtn.addEventListener('click', ()=>{
        loadMoreAmenities();
    });
function loadServices(){
    amenitiesServicesPage.innerHTML = '';
    const createService = document.createElement('div');
    createService.innerHTML = `
        <div class="services-container">
                <h1 class="services-title">Services</h1>
            <div class="services-list">
                <div class="services-item">
                    <img src="./image/service and amenities image/Room Services.jpg" width="250" height="200" alt=""/>
                    <div class="services-details">
                        <h3>Room Services</h3>
                    </div>
                </div>
                <div class="services-item">
                    <img src="./image/service and amenities image/Front Desk and Reception.jpg" width="250" height="200" alt=""/>
                    <div class="services-details">
                        <h3>Front Desk and Reception</h3>
                    </div>
                </div>
                <div class="services-item">
                    <img src="./image/service and amenities image/Dry Cleaning.jpg" width="250" height="200" alt=""/>
                    <div class="services-details">
                        <h3> Laundry and Dry Cleaning</h3>
                    </div>
                </div>
                <div class="services-item">
                    <img src="./image/service and amenities image/House Keeping.jpg" width="250" height="200" alt=""/>
                    <div class="services-details">
                        <h3>House Keeping</h3>
                    </div>
                </div>
                <div class="services-item">
                    <img src="./image/service and amenities image/Business Center.jpg" width="250" height="200" alt=""/>
                    <div class="services-details">
                        <h3>Business Center</h3>
                    </div>
                </div>
                <div class="services-item">
                    <img src="./image/service and amenities image/Booking Activity.jpg" width="250" height="200" alt=""/>
                    <div class="services-details">
                        <h3>Booking Activity</h3>
                    </div>
                </div>
            </div>
            <div class="next-prev">
                <button class="services-next-btn">>></button>
            </div>
        </div>
    `;
    amenitiesServicesPage.appendChild(createService);
    addEventListenerServices();
}
function loadMoreServices(){
    amenitiesServicesPage.innerHTML = '';
    const createMoreServices = document.createElement('div');
    createMoreServices.innerHTML = `
        <div class="amenities-container">
        <h1 class="amenities-title">Amenities</h1>
            <div class="amenities-list">
                <div class="amenities-item">
                    <img src="./image/lobby.jpg" width="250" height="200" alt=""/>
                    <div class="amenities-details">
                        <h3> Meeting and Event Planning</h3>
                    </div>
                </div>
                <div class="amenities-item">
                    <img src="./image/profile.jpg" width="250" height="200" alt=""/>
                    <div class="amenities-details">
                        <h3>Currency Exchange</h3>
                    </div>
                </div>
                <div class="amenities-item">
                    <img src="./image/room-lobby.jpg" width="250" height="200" alt=""/>
                    <div class="amenities-details">
                        <h3>Car Rental and Transportation</h3>
                    </div>
                </div>
            </div>
            <div class="next-prev">
                <button class="serivces-prev-btn"> << </button>
            </div>
        </div>
    `;
    amenitiesServicesPage.appendChild(createMoreServices);
    prevServicesaddEventListener();
}
function addEventListenerServices(){
    const nextBtn = document.querySelector('.services-next-btn');
    nextBtn.addEventListener('click', ()=>{
        loadMoreServices();
    });
   
}
function prevServicesaddEventListener(){
    const prevBtn = document.querySelector('.serivces-prev-btn');
    prevBtn.addEventListener('click', ()=>{
        loadServices();
    });
}
});

// ------------code for copyright year
const callDateAPI = new Date();
const getYear = callDateAPI.getFullYear();
document.querySelector('.copyright-year').textContent = getYear;
