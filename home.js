document.addEventListener('DOMContentLoaded', function() {
    // Login popup elements
    const loginBtn = document.getElementById('loginBtn');
    const loginPopup = document.getElementById('loginPopup');
    const closeLoginBtn = document.getElementById('closeLoginBtn');
    const switchToSignup = document.getElementById('switchToSignup');

    // Signup popup elements
    const signupBtn = document.getElementById('signupBtn');
    const signupPopup = document.getElementById('signupPopup');
    const closeSignupBtn = document.getElementById('closeSignupBtn');
    const switchToLogin = document.getElementById('switchToLogin');

    // Show login popup
    loginBtn.addEventListener('click', function() {
        loginPopup.style.display = 'block';
    });

    // Close login popup
    closeLoginBtn.addEventListener('click', function() {
        loginPopup.style.display = 'none';
    });

    // Switch to signup popup from login popup
    switchToSignup.addEventListener('click', function() {
        loginPopup.style.display = 'none';
        signupPopup.style.display = 'block';
    });

    // Show signup popup
    signupBtn.addEventListener('click', function() {
        signupPopup.style.display = 'block';
    });

    // Close signup popup
    closeSignupBtn.addEventListener('click', function() {
        signupPopup.style.display = 'none';
    });

    // Switch to login popup from signup popup
    switchToLogin.addEventListener('click', function() {
        signupPopup.style.display = 'none';
        loginPopup.style.display = 'block';
    });

    // Close popups when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target == loginPopup) {
            loginPopup.style.display = 'none';
        }
        if (event.target == signupPopup) {
            signupPopup.style.display = 'none';
        }
    });
});



// image Slider Functionality
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.image-slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentSlide = 0;
    let autoPlayInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
        showSlide(currentSlide);
    }

    function startAutoPlay() {
        stopAutoPlay();  // Ensure there's no existing interval running
        autoPlayInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
        }
    }

    // Event listeners for manual navigation
    prevButton.addEventListener('click', () => {
        prevSlide();
        startAutoPlay(); // Restart autoplay on manual interaction
    });

    nextButton.addEventListener('click', () => {
        nextSlide();
        startAutoPlay(); // Restart autoplay on manual interaction
    });

    // Start the autoplay when the page loads
    startAutoPlay();

    // Optional: Pause autoplay on mouseover and resume on mouseout
    slides.forEach(slide => {
        slide.addEventListener('mouseover', stopAutoPlay);
        slide.addEventListener('mouseout', startAutoPlay);
    });
});


// image Slider Functionality
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.image-slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentSlide = 0;
    let autoPlayInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
        showSlide(currentSlide);
    }

    function startAutoPlay() {
        stopAutoPlay();  // Ensure there's no existing interval running
        autoPlayInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
        }
    }

    // Event listeners for manual navigation
    prevButton.addEventListener('click', () => {
        prevSlide();
        startAutoPlay(); // Restart autoplay on manual interaction
    });

    nextButton.addEventListener('click', () => {
        nextSlide();
        startAutoPlay(); // Restart autoplay on manual interaction
    });

    // Start the autoplay when the page loads
    startAutoPlay();

    // Optional: Pause autoplay on mouseover and resume on mouseout
    slides.forEach(slide => {
        slide.addEventListener('mouseover', stopAutoPlay);
        slide.addEventListener('mouseout', startAutoPlay);
    });
});
