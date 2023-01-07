function divChanger(selected) {
    // var tabNames = ['eagle-scout', 'boating-director', 'tri-m', 'barista',];
    // var tabWords = ['Eagle Scout', 'Boating Director', 'Tri-M', 'Barista',];
    // var tabImages = ['BSAImage', 'boating', 'TriM-LogoBW', 'starbucks',];
    var tabNames = ['hangar-13', 'rubyshark', 'eagle-scout', 'boating-director', 'tri-m',];
    var tabWords = ['Hangar 13', 'Rubyshark Games', 'Eagle Scout', 'Boating Director', 'Tri-M',];
    var tabImages = ['H13Logo', 'RSLogo','BSAImage', 'boating', 'TriM-Logo',];
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
        '<div style="padding-right: 5vw; padding-left: 5vw; min-width: 100%;" id="NavTabs">\
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

    if (str == "#hangar-13") { var imageChoice = "./Resources/Icons/H13Logo.png"; }

    else if (str == "#rubyshark") { var imageChoice = "./Resources/Icons/RSLogo.png"; }

    else if (str == "#eagle-scout") { var imageChoice = "./Resources/Icons/BSAImage.png"; }

    // else if (str == "#barista") { var imageChoice = "./Resources/Icons/starbucks.png"; }

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

    if (str == "#hangar-13") { var imageChoice = ["./Resources/Hangar13/Mafia.jpg", "./Resources/Hangar13/Confidential.png", "./Resources/Hangar13/TFTBL.jpg"]; }

    else if (str == "#rubyshark") { var imageChoice = ["./Resources/Rubyshark/OrvilleShooting.jpg", "./Resources/Rubyshark/CheckaLook.jpg", "./Resources/Rubyshark/LevelConcept.png"]; }

    else if (str == "#eagle-scout") { var imageChoice = ["./Resources/EagleScout/EaglePavers.jpg", "./Resources/EagleScout/EagleCourtOfHonor.jpg", "./Resources/EagleScout/EaglePaversAlignment.jpg"]; }

    // else if (str == "#barista") { var imageChoice = ["./Resources/Starbucks/SBPSL.jpg", "./Resources/Starbucks/SBBEANS.jpg", "./Resources/Starbucks/SBGreenApron.jpg", "./Resources/Starbucks/SBCordusio.jpg", "./Resources/Starbucks/SBCoffee.png"]; }

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
    var gameImages = ["./Resources/Project Data/vgdc.jpg", "./Resources/Project Data/HighspeedHominids.jpg", "./Resources/Project Data/Remnants.png", "./Resources/Project Data/DystopianDefiers.png", "./Resources/Project Data/DanielRadcliffe.jpg", "./Resources/Project Data/SpaceBar.jpg", "./Resources/Project Data/PotionMan.jpg", "./Resources/Project Data/SodaPopSmashEARLYPROTOTYPE.jpg", document.getElementsByClassName("icon-generator")[0].href, "./Resources/Project Data/MurderousMishapEARLY.jpg", "./Resources/Project Data/MelodyMagicalDreamCourse.jpg", "./Resources/Project Data/SonicDrillLAST.jpg"];
    var codeImages = ["./Resources/Project Data/ImpossibleInc.jpg", "./Resources/Project Data/PlatformingUnderPressure.jpg", "./Resources/Project Data/ShopkeepSim.jpg", "./Resources/Project Data/VRInteractions.jpg", "./Resources/Project Data/ClothSim.jpg", "./Resources/Project Data/Seafaring.jpg", "./Resources/Project Data/SoYouThinkAntsCanDance.jpg", "./Resources/Project Data/CarSoccer.jpg", "./Resources/Project Data/TextRain.jpg", "./Resources/Project Data/Fractals.jpg", "./Resources/Project Data/BusSim.jpg", "./Resources/Project Data/BattleBoats.png", "./Resources/Project Data/JavaDataStructure.png", "./Resources/Project Data/diagonalMatrixProject.jpg", "./Resources/Project Data/clocksProject.jpg", "./Resources/Project Data/GraphInterpretProject.jpg", "./Resources/Project Data/ELFProject.png"];

    var gameText = [
        ['What is Video Game Development Club?','"VGDC" is a club at the University of Minnesota all about making games!<br><br>Each semester, we get 3 new themes and have to try to make a game based on our interpretation.\
        <br><br>I was Lead for most projects. I led the group, worked on anything, and supported everyone.<br><br>Art, Music, Programming, Managing Pushes, etc. I was either working on it or helping the people who were.', '<u><a href=https://vgdc.umn.edu/games/ target="_blank">VGDC Website</a></u>'],

        ['High-Speed Hominids', 'A really ambitious VGDC project. The themes for this game were "Escape and Unconventional Pets". The game is a multiplayer \'Shmoover\' (movement-shooter), and I replicated the Source Engine\'s movement and physics extremely closely.\
        <br><br>Up to 4 players \"Ape Out\" in online or splitscreen multiplayer to escape first and with the highest score. The Gorilla who shmooves the best and breaks out first wins!', '<a class="btn btn-lg btn-custom btn-block" style="font-size:1.5em; padding-top: 0.313rem; font-weight: bold;" href="https://boschybee.itch.io/" role="button" target="_blank">Coming Soon!</a><br>Video Game Development Club (Coming Soon!)'],

        ['Remnants', 'Probably one of the most complete VGDC projects to date. The themes for this game were \"Unconventional Weapons, Copy, and Can\'t Stop/No Stopping\". Inspired by everything from Mega Man to Bloodborne, this was a challenging project!\
        <br><br>While I could explain all the mechanics like the Rally system, boss items, and the Remnant mechanic, why not give the game a shot and discover it all yourself!', '<a class="btn btn-lg btn-custom btn-block" style="font-size:1.5em; padding-top: 0.313rem; font-weight: bold;" href="https://boschybee.itch.io/remnants" role="button" target="_blank">Play Remnants</a><br>Video Game Development Club (Released)'],

        ['Dystopian Defiers', 'One of the more recent 3D VGDC projects, this is an incredibly unique 3D Bullet Hell with a special twist on money and health mechanics. Your Life is Currency, so how you spend on upgrades matters.\
        <br><br> I ended up in a fairly managerial role, but still created systems related to difficulty scaling, and player/time progression. The game is a really interesting proof of concept, so please check it out!', '<a class="btn btn-lg btn-custom btn-block" style="font-size:1.5em; padding-top: 0.313rem; font-weight: bold;" href="https://boschybee.itch.io/dystopian-defiers" role="button" target="_blank">Play Dystopian Defiers</a><br>Video Game Development Club (Released)'],
        
        ['Untitled Rhythm<br>Shooter', 'This was inspired by Guns Akimbo, which was an upcoming movie at the time. Some people in my group really like rhythm games, so we came up with the idea of making a pseudo-rhythm game. \
        <br><br>The twist was that the "notes" are actions. Each note makes the character perform an action like shooting, jumping, blocking, etc. It ended up as a really fun prototype, but since it was made in a month it is a bit too janky to release.', 'Video Game Development Club (Playable)'],
        
        ['"SpaceBar"<br><br>', 'If I\'m being honest, this game started as a joke. My group was joking around, and the idea for a "Freddy Fish"/point and click game came up.\
        Weirdly enough, we all loved this idea, and this game was the result. <br><br>What really made the project interesting was learning ways to handle a TON of interactions. Creating those systems was what made this project such a fun and rewarding learning experience.', 'Video Game Development Club (Prototype)'],
        
        ['"Potion Man"<br><br>', 'The concept was a game about making potions to help based on symptoms. However, this game was severely hindered by a lack of leadership.\
        By the end of the project the only people left were myself and one artist. <br><br>In the remaining week, we only finished the dialogue, interaction, and event systems for a prototype. After this I started to use my fluid skills to lead and engage with each part of projects better.', 'Video Game Development Club (Prototype)'],
        
        ['"Super Sidekick"<br><br>', 'It might not seem like it, but this project was really interesting. It let the artists go wild, and I got to work/learn about making a robust dialogue system with multiple choices.\
        <br><br>Although the premise of a Dating Sim/Visual Novel about a Sidekick helping Super-heroes solve personal issues was novel, but it was a good way to learn some useful fundamentals that can apply to future projects', 'Video Game Development Club (Prototype)'],
        
        ['Do you have any Personal Projects?', 'I love working on my own projects too! I work on these alone, and unlike VGDC these games don\'t have to be playable by the end of the semester.\
        <br><br>I\'m a student first and foremost, but I\'m also a writer, musician, artist, and more. I get busy!<br><br>The games here are either at a high level of playability or have enough pre-production work and planning that I want to share them!', 'Current Project: Murderous Mishap'],
    
        //['Shmoovement Shooter<br> (Unity)', 'After playing the Titanfall 2 gauntlet a few too many times, I started work on a multiplayer "Shmoovement" game.<br><br>\
        // I wanted to have a mechanically deep and robust physics-based movement system with great game-feel, so the physics calculations were modeled after the Source Engine\'s Physics. Mechanics such as wallrunning, b-hopping, sliding, and so on were added to increase the depth further. Plus some other <i>secret</i> mechanics.', 'Personal (Prototype)'],
        
        ['"Murderous Mishap"', 'Inspired by retro horror games and whodunit movies, the project is a 3D Mystery/Puzzle game where you play as an ace detective. Your latest case is a mansion party gone wrong.<br><br>\
        It features three different camera styles First Person, Third Person, and a Static Camera style. Everyone might be "innocent" until proven guilty, but your job is to prove who\'s guilty. Gather clues, talk to party-goers, and crack the case to find who the true culprit(s) is...', 'Personal (Prototype/Planning)'],

        ['Melody\'s Collision Course', 'My goal was to create a 3D game inspired by Kirby\'s Dream Course. This project was a great deep dive into complex physics simulation and gaining more 3D experience.<br><br>\
        On the surface this game is just a golf game. However, there is a incredibly unique dynamic of this gameplay. Levels DO NOT have static hole locations! Instead, the last enemy turns into the hole. This creates a super unique strategy element to get the fewest strokes.', 'Personal (Playable)'],

        ['Sonic Drill<br>', 'This project was my Final for a game dev class in highschool. Of my Personal Projects, this one is the least interesting. It was inspired by "Motherload", and "Factorio"\
        <br><br>The gameplay revolves around mining resources. The gameplay loop is fairly circular; mining earns money, money is used to buy upgrades for your miner, upgrading lets you mine more, etc. The biggest struggle I faced was doing complex tasks in Construct 2, which is a fairly rudimentary engine.', 'Personal/Orono HS Final Project (Playable)']];

    var codeText = [
        ['"Impossible Inc."<br>(UnityVR/Android)', 'Our goal was to create a demo where each level becomes more and more overt that rooms are physically impossible sizes. Using Stencil buffering, we made a demo from scratch that is seamless to explore.\
        <br><br>However, one of the main issues is that a 6mx6m play area is required. That being said, we were fortunate enough to have that amount of space, and I even showed it to some of my friends. When not primed, most did not even realize!', '<a class="btn btn-lg btn-custom btn-block" style="font-size:1.5em; padding-top: 0.313rem; font-weight: bold;" href="https://drive.google.com/file/d/1IFCxx1gKcMkrqRqrD5Q7BpPmvSToRTD-/preview" role="button" target="_blank">Watch the Demo</a><br>CSCI 5619'],

        ['"Platforming<br>Under Pressure"<br>(Unity/WebGL)', 'Platforming Under Pressure is an auto-platformer, where you help design the level. The character moves automatically, but you have to help get them across the gap! \
        <br><br>We used an SPH fluid simulation to power the core of the gameplay. There are four levels inspired by the seasons, each with their own unique challenges. Help the lil fella cross the gap using the power of water pressure, and physics!', '<a class="btn btn-lg btn-custom btn-block" style="font-size:1.5em; padding-top: 0.313rem; font-weight: bold;" href="https://theshoes.itch.io/platforming-under-pressure" role="button" target="_blank">Platform Under Pressure</a><br>CSCI 5611'],

        ['IK Solver<br>(C#/Octane)', 'Our goal was to make a simulation using an IK (inverse kinematic) motion solver. We implemented this project as a robot shopkeep simulator,  by using IK, euler angles, quaternions, and a few models, we created our demonstration.\
        <br><br>To make our character more lifelike, we used a recursive method to loop through all the bones in the skeleton, then moved the bones bit by bit to the desired location. Finally, we added some reactions based on if the object could be reached or not.', 'CSCI 5611'],

        ['VR Interactions<br>(UnityVR/Android)', 'Although this project looks pretty game like on the surface, the majority of the project revolved around proper implementation of a multitude of interaction techniques. From basic controller and pointer-based grabbing techniques, to more unique and uncommon methods.\
        <br><br>These were implementations such as Go-Go grasping, Spindle, and Fishing Reel. These techniques helped create a better common understanding of how creative you can get with numerous interaction techniques, as well as how they impact your control and influence in a virtual world.', 'CSCI 5619'],

        ['Cloth Simulation<br>(Processing/Java)', 'To create the cloth simulation, we first generated a mesh composed of multiple ropes. Each rope had subsequent nodes attached to it. Then ropes were connected horizontally via their nodes to form the mesh. Soon after, we added a collision system for interactiblity.\
        <br><br>To try to make our simulation more accurate, we implemented the The Runge–Kutta method (RK4) of integration. RK4 let us have much higher accuracy with our simulation. With some optimizations to our code, it ended up at a level that felt realistic and nice to watch.', 'CSCI 5611'],

        ['Ship Wayfinding<br>(Processing/Java)', 'This project had my partner and I implement an intelligent collision - avoidance system. To do this, we generated several random obstacles indicated by islands or circles, several random nodes, and two randomly generated points for the start and the goal positions.\
        <br><br>To find the best path, we tried implementing Dijkstra\'s Algorithm to find the shortest path from the start to the goal points via our nodes + graph. Similarly, if it made more sense for our ship to "skip" a node and advance to the next node, it would do so.', 'CSCI 5611'],

        ['Dancing Ants<br>(OpenGL/C++)', 'So You Think Ants Can Dance? Yes. Well... with the help of motion captured dancers they can. Dancing Ants was a very unique project. The goal of the project was to interpret Motion Captured Data of dancers and map it onto simple 3D characters.\
        <br><br>While a bit minimalist, the project was still a great learning experience. It focused mostly on how to properly interpret the data, creating bones and joints for the characters, and properly keeping track of local vs. global spaces. The ants may look fairly simple, but they will bust out some moves!', 'CSCI 4611'],
        
        ['Car Soccer<br>(OpenGL/C++)', 'Car Soccer a was really fun class project to work on! Although this was not part of the requirements, by making my functions more modular, it allowed me to make the project two-player! I also added a basic scoring system that displays in the console.\
        <br><br>The biggest part of the project was making a simple, but consistent enough physics simulation for the ball. Likewise, creating a system for the collisions was integral for the project to even be playable. Balancing these systems to allow a minimalistic, simple arcade game was a really fun class project.', 'CSCI 4611'],

        ['Text Rain<br>(Java/Processing)', 'For a project that used software that was fairly new to me, this was still a great learning experience. The thrust of the project was interpreting a video or webcam feed, having text fall like rain, and simulating interactions between the video feed and the text rain.\
        <br><br>Implementing the video and webcam feeds was not exactly difficult; however, making the text react was the real challenge. My solution to this design challenge was to create a faux-physics system for the falling text. All in all, it was definitely a unique project.', 'CSCI 4611'],
       
        ['Fractal Generator<br>(Java)', 'This project involved implementing several shape classes in Java to draw some fractals based on inputted shapes. There were three possible shapes that the program would accept, Triangles, Rectangles, and Circles.\
        <br><br>The Java program needed to draw a fractal recursively, and each of the drawing methods would draw the shape passed in at the specified location and in the specified color. Once it had finished drawing it would compute the total area of any shapes that form your fractal, and print the results.', 'CSCI 1933'],
        
        ['Bus Simulation<br>(Java)', 'For this project, we were "tasked" to create a simulation and return a report to a hypothetical bus company.\
        <br><br>The simulation was achieved by creating classes to model the behavior of each element of the system as well as each activity (event) that occurs in the system. There was no overall controller except for a main driver loop that runs queued events until time runs out.  Each element in the system models its own behavior and interactions with other elements in the simulation.', 'CSCI 1933'],
        
        ['Battle Boats<br>(Java)', 'This project involved us making "Battle Boats"... The battleship project consisted of 4 major parts that had to be built from scratch. The board, the boats, a turn system, and a debug mode.\
        <br><br>For the board, The program simulated a rectangular X×Y board using a 2-dimensional array. Boats were represented by a line of X\'s on the board (Array), For turns, the user inputs a location (x, y) to attack and if they want to use an item. For the debug, it would display both boards so we could properly debug and test the game.', 'CSCI 1933'],
        
        ['Data Structure<br>Projects (Java, C)', 'I\'ve done several projects that relate to Data Structures, so for this card I will just list a few.<br><br>-HashMap (Java)<br><br>-ArrayLists (Java)<br><br>-Linked Lists (Java, C)<br><br>-Binary Trees(Java, C)\
        <br><br>These projects all either involved making and/or using data structures for problems such as sorting, benchmarking, aggregating data, converting, etc.', 'CSCI 1933, CSCI 2021'],

        ['Optimization & Benchmarking (C)', 'The first half of this project revolved around optimizing memory access of a matrix. We were provided with algorithms to search through a matrix and calculate the diagonal sums, and the task was optimizing the algorithm to improve performance as much as possible. \
        <br><br>The other half of the project centered on timing several other algorithms and measuring their performance. We measured the performance of 4 search functions, which determined whether an integer query was present in an associated data structure.', 'CSCI 2021'],
    
        ['Clocks &<br>Puzzle Box(C)', 'For this project we were tasked with writing code which would be run by a microcontroller in a digital clock. It could only use integer operations. No floating point operations.\
        My solution used bit shifting along with bitwise operations to construct the correct bit pattern for the clock display.<br><br> The other half of the project revolved around a Puzzle Box, which contained source code that reads inputs from a file. If the inputs are correct, points are awarded. If inputs are incorrect, error messages were printed.', 'CSCI 2021'],
        
        ['File Interpreter &<br>Graph Generator (C)', 'This project centered around a simple task: reading integers from a file into a dynamically allocated array. The caveat to this is that the integers in the file are stored in a special format: an initial value followed by deltas, or changes from the previous element.\
        This project required multiple formats to be usable: Text Integers, Binary Integers, and 4-Bit Signed Integers.<br><br>After interpretation, we needed to create a simple plotting routine for the text terminal. The function displayed an array of numbers on the screen in a graph-like fashion.', 'CSCI 2021'],

        ['ELF64 Project<br>(C)', 'This project explored the file format of ELF in order to print out the binary bytes associated with functions in a file. The goal of the project was to construct a program which was able to print out the binary bytes associated with a named function, and run the function.\
        <br><br>The project required a couple of steps to do this. It had to parse the File Header to identify the positions of the Section Header Array and String Table, then search that to find .symtab , .strtab, and .text. Once we had that, we stored some data and ran the function.', 'CSCI 2021']];

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
            small[1] += '<h5 class="text-center card-custom-title">' + cardText[i][0] + '</h5> <p class="card-text">' + cardText[i][1] + '</p></div><p class="card-text" style="position:relative; text-align:center; bottom:0.5em; left:0; right:0; margin:auto;"><small class="text-muted">' + cardText[i][2]+ '</small></p></div></div>';

            medium[1] += '<div class="card"><img class="card-img-top img-picker" src="' + cardImages[i] +'" alt="Card image cap"><div class="card-body">';
            medium[1] += '<h5 class="text-center card-custom-title">' + cardText[i][0] + '</h5> <p class="card-text">' + cardText[i][1] + '</p></div><p class="card-text" style="position:relative; text-align:center; bottom:0.5em; left:0; right:0; margin:auto;"><small class="text-muted">' + cardText[i][2] + '</small></p></div>';

            normal[1] += '<div class="card"><img class="card-img-top img-picker" src="' + cardImages[i] +'" alt="Card image cap"><div class="card-body">';
            normal[1] += '<h5 class="text-center card-custom-title">' + cardText[i][0] + '</h5> <p class="card-text">' + cardText[i][1] + '</p></div><p class="card-text" style="position:relative; text-align:center; bottom:0.5em; left:0; right:0; margin:auto;"><small class="text-muted">' + cardText[i][2] + '</small></p></div>';
        }

        else{
            small[1] += '<div class="card"><img class="card-img-top" src="' + cardImages[i] + '" alt="Card image cap"><div class="card-body">';
            small[1] += '<h5 class="text-center card-custom-title">' + cardText[i][0] + '</h5> <p class="card-text">' + cardText[i][1] + '</p></div><p class="card-text" style="position:relative; text-align:center; bottom:0.5em; left:0; right:0; margin:auto;"><small class="text-muted">' + cardText[i][2] + '</small></p></div></div>';

            medium[1] += '<div class="card"><img class="card-img-top" src="' + cardImages[i] + '" alt="Card image cap"><div class="card-body">';
            medium[1] += '<h5 class="text-center card-custom-title">' + cardText[i][0] + '</h5> <p class="card-text">' + cardText[i][1] + '</p></div><p class="card-text" style="position:relative; text-align:center; bottom:0.5em; left:0; right:0; margin:auto;"><small class="text-muted">' + cardText[i][2] + '</small></p></div>';

            normal[1] += '<div class="card"><img class="card-img-top" src="' + cardImages[i] + '" alt="Card image cap"><div class="card-body">';
            normal[1] += '<h5 class="text-center card-custom-title">' + cardText[i][0] + '</h5> <p class="card-text">' + cardText[i][1] + '</p></div><p class="card-text" style="position:relative; text-align:center; bottom:0.5em; left:0; right:0; margin:auto;"><small class="text-muted">' + cardText[i][2] + '</small></p></div>';

        }

        if (i + 1 % 2 == 0 && i != 0) {
            medium[1] += '</div></div>';
        }

        if (i + 1 % 4 == 0 && i != 0) {
            normal[1] += '</div></div>';
        }

        //Adjusts the Normal size to add hidden cards to space out the deck incase there is only 1, 2, or 3 cards in the deck
        if (i + 1 >= cardText.length && cardText.length % 4 != 0) {
            if (cardText.length % 4 == 1) {
                normal[1] += '<div class="card" style="visibility: hidden"><img class="card-img-top" alt="Card image cap"><div class="card-body">';
                normal[1] += '<h5 class="text-center card-custom-title"></h5> <p class="card-text"></p><p class="card-text"><small class="text-muted"></small></p></div></div>';
                normal[1] += '<div class="card" style="visibility: hidden"><img class="card-img-top" alt="Card image cap"><div class="card-body">';
                normal[1] += '<h5 class="text-center card-custom-title"></h5> <p class="card-text"></p><p class="card-text"><small class="text-muted"></small></p></div></div>';
                normal[1] += '<div class="card" style="visibility: hidden"><img class="card-img-top" alt="Card image cap"><div class="card-body">';
                normal[1] += '<h5 class="text-center card-custom-title"></h5> <p class="card-text"></p><p class="card-text"><small class="text-muted"></small></p></div></div>';
            }
            if (cardText.length % 4 == 2) {
                normal[1] += '<div class="card" style="visibility: hidden"><img class="card-img-top" alt="Card image cap"><div class="card-body">';
                normal[1] += '<h5 class="text-center card-custom-title"></h5> <p class="card-text"></p><p class="card-text"><small class="text-muted"></small></p></div></div>';
                normal[1] += '<div class="card" style="visibility: hidden"><img class="card-img-top" alt="Card image cap"><div class="card-body">';
                normal[1] += '<h5 class="text-center card-custom-title"></h5> <p class="card-text"></p><p class="card-text"><small class="text-muted"></small></p></div></div>';
            }
            if(cardText.length % 4 == 3){
                normal[1] += '<div class="card" style="visibility: hidden"><img class="card-img-top" alt="Card image cap"><div class="card-body">';
                normal[1] += '<h5 class="text-center card-custom-title"></h5> <p class="card-text"></p><p class="card-text"><small class="text-muted"></small></p></div></div>';
            }
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