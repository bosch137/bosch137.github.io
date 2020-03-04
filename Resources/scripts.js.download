$(document).ready(function() {
    $('.parallax').parallax();
});

//set the height of the hero image to the height of the browser.
$('.hero').height(window.innerHeight);

$('.full-height').css('min-height', window.innerHeight + 25);

$(window).resize(function() {
    console.log('window was resized');
    //set the height of the hero image to the height of the browser.
    $('.hero').height(window.innerHeight);

    $('.full-height').css('min-height', window.innerHeight + 25);
});

(function() {
    var arr = $('.anchor_title');
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        var e = $(arr[i]);
        e.data('offset', 'title');
    }
})();

Materialize.scrollFire([{
    selector: '.hero-footer',
    offset: 400,
    callback: function(el) {
        if (window.ga && ga.create)
            ga('send', 'pageview', 'assets/footer');
        $(".typed-footer").typed({
            //And I love
            strings: [
                'and thats about it...^1000<br><br>•&nbsp;<a target="_blank" href="assets/resume.pdf">Resume</a><br>•&nbsp;<a onclick="showEmail();">Email</a><br>•&nbsp;<a target="_blank" href="https://github.com/davidboschwitz">GitHub</a><br>•&nbsp;<a target="_blank" href="https://linkedin.com/in/davidboschwitz">LinkedIn</a>'
            ],
            loop: false,
            contentType: 'html',
            typeSpeed: 60,
            // call when done callback function
            callback: function() {
                $('.typed-footer').parent().children('.typed-cursor').delay(1500).fadeOut('slow');
            },
        });
    }
}]);

//fade in from the preloader with a little delay
$(window).on("load", function() {
    // $('.preloader-background').delay(1500).fadeOut('slow');

    $('#fire1').delay(3000).fadeIn('slow');
    setTimeout(function() {
        if (window.innerWidth < 800)
            Materialize.toast('My site looks better on a maximized desktop browser', 15000);

        Materialize.toast('Use the arrows to navigate the page', 5000);

        $('.collapsible-body').css('display', 'block');
        $('body').addClass('loaded');

        var customTypedInput = [{
            string: "And I love Programming.",
            stopNum: 5,
            backDelay: undefined
        }, {
            string: "And I love Creative Problem Solving.",
            stopNum: 5,
            backDelay: undefined
        }, {
            string: "And I love being on Lake Minnetonka, MN.",
            stopNum: 5,
            backDelay: undefined
        }, {
            string: "And I'm passionate about Learning.",
            stopNum: 24,
            backDelay: undefined
        }, {
            string: "And I'm passionate about Technology.",
            stopNum: 5,
            backDelay: undefined
        }, {
            string: "And I love doodling.",
            stopNum: 5,
            backDelay: undefined
        }, {
            string: "And I like Radiohead.",
            stopNum: 5,
            backDelay: undefined
        }, {
            string: "And I like making and playing Games.",
            stopNum: 5,
            backDelay: undefined
        }, {
            string: "And I enjoy playing Guitar.",
            stopNum: 19,
            backDelay: 50
        }, {
            string: "And I enjoy playing Piano.",
            stopNum: 19,
            backDelay: 50
        }, {
            string: "And I enjoy playing Drumset.",
            stopNum: 19,
            backDelay: 50
        }, {
            string: "And I enjoy playing...",
            stopNum: 5,
            backDelay: 50
        }, {
            string: "And I LOVE all things Music.",
            stopNum: 5,
            backDelay: undefined
        }, {
            string: "And I love a Challenge.",
            stopNum: 5,
            backDelay: undefined
        }, {
            string: "And I never make a mestake.",
            stopNum: 20,
            backDelay: 50
        }, {
            string: "And I never make a mistake.",
            stopNum: 0,
            backDelay: undefined
        }, {
            string: "And I am a Sophomore at the University of Minnesota, studying Software Engineering and Creative Design",
            stopNum: 5,
            backDelay: 0
        }];


        setTimeout(function() {
            $(function() {
                $(".typed").typed({
                    //And I love
                    david: customTypedInput,
                    typeSpeed: 70,
                    backDelay: 700,
                    loop: false,
                    loopCount: 1,
                });
            });
        }, 1000);
    }, 1000);
    //$('body').delay(3000).addClass('loaded');
    // $('.preloader-wrapper')
    // 	.delay(1500)
    // 	.fadeOut();
});

var anchors = $('.anchor');

function getAnchorOffset(updown) {
    //updown = 'up' || 'down'
    var posY = window.scrollY;
    var rtn = posY; //don't go anywhere unless this value is changed
    var delta = document.body.scrollHeight; // height of the page

    var len = anchors.length;
    for (var i = 0; i < len; i++) {
        var e = $(anchors[i]);
        var top = e.offset().top + ((e.data('offset') == 'title' ? -window.innerHeight + 118 : e.data('offset')) || 0);

        if (Math.abs(top - posY) < 20)
            continue;

        if (updown == 'up') {
            //console.log(posY - top, delta);
            if (posY - top < delta && posY - top > 5) {
                rtn = top;
                delta = posY - top;
            }
        }

        if (updown == 'down') {
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
  if(!keyhintshown){
    keyhintshown = true;
    if(window.innerWidth > 601)
    Materialize.toast($('<span>Type <kbd>?</kbd> for some hints</span>'),5000);
  }
    //if(animating)
    //return false;
    if (keyCode == 40) {
        animating = true;
        console.log('keydown');
        $('body, html').animate({
            scrollTop: getAnchorOffset('down')
        }, {
            duration: scrollSpeed,
            queue: false
        }, 'easeInOutCubic').promise().done(function(readyForNextAnim) {});
        // scrollSpeed -= 500;
        // if(scrollSpeed < 0)
        //   scrollSpeed = 0;
        return true;
    }
    if (keyCode == 38) {
        animating = true;
        console.log('keyup');
        $('body, html').animate({
            scrollTop: getAnchorOffset('up')
        }, {
            duration: scrollSpeed,
            queue: false
        }, 'easeInOutCubic');
        // scrollSpeed -= 500;
        // if(scrollSpeed < 0)
        //   scrollSpeed = 0;
        return true;
    }
    if(keyCode == 37){
      $('body, html').animate({
          scrollTop: (window.scrollY - 300 > 0 ? window.scrollY - 300 : 0)
      }, {
          duration: scrollSpeed,
          queue: false
      }, 'easeInOutCubic');
      return true;
    }
    if(keyCode == 39){
      $('body, html').animate({
          scrollTop: (window.scrollY + 300)
      }, {
          duration: scrollSpeed,
          queue: false
      }, 'easeInOutCubic');
      return true;
    }
    if (keyCode == 77) {
        $('.button-collapse').sideNav('show');
        return true;
    }
    if (keyCode == 191) {
        if ($('#shortcuts-modal').css('display') == 'none' || $('#shortcuts-modal').css('bottom').startsWith('-'))
            $('#shortcuts-modal').openModal();
        else
            $('#shortcuts-modal').closeModal();
    }
    console.log(keyCode);
    return false;
}
var shortcuts_modal = false;

function goToID(id) {
    var e = $(id);
    $('body, html').animate({
        scrollTop: e.offset().top + (e.data('offset') || 0)
    }, {
        duration: scrollSpeed,
        queue: false
    }, 'easeInOutCubic');
}
// function refreshSpeed(){
//   if(scrollSpeed < 1000){
//     scrollSpeed += 300;
//   } else {
//     scrollSpeed = 1000;
//   }
// }
// setInterval(refreshSpeed, 500);

$(document).keydown(function(e) {
    if (keyHandling(e.keyCode))
        e.preventDefault();
});
$('.button-collapse').sideNav({
    menuWidth: 280, // Default is 240
    edge: 'right', // Choose the horizontal origin
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
});

// $(window).resize(function() {
//   console.log('window was resized!');
//   location.reload();
// });

function showEmail() {
    if (window.ga && ga.create)
        ga('send', 'pageview', 'assets/email');
    UnCryptMailto('nbjmup;ebwjeAcptdixju{/nf');
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
    if(prompt('Here it is! Click "Ok" to open in your email.', r.substring(7)));
      return window.location.href = r;
    return false;
}

function linkTo_UnCryptMailto(s) {
    location.href = UnCryptMailto(s);
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
