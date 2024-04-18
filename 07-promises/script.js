const promise = new Promise((resolve,reject)=>{
    // Do some async task
    let error = false
    
    setTimeout(()=>{
        if(!error){
            console.log('Aysnc task complete');
            resolve(
                {title: 'Post One',body:'This is post one'},
                {title: 'Post Two',body:'This is post Two'}
            );
        }
            else {
            reject('Connection Failed..')
        }
        
    },500);
})

promise
.then((post)=>{
    console.log('Promise Consumed..')
    return post.title
})
.then((post)=>{ console.log(post)})
.catch((err)=>{    console.log(err)})

console.log('first')