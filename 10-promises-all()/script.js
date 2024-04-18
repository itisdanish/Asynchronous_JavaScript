function getData(endpoint){
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        
        xhr.open('GET', endpoint);

        xhr.onreadystatechange = function() {
            if(this.readyState ===4){
                if(this.status === 200){
                    resolve(JSON.parse(this.responseText))
                }else{
                    reject('Error')
                }
            }
            
    };
    
    setTimeout(()=>{
        xhr.send();
    }, Math.floor(Math.random()*500)+1000)
    
    });
}

getData('./movies.json')
    .then((movies)=>{
        console.log(movies[1].title)
        return getData('./actors.json')
    })
    .then((actors)=>{
        console.log(actors[1].name)
        return getData('./directors.json')
    })
    .then((directors)=>{
        console.log(directors[1].name)
    })
    .catch((error)=>{ console.log(error)})