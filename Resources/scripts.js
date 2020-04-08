$(document).ready(function() {
  $(".parallax").parallax();
});

//set the height of the hero image to the height of the browser.
$(".hero").height(window.innerHeight);

$(".full-height").css("min-height", window.innerHeight + 25);

$(window).resize(function() {
  console.log("window was resized");
  //set the height of the hero image to the height of the browser.
  $(".hero").height(window.innerHeight);

  $(".full-height").css("min-height", window.innerHeight + 25);
});

(function() {
  var arr = $(".anchor_title");
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    var e = $(arr[i]);
    e.data("offset", "title");
  }
})();

Materialize.scrollFire([
  {
    selector: ".hero-footer",
    offset: 400,
    callback: function(el) {
      if (window.ga && ga.create) ga("send", "pageview", "assets/footer");
      $(".typed-footer").typed({
        //And I love
        strings: [
          '•&nbsp;<a target="_blank" href="http://michael.boschwitz.me/assets/Michael-Boschwitz-Resume.pdf">Resume</a><br>•&nbsp;<a onclick="showEmail();">Email</a><br>•&nbsp;<a target="_blank" href="https://github.com/bosch137">GitHub</a><br>...and thats about it!^1000'
        ],
        loop: false,
        contentType: "html",
        typeSpeed: 60,
        // call when done callback function
        callback: function() {
          $(".typed-footer")
            .parent()
            .children(".typed-cursor")
            .delay(1500)
            .fadeOut("slow");
        }
      });
    }
  }
]);

//fade in from the preloader with a little delay
$(window).on("load", function() {
  // $('.preloader-background').delay(1500).fadeOut('slow');
  $("#fire1")
    .delay(3000)
    .fadeIn("slow");
  setTimeout(function() {
    if (window.innerWidth < 800)
      Materialize.toast(
        "My site looks better on a maximized desktop browser",
        15000
      );

    Materialize.toast("Use the arrows to navigate the page", 5000);

    $(".collapsible-body").css("display", "block");
    $("body").addClass("loaded");

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
          "And I am a Sophomore at the University of Minnesota, studying Software Engineering and Creative Design.",
        stopNum: 5,
        backDelay: 0
      }
    ];

    setTimeout(function() {
      $(function() {
        $(".typed").typed({
          //And I love
          david: customTypedInput,
          typeSpeed: 70,
          backDelay: 700,
          loopCount: 1,
          loop: false
        });
      });
    }, 1000);
  }, 1000);
  //$('body').delay(3000).addClass('loaded');
  // $('.preloader-wrapper')
  // 	.delay(1500)
  // 	.fadeOut();
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

var keyhintshown = false;
function keyHandling(keyCode) {
  if (!keyhintshown) {
    keyhintshown = true;
    if (window.innerWidth > 601)
      Materialize.toast(
        $("<span>Type <kbd>?</kbd> for some hints</span>"),
        5000
      );
  }
  //if(animating)
  //return false;
  if (keyCode == 40) {
    animating = true;
    console.log("keydown");
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
    console.log("keyup");
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
  if (keyCode == 37) {
    $("body, html").animate(
      {
        scrollTop: window.scrollY - 300 > 0 ? window.scrollY - 300 : 0
      },
      {
        duration: scrollSpeed,
        queue: false
      },
      "easeInOutCubic"
    );
    return true;
  }
  if (keyCode == 39) {
    $("body, html").animate(
      {
        scrollTop: window.scrollY + 300
      },
      {
        duration: scrollSpeed,
        queue: false
      },
      "easeInOutCubic"
    );
    return true;
  }
  if (keyCode == 77) {
    $(".button-collapse").sideNav("show");
    return true;
  }
  if (keyCode == 191) {
    if (
      $("#shortcuts-modal").css("display") == "none" ||
      $("#shortcuts-modal")
        .css("bottom")
        .startsWith("-")
    )
      $("#shortcuts-modal").openModal();
    else $("#shortcuts-modal").closeModal();
  }
  console.log(keyCode);
  return false;
}
var shortcuts_modal = false;

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
function divChangerStart() {
  longForm = String(
    '<div class="col-md-3" id="NavTabs" style="max-width: fit-content; min-height: fit-content; background: white; padding: 10px; margin-right: 25px; border-radius: 9px;">\
                    <ul class="nav nav-pills nav-stacked" id="myTab" role="tablist">\
                        <li class="nav-item active" style="padding-top: 12%; font-size: 20px;">\
                            <a class="nav-link" id="eagle-scout-tab" data-toggle="tab" href="#eagle-scout" role="tab" aria-controls="eagle-scout" aria-selected="true">Eagle Scout</a>\
                        </li>\
                        <li class="nav-item" style="padding-top: 12%; padding-bottom: 12%; font-size: 20px;">\
                            <a class="nav-link" id="barista-tab" data-toggle="tab" href="#barista" role="tab" aria-controls="barista" aria-selected="false">Barista</a>\
                        </li>\
                        <li class="nav-item" style="padding-bottom: 12%; font-size: 20px;">\
                            <a class="nav-link" id="boating-director-tab" data-toggle="tab" href="#boating-director" role="tab" aria-controls="boating-director" aria-selected="false">Boating Director</a>\
                        </li>\
                    </ul>\
                </div>'
  );

  shortForm = String(
    '<div style="padding-right: 5vw; padding-left: 5vw; min-width: 100%">\
                    <ul class="nav nav-tabs" id="myTab" role="tablist" style="display: flex; align-items: center; justify-content: center;">\
                        <li class="nav-item active" style="float: left; min-height: 10vw; min-width: 10vw; max-height: 100%; max-width: fit-content;">\
                            <a id="eagle-scout-tab" data-toggle="tab" href="#eagle-scout" role="tab" aria-controls="eagle-scout" aria-selected="true"><img src="./Resources/BSAImage.png" style="display: block; margin: 0 auto; min-height: 10vw; min-width: 10vw; max-height: 10vw; max-width: 10vw;"></img></a>\
                        </li>\
                        <li class="nav-item" style="margin-left: auto; margin-right: auto; min-height: 10vw; min-width: 10vw; max-height: 100%; max-width: fit-content;">\
                            <a id="barista-tab" data-toggle="tab" href="#barista" role="tab" aria-controls="barista" aria-selected="false"><img src="./Resources/starbucks.png" style="display: block; margin: 0 auto; min-height: 10vw; min-width: 10vw; max-height: 10vw; max-width: 10vw;"></img></a>\
                        </li>\
                        <li class="nav-item" style="float: right; min-height: 10vw; min-width: 10vw; max-height: 100%; max-width: fit-content;">\
                            <a id="boating-director-tab" data-toggle="tab" href="#boating-director" role="tab" aria-controls="boating-director" aria-selected="false"><img src="./Resources/boating.png" style="display: block; margin: 0 auto; min-height: 10vw; min-width: 10vw; max-height: 10vw; max-width: 10vw;"></img></a>\
                        </li>\
                    </ul>\
                </div>'
  );
  return [shortForm, longForm];
}

function divChangerMiddle() {
  longForm = String(
    '<div class="col-md-3" id="NavTabs" style="max-width: fit-content; min-height: fit-content; background: white; padding: 10px; margin-right: 25px; border-radius: 9px;">\
                    <ul class="nav nav-pills nav-stacked" id="myTab" role="tablist">\
                        <li class="nav-item" style="padding-top: 12%; font-size: 20px;">\
                            <a class="nav-link" id="eagle-scout-tab" data-toggle="tab" href="#eagle-scout" role="tab" aria-controls="eagle-scout" aria-selected="true">Eagle Scout</a>\
                        </li>\
                        <li class="nav-item active" style="padding-top: 12%; padding-bottom: 12%; font-size: 20px;">\
                            <a class="nav-link" id="barista-tab" data-toggle="tab" href="#barista" role="tab" aria-controls="barista" aria-selected="false">Barista</a>\
                        </li>\
                        <li class="nav-item" style="padding-bottom: 12%; font-size: 20px;">\
                            <a class="nav-link" id="boating-director-tab" data-toggle="tab" href="#boating-director" role="tab" aria-controls="boating-director" aria-selected="false">Boating Director</a>\
                        </li>\
                    </ul>\
                </div>'
  );

  shortForm = String(
    '<div style="margin: 0; padding-right: 5vw; padding-left: 5vw; min-width: 100%">\
                    <ul class="nav nav-tabs" id="myTab" role="tablist" style="display: flex; align-items: center; justify-content: center;">\
                        <li class="nav-item" style="float: left; min-height: 10vw; min-width: 10vw; max-height: 100%; max-width: fit-content;">\
                            <a id="eagle-scout-tab" data-toggle="tab" href="#eagle-scout" role="tab" aria-controls="eagle-scout" aria-selected="true"><img src="./Resources/BSAImage.png" style="display: block; margin: 0 auto; min-height: 10vw; min-width: 10vw; max-height: 10vw; max-width: 10vw;"></img></a>\
                        </li>\
                        <li class="nav-item active" style="margin-left: auto; margin-right: auto; min-height: 10vw; min-width: 10vw; max-height: 100%; max-width: fit-content;">\
                            <a id="barista-tab" data-toggle="tab" href="#barista" role="tab" aria-controls="barista" aria-selected="false"><img src="./Resources/starbucks.png" style="display: block; margin: 0 auto; min-height: 10vw; min-width: 10vw; max-height: 10vw; max-width: 10vw;"></img></a>\
                        </li>\
                        <li class="nav-item" style="float: right; min-height: 10vw; min-width: 10vw; max-height: 100%; max-width: fit-content;">\
                            <a id="boating-director-tab" data-toggle="tab" href="#boating-director" role="tab" aria-controls="boating-director" aria-selected="false"><img src="./Resources/boating.png" style="display: block; margin: 0 auto; min-height: 10vw; min-width: 10vw; max-height: 10vw; max-width: 10vw;"></img></a>\
                        </li>\
                    </ul>\
                </div>'
  );
  return [shortForm, longForm];
}

function divChangerEnd() {
  longForm = String(
    '<div class="col-md-3" id="NavTabs" style="max-width: fit-content; min-height: fit-content; background: white; padding: 10px; margin-right: 25px; border-radius: 9px;">\
                    <ul class="nav nav-pills nav-stacked" id="myTab" role="tablist">\
                        <li class="nav-item" style="padding-top: 12%; font-size: 20px;">\
                            <a class="nav-link" id="eagle-scout-tab" data-toggle="tab" href="#eagle-scout" role="tab" aria-controls="eagle-scout" aria-selected="true">Eagle Scout</a>\
                        </li>\
                        <li class="nav-item" style="padding-top: 12%; padding-bottom: 12%; font-size: 20px;">\
                            <a class="nav-link" id="barista-tab" data-toggle="tab" href="#barista" role="tab" aria-controls="barista" aria-selected="false">Barista</a>\
                        </li>\
                        <li class="nav-item active" style="padding-bottom: 12%; font-size: 20px;">\
                            <a class="nav-link" id="boating-director-tab" data-toggle="tab" href="#boating-director" role="tab" aria-controls="boating-director" aria-selected="false">Boating Director</a>\
                        </li>\
                    </ul>\
                </div>'
  );

  shortForm = String(
    '<div style="padding-right: 5vw; padding-left: 5vw; min-width: 100%">\
                    <ul class="nav nav-tabs" id="myTab" role="tablist" style="display: flex; align-items: center; justify-content: center;">\
                        <li class="nav-item" style="float: left; min-height: 10vw; min-width: 10vw; max-height: 100%; max-width: fit-content;">\
                            <a id="eagle-scout-tab" data-toggle="tab" href="#eagle-scout" role="tab" aria-controls="eagle-scout" aria-selected="true"><img src="./Resources/BSAImage.png" style="display: block; margin: 0 auto; min-height: 10vw; min-width: 10vw; max-height: 10vw; max-width: 10vw;"></img></a>\
                        </li>\
                        <li class="nav-item" style="margin-left: auto; margin-right: auto; min-height: 10vw; min-width: 10vw; max-height: 100%; max-width: fit-content;">\
                            <a id="barista-tab" data-toggle="tab" href="#barista" role="tab" aria-controls="barista" aria-selected="false"><img src="./Resources/starbucks.png" style="display: block; margin: 0 auto; min-height: 10vw; min-width: 10vw; max-height: 10vw; max-width: 10vw;"></img></a>\
                        </li>\
                        <li class="nav-item active" style="float: right; min-height: 10vw; min-width: 10vw; max-height: 100%; max-width: fit-content;">\
                            <a id="boating-director-tab" data-toggle="tab" href="#boating-director" role="tab" aria-controls="boating-director" aria-selected="false"><img src="./Resources/boating.png" style="display: block; margin: 0 auto; min-height: 10vw; min-width: 10vw; max-height: 10vw; max-width: 10vw;"></img></a>\
                        </li>\
                    </ul>\
                </div>'
  );
  return [shortForm, longForm];
}
function resizeTime(shortSave, longSave) {
  if (window.outerWidth > 1325) {
    return longSave;
  } else {
    return shortSave;
  }
}

function sideImagePicker(str) {
  var returnString = '';

  if (str == "#eagle-scout") { var imageChoice = "./Resources/BSAImage.png"; }

  else if (str == "#barista") { var imageChoice = "./Resources/starbucks.png"; }

  else if (str == "#boating-director") { var imageChoice = "./Resources/boating.png"; }

  else { return "<div></div>"; }
  returnString = '<div class="container-fluid Images-Container" id="Image-Container">\
                    <img class="Img-Picker" src="'+ imageChoice + '">\
                  </div>';

  return (returnString);
}

function extraImagePicker(str) {
  var returnString = '';
  
  if (str == "#eagle-scout") { var imageChoice = ["./Resources/EaglePavers.jpg", "./Resources/EaglePaversManualLabor.jpg", "./Resources/EaglePaversAlignment.jpg"]; }

  else if (str == "#barista") { var imageChoice = ["./Resources/SBPSL.jpg", "./Resources/SBBEANS.jpg", "./Resources/SBGreenApron.jpg", "./Resources/SBCordusio.jpg", "./Resources/SBCoffee.png"]; } 
      
  else if (str == "#boating-director") { var imageChoice = ["./Resources/PirateWeek.jpg", "./Resources/TekoROCKS.jpg", "./Resources/WeLoveTeko.jpg", "./Resources/TekoGuards.jpg"]; } 
  else { return "<div></div>"; }

  for (var i = 0; i < imageChoice.length; i++) {
    returnString += '<div class="col col-hide Extra-Images" id="Extra-Image' + (i + 1).toString() + '" style="width: ' + 100 / imageChoice.length + '%">\
                        <div class="container-fluid" id="Extra-Image-Container' + (i + 1).toString() + '" style="height: 100%; padding: 0;">\
                          <img class="Img-Picker-Alt center-block img-fluid" src="' + imageChoice[i] + '">\
                        </div>\
                      </div>';
  }

  return (returnString);
}

function cardCarouselAdjuster(){
  var small = 
  '<div class="item active" style="padding-left: 15%; padding-right: 15%;">\
      <div class="card">\
        <img class="card-img-top" src="https://picsum.photos/309/200?image=1050" alt="Card image cap">\
          <div class="card-body">\
            <h5 class="card-title">Card title</h5>\
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>\
          </div>\
      </div>\
    </div>\
    <div class="item" style="padding-left: 15%; padding-right: 15%;">\
      <div class="card">\
        <img class="card-img-top" src="https://picsum.photos/309/200?image=1050" alt="Card image cap">\
          <div class="card-body">\
            <h5 class="card-title">Card title</h5>\
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>\
          </div>\
      </div>\
    </div>\
    <div class="item" style="padding-left: 15%; padding-right: 15%;">\
      <div class="card">\
        <img class="card-img-top" src="https://picsum.photos/309/200?image=1050" alt="Card image cap">\
          <div class="card-body">\
            <h5 class="card-title">Card title</h5>\
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>\
          </div>\
      </div>\
    </div>\
    <div class="item" style="padding-left: 15%; padding-right: 15%;">\
      <div class="card">\
        <img class="card-img-top" src="https://picsum.photos/309/200?image=1050" alt="Card image cap">\
          <div class="card-body">\
            <h5 class="card-title">Card title</h5>\
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>\
          </div>\
      </div>\
    </div>';

  var medium = 
  '<div class="item active">\
    <div class="card-deck" style="padding-left: 15%; padding-right: 15%;">\
      <div class="card">\
        <img class="card-img-top" src="https://picsum.photos/309/200?image=1050" alt="Card image cap">\
          <div class="card-body">\
            <h5 class="card-title">Card title</h5>\
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>\
          </div>\
        </div>\
        <div class="card">\
          <img class="card-img-top" src="https://picsum.photos/309/200?image=1050" alt="Card image cap">\
            <div class="card-body">\
              <h5 class="card-title">Card title</h5>\
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>\
            </div>\
        </div>\
      </div>\
    </div>\
    <div class="item">\
      <div class="card-deck" style="padding-left: 15%; padding-right: 15%;">\
        <div class="card">\
          <img class="card-img-top" src="https://picsum.photos/309/200?image=1050" alt="Card image cap">\
            <div class="card-body">\
              <h5 class="card-title">Card title</h5>\
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>\
            </div>\
          </div>\
        <div class="card">\
          <img class="card-img-top" src="https://picsum.photos/309/200?image=1041" alt="Card image cap">\
            <div class="card-body">\
              <h5 class="card-title">Card title</h5>\
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>\
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>\
            </div>\
        </div>\
      </div>\
    </div>';

  var normal = 
  '<div class="item active">\
    <div class="card-deck" style="padding-left: 10%; padding-right: 10%;">\
      <div class="card">\
        <img class="card-img-top" src="https://picsum.photos/309/200?image=1050" alt="Card image cap">\
          <div class="card-body">\
            <h5 class="card-title">Card title</h5>\
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>\
          </div>\
      </div>\
      <div class="card">\
        <img class="card-img-top" src="https://picsum.photos/309/200?image=1050" alt="Card image cap">\
          <div class="card-body">\
            <h5 class="card-title">Card title</h5>\
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>\
          </div>\
      </div>\
      <div class="card">\
        <img class="card-img-top" src="https://picsum.photos/309/200?image=1050" alt="Card image cap">\
          <div class="card-body">\
            <h5 class="card-title">Card title</h5>\
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>\
          </div>\
      </div>\
      <div class="card">\
        <img class="card-img-top" src="https://picsum.photos/309/200?image=1041" alt="Card image cap">\
          <div class="card-body">\
            <h5 class="card-title">Card title</h5>\
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>\
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>\
          </div>\
      </div>\
    </div>\
  </div>';

  if (window.outerWidth > 992) { return normal; } 
  
  else if (window.outerWidth > 576 && window.outerWidth < 991.98) { return medium; } 

  else{ return small; }
}

$(document).keydown(function(e) {
  if (keyHandling(e.keyCode)) e.preventDefault();
});
$(".button-collapse").sideNav({
  menuWidth: 280, // Default is 240
  edge: "right", // Choose the horizontal origin
  closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
});

// $(window).resize(function() {
//   console.log('window was resized!');
//   location.reload();
// });

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

// var heroIMGs = [
//   'header-sail.jpg',
//   'GOPR6868.JPG',
//   'GOPR6477.JPG',
//   'GOPR6869.JPG'
// ];
// var heroCounter = 0;
// function nextHero(){
//   heroCounter++;
//   heroCounter = heroCounter % heroIMGs.length;
//   $('.hero').css('background', 'url(assets/img/'+heroIMGs[heroCounter]+') no-repeat center top');
// }
// setInterval(nextHero,10000)

/*******************************************************************************
 *********************************** Charts ************************************
 ******************************************************************************/
/*var ctx = document.getElementById('projectsChart');
var myRadarChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                3,
                10,
                4,
            ],
            borderColor: '#eeeeee',
            backgroundColor: [
                "#FF6384",
                "#4BC0C0",
                "#FFCE56",
                //"#E7E9ED",
                //"#36A2EB"
            ],
            label: 'My dataset' // for legend
        }],
        labels: [
            "Hackathons", //red
            "Personal Projects", //green
            "Side Projects", //yellow
            //"Grey",//grey
            //"Blue"//blue
        ]
    },
    options: {
        scale: {
            reverse: false,
            ticks: {
                beginAtZero: true
            },
            height: 200,
            width: 200
        }
    }
});*/
