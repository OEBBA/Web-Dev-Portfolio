//movement function
$(function() {
  $(document).keydown(function(event) {
    switch (event.keyCode) {
      case 37:
        $("ul#boxer").css({
          "-webkit-transition": "all .1s ease-in-out",
          "-webkit-transform": "rotateY(-180deg)",
          left: "-=10px"
        });
        break;
      case 38:
        $("ul#boxer").css({
          "-webkit-transition": "all .1s ease-in-out",
          top: "10px"
        });
        break;
      case 39:
        $("ul#boxer").css({
          "-webkit-transition": "all .1s ease-in-out",
          "-webkit-transform": "rotateY(0deg)",
          left: "+=10px"
        });
        break;
      case 32:
        $("ul#arm_left").css({
          "-webkit-transition": "all .05s ease-in-out",
          "-webkit-transform": "rotate(-120deg)"
        });
        break;
    }
  });

//uppercut function
  $(document).keyup(function(event) {
    switch (event.keyCode) {
      case 32:
     $("ul#arm_left").css({
          "-webkit-transition": "all .05s ease-in-out",
          "-webkit-transform": "rotate(0deg)"
        });
        break;
      case 38:
        $("ul#boxer").css({
          "-webkit-transition": "all .1s ease-in-out",
          top: "50px"
        });
        break;
    }
  });
});
