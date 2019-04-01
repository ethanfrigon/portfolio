'use strict';

// let myNav = document.getElementById('navbar');
// console.log(myNav);
// window.onscroll = function () { 
//   if (document.body.scrollTop >= 12 ) {
//     myNav.classList.add('nav-colored');
//     myNav.classList.remove('nav-transparent');
//   } 
//   else {
//     myNav.classList.add('nav-transparent');
//     myNav.classList.remove('nav-colored');
//   }
// };

$(document).ready(function(){       
  var scroll_start = 0;
  var startchange = $('#about');
  var offset = startchange.offset();
  $(document).scroll(function() { 
    scroll_start = $(this).scrollTop();
    if(scroll_start > offset.top) {
      $('#navbar').css('background-color', '#306DA7');
    } else {
      $('#navbar').css('background-color', 'transparent');
    }
  });
});