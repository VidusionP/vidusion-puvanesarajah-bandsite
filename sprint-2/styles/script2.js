const arrGoku = [
    {
        name: "Michael Lyons",
        date: "12/18/2018",
        comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed"
    },
    {
        name: "Gary Wong",
        date: "12/12/2018",
        comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He's so talented! I wish I can ride like him one day so I can really enjoy myself!"
    },
    {
        name: "Theodore Duncan",
        date: "11/15/2018",
        comment: "How can someone be so good!!! You can tell he lives for this and loves to do it everyday. Everytime I see him I feel instantly happy! He's defintely my favorite every!"
    },
]

let parent = document.getElementsByClassName('comment__default');
const form = document.getElementById('Vidusion');
    form.onsubmit= e => {
    e.preventDefault();
    arrGoku.push({name: e.target.name.value,date: "02/04/2019",comment: e.target.comment.value});
    console.log(newGoku)
};

const newGoku = []

function addNew() {
    
}

function displayComment() {
    for (i=0; i<arrGoku.length; i++) {
        let newDiv = document.createElement('div');
        let newP = document.createElement('p');
        let newSpan = document.createElement('span');
        newDiv.classList.add('comment__default__comment')
        newDiv.appendChild(newP);
        parent[0].appendChild(newDiv);
        newGoku.push(arrGoku[i])
        newP.innerHTML= arrGoku[i].name;
    }
    for (i=0; i<arrGoku.length; i++) {
        let newDiv = document.getElementsByClassName('comment__default__comment');
        let newDiv1 = document.createElement('div')
        newDiv[i].appendChild(newDiv1);
        newDiv1.classList.add('comment__default__comment--icon')
    }
    for (i=0; i<arrGoku.length; i++) {
        let newDiv = document.getElementsByClassName('comment__default__comment');
        let newP = document.createElement('p')
        newDiv[i].appendChild(newP);
        newP.innerHTML= arrGoku[i].date
    }
    for (i=0; i<arrGoku.length; i++) {
        let newDiv = document.getElementsByClassName('comment__default__comment');
        let newP = document.createElement('p')
        newDiv[i].appendChild(newP);
        newP.innerHTML= arrGoku[i].comment
    }
}
displayComment()


