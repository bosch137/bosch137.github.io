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
                            <a id="eagle-scout-tab" data-toggle="tab" href="#eagle-scout" role="tab" aria-controls="eagle-scout" aria-selected="true"><img src="./Resources/Icons/BSAImage.png" style="display: block; margin: 0 auto; min-height: 10vw; min-width: 10vw; max-height: 10vw; max-width: 10vw;"></img></a>\
                        </li>\
                        <li class="nav-item" style="margin-left: auto; margin-right: auto; min-height: 10vw; min-width: 10vw; max-height: 100%; max-width: fit-content;">\
                            <a id="barista-tab" data-toggle="tab" href="#barista" role="tab" aria-controls="barista" aria-selected="false"><img src="./Resources/Icons/starbucks.png" style="display: block; margin: 0 auto; min-height: 10vw; min-width: 10vw; max-height: 10vw; max-width: 10vw;"></img></a>\
                        </li>\
                        <li class="nav-item" style="float: right; min-height: 10vw; min-width: 10vw; max-height: 100%; max-width: fit-content;">\
                            <a id="boating-director-tab" data-toggle="tab" href="#boating-director" role="tab" aria-controls="boating-director" aria-selected="false"><img src="./Resources/Icons/boating.png" style="display: block; margin: 0 auto; min-height: 10vw; min-width: 10vw; max-height: 10vw; max-width: 10vw;"></img></a>\
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
                            <a id="eagle-scout-tab" data-toggle="tab" href="#eagle-scout" role="tab" aria-controls="eagle-scout" aria-selected="true"><img src="./Resources/Icons/BSAImage.png" style="display: block; margin: 0 auto; min-height: 10vw; min-width: 10vw; max-height: 10vw; max-width: 10vw;"></img></a>\
                        </li>\
                        <li class="nav-item active" style="margin-left: auto; margin-right: auto; min-height: 10vw; min-width: 10vw; max-height: 100%; max-width: fit-content;">\
                            <a id="barista-tab" data-toggle="tab" href="#barista" role="tab" aria-controls="barista" aria-selected="false"><img src="./Resources/Icons/starbucks.png" style="display: block; margin: 0 auto; min-height: 10vw; min-width: 10vw; max-height: 10vw; max-width: 10vw;"></img></a>\
                        </li>\
                        <li class="nav-item" style="float: right; min-height: 10vw; min-width: 10vw; max-height: 100%; max-width: fit-content;">\
                            <a id="boating-director-tab" data-toggle="tab" href="#boating-director" role="tab" aria-controls="boating-director" aria-selected="false"><img src="./Resources/Icons/boating.png" style="display: block; margin: 0 auto; min-height: 10vw; min-width: 10vw; max-height: 10vw; max-width: 10vw;"></img></a>\
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
                            <a id="eagle-scout-tab" data-toggle="tab" href="#eagle-scout" role="tab" aria-controls="eagle-scout" aria-selected="true"><img src="./Resources/Icons/BSAImage.png" style="display: block; margin: 0 auto; min-height: 10vw; min-width: 10vw; max-height: 10vw; max-width: 10vw;"></img></a>\
                        </li>\
                        <li class="nav-item" style="margin-left: auto; margin-right: auto; min-height: 10vw; min-width: 10vw; max-height: 100%; max-width: fit-content;">\
                            <a id="barista-tab" data-toggle="tab" href="#barista" role="tab" aria-controls="barista" aria-selected="false"><img src="./Resources/Icons/starbucks.png" style="display: block; margin: 0 auto; min-height: 10vw; min-width: 10vw; max-height: 10vw; max-width: 10vw;"></img></a>\
                        </li>\
                        <li class="nav-item active" style="float: right; min-height: 10vw; min-width: 10vw; max-height: 100%; max-width: fit-content;">\
                            <a id="boating-director-tab" data-toggle="tab" href="#boating-director" role="tab" aria-controls="boating-director" aria-selected="false"><img src="./Resources/Icons/Icons/boating.png" style="display: block; margin: 0 auto; min-height: 10vw; min-width: 10vw; max-height: 10vw; max-width: 10vw;"></img></a>\
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

    if (str == "#eagle-scout") { var imageChoice = "./Resources/Icons/BSAImage.png"; }

    else if (str == "#barista") { var imageChoice = "./Resources/Icons/starbucks.png"; }

    else if (str == "#boating-director") { var imageChoice = "./Resources/Icons/boating.png"; }

    else { return "<div></div>"; }
    returnString = '<div class="container-fluid Images-Container" id="Image-Container">\
                    <img class="Img-Picker" src="'+ imageChoice + '">\
                  </div>';

    return (returnString);
}

function extraImagePicker(str) {
    var returnString = '';

    if (str == "#eagle-scout") { var imageChoice = ["./Resources/EagleScout/EaglePavers.jpg", "./Resources/EagleScout/EaglePaversManualLabor.jpg", "./Resources/EagleScout/EaglePaversAlignment.jpg"]; }

    else if (str == "#barista") { var imageChoice = ["./Resources/Starbucks/SBPSL.jpg", "./Resources/Starbucks/SBBEANS.jpg", "./Resources/Starbucks/SBGreenApron.jpg", "./Resources/Starbucks/SBCordusio.jpg", "./Resources/Starbucks/SBCoffee.png"]; }

    else if (str == "#boating-director") { var imageChoice = ["./Resources/Teko/PirateWeek.jpg", "./Resources/Teko/TekoROCKS.jpg", "./Resources/Teko/WeLoveTeko.jpg", "./Resources/Teko/TekoGuards.jpg"]; }
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

function cardCarouselAdjuster(version) {
    var small =
        ['<ol class="carousel-indicators hidden">\
    <li data-target="#card-carousel-' + version + '" data-slide-to="0" class="active"></li>\
    <li data-target="#card-carousel-' + version + '" data-slide-to="1"></li>\
    <li data-target="#card-carousel-' + version + '" data-slide-to="2"></li>\
    <li data-target="#card-carousel-' + version + '" data-slide-to="3"></li>\
  </ol>',
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
    </div>'];

    var medium =
        ['<ol class="carousel-indicators hidden">\
    <li data-target="#card-carousel-' + version + '" data-slide-to="0" class="active"></li>\
    <li data-target="#card-carousel-' + version + '" data-slide-to="1"></li>\
  </ol>',
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
    </div>'];

    var normal =
        ['<ol class="carousel-indicators hidden" >\
    <li data-target="#card-carousel-' + version + '" data-slide-to="0" class="active"></li>\
  </ol >',
            '<div class="item active">\
    <div class="card-deck" style="padding-left: 10%; padding-right: 10%;">\
      <div class="card">\
        <img class="card-img-top" src="https://picsum.photos/309/200?image=1050" alt="Card image cap">\
          <div class="card-body"style="height: 100%">\
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
  </div>'];

    if (window.outerWidth > 992) { return normal; }

    else if (window.outerWidth > 576 && window.outerWidth < 991.98) { return medium; }

    else { return small; }
}