async function loadJSON(url){
    let a = fetch(url);
    return a.then(result => {
        if(result.status==200) {
            return result.json();
        } else {
            throw new Error(result.status);
        }
    });
}

loadJSON('no-such.json').catch(reason=>{console.log(reason)});