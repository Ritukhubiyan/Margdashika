document.addEventListener('DOMContentLoaded', () => {
    // Function to handle form toggle
    function toggleForm(formToShowId, formToHideId, toggleToShowId, toggleToHideId) {
        // Get elements
        const formToShow = document.getElementById(formToShowId);
        const formToHide = document.getElementById(formToHideId);
        const toggleToShow = document.getElementById(toggleToShowId);
        const toggleToHide = document.getElementById(toggleToHideId);
        
        // Check if elements exist
        if (formToShow && formToHide && toggleToShow && toggleToHide) {
            // Show the desired form and hide the other
            formToShow.classList.add('active');
            formToHide.classList.remove('active');
            
            // Activate the clicked toggle button and deactivate the other
            toggleToShow.classList.add('active');
            toggleToHide.classList.remove('active');
        } else {
            console.error('One or more elements not found');
        }
    }

    // Event listeners for form switching
    const switchToLogin = document.getElementById('switchToLogin');
    const switchToSignup = document.getElementById('switchToSignup');
    
    if (switchToLogin && switchToSignup) {
        switchToLogin.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor behavior
            toggleForm('loginForm', 'signupForm', 'switchToLogin', 'switchToSignup');
        });

        switchToSignup.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor behavior
            toggleForm('signupForm', 'loginForm', 'switchToSignup', 'switchToLogin');
        });
    } else {
        console.error('Switch links not found');
    }

    // Function to handle the close button click
    function handleCloseClick() {
        const forms = document.querySelectorAll('.form-content');
        forms.forEach(form => form.classList.remove('active'));
    }

    // Event listeners for close buttons
    const closeButtons = document.querySelectorAll('.close-button');
    closeButtons.forEach(button => button.addEventListener('click', handleCloseClick));
});
