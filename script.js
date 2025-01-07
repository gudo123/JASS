const menu = document.getElementById("jsMenu");
const music = document.getElementById("jsMusic");

function slideMenuIn() {menu.style.left = "-200px";}
function slideMenuOut() {menu.style.left = "0";}

function slideMusicIn() {music.style.right = "0";}
function slideMusicOut() {music.style.right = "-300px";}

function handleMouseMove(event) {
  let clientX = event.clientX;
  if (clientX >= 0 && clientX <= 10) {
    	slideMenuOut();
    	}
  else if (clientX > 310) {
    	slideMenuIn();
    	
    	}
  if (clientX >= 1500 && clientX <= 1520){
	  slideMusicIn();
	  }
  	else if(clientX < 1350){
		slideMusicOut();
		}
}

function init() {
  document.addEventListener("mousemove", handleMouseMove);
}

init();
//nav의 js동작

$( document ).ready( function() {
  var Offset = $( '.Menu' ).offset();
  $( window ).scroll( function() {
    if ( $( document ).scrollTop() > Offset.top ) {
      $( '.Menu' ).addClass( 'Fixed' );
    }
    else {
      $( '.Menu' ).removeClass( 'Fixed' );
    }
  });
});
//header의 Menu 고정

 function scrollToContent(id) {
    $('html, body').animate({
      scrollTop: $(id).offset().top
    }, 500);
  }

  function scrollToCoordinates(x, y) {

    $('html, body').animate({
      scrollLeft: x,
      scrollTop: y
    }, 500);
  }
//slide의 스크롤 애니메이션

const darkbtn = document.getElementById('darkbtn');
const body = document.body;
const content = document.querySelector('.Content');

const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

if (isDarkMode) {
    enableDarkMode();
    darkbtn.checked = true;
} else {
    enableLightMode();
}

darkbtn.addEventListener('change', () => {
    if (darkbtn.checked) {
        enableDarkMode();
        localStorage.setItem('darkMode', 'enabled');
    } else {
        enableLightMode();
        localStorage.setItem('darkMode', 'disabled');
    }
});

function enableDarkMode() {
    body.classList.add('dark-mode');
    content.classList.add('dark-mode');
}

function enableLightMode() {
    body.classList.remove('dark-mode');
    content.classList.remove('dark-mode');
}
//다크 모드

