const PromiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task is complete');
        resolve({username:"ramesh", id:123});
    }, 1000);
});

PromiseOne.then((function(u1){
    console.log('Promise consumed', u1);
}));

