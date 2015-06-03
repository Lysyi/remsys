'use strict';

$(document).ready( function(){
  $(".main-menu-clicker").click(function(){
    var toggleWidth = "0px";
    if($(".main-menu-container").width() === 280)
    {
      toggleWidth="30px";
      $(this).addClass('active');
    } else {
      toggleWidth="280px";
      $(this).removeClass('active');
    }
    $('.main-menu-container').animate({ width: toggleWidth });
  });
});
