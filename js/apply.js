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