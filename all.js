$(document).ready(function () {
  $('.ham-bar').click(function (e) { 
    e.preventDefault();
    $('.menu').toggleClass('open');
    
  });
});
