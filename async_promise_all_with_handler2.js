// Model Error Handling Part 2

async function example6(){

    try {

        let prom1 = Promise.resolve(100);
        let prom2 = Promise.resolve(200);
        let prom3 = new Promise((resolve,reject)=> {
            resolve(300);
        })

        return Promise.all([
            prom1.catch(err=>{ console.log(err); }), 
            prom2.catch(err=>{ console.log(err); }), 
            prom3.catch(err=>{ console.log(err); })])
            .then(result=> {
                console.log(result[0]),
                console.log(result[1]),
                console.log(result[2])
            }, reason => {
                console.log(reason[0]),
                console.log(reason[1]),
                console.log(reason[2])
            });

    }   catch(err) {
        console.log('Error Cost One of value is rejected')
    } 
   


}

example6();