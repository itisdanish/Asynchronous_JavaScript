const h1 = document.querySelector('h1')
const container = document.querySelector('.container')
h1.innerText = 'Promises.....'

const posts = [
    {title: 'Post One',body:'This is post one'},
    {title: 'Post Two',body:'This is post Two'}
];

function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post)
            resolve();
        },2000)
    })
    
}

function getPost(){
    setTimeout(()=>{
        posts
        .forEach((post)=>{
            const div = document.createElement('div')
            div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`
            div.setAttribute('class','my-2')
            container.appendChild(div)
        })
    },1000);
}

createPost(
    {title: 'Post Three',body:'This is post Three'},
    getPost
)
.then(getPost)