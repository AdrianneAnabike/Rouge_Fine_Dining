document.addEventListener('DOMContentLoaded', function() {
            // Form switching functionality
            const loginForm = document.getElementById('login-form');
            const signupForm = document.getElementById('signup-form');
            const forgotPasswordForm = document.getElementById('forgot-password-form');
            const loginSignupLink = document.getElementById('login-signup-link');
            
            const signupLink = document.getElementById('signup-link');
            const loginLink = document.getElementById('login-link');
            const forgotPasswordLink = document.getElementById('forgot-password-link');
            const backToLoginLink = document.getElementById('back-to-login');
            
            function showLoginForm() {
                loginForm.style.display = 'block';
                signupForm.style.display = 'none';
                forgotPasswordForm.style.display = 'none';
                loginSignupLink.style.display = 'block';
                document.querySelector('.login-content h1').textContent = 'Delicious food at your doorstep';
                document.querySelector('.login-content .subtitle').textContent = 'Sign in to order your favorite meals';
            }
            
            function showSignupForm() {
                loginForm.style.display = 'none';
                signupForm.style.display = 'block';
                forgotPasswordForm.style.display = 'none';
                loginSignupLink.style.display = 'none';
                document.querySelector('.login-content h1').textContent = 'Create your account';
                document.querySelector('.login-content .subtitle').textContent = 'Join us and start ordering delicious meals';
            }
            
            function showForgotPasswordForm() {
                loginForm.style.display = 'none';
                signupForm.style.display = 'none';
                forgotPasswordForm.style.display = 'block';
                loginSignupLink.style.display = 'none';
                document.querySelector('.login-content h1').textContent = 'Reset your password';
                document.querySelector('.login-content .subtitle').textContent = 'Enter your email to receive a password reset link';
            }
            
            signupLink.addEventListener('click', function(e) {
                e.preventDefault();
                showSignupForm();
            });
            
            loginLink.addEventListener('click', function(e) {
                e.preventDefault();
                showLoginForm();
            });
            
            forgotPasswordLink.addEventListener('click', function(e) {
                e.preventDefault();
                showForgotPasswordForm();
            });
            
            backToLoginLink.addEventListener('click', function(e) {
                e.preventDefault();
                showLoginForm();
            });
            
            // Show login form by default
            showLoginForm();

            // Slider functionality
            const dots = document.querySelectorAll('.pagination-dots .dot');
            const slides = document.querySelectorAll('.slide');
            
            // Function to show a specific slide
            function showSlide(slideNumber) {
                // Hide all slides and remove active class from dots
                slides.forEach(slide => slide.classList.remove('active'));
                dots.forEach(dot => dot.classList.remove('active'));
                
                // Show the selected slide and activate the corresponding dot
                document.getElementById(`slide-${slideNumber}`).classList.add('active');
                document.querySelector(`.dot[data-slide="${slideNumber}"]`).classList.add('active');
            }
            
            // Add click event listeners to dots
            dots.forEach(dot => {
                dot.addEventListener('click', function() {
                    const slideNumber = this.getAttribute('data-slide');
                    showSlide(slideNumber);
                });
            });
            
            // Auto-rotate slides every 5 seconds
            let currentSlide = 1;
            const totalSlides = slides.length;
            
            function rotateSlides() {
                currentSlide = currentSlide % totalSlides + 1;
                showSlide(currentSlide);
            }
            
            // Start the auto-rotation
            let slideIntervalId = setInterval(rotateSlides, 5000);
            
            // Pause rotation when hovering over the slider
            const sliderContainer = document.querySelector('.slider-container');
            
            sliderContainer.addEventListener('mouseenter', function() {
                clearInterval(slideIntervalId);
            });
            
            sliderContainer.addEventListener('mouseleave', function() {
                clearInterval(slideIntervalId); 
                slideIntervalId = setInterval(rotateSlides, 5000); 
            });
        });

      
// Select only the login form's button
const loginButton = document.querySelector('#login-form .login-button');

loginButton.addEventListener('click', function (e) {
  e.preventDefault();

  const loader = document.getElementById('loader-overlay');
  loader.classList.add('active');

  // Show loader for 3 seconds before redirecting
  setTimeout(() => {
    loader.classList.remove('active');
    window.location.href = "index.html"; // 🔗 change to your Rouge homepage
  }, 5000);
});




document.querySelector('#signup-form .login-button').addEventListener('click', function(e) {
  e.preventDefault();

  // Hide signup
  document.getElementById('signup-form').style.display = 'none';

  // Show personalize
  const personalizeForm = document.getElementById('personalize-form');
  personalizeForm.style.display = 'flex'; // or just use active class
  personalizeForm.classList.add('active');
});


// Back to Signup from Personalize
document.getElementById('back-to-signup').addEventListener('click', function(e) {
  e.preventDefault();

  // Hide personalize form
  document.getElementById('personalize-form').style.display = 'none';
  document.getElementById('personalize-form').classList.remove('active');

  // Show signup form
  document.getElementById('signup-form').style.display = 'block';
});


// Select the Finish Setup button inside the personalize form
const finishSetupButton = document.querySelector('#personalize-form .login-button');

finishSetupButton.addEventListener('click', function(e) {
  e.preventDefault();

  const loader = document.getElementById('loader-overlay');
  
  // Show loader
  loader.classList.add('active');

  // Optional: hide the personalize form while loading
  document.getElementById('personalize-form').style.display = 'none';

  // Show loader for 5 seconds before redirecting or next action
  setTimeout(() => {
    loader.classList.remove('active');
    
    // Replace this with the page you want to go to after setup
    window.location.href = "index.html"; 
  }, 5000);
});
