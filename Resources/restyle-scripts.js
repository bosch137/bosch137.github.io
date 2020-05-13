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
    var gameImages = ["./Resources/Project Data/vgdc.jpg", "./Resources/Project Data/DanielRadcliffe.jpg", "./Resources/Project Data/SpaceBar.jpg", "./Resources/Project Data/PotionMan.jpg", document.getElementsByClassName("icon-generator")[0].href, "./Resources/Project Data/MurderousMishapEARLY.jpg", "./Resources/Project Data/SodaPopSmashEARLYPROTOTYPE.jpg", "./Resources/Project Data/SonicDrillLAST.jpg"];
    var codeImages = ["./Resources/Project Data/Fractals.jpg", "./Resources/Project Data/BusSim.jpg", "./Resources/Project Data/BattleBoats.png", "./Resources/Project Data/JavaDataStructure.png", "./Resources/Project Data/diagonalMatrixProject.jpg", "./Resources/Project Data/clocksProject.jpg", "./Resources/Project Data/GraphInterpretProject.jpg", "./Resources/Project Data/ELFProject.png"];

    var gameText = [
        ['What is Video Game Development Club?','"VGDC" is a club at the University of Minnesota all about making games!<br><br>Each month we get a new theme and make a prototype game based off our interpretation.\
        <br><br>My role for most projects was as "lead". In short I lead the group, and worked on everything. <br><br>Art, Music, Programming, Managing Pushes, etc. I was either working on it or helping the people who were.','https://vgdc.umn.edu/'],
        
        ['Untitled Rhythm<br>Shooter (Unity)', 'This was inspired by Guns Akimbo, which was an upcoming movie at the time. Some people in my group really like rhythm games, so we came up with the idea of making a pseudo-rhythm game. \
        <br><br>The twist was that the "notes" are actions. Each note makes the character perform an action like shooting, jumping, blocking, etc. It ended up as a really fun prototype, and I feel this one shows some of my potential!', 'Video Game Development Club'],
        
        ['"SpaceBar"<br>(Unity)', 'If I\'m being honest this game started as a joke. My group was joking around and the idea for a "Freddy Fish"/point and click game came up.\
        Weirdly enough we all loved this idea, and this game was the result. <br><br>What really made the project interesting was learning ways to handle a TON of interactions. Creating those systems was what made this project such a fun and rewarding learning experience.', 'Video Game Development Club'],
        
        ['"Potion Man"<br>(Unity)', 'The concept was a game about making potions to help based on symptoms. However, this game was severely hindered by a lack of leadership.\
        By the end of the project the only people left were myself and one artist. <br><br>In the remaining week we only finished dialogue, interaction, and event systems for a prototype. After this I started to use my fluid skills to lead and engage with each part of projects better.', 'Video Game Development Club'],
        
        // ['"Super Sidekick"<br>(Unity)', 'It might not seem like it, but this project was really interesting. It let the artists go wild, and I got to work/learn about making a robust dialogue system with multiple choices.\
        // Although the premise of a Dating Sim/Visual Novel about a Sidekick helping Super-heroes solve personal issues was novel, but it was a good way to learn some useful fundamentals that can apply to future projects', 'Video Game Development Club'],
        
        ['Do you have any Personal Projects?', 'I love working on my own projects too! I work on these alone, and unlike VGDC these games don\'t have to be a playable prototype or proof of concept within a month.\
        <br><br>I\'m a student first and foremost, but I\'m also a writer, musician, artist, and more. I get busy!<br><br>I\'ve been working on and off on some of these for years. Most of these are incredibly bare-bones, and are mostly done to challenge myself.', 'Current Project: Murderous Mishap'],

        ['"Murderous Mishap"<br>(Unity)', 'Inspired by retro horror games and whodunit movies, the project is a 3D Mystery/Puzzle game where you play as an ace detective. Your latest case is a mansion party gone wrong.<br><br>\
        It features three different camera styles First Person, Third Person, and a Static Camera style. Everyone might be "innocent" until proven guilty, but your job is to prove who\'s guilty. Gather clues, talk to party-goers, and crack the case to find who the true culprit(s) is...', 'Personal'],
    
        ['"Soda Pop Smash"<br>(Unity)', 'This project is less a focused concept, more of a demo of ideas. It started out as a "Super Smash Bros"-style brawler, but after a while it turned into a testing project.<br><br>\
        Full Disclosure: The project did start by customizing and editing free assets to better understand where to start. After getting the fundamentals of a brawler, it evolved to test more 3D Beat \'Em Up style gameplay. Currently it\'s more for general experimenting.', 'Personal'],

        ['"Sonic Drill"<br>(Construct 2)', 'This project was my Final for a game dev class in highschool. Of my Personal Projects, this one is the most playable. It was inspired by "Motherload", and "Factorio"\
        <br><br>The gameplay revolves around mining resources. The gameplay loop is fairly circular; mining earns money, money is used to buy upgrades for your miner, upgrading lets you mine more, etc. The biggest struggle I faced was doing complex tasks on such a rudimentary game engine.', 'Personal/Orono HS Game Dev Class']];

    var codeText = [
        ['Fractal Generator<br>(Java)', 'This project involved implementing several shape classes in Java to draw some fractals based on inputted shapes. There were three possible shapes that the program would accept, Triangles, Rectangles, and Circles.\
        <br><br>The Java program needed to draw a fractal recursively, and each of the drawing methods would draw the shape passed in at the specified location and in the specified color. Once it had finished drawing it would compute the total area of any shapes that form your fractal, and print the results.', 'CSCI 1933'],
        
        ['Bus Simulation<br>(Java)', 'For this project we were "tasked" to create a simulation and return a report to a hypothetical bus company.\
        <br><br>The simulation was achieved by creating classes to model the behavior of each element of the system as well as each activity (event) that occurs in the system. There was no overall controller, except for a main driver loop that runs queued events until time runs out.  Each element in the system models its own behavior and interactions with other elements in the simulation.', 'CSCI 1933'],
        
        ['Battle Boats<br>(Java)', 'This project involved us making "Battle Boats"... The battleship project consisted of 4 major parts that had to be built from scratch. The board, the boats, a turn system, and a debug mode.\
        <br><br>For the board, The program simulated a rectangular X×Y board using a 2-dimensional array. Boats were represented by a line of X\'s on the board (Array), For turns, the user inputs a location (x, y) to attack and if they want to use an item. Lastly for the debug it would display both boards so we could properly debug and test the game.', 'CSCI 1933'],
        
        ['Data Structure<br>Projects (Java, C)', 'I\'ve done several projects that relate to Data Structures, so for this card I will just list a few.<br><br>-HashMap (Java)<br><br>-ArrayLists (Java)<br><br>-Linked Lists (Java, C)<br><br>-Binary Trees(Java, C)\
        <br><br>These projects all either involved making and/or using these data structures for problems such as sorting, benchmarking, aggregating data, converting, etc.', 'CSCI 1933, CSCI 2021'],

        ['Optimization & Benchmarking (C)', 'The first half of this project revolved around optimizing memory access of a matrix. We were provided with algorithms to search through an matrix and calculate the diagonal sums, and the task was optimizing the algorithm to improve performance as much as possible. \
        <br><br>The other half of the project centered on timing several other algorithms and measuring their performance. We measured the performance of 4 search functions which determined whether an integer query was present in an associated data structure.', 'CSCI 2021'],
    
        ['Clocks &<br>Puzzle Box(C)', 'For this project we were tasked with writing code which would be run by a microcontroller in a digital clock. It could only use integer operations. No floating point operations.\
        My solution used bit shifting along with bitwise operations to construct the correct bit pattern for the clock display.<br><br> The other half of the project revolved around a Puzzle Box, which contained source code that reads inputs from a file. If the inputs are correct, points are awarded. If inputs are incorrect, error messages were printed.', 'CSCI 2021'],
        
        ['File Interpreter &<br>Graph Generator (C)', 'This project centered around a simple task: read integers from a file into a dynamically allocated array. The caveat to this is that the integers in the file are stored in a special format: an initial value followed by deltas or changes from the previous element.\
        This project required multiple formats to be usable, Text Integers, Binary Integers, and 4-Bit Signed Integers.<br><br>After interpretation we needed to create a simple plotting routine for the text terminal. The function displayed an array of numbers on the screen in a graph-like fashion.', 'CSCI 2021'],

        ['ELF64 Project<br>(C)', 'This project explored the file format of ELF in order to print out the binary bytes associated with functions in a file. The goal of the project was to construct a program which was able to print out the binary bytes associated with a named function, and run the function.\
        <br><br>The project required a couple of steps to do this. It had to parse the File Header to identify the positions of the Section Header Array and String Table, then search that to find .symtab , .strtab, and .text. Once we had that we stored some data and ran the function.', 'CSCI 2021']];

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

    for(i = 0; i < cardText.length; i++){
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
        if (cardImages[i] == document.getElementsByClassName("icon-generator")[0].href || cardImages[i] == "./Resources/Project Data/vgdc.jpg"){
            small[1] += '<div class="card"><img class="card-img-top img-picker" src="'+ cardImages[i] +'" alt="Card image cap"><div class="card-body">';
            small[1] += '<h5 class="text-center card-custom-title">' + cardText[i][0] + '</h5> <p class="card-text">' + cardText[i][1] + '</p><p class="card-text"><small class="text-muted">' + cardText[i][2]+'</small></p></div></div></div>';

            medium[1] += '<div class="card"><img class="card-img-top img-picker" src="' + cardImages[i] +'" alt="Card image cap"><div class="card-body">';
            medium[1] += '<h5 class="text-center card-custom-title">' + cardText[i][0] + '</h5> <p class="card-text">' + cardText[i][1] + '</p><p class="card-text"><small class="text-muted">' + cardText[i][2] + '</small></p></div></div>';

            normal[1] += '<div class="card"><img class="card-img-top img-picker" src="' + cardImages[i] +'" alt="Card image cap"><div class="card-body">';
            normal[1] += '<h5 class="text-center card-custom-title">' + cardText[i][0] + '</h5> <p class="card-text">' + cardText[i][1] + '</p><p class="card-text"><small class="text-muted">' + cardText[i][2] + '</small></p></div></div>';
        }

        else{
            small[1] += '<div class="card"><img class="card-img-top" src="' + cardImages[i] + '" alt="Card image cap"><div class="card-body">';
            small[1] += '<h5 class="text-center card-custom-title">' + cardText[i][0] + '</h5> <p class="card-text">' + cardText[i][1] + '</p><p class="card-text"><small class="text-muted">' + cardText[i][2] + '</small></p></div></div></div>';

            medium[1] += '<div class="card"><img class="card-img-top" src="' + cardImages[i] + '" alt="Card image cap"><div class="card-body">';
            medium[1] += '<h5 class="text-center card-custom-title">' + cardText[i][0] + '</h5> <p class="card-text">' + cardText[i][1] + '</p><p class="card-text"><small class="text-muted">' + cardText[i][2] + '</small></p></div></div>';

            normal[1] += '<div class="card"><img class="card-img-top" src="' + cardImages[i] + '" alt="Card image cap"><div class="card-body">';
            normal[1] += '<h5 class="text-center card-custom-title">' + cardText[i][0] + '</h5> <p class="card-text">' + cardText[i][1] + '</p><p class="card-text"><small class="text-muted">' + cardText[i][2] + '</small></p></div></div>';

        }

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

    if (window.outerWidth > 1550) { 
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

    else if (window.outerWidth > 576 && window.outerWidth < 1549.98) { return medium; }

    else { return small; }
}