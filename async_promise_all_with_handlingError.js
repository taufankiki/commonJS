// Model Error Handling Sederhana

async function example6(){

    let prom1 = Promise.resolve(10);
    let prom2 = Promise.resolve(20);
    let prom3 = new Promise((resolve,reject)=> {
        resolve(30);
    })

    return Promise.all([prom1, prom2, prom3]).then(
                ifTrue => { console.log(ifTrue) }, // akan di tampilkan semua data jika semua variabel promise resolve.
                ifFalse => { console.log(ifFalse) } // jika ada data yang reject maka akan dijalankan ifFalse ini, 
                );
        // sederhana saja
}

example6();