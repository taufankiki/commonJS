async function example4(){
    var prom1 = Promise.resolve(1);
    var prom2 = Promise.resolve(2);
    var prom3 = new Promise((resolve,reject)=> {
        resolve(3);
    });

    return Promise.all([prom1, prom2, prom3]).then(result=>console.log(result));
}

example4();