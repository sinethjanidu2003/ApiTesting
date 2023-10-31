const express = require("express");
const routes = express.Router();
const app = express();


//testing
routes.post('/login',(req,res)=>{


    const phone = req.query.phone;
    const password = req.query.password;

    //this is testing
    if(phone == "0715359668" && password == "password"){
        const dataSet = {
            message : "login successful",
            status : 200,
            apiKey : "hshdh28772hsjh72"
        };

        res.send(dataSet);
    }else{

        const dataSet = {
            message : "Login failed. Invalid credentials",
            status : 401,
            apiKey : "Null"
        };

        res.status(401).json(dataSet);
    }

   


   

});

app.listen('3000',()=>{
    console.log("Server is running on 3000 Port");
});

app.use(routes);