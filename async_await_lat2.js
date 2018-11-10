async function aritmatik(){

    var prom1 =  new Promise((resolve,reject)=>{
       
        async function tambah(x,y) {
            let hasil = await Promise.resolve(x+y);
            return hasil;
        }

        async function kurang(x,y) {
            let hasil = await Promise.resolve(x-y);
            return hasil;
        }

        async function kali(x,y) {
            let hasil = await Promise.resolve(x*y);
            return hasil;
        }

        async function bagi(x,y) {
            let hasil = await Promise.resolve(x/y);
            return hasil;
        }

        tambah(2,1).then(hasil=> console.log(hasil));
        kurang(10,5).then(hasil=> console.log(hasil));
        kali(10,5).then(hasil=> console.log(hasil));
        bagi(10,5).then(hasil=> console.log(hasil));


    });

    
}

aritmatik();
