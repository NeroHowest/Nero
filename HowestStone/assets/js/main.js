"use strict";

document.addEventListener("DOMContentLoaded", init);

function init (){
    let planets = ["earth", "mars", "jupiter", "saturn"];
    for(let i=0; i < planets.length; i++) {
    document.querySelector(".planets ul").innerHTML += '<li><img src="images/' + planets[i] + '.svg">' + planets[i] +'</figure></li>';
    }
    let shuttleslow = {speed:"slow speed", name:"Sightseeing shuttle", bg:"slow"};
    let shuttlemedium = {speed:"normal speed", name:"Regular shuttle", bg:"normal"};
    let shuttlefast = {speed:"nauseating speed", name:"Speedy shuttle", bg:"speedy"};
    let seats = [shuttleslow, shuttlemedium, shuttlefast];
    document.querySelector(".shuttle").innerHTML = '<img src="images/space-ship-regular.svg" alt="regular" title="regular" id="shuttle"/>';
    for(let i=0; i < seats.length; i++) {
        document.querySelector(".type").innerHTML += '<li class="' + seats[i].bg + '"><a href="#">'+ seats[i].name + '<span>(' + seats[i].speed + ')</span></a></li><span> </span>';
    }
    document.querySelector(".seatamount").innerHTML += '<label for="amount">How many seats would you like?</label><input type="number" required value=""  autocomplete="off" id="amount" name="amount" min="1" max="20" step="1" />';
    document.querySelector(".planets ul")
        .addEventListener('click', unselect);
    document.querySelector(".planets ul")
        .addEventListener('click', select);
    document.querySelector(".slow")
        .addEventListener('click', typechangeslow);
    document.querySelector(".normal")
        .addEventListener('click', typechangenormal);
    document.querySelector(".speedy")
        .addEventListener('click', typechangefast);
    document.querySelector(".seatamount")
        .addEventListener('click', seatchange);
    document.querySelector('a.proceed')
        .addEventListener('click', proceed);
    document.querySelector('input.proceed')
        .addEventListener('click', proceedagain)
}

function unselect(){
    if (document.querySelector(".selected") !== null) {
        document.querySelector(".selected").classList.remove("selected");
    }
}

function select(e) {
    e.preventDefault();
    e.target.classList.add("selected");
    e.stopImmediatePropagation();
}

function typechangeslow(e) {
    e.preventDefault();
    document.querySelector("#seats").innerHTML = "";
    document.querySelector(".shuttle").innerHTML = '<img src="images/space-ship-slow.svg" alt="slow" title="slow" id="shuttle"/>';
}

function typechangenormal(e) {
    e.preventDefault();
    document.querySelector("#seats").innerHTML = "";
    document.querySelector(".shuttle").innerHTML = '<img src="images/space-ship-regular.svg" alt="regular" title="regular" id="shuttle"/>';
}

function typechangefast(e) {
    e.preventDefault();
    document.querySelector("#seats").innerHTML = "";
    document.querySelector(".shuttle").innerHTML = '<img src="images/space-ship-speedy.svg" alt="speedy" title="speedy" id="shuttle"/>';
}

function seatchange() {
    document.querySelector("#seats").innerHTML = "";
    if (document.querySelector(".shuttle").innerHTML === '<img src="images/space-ship-slow.svg" alt="slow" title="slow" id="shuttle">'){
        document.querySelector(".shuttle").innerHTML = '<img src="images/space-ship-floorplan-slow.svg" alt="slow" title="slow" id="shuttle">'
    }
    if (document.querySelector(".shuttle").innerHTML === '<img src="images/space-ship-floorplan-slow.svg" alt="slow" title="slow" id="shuttle">'){
        document.querySelector(".shuttle").innerHTML = '<img src="images/space-ship-floorplan-slow.svg" alt="slow" title="slow" id="shuttle">'
    }
    if (document.querySelector(".shuttle").innerHTML === '<img src="images/space-ship-regular.svg" alt="regular" title="regular" id="shuttle">'){
        document.querySelector(".shuttle").innerHTML = '<img src="images/space-ship-floorplan-regular.svg" alt="regular" title="regular" id="shuttle">'
    }
    if (document.querySelector(".shuttle").innerHTML === '<img src="images/space-ship-floorplan-regular.svg" alt="regular" title="regular" id="shuttle">'){
        document.querySelector(".shuttle").innerHTML = '<img src="images/space-ship-floorplan-regular.svg" alt="regular" title="regular" id="shuttle">'
    }
    if (document.querySelector(".shuttle").innerHTML === '<img src="images/space-ship-speedy.svg" alt="speedy" title="speedy" id="shuttle">'){
        document.querySelector(".shuttle").innerHTML = '<img src="images/space-ship-floorplan-speedy.svg" alt="speedy" title="speedy" id="shuttle">'
    }
    if (document.querySelector(".shuttle").innerHTML === '<img src="images/space-ship-floorplan-speedy.svg" alt="speedy" title="speedy" id="shuttle">'){
        document.querySelector(".shuttle").innerHTML = '<img src="images/space-ship-floorplan-speedy.svg" alt="speedy" title="speedy" id="shuttle">'
    }
    windowchange()
}

function windowchange(){
    let windows = document.getElementById("amount").value;
    for (let i = 0; i < windows; i++){
        document.querySelector("#seats").innerHTML += '<img src="images/seat.svg" alt="seat" title="seat">'
    }
}

function proceed (e) {
    e.preventDefault();
    document.querySelector("section#creation").classList.add("hidden");
    document.querySelector("section#passengers").classList.remove("hidden");
    let passengers = document.getElementById("amount").value;
    for (let i = 0; i < passengers; i++) {
        document.querySelector(".details").innerHTML +=
            '<fieldset><label for="passengerName' + i + '">Passenger <span>' + (i+1) + '</span> name:</label><input type="text" name="passengerName' + i + '" id="passengerName' + i + '" class="passengerName' + i + '"/><label for="passengerGender' + i + '">Passenger <span>' + (i+1) + '</span> gender:</label><select id="passengerGender' + i + '" name="passengerGender'+ i + '" class="passengerGender' + i + '"><option value="m">male</option><option value="f">female</option></select></fieldset>'
    }
}

function proceedagain (e) {
    e.preventDefault();
    document.querySelector("section#passengers").classList.add("hidden");
    document.querySelector("section#confirmation").classList.remove("hidden");
}