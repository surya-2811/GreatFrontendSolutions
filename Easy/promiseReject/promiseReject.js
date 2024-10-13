function promiseReject(arg){
    return new Promise((_, reject)=>{
          reject(arg)
    })
}

try {
    promiseReject('Mayday!').catch((err)=>{
        console.log(err)
    });
} catch (err) {
    console.log(err); // Mayday!
}
  