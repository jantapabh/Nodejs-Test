const p = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({
            id: "6035512034",
            name: "Jan"
        },2000);
    });
    console.log('Before ! ');
    p.then(function(result) {
        console.log('result : ', result);
    })
    .catch(function(err){
        console.log(err.message);
    });

console.log('After Async Operate');