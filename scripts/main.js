'use strict';

$(document).ready(function(){       
  let scroll_start = 0;
  let startchange = $('#about');
  let offset = startchange.offset();
  $(document).scroll(function() { 
    scroll_start = $(this).scrollTop();
    if(scroll_start > offset.top) {
      $('#navbar').css('background-color', '#2E66A1');
    } else {
      $('#navbar').css('background-color', 'transparent');
    }
  });
});