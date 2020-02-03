let parent = document.querySelector('main');
let goku = document.getElementById('cards')

let newDate = [
    'Mon Dec 17 2018',
    'Mon Dec 18 2018',
    'Mon Dec 19 2018',
    'Mon Dec 11 2018',
    'Mon Dec 12 2018',
    'Mon Dec 13 2018'
]

let newVenue = [
    'Ronald Lane',
    'Pier 3 East',
    'View Loungue',
    'Hyatt Agency',
    'Moscow Center',
    'Pres Club'
]

function addShow(){
    let vidu = document.getElementById('title');
    let newParagraph = document.createElement('h1');
    newParagraph.classList.add('show__title');
    vidu.appendChild(newParagraph);
    newParagraph.innerText= 'Shows'
}

function addDiv(){
    const x = document.createElement('div');
    x.classList.add('show__card');
    goku.appendChild(x);
}
function addDatetitle(){
    let vidu = document.querySelectorAll("div.show__card");
    let newParagraph = document.createElement('h3');
    newParagraph.classList.add('show__card--title');
    vidu[i].appendChild(newParagraph);
    newParagraph.innerText= 'DATE'
}
function addLocationtitle(){
    let vidu = document.querySelectorAll("div.show__card");
    let newParagraph = document.createElement('h3');
    newParagraph.classList.add('show__card--paragraph', 'show__card--paragraph-padding');
    vidu[i].appendChild(newParagraph);
    newParagraph.innerText= 'LOCATION'
}
function addLocation(){
    let vidu = document.querySelectorAll("div.show__card");
    let newParagraph = document.createElement('p');
    newParagraph.classList.add('show__card--paragraph', 'show__card--paragraph-padding3');
    vidu[i].appendChild(newParagraph);
    newParagraph.innerText= 'San Francisco, CA'
}

function addVenuetitle(){
    let vidu = document.querySelectorAll("div.show__card");
    let newParagraph = document.createElement('h3');
    newParagraph.classList.add('show__card--paragraph', 'show__card--paragraph-padding');
    vidu[i].appendChild(newParagraph);
    newParagraph.innerText= 'VENUE'
}

function addDate(){
    let vidu = document.querySelectorAll("div.show__card");
    let newParagraph = document.createElement('p');
    newParagraph.classList.add('show__card--paragraph', 'show__card--paragraph-padding2');
    vidu[i].appendChild(newParagraph);
    newParagraph.innerText= newDate[i]
}
function addVenue(){
    let vidu = document.querySelectorAll("div.show__card");
    let newParagraph = document.createElement('p');
    newParagraph.classList.add('show__card--paragraph', 'show__card--paragraph-padding2');
    vidu[i].appendChild(newParagraph);
    newParagraph.innerText= newVenue[i]
}
function addButton(){
    let vidu = document.querySelectorAll("div.show__card");
    let newParagraph = document.createElement('button');
    newParagraph.classList.add('show__card--button');
    vidu[i].appendChild(newParagraph);
    newParagraph.innerText= 'BUY TICKETS'
}
function addVenuetitle1(){
    let vidu = document.getElementById("div");
    let newParagraph = document.createElement('h3');
    newParagraph.classList.add('show__card--paragraph', 'show__card--paragraph-padding');
    vidu.appendChild(newParagraph);
    newParagraph.innerText= 'VENUE'
}
function addLocationtitle1(){
    let vidu = document.getElementById("div");
    let newParagraph = document.createElement('h3');
    newParagraph.classList.add('show__card--paragraph', 'show__card--paragraph-padding');
    vidu.appendChild(newParagraph);
    newParagraph.innerText= 'LOCATION'
}
function addDatetitle1(){
    let vidu = document.getElementById("div");
    let newParagraph = document.createElement('h3');
    newParagraph.classList.add('show__card--title');
    vidu.appendChild(newParagraph);
    newParagraph.innerText= 'DATE'
}
function addDiv1(){
    const x = document.createElement('div');
    x.classList.add('show__subtitle');
    x.setAttribute("id","div")
    goku.appendChild(x);
}

function addButton1(){
    let vidu = document.getElementById("div");
    let newParagraph = document.createElement('button');
    newParagraph.classList.add('show__card--button1');
    vidu.appendChild(newParagraph);
    newParagraph.innerText= 'BUY TICKETS'
}
addShow()


if (window.matchMedia('(max-width: 320px)').matches) {
    for (var i=0; i < 6; i++) {
        addDiv()
        addDatetitle()
        addDate()
        addVenuetitle()
        addVenue()
        addLocationtitle()
        addLocation()
        addButton()
    }
} else if (window.matchMedia('(max-width: 767px)').matches) {
    addDiv1(); addDatetitle1(); addVenuetitle1(); addLocationtitle1(); addButton1()
    for (var i=0; i < 6; i++) {
    addDiv()
    addDate()
    addVenue()
    addLocation()
    addButton()
    } 
} else addDiv1(); addDatetitle1(); addVenuetitle1(); addLocationtitle1(); addButton1()
for (var i=0; i < 6; i++) {
addDiv()
addDate()
addVenue()
addLocation()
addButton()
} 