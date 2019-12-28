const myPromise1 = new Promise((solve, reject) => {
    setTimeout(() => {

        console.log('first');
        resolve(1);

    },3000);
});

const myPromise2 = new Promise((resolve, reject) => {

    setTimeout(() => {
        
        console.log('Seconds');
        resolve(2);

    },2000);
});

Promise.all([myPromise1, myPromise2]).then((results) => {

    console.log(results);

});