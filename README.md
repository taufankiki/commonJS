# commonJS

Kesimpulan :
1. Async await untuk proses asinkron atau non blocking
2. Await berada dalam async
3. Await digunakan untuk menghandle Promise
4. Await membuat Promise tidak bisa lagi mengakses then
   contoh : let user = await Promise;
            user.then(result=>console.log(error)) --> akan error
5. Agar point ke 4 berjalan tanpa error maka
   let user = Promise;
   user.then(result=>console.log(error))
6. Promise berada didalam async function;

