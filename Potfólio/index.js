//Changes the color of the button, so that the user knows which part of the page they are in
function changeColor(x) {
  let item = document.getElementsByClassName("nav-link");
  for (let i = 0; i < item.length; i++) {
    if (i == x) {
      item[i].style.color = "#af2b5a";
    } else {
      item[i].style.color = "#848484";
    }
  }
}

//////////////////////////////////Vertical Slider begins/////////////////////////////////////
$("#myCarousel").carousel({
  interval: false,
});

//scroll slides on swipe for touch enabled devices

$("#myCarousel").on("touchstart", function (event) {
  var yClick = event.originalEvent.touches[0].pageY;
  $(this).one("touchmove", function (event) {
    var yMove = event.originalEvent.touches[0].pageY;
    if (Math.floor(yClick - yMove) > 1) {
      $(".carousel").carousel("next");
      determinePosition(1);
    } else if (Math.floor(yClick - yMove) < -1) {
      $(".carousel").carousel("prev");
      determinePosition(-1);
    }
  });
  $(".carousel").on("touchend", function () {
    $(this).off("touchmove");
  });
});

function determinePosition(x){
  let item = document.getElementsByClassName("nav-link");
  for (let i = 0; i < item.length; i++) {
      if(item[i].style.color == "rgb(175, 43, 90)"){
        if (x == 1) {
          if(i == 3) changeColor(0);
          else changeColor(i+1);
          break;
        }
        else if (x == -1){
          if(i == 0) changeColor(3);
          else changeColor(i-1);
          break;
        }
      }
  }
}

///////////////////////////////////Vertical Slider Ends///////////////////////////////////////
