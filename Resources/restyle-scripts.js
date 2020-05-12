function divChanger(selected) {
    var tabNames = ['eagle-scout', 'boating-director', 'tri-m', 'barista',];
    var tabWords = ['Eagle Scout', 'Boating Director', 'Tri-M', 'Barista',];
    var tabImages = ['BSAImage', 'boating', 'TriM-LogoBW', 'starbucks',];
    longForm = String(
        '<div class="col-md-3 nav-tab-helper" id="NavTabs">\
                    <ul class="nav nav-pills nav-stacked" id="myTab" role="tablist">');
        for(var i = 0; i< tabNames.length; i++){

            if (i == selected) { longForm += '<li class="nav-item active" '; }
            else { longForm += '<li class="nav-item" '; }

            longForm += 'style="padding-top: 6%; padding-bottom: 6%; font-size: 1.25rem;">\
                        <a class="nav-link" id="' + tabNames[i] + '-tab" data-toggle="tab" href="#' + tabNames[i] + '" role="tab" aria-controls="' + tabNames[i] + '-tab" ';

            if (i == selected) { longForm += 'aria-selected="true">'; }
            else { longForm += 'aria-selected="false">'; } 
            longForm += tabWords[i] + '</a></li>';
        }
    longForm += '</ul></div>';

    shortForm = String(
        '<div style="padding-right: 5vw; padding-left: 5vw; min-width: 100%" id="NavTabs">\
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
    if (window.outerWidth > 1380) {
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

    if (str == "#eagle-scout") { var imageChoice = ["./Resources/EagleScout/EaglePavers.jpg", "./Resources/EagleScout/EagleCourtOfHonor.jpg", "./Resources/EagleScout/EaglePaversAlignment.jpg"]; }

    else if (str == "#barista") { var imageChoice = ["./Resources/Starbucks/SBPSL.jpg", "./Resources/Starbucks/SBBEANS.jpg", "./Resources/Starbucks/SBGreenApron.jpg", "./Resources/Starbucks/SBCordusio.jpg", "./Resources/Starbucks/SBCoffee.png"]; }

    else if (str == "#boating-director") { var imageChoice = ["./Resources/Teko/PirateWeek.jpg", "./Resources/Teko/TekoTotallyROCKS.jpg", "./Resources/Teko/WeLOVETEKO.jpg", "./Resources/Teko/TekoGuards.jpg"]; }

    else if (str == "#tri-m") { var imageChoice = ["./Resources/Tri-M/ChicagoPic.jpg", "./Resources/Tri-M/SheetMusic.jpg", "./Resources/Tri-M/MarchingPhoto.jpg"]; }

    else { return "<div></div>"; }

    for (var i = 0; i < imageChoice.length; i++) {
        returnString += '<div class="col extra-images" id="Extra-Image' + (i + 1).toString() + '" style="width: ' + 100 / imageChoice.length + '%">\
                        <div class="container-fluid" id="Extra-Image-Container' + (i + 1).toString() + '" style="height: 100%; padding: 0;">\
                          <img class="img-picker-alt center-block img-fluid" loading="lazy" src="' + imageChoice[i] + '">\
                        </div>\
                      </div>';
    }

    return (returnString);
}

function cardCarouselAdjuster(version) {
    var gameImages = ["./Resources/Project Data/vgdc.jpg", "./Resources/Project Data/DanielRadcliffe.jpg", "./Resources/Project Data/SpaceBar.jpg", "./Resources/Project Data/PotionMan.jpg", "https://picsum.photos/309/200?image=1041"];
    var codeImages = ["./Resources/Project Data/Fractals.jpg", "./Resources/Project Data/BusSim.jpg", "./Resources/Project Data/JavaDataStructure.png", "./Resources/Project Data/CCode.jpeg"];

    var gameText = [['What is Video Game Development Club?','"VGDC" is a club at the University of Minnesota all about making games!<br><br>Each month we get a new theme and make a prototype game based off our interpretation.\
     <br><br>My role for most projects was as "lead". In short I lead the group, and worked on everything. <br><br>Art, Music, Programming, Managing Pushes, etc. I was either working on it or helping the people who were.','https://vgdc.umn.edu/'],
        ['Untitled Rhythm Shooter (Unity)', 'This was inspired by Guns Akimbo, which was an upcoming movie at the time. A some people in my group really like rhythm games, so we came up with the idea of making a pseudo-rhythm game. \
        However, the twist was that the "notes" are actions. Each note makes the character perform an action like shooting, jumping, blocking, etc. It ended up as a really fun prototype!', 'Video Game Development Club'],
        
        ['"SpaceBar" (Unity)', 'If I\'m being honest this game started as a joke. My group was joking around and the idea for a "Freddy Fish"/point and click game came up.\
        Weirdly enough we all loved this idea, and this game was the result. What really made the project interesting was learning ways to handle a TON of interactions. Creating those systems was what made this project such a fun and rewarding learning experience.', 'Video Game Development Club'],
        
        ['"Potion Man" (Unity)', 'The concept was a game about making potions to help based on symptoms. However, this game was severely hindered by a lack of leadership.\
        By the end of the project the only people left were myself and one artist. In the remaining week we only finished dialogue, interaction, and event systems for a prototype. After this I started to use my fluid skills to lead and engage with each part of projects better.', 'Video Game Development Club'],
        
        ['"Murderous Mishap" (Unity)', 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', 'Personal']];

    var codeText = [
        ['Fractal Generator (Java)', 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', 'CSCI 1933'],
        ['Bus Simulation (Java)', 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', 'CSCI 1933'],
        ['Data Structure Projects (Java, C)', 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', 'CSCI 1933, CSCI 2021'],
        ['File Interpreter (C)', 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', 'CSCI 2021']];

    var cardText;
    var cardImages
    if(version == "games"){
        cardText = gameText;
        cardImages = gameImages;
    }
    if(version == "code"){
        cardText = codeText;
        cardImages = codeImages;
    }

    var small = ['<ol class="carousel-indicators hidden">',''];

    var medium = ['<ol class="carousel-indicators hidden">',''];

    var normal = ['<ol class="carousel-indicators hidden">',''];

    for(i = 0; i < cardImages.length; i++){
        if(i == 0){
            small[0] += '<li data-target="#card-carousel-' + version + '" data-slide-to="0" class="active"></li>';
            small[1] += '<div class="item active" style="padding-left: 15%; padding-right: 15%; padding-top: 1%;">';

            medium[0] += '<li data-target="#card-carousel-' + version + '" data-slide-to="0" class="active"></li>';
            medium[1] += '<div class="item active"><div class="card-deck" style="padding-left: 5%; padding-right: 5%; padding-top: 1%;">';

            normal[0] += '<li data-target="#card-carousel-' + version + '" data-slide-to="0" class="active"></li>';
            normal[1] += '<div class="item active"><div class="card-deck" style="padding-left: 5%; padding-right: 5%; padding-top: 1%;">';
        }

        else {
            small[0] += '<li data-target="#card-carousel-' + version + '" data-slide-to="' + i + '"></li>';
            small[1] += '<div class="item" style="padding-left: 15%; padding-right: 15%; padding-top: 1%;">';
        }

        if (i % 2 == 0 && i != 0) {
            medium[0] += '<li data-target="#card-carousel-' + version + '" data-slide-to="' + i + '"></li>';
            medium[1] += '</div></div><div class="item"><div class="card-deck" style="padding-left: 5%; padding-right: 5%; padding-top: 1%;">';
        }

        if (i % 4 == 0 && i != 0) {
            normal[0] += '<li data-target="#card-carousel-' + version + '" data-slide-to="' + i + '"></li>';
            normal[1] += '</div></div><div class="item"><div class="card-deck" style="padding-left: 5%; padding-right: 5%; padding-top: 1%;">';
        }

        small[1] += '<div class="card"><img class="card-img-top fourByThree" src="'+ cardImages[i] +'" alt="Card image cap"><div class="card-body">';
        small[1] += '<h5 class="text-center card-custom-title">' + cardText[i][0] + '</h5> <p class="card-text">' + cardText[i][1] + '</p><p class="card-text"><small class="text-muted">' + cardText[i][2]+'</small></p></div></div></div>';

        medium[1] += '<div class="card"><img class="card-img-top fourByThree" src="' + cardImages[i] +'" alt="Card image cap"><div class="card-body">';
        medium[1] += '<h5 class="text-center card-custom-title">' + cardText[i][0] + '</h5> <p class="card-text">' + cardText[i][1] + '</p><p class="card-text"><small class="text-muted">' + cardText[i][2] + '</small></p></div></div>';

        normal[1] += '<div class="card"><img class="card-img-top fourByThree" src="' + cardImages[i] +'" alt="Card image cap"><div class="card-body">';
        normal[1] += '<h5 class="text-center card-custom-title">' + cardText[i][0] + '</h5> <p class="card-text">' + cardText[i][1] + '</p><p class="card-text"><small class="text-muted">' + cardText[i][2] + '</small></p></div></div>';


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

    if (window.outerWidth > 1100) { 
        if (cardText.length > 4) {
            var all = document.getElementsByClassName('showtime');
            for (var i = 0; i < all.length; i++) {
                if (all[i].getAttribute("href") == "#card-carousel-" + version) {
                    all[i].style.visibility = "visible";
                }
            }
        }
        return normal; 
    }

    else if (window.outerWidth > 576 && window.outerWidth < 1099.98) { return medium; }

    else { return small; }
}