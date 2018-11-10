# commonJS

Kesimpulan :
1. Async await untuk proses asinkron atau non blocking
2. Await berada dalam async
3. Await digunakan untuk menghandle Promise
4. Await membuat Promise tidak bisa lagi mengakses then
   contoh : let user = await Promise;
            user.then(result=>console.log(error)) --> akan error
