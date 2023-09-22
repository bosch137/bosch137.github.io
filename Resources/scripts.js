$(document).on('ready', function() {
  $(".parallax").parallax();
});

function normalizeSlideHeights(carouselID) {
  $('.carousel').each(function () {
    var items = $('.carousel-inner', this);
    // reset the height
    items.css('min-height', 0);
    // set the height
    var maxHeight = Math.max.apply(null,
      items.map(function () {
        return $(this).outerHeight()
      }).get());
    items.css('min-height', maxHeight + 'px');
  })
}

$(window).on(
  'load resize orientationchange',
  normalizeSlideHeights);

Materialize.scrollFire([
  {
    selector: ".hero-footer",
    offset: 400,
    callback: function(el) {
      if (window.ga && ga.create) ga("send", "pageview", "footer");
      $('.typed-footer').typed({
        //And I love
        strings: [
          '•&nbsp;<a target="_blank" href="./Resources/Michael-Boschwitz-Resume.pdf">Resume</a><br>•&nbsp;<a onclick="showEmail();">Email</a><br>•&nbsp;<a target="_blank" href="https://boschybee.itch.io">Itch.io</a><br>•&nbsp;<a target="_blank" href="https://github.com/bosch137">GitHub</a><br>•&nbsp;<a target="_blank" href="https://linkedin.com/in/michaelboschwitz">LinkedIn</a><br>...and thats about it!^1000'
        ],
        loop: false,
        contentType: "html",
        typeSpeed: 25,
        // call when done callback function
        callback: function() {
          $(".typed-footer").parent().children(".typed-cursor").delay(1500).fadeOut("slow");
        }
      });
    }
  },
{ selector: '.leadership-span', offset: 200, callback: function() { if (window.ga && ga.create) ga("send", "pageview", "Leadership")}},
{ selector: '.card-carousel-games', offset: 200, callback: function() { if (window.ga && ga.create) ga("send", "pageview", "Games")}},
{ selector: '.card-carousel-code', offset: 200, callback: function() { if (window.ga && ga.create) ga("send", "pageview", "Coding")}},
{ selector: '.adventure-carousel', offset: 200, callback: function () { if (window.ga && ga.create) ga("send", "pageview", "Adventures")}},
]);

//fade in with a little delay
$(window).on("load", function() {
  $("#fire1")
    .delay(10000000000)
    .fadeIn("slow");

  var customTypedInput = [
    {
      string: "..!",
      stopNum: 0,
      backDelay: undefined
    },
    {
      string: "And I love Programming.",
      stopNum: 5,
      backDelay: undefined
    },
    {
      string: "And I like making and playing Games.",
      stopNum: 5,
      backDelay: undefined
    },
    {
      string: "And I love being on Lake Minnetonka, MN.",
      typeSpeed: 15,
      stopNum: 5,
      backDelay: undefined
    },
    {
      string: "And I love doodling.",
      stopNum: 5,
      backDelay: undefined
    },
    {
      string: "And I like playing Volleyball.",
      stopNum: 5,
      backDelay: undefined
    },
    {
      string: "And I enjoy playing Guitar.",
      stopNum: 19,
      backDelay: 50
    },
    {
      string: "And I enjoy playing Piano.",
      stopNum: 19,
      backDelay: 50
    },
    {
      string: "And I enjoy playing Drumset.",
      stopNum: 19,
      backDelay: 50
    },
    {
      string: "And I enjoy playing...",
      stopNum: 5,
      backDelay: 50
    },
    {
      string: "And I LOVE all things Music.",
      stopNum: 5,
      backDelay: undefined
    },
    {
      string: "And I love a Challenge.",
      stopNum: 5,
      backDelay: undefined
    },
    {
      string: "And I never make a mestake.",
      stopNum: 20,
      backDelay: 50
    },
    {
      string: "And I never make a mistake.",
      stopNum: 0,
      backDelay: undefined
    },
    {
      string:
        "And I am a Graduate of the University of Minnesota, with a degree in Software Engineering and Creative Design<br>and a Minor in Japanese Studies.",
      typeSpeed: 10,
      stopNum: 5,
      backDelay: undefined,
    }
  ];

  setTimeout(function () {
    $(function () {
      $(".typed").typed({
        //And I love
        michael: customTypedInput,
        typeSpeed: 20,
        backDelay: 700,
        loop: false,
        callback: function () {
          $(".typed").parent().children(".typed-cursor").delay(1500).fadeOut("slow");
        }
      });
    });
  }, 0);//typing delay
  
  setTimeout(function() {
    if (window.innerWidth < 800){
      Materialize.toast(
        "My site does scale down to mobile, but...",
        5000
      );
      Materialize.toast(
        "It looks way better on a desktop browser!",
        5000
      );
    }

  }, 1000);//please use desktop delay
});

var anchors = $(".anchor");

function getAnchorOffset(updown) {
  //updown = 'up' || 'down'
  var posY = window.scrollY;
  var rtn = posY; //don't go anywhere unless this value is changed
  var delta = document.body.scrollHeight; // height of the page

  var len = anchors.length;
  for (var i = 0; i < len; i++) {
    var e = $(anchors[i]);
    var top =
      e.offset().top +
      ((e.data("offset") == "title"
        ? -window.innerHeight + 118
        : e.data("offset")) || 0);

    if (Math.abs(top - posY) < 20) continue;

    if (updown == "up") {
      //console.log(posY - top, delta);
      if (posY - top < delta && posY - top > 5) {
        rtn = top;
        delta = posY - top;
      }
    }

    if (updown == "down") {
      // console.log(top - posY, delta);
      if (top - posY < delta && top - posY > 5) {
        rtn = top;
        delta = top - posY;
      }
    }
  }
  return rtn;
}

var animating = false;
var scrollSpeed = 500;

function readyForNextAnim() {
  animating = false;
}

function keyHandling(keyCode) {
  //if(animating)
  //return false;
  if (keyCode == 40) {
    animating = true;
    // console.log("keydown");
    $("body, html")
      .animate(
        {
          scrollTop: getAnchorOffset("down")
        },
        {
          duration: scrollSpeed,
          queue: false
        },
        "easeInOutCubic"
      )
      .promise()
      .done(function(readyForNextAnim) {});
    // scrollSpeed -= 500;
    // if(scrollSpeed < 0)
    //   scrollSpeed = 0;
    return true;
  }
  if (keyCode == 38) {
    animating = true;
    // console.log("keyup");
    $("body, html").animate(
      {
        scrollTop: getAnchorOffset("up")
      },
      {
        duration: scrollSpeed,
        queue: false
      },
      "easeInOutCubic"
    );
    // scrollSpeed -= 500;
    // if(scrollSpeed < 0)
    //   scrollSpeed = 0;
    return true;
  }
  if (keyCode == 77) {
    $(".button-collapse").sideNav("show");
    return true;
  }
  return false;
}

var buttonClicked = '';
function goToID(id) {
  var e = $(id);
  buttonClicked = id.id;
  $("body, html").animate(
    {
      scrollTop: e.offset().top + (e.data("offset") || 0)
    },
    {
      duration: scrollSpeed,
      queue: false
    },
    "easeInOutCubic"
  );
}

$(document).keydown(function(e) {
  if (keyHandling(e.keyCode)) e.preventDefault();
});
$(".button-collapse").sideNav({
  menuWidth: 280, // Default is 240
  edge: "right", // Choose the horizontal origin
  closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
});

function showEmail() {
  if (window.ga && ga.create) ga("send", "pageview", "assets/email");
  UnCryptMailto("nbjmup;cptdi248Avno/fev");
  return false;
}

function UnCryptMailto(s) {
  var n = 0;
  var r = "";
  for (var i = 0; i < s.length; i++) {
    n = s.charCodeAt(i);
    if (n >= 8364) {
      n = 128;
    }
    r += String.fromCharCode(n - 1);
  }
  if (prompt('Here it is! Click "Ok" to open in your email.', r.substring(7))){
      return (window.location.href = r);
  }

  return false;
}

var didFirstScroll = false;
//get current anchor section
$(window).scroll(function (e) {
  let checkIDs = ['intro', 'leadership', 'gameProjects', 'codeProjects', 'adventures', 'contact'];
  let navButtons = document.getElementsByClassName('navbuttons')[0];

  if(!didFirstScroll)
  {
    var specialStart = document.getElementsByClassName("side-nav-button-special");
    if (specialStart.length > 0) 
    {
      specialStart[0].classList.add("side-nav-label");
      specialStart[0].classList.remove("side-nav-button-special");
      didFirstScroll = true;
    }
  }


  if (buttonClicked != '') {
    var curButton = navButtons.getElementsByClassName('side-nav-button')[checkIDs.indexOf(buttonClicked)];
    curButton.style.background = "#2ab7a9";
    curButton.classList.add("side-nav-button-visible")
    
  }

  let scrollTop = document.documentElement.scrollTop;
  for (var anchorID of checkIDs) 
  {

    let el = document.getElementById(anchorID);
    var sectionButton = navButtons.getElementsByClassName('side-nav-button')[checkIDs.indexOf(el.id)];
    if (scrollTop > el.offsetTop - 300 && scrollTop < el.offsetTop - 300 + el.clientHeight) 
    {
      if (el.id == buttonClicked){
        buttonClicked = '';
        sectionButton.style.background = "rgba(255, 255, 255, 0.733)"; 
        sectionButton.classList.remove("side-nav-button-visible")
      }
      sectionButton.style.background = "#2ab7a9";
      sectionButton.classList.remove("side-nav-button-visible")
    }
    else if (buttonClicked == '') 
    {
      sectionButton.style.background = "rgba(255, 255, 255, 0.733)"; 
      sectionButton.classList.remove("side-nav-button-visible")
    }
  }
});