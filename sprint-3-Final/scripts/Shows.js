let parent = document.querySelector('main');
let showCard = document.getElementById('cards')


requestItems = () => {
    axios.get("https://project-1-api.herokuapp.com/showdates?api_key=%3C57102961-e192-434c-8763-2dc1ecadf5c5%3E")
    .then(res => {
        console.log(res.data);
        res.data.forEach(item => {
            postList(item)
        });

    })
}
 requestItems();
 
let Title = document.getElementById('title');
    let newParagraphs = document.createElement('h1');
    newParagraphs.classList.add('show__title');
    Title.appendChild(newParagraphs);
    newParagraphs.innerText= 'Shows'
postList = (post) => {

    const x = document.createElement('div');
    x.classList.add('show__card');
    showCard.appendChild(x);

    let card = document.querySelectorAll('.show__card');
    let newParagraph = document.createElement('h3');
    
    let newHeader = document.createElement('h3');
    newHeader.classList.add('show__card--title', 'show__card--color');
    card[card.length-1].appendChild(newHeader);
    newHeader.innerText= 'DATE'

    newParagraph.classList.add('show__card--title');
    card[card.length-1].appendChild(newParagraph);
    newParagraph.innerText= post.date

    let newHeader2 = document.createElement('h3');
    newHeader2.classList.add('show__card--paragraph', 'show__card--paragraph-padding', 'show__card--color');
    card[card.length-1].appendChild(newHeader2);
    newHeader2.innerText= 'VENUE'

    let newParagraph1 = document.createElement('p');
    newParagraph1.classList.add('show__card--paragraph', 'show__card--paragraph-padding2');
    card[card.length-1].appendChild(newParagraph1);
    newParagraph1.innerText= post.place

    let newHeader1 = document.createElement('h3');
    newHeader1.classList.add('show__card--paragraph', 'show__card--paragraph-padding', 'show__card--color');
    card[card.length-1].appendChild(newHeader1);
    newHeader1.innerText= 'LOCATION'

    let newPara = document.createElement('p');
    newPara.classList.add('show__card--paragraph', 'show__card--paragraph-padding3');
    card[card.length-1].appendChild(newPara);
    newPara.innerText= post.location

    

    let newButton = document.createElement('button');
    newButton.classList.add('show__card--button');
    card[card.length-1].appendChild(newButton);
    newButton.innerText= 'BUY TICKETS'
    
}

// for (i = 0; i< newShow.length; i++) {
//     newShow[i]
//     postList()
// }
