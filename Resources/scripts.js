$(document).on('ready', function() {
  $(".parallax").parallax();
});

Materialize.scrollFire([
  {
    selector: ".hero-footer",
    offset: 400,
    callback: function(el) {
      if (window.ga && ga.create) ga("send", "pageview", "footer");
      $('.typed-footer').typed({
        //And I love
        strings: [
          '•&nbsp;<a target="_blank" href="./Resources/Michael-Boschwitz-Resume.pdf">Resume</a><br>•&nbsp;<a onclick="showEmail();">Email</a><br>•&nbsp;<a target="_blank" href="https://github.com/bosch137">GitHub</a><br>•&nbsp;<a target="_blank" href="https://linkedin.com/in/michaelboschwitz">LinkedIn</a><br>...and thats about it!^1000'
        ],
        loop: false,
        contentType: "html",
        typeSpeed: 60,
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
    .delay(3000)
    .fadeIn("slow");
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
    
    var customTypedInput = [
      {
        string: "And I love Programming.",
        stopNum: 5,
        backDelay: undefined
      },
      {
        string: "And I love Creative Problem Solving.",
        stopNum: 5,
        backDelay: undefined
      },
      {
        string: "And I love being on Lake Minnetonka, MN.",
        stopNum: 5,
        backDelay: undefined
      },
      {
        string: "And I'm passionate about Learning.",
        stopNum: 24,
        backDelay: undefined
      },
      {
        string: "And I'm passionate about Technology.",
        stopNum: 5,
        backDelay: undefined
      },
      {
        string: "And I love doodling.",
        stopNum: 5,
        backDelay: undefined
      },
      {
        string: "And I like Radiohead.",
        stopNum: 5,
        backDelay: undefined
      },
      {
        string: "And I like making and playing Games.",
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
          "And I am a Student at the University of Minnesota, studying Software Development and Creative Design.",
        stopNum: 5,
        backDelay: undefined,
      }
    ];

    setTimeout(function() {
      $(function() {
        $(".typed").typed({
          //And I love
          michael: customTypedInput,
          typeSpeed: 60,
          backDelay: 700,
          loop: false,
          callback: function () {
            $(".typed").parent().children(".typed-cursor").delay(1500).fadeOut("slow");
          }
        });
      });
    }, 1000);
  }, 1000);
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

function goToID(id) {
  var e = $(id);
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