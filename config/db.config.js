const mongoose = require('mongoose');

mongoose
        .connect(process.env.MONGO_URL,{
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        })
        .then(()=> { 
            console.log("Connected successfully to MongoDB");
        })
        .catch((err)=> {
            console.log("Failed to connect to MongoDB", err)
            process.exit();
        })