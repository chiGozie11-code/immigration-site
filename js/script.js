function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    var scrolled = window.scrollY > 0;
    header.classList.toggle('scrolled', scrolled);
  });

// for image slider/
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      nav: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3000,
      smartSpeed: 900,
      autoplayHoverPause: true,
      onInitialized: animateText,
      onTranslated: animateText,
  
  
    });
  });

  function animateText(event) {
    // Remove the 'show' class from all text animations
    $('.text-animation').removeClass('show');

    // Add the 'show' class to the text animation in the current slide
    var currentSlide = event.item.index + 1;
    $('.owl-item:nth-child(' + currentSlide + ') .text-animation').addClass('show');
  }
;


function startAnimation() {
  // Add and remove the 'animate__animated' class to restart the animation
  $('.owl-item.active h1, .owl-item.active p').removeClass('animate__animated').css('opacity', '0');
  $('.owl-item.active h1, .owl-item.active p').addClass('animate__animated').css('opacity', '1');
  
}

  
  // the end/

  document.addEventListener('DOMContentLoaded', function () {
    // Set the target number
    const targetNumber = 847;
  
  
    // Get the count element
    const countElement = document.getElementById('count');
  
    // Function to update the count
    function updateCount(count) {
      countElement.textContent = count;
    }
  
    // Function to start the count-up animation
    function startCountUp() {
      let count = 0;
  
      // Update the count every 10 milliseconds
      const intervalId = setInterval(function () {
        count++;
        updateCount(count);
  
        // Stop the count-up animation when the target number is reached
        if (count === targetNumber) {
          clearInterval(intervalId);
        }
      }, 100);
    }
  
    // Start the count-up animation when the page is loaded
    startCountUp();
  });

 // for image slider/
$(document).ready(function () {
    $("#small-carousel").owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 700,
      autoplayHoverPause: true,
  
    });
  });
  // the end/


  $(document).ready(function () {
    $("#mobile-checker").owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      smartSpeed: 900,
      autoplayHoverPause: true,
  
    });
  });
  document.addEventListener('DOMContentLoaded', function () {
    // Set the target number
    const targetNumber = 480;
  
  
    // Get the count element
    const countElement = document.getElementById('count-one');
  
    // Function to update the count
    function updateCount(count) {
      countElement.textContent = count;
    }
  
    // Function to start the count-up animation
    function startCountUp() {
      let count = 0;
  
      // Update the count every 10 milliseconds
      const intervalId = setInterval(function () {
        count++;
        updateCount(count);
  
        // Stop the count-up animation when the target number is reached
        if (count === targetNumber) {
          clearInterval(intervalId);
        }
      }, 100);
    }
  
    // Start the count-up animation when the page is loaded
    startCountUp();
  });
  document.addEventListener('DOMContentLoaded', function () {
    // Set the target number
    const targetNumber = 560 ;
  
  
    // Get the count element
    const countElement = document.getElementById('count-two');
  
    // Function to update the count
    function updateCount(count) {
      countElement.textContent = count;
    }
  
    // Function to start the count-up animation
    function startCountUp() {
      let count = 0;
  
      // Update the count every 10 milliseconds
      const intervalId = setInterval(function () {
        count++;
        updateCount(count);
  
        // Stop the count-up animation when the target number is reached
        if (count === targetNumber) {
          clearInterval(intervalId);
        }
      }, 100);
    }
  
    // Start the count-up animation when the page is loaded
    startCountUp();
  });
  document.addEventListener('DOMContentLoaded', function () {
    // Set the target number
    const targetNumber = 15000;
  
  
    // Get the count element
    const countElement = document.getElementById('count-three');
  
    // Function to update the count
    function updateCount(count) {
      countElement.textContent = count;
    }
  
    // Function to start the count-up animation
    function startCountUp() {
      let count = 0;
  
      // Update the count every 10 milliseconds
      const intervalId = setInterval(function () {
        count++;
        updateCount(count);
  
        // Stop the count-up animation when the target number is reached
        if (count === targetNumber) {
          clearInterval(intervalId);
        }
      }, 100);
    }
  
    // Start the count-up animation when the page is loaded
    startCountUp();
  });
  document.addEventListener('DOMContentLoaded', function () {
    // Set the target number
    const targetNumber = 200;
  
  
    // Get the count element
    const countElement = document.getElementById('count-four');
  
    // Function to update the count
    function updateCount(count) {
      countElement.textContent = count;
    }
  
    // Function to start the count-up animation
    function startCountUp() {
      let count = 0;
  
      // Update the count every 10 milliseconds
      const intervalId = setInterval(function () {
        count++;
        updateCount(count);
  
        // Stop the count-up animation when the target number is reached
        if (count === targetNumber) {
          clearInterval(intervalId);
        }
      }, 100);
    }
  
    // Start the count-up animation when the page is loaded
    startCountUp();
  });
  