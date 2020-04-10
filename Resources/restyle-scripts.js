function divChanger(selected) {
    var tabNames = ['eagle-scout', 'boating-director', 'tri-m', 'barista',];
    var tabWords = ['Eagle Scout', 'Boating Director', 'Tri-M', 'Barista',];
    var tabImages = ['BSAImage', 'boating', 'TriM-LogoBW', 'starbucks',];
    longForm = String(
        '<div class="col-md-3" id="NavTabs" style="max-width: fit-content; min-height: fit-content; background: white; padding: 10px; margin-right: 25px; border-radius: 9px;">\
                    <ul class="nav nav-pills nav-stacked" id="myTab" role="tablist">');
        for(var i = 0; i< tabNames.length; i++){

            if (i == selected) { longForm += '<li class="nav-item active" '; }
            else { longForm += '<li class="nav-item" '; }

            longForm += 'style="padding-top: 6%; padding-bottom: 6%; font-size: 20px;">\
                        <a class="nav-link" id="' + tabNames[i] + '-tab" data-toggle="tab" href="#' + tabNames[i] + '" role="tab" aria-controls="' + tabNames[i] + '-tab" ';

            if (i == selected) { longForm += 'aria-selected="true">'; }
            else { longForm += 'aria-selected="false">'; } 
            longForm += tabWords[i] + '</a></li>';
        }
    longForm += '</ul></div>';

    shortForm = String(
        '<div style="padding-right: 5vw; padding-left: 5vw; min-width: 100%">\
                    <ul class="nav nav-tabs" id="myTab" role="tablist" style="display: flex; align-items: center; justify-content: center;">');
        for (var j = 0; j < tabNames.length; j++) {
            if (j == selected) { shortForm += '<li class="nav-item active" '; }
            else{ shortForm += '<li class="nav-item" '; }

            if (j == 0) {
                shortForm += 'style="float: left; min-height: 10vw; min-width: 10vw; max-height: 100%; max-width: fit-content;">\
                                <a class="nav-link" id="' + tabNames[j] + '-tab" data-toggle="tab" href="#' + tabNames[j] + '" role="tab" aria-controls="' + tabNames[i] + '-tab" aria-selected="false"><img src="./Resources/Icons/' + tabImages[j] + '.png" style="display: block; margin: 0 auto; min-height: 10vw; min-width: 10vw; max-height: 10vw; max-width: 10vw;"></img></a></li>';
            }
            else if (j == tabNames.length - 1) {
                shortForm += 'style="float: right; min-height: 10vw; min-width: 10vw; max-height: 100%; max-width: fit-content;">\
                                <a class="nav-link" id="' + tabNames[j] + '-tab" data-toggle="tab" href="#' + tabNames[j] + '" role="tab" aria-controls="' + tabNames[j] + '-tab" aria-selected="false"><img src="./Resources/Icons/' + tabImages[j] + '.png" style="display: block; margin: 0 auto; min-height: 10vw; min-width: 10vw; max-height: 10vw; max-width: 10vw;"></img></a></li>';
            }
            else {
                shortForm += 'style="margin-left: auto; margin-right: auto; min-height: 10vw; min-width: 10vw; max-height: 100%; max-width: fit-content;">\
                                <a class="nav-link" id="' + tabNames[j] + '-tab" data-toggle="tab" href="#' + tabNames[j] + '" role="tab" aria-controls="' + tabNames[j] + '-tab" aria-selected="false"><img src="./Resources/Icons/' + tabImages[j] + '.png" style="display: block; margin: 0 auto; min-height: 10vw; min-width: 10vw; max-height: 10vw; max-width: 10vw;"></img></a></li>';
            }
        }
    shortForm += '</ul></div>';
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

    else if (str == "#tri-m") { var imageChoice = "./Resources/Icons/Tri-M-Logo.png"; }

    else { return "<div></div>"; }
    returnString = '<div class="container-fluid images-container" id="Image-Container">\
                    <img class="img-picker" src="'+ imageChoice + '">\
                  </div>';

    return (returnString);
}

function extraImagePicker(str) {
    var returnString = '';

    if (str == "#eagle-scout") { var imageChoice = ["./Resources/EagleScout/EaglePavers.jpg", "./Resources/EagleScout/EaglePaversManualLabor.jpg", "./Resources/EagleScout/EaglePaversAlignment.jpg"]; }

    else if (str == "#barista") { var imageChoice = ["./Resources/Starbucks/SBPSL.jpg", "./Resources/Starbucks/SBBEANS.jpg", "./Resources/Starbucks/SBGreenApron.jpg", "./Resources/Starbucks/SBCordusio.jpg", "./Resources/Starbucks/SBCoffee.png"]; }

    else if (str == "#boating-director") { var imageChoice = ["./Resources/Teko/PirateWeek.jpg", "./Resources/Teko/TekoROCKS.jpg", "./Resources/Teko/WeLoveTeko.jpg", "./Resources/Teko/TekoGuards.jpg"]; }

    else if (str == "#tri-m") { var imageChoice = ["./Resources/Teko/TekoROCKS.jpg", "./Resources/Teko/PirateWeek.jpg", "./Resources/Teko/WeLoveTeko.jpg", "./Resources/Teko/TekoGuards.jpg"]; }

    else { return "<div></div>"; }

    for (var i = 0; i < imageChoice.length; i++) {
        returnString += '<div class="col extra-images" id="Extra-Image' + (i + 1).toString() + '" style="width: ' + 100 / imageChoice.length + '%">\
                        <div class="container-fluid" id="Extra-Image-Container' + (i + 1).toString() + '" style="height: 100%; padding: 0;">\
                          <img class="img-picker-alt center-block img-fluid" src="' + imageChoice[i] + '">\
                        </div>\
                      </div>';
    }

    return (returnString);
}

function cardCarouselAdjuster(version,) {
    var cardData = ["https://picsum.photos/309/200?image=1041", "https://picsum.photos/309/200?image=1050", "https://picsum.photos/309/200?image=1050", "https://picsum.photos/309/200?image=1041"];
    var cardText = [
    ['Card title', 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', 'Last updated 3 mins ago'], 
    ['Card title', 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', 'Last updated 3 mins ago'],
    ['Card title', 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', 'Last updated 3 mins ago'],
    ['Card title', 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', 'Last updated 3 mins ago']];

    var small = ['<ol class="carousel-indicators hidden">',''];

    var medium = ['<ol class="carousel-indicators hidden">',''];

    var normal = ['<ol class="carousel-indicators hidden">',''];

    for(i = 0; i < cardData.length; i++){
        if(i == 0){
            small[0] += '<li data-target="#card-carousel-' + version + '" data-slide-to="0" class="active"></li>';
            small[1] += '<div class="item active" style="padding-left: 15%; padding-right: 15%;">';

            medium[0] += '<li data-target="#card-carousel-' + version + '" data-slide-to="0" class="active"></li>';
            medium[1] += '<div class="item active"><div class="card-deck" style="padding-left: 10%; padding-right: 10%;">';

            normal[0] += '<li data-target="#card-carousel-' + version + '" data-slide-to="0" class="active"></li>';
            normal[1] += '<div class="item active"><div class="card-deck" style="padding-left: 10%; padding-right: 10%;">';
        }

        else {
            small[0] += '<li data-target="#card-carousel-' + version + '" data-slide-to="' + i + '"></li>';
            small[1] += '<div class="item" style="padding-left: 15%; padding-right: 15%;">';
        }

        if (i % 2 == 0 && i != 0) {
            medium[0] += '<li data-target="#card-carousel-' + version + '" data-slide-to="' + i + '"></li>';
            medium[1] += '</div></div><div class="item"><div class="card-deck" style="padding-left: 10%; padding-right: 10%;">';
        }

        if (i % 4 == 0 && i != 0) {
            normal[0] += '<li data-target="#card-carousel-' + version + '" data-slide-to="' + i + '"></li>';
            normal[1] += '</div></div><div class="item"><div class="card-deck" style="padding-left: 10%; padding-right: 10%;">';
        }

        small[1] += '<div class="card"><img class="card-img-top" src="'+ cardData[i] +'" alt="Card image cap"><div class="card-body">';
        small[1] += '<h5 class="card-title">' + cardText[i][0] + '</h5> <p class="card-text">' + cardText[i][1] + '</p><p class="card-text"><small class="text-muted">' + cardText[i][2]+'</small></p></div></div></div>';

        medium[1] += '<div class="card"><img class="card-img-top" src="' + cardData[i] +'" alt="Card image cap"><div class="card-body">';
        medium[1] += '<h5 class="card-title">' + cardText[i][0] + '</h5> <p class="card-text">' + cardText[i][1] + '</p><p class="card-text"><small class="text-muted">' + cardText[i][2] + '</small></p></div></div>';

        normal[1] += '<div class="card"><img class="card-img-top" src="' + cardData[i] +'" alt="Card image cap"><div class="card-body">';
        normal[1] += '<h5 class="card-title">' + cardText[i][0] + '</h5> <p class="card-text">' + cardText[i][1] + '</p><p class="card-text"><small class="text-muted">' + cardText[i][2] + '</small></p></div></div>';


        if (i + 1 % 2 == 0 && i != 0) {
            medium[1] += '</div></div>';
        }

        if (i + 1 % 4 == 0 && i != 0) {
            normal[1] += '</div></div>';
        }
    }

    small[0] += '</ol>';
    medium[0] += '</ol>';
    normal[0] += '</ol>';

    if (window.outerWidth > 992) { return normal; }

    else if (window.outerWidth > 576 && window.outerWidth < 991.98) { return medium; }

    else { return small; }
}