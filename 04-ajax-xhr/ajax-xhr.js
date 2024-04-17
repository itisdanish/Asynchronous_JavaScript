const h1 = document.querySelector('h1')
const container = document.querySelector('.container')
const ol = document.querySelector('#results')
const movie = document.querySelector('.movie')
const reload = document.querySelector('.reload')
const xhr = new XMLHttpRequest();

h1.innerText = 'AJAX & XHR Object'


// xhr.open('GET','./movies.json');
// xhr.open('GET','https://api.github.com/users/itisdanish/repos');
xhr.open('GET','https://jsonplaceholder.typicode.com/users');

// The readyState property of an XHR object represents the state of the request. It can have the following numeric values:

// 0: UNSENT - The XHR object has been created, but open() method has not been called yet.
// 1: OPENED - The open() method has been called.
// 2: HEADERS_RECEIVED - The request headers and status are available.
// 3: LOADING - The response is being received.
// 4: DONE - The operation is complete.


xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200){
        // console.log(JSON.parse(this.responseText))
        const data = JSON.parse(this.responseText)

        data.forEach( user =>{
            const li = document.createElement('li');
            li.innerHTML =`<strong>${user.name}</strong> <br> [ ${user.address.street} ] <hr>`
            ol.appendChild(li)

        })
    }
};

movie.addEventListener('click',()=>{
    xhr.send()
    movie.setAttribute('disabled',true)
})
reload.addEventListener('click', function() {
    // Reload the page when the button is clicked
    location.reload();
});