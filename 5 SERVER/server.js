// const os = require('os');

// console.log("CPUs : ",os.cpus().length);

const http = require("http");


const server = http.createServer((req ,res)=>{

    res.write("<h1> WELCOME TO MY SERVER ");
    res.end();
    

})
 server.listen(8080,(error)=>{
    if(error){
        console.log("server is not started on port",error);

         return false;
    };
        console.log("server is started.....");
        


 })


