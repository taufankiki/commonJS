async function example3() {

    const prom1 = Promise.resolve(1);
    prom1.then(varA=> {
        console.log('A = Nilai Promise dari Root: '+varA);
        return varA+1;
    }).then(varB=> {
        console.log('B = Nilai Promise dari Child Root 1(A): '+varB);
        return varB+1;
    }).then(varC=> {
        console.log('C= Nilai Promise dari Child B: '+varC);
        return prom1;
    }).then(varD=>{
        console.log('D = Nilai dari Root : '+ varD);
    })

    

}

example3();