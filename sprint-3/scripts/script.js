


let parent = document.querySelector('.comment__default');
const form = document.getElementById('commentBox');
    form.addEventListener('submit', e =>  {
    e.preventDefault();
    let nameText = document.querySelector('#name').value;
    let commentText = document.querySelector('#comment').value;
    axios.post("https://project-1-api.herokuapp.com/comments?api_key=%3C57102961-e192-434c-8763-2dc1ecadf5c5%3E",
    {
        name: nameText,
        comment: commentText
    }),
    document.querySelector('.comment__default').innerHTML = "";

    // arrGoku.unshift({name: e.target.name.value,date: "02/04/2019",comment: e.target.comment.value});
    document.getElementById('name').value = "";
    document.getElementById('comment').value = "";
    
    setTimeout(() => {
        requestItems()
    }, 1000);
});
requestItems = () => {
    axios.get("https://project-1-api.herokuapp.com/comments?api_key=%3C57102961-e192-434c-8763-2dc1ecadf5c5%3E")
    .then(res => {
        console.log(res.data);
        res.data.forEach(item => {
            displayComment2(item)
        });
    })
}
requestItems()

 displayComment2= (post) =>{
    //define variables 
        let newDiv = document.createElement('div');
        let newDiv2 = document.querySelector('.comment__default__comment');
        let newP = document.createElement('p');
        let newSpan = document.createElement('span');
        let time = new Date(post.timestamp)
        
        let newDiv1 = document.createElement('div')
        newDiv.appendChild(newDiv1);
        newDiv1.classList.add('comment__default__comment--icon')

        let newDiv4 = document.createElement('div')
        newDiv4.classList.add('comment__default__comments')
        newDiv.appendChild(newDiv4);
        newDiv1.classList.add('comment__default__comment--icon')
        newDiv.classList.add('comment__default__comment')

        let newDiv5 = document.createElement('div')
        newDiv5.classList.add('comment__default__commentss')
        newDiv4.appendChild(newDiv5)

        newDiv5.appendChild(newP);
        parent.appendChild(newDiv);
        newP.classList.add('comment__default__comment-style','comment__default__comment-style2')
        newP.innerHTML= post.name;
    
        let newP1 = document.createElement('p')
        newDiv5.appendChild(newP1);
        newP1.classList.add('comment__default__comment-style', 'comment__default__comment-styledate')
        newP1.innerHTML= time.getDate() +'/' + time.getMonth() + '/' + time.getFullYear()

        let newP2 = document.createElement('p')
        newDiv4.appendChild(newP2);
        newP2.classList.add('comment__default__comment-style1')
        newP2.innerHTML= post.comment
    }
