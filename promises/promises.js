const BackendFunction = new Promise((resolve) => {
    console.log("Conectando....");
    setTimeout(()=>{
        resolve("ok");
    }, 3000);
});
 
console.log("iniciada");
let respuestaBackend;

respuestaBackend = BackendFunction();

console.log(respuestaBackend);

console.log("Final")