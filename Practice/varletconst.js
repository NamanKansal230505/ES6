const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error=false
        if(error){
            console.log("Async task is failed");
            reject("Something went wrong");
        }else{
            console.log("Async task is complete");
            resolve();
        }
    }, 1000)
});

async function consumePromise(){
    try{
        await promiseOne;
        console.log("Promise consumed");
    }catch(error){
        console.log(error);
    }
}

consumePromise();

