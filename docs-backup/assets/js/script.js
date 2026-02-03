
      // On page load or when changing themes, best to add inline in `head` to avoid FOCU
      if (
        localStorage.getItem("color-theme") === "dark" ||
        (!("color-theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {

        
        document.documentElement.classList.remove("dark");
      }
  

var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});





// Animation-scroll 

ScrollReveal().reveal('.hero-info' , {
    delay: 300,
    duration: 800,
    origin: 'left',
    distance: '50px',
    easing: 'ease-in-out'

});

ScrollReveal().reveal('.hero-image' , {
    delay: 300,
    duration: 800,
    origin: 'right',
    distance: '50px',
    easing: 'ease-in-out'

});

ScrollReveal().reveal('.boxes' , {
    delay: 300,
    duration: 800,
    origin: 'bottom',
    distance: '50px',
    easing: 'ease-in-out'

});

ScrollReveal().reveal('.categories' , {
    delay: 300,
    duration: 800,
    origin: 'bottom',
    distance: '50px',
    easing: 'ease-in-out'

});

ScrollReveal().reveal('.about-info' , {
    delay: 300,
    duration: 800,
    origin: 'left',
    distance: '50px',
    easing: 'ease-in-out'

});

ScrollReveal().reveal('.social-icons ' , {
    delay: 300,
    duration: 800,
    origin: 'left',
    distance: '50px',
    easing: 'ease-in-out'

});

ScrollReveal().reveal('.about-us-image ' , {
    delay: 300,
    duration: 800,
    origin: 'left',
    distance: '50px',
    easing: 'ease-in-out'

});

ScrollReveal().reveal('.features ' , {
    delay: 300,
    duration: 800,
    origin: 'bottom',
    distance: '50px',
    easing: 'ease-in-out'

});

ScrollReveal().reveal('.academy-footer  ' , {
    delay: 300,
    duration: 800,
    origin: 'bottom',
    distance: '50px',
    easing: 'ease-in-out'

});

ScrollReveal().reveal('.footer-icons  ' , {
    delay: 300,
    duration: 800,
    origin: 'right',
    distance: '50px',
    easing: 'ease-in-out'

});

ScrollReveal().reveal('.all-rights  ' , {
    delay: 300,
    duration: 800,
    origin: 'left',
    distance: '50px',
    easing: 'ease-in-out'

});

ScrollReveal().reveal('.image-section  ' , {
    delay: 300,
    duration: 800,
    origin: 'left',
    distance: '50px',
    easing: 'ease-in-out'

});

ScrollReveal().reveal('.cyber-attack-image   ' , {
    delay: 300,
    duration: 800,
    origin: 'left',
    distance: '50px',
    easing: 'ease-in-out'

});

ScrollReveal().reveal('.cyber-attack-info  ' , {
    delay: 300,
    duration: 800,
    origin: 'right',
    distance: '50px',
    easing: 'ease-in-out'

});

ScrollReveal().reveal('.contact-title ' , {
    delay: 300,
    duration: 800,
    origin: 'left',
    distance: '50px',
    easing: 'ease-in-out'

});

ScrollReveal().reveal('.contact-paragraph  ' , {
    delay: 300,
    duration: 800,
    origin: 'left',
    distance: '50px',
    easing: 'ease-in-out'

});

ScrollReveal().reveal('.contact-para-2 ' , {
    delay: 300,
    duration: 800,
    origin: 'left',
    distance: '50px',
    easing: 'ease-in-out'

});

ScrollReveal().reveal('.contact-form ' , {
    delay: 300,
    duration: 800,
    origin: 'left',
    distance: '50px',
    easing: 'ease-in-out'

});

ScrollReveal().reveal('.signin-title' , {
    delay: 300,
    duration: 800,
    origin: 'left',
    distance: '50px',
    easing: 'ease-in-out'

});

ScrollReveal().reveal('.signin-paragraph' , {
    delay: 300,
    duration: 800,
    origin: 'left',
    distance: '50px',
    easing: 'ease-in-out'

});

ScrollReveal().reveal('.signin-button ' , {
    delay: 300,
    duration: 800,
    origin: 'left',
    distance: '50px',
    easing: 'ease-in-out'

});

ScrollReveal().reveal('.signin-form ' , {
    delay: 300,
    duration: 800,
    origin: 'left',
    distance: '50px',
    easing: 'ease-in-out'

});






