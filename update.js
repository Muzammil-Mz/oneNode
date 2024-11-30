import fs from "fs"

let data="namaskar"
fs.appendFile("test.js",data,(err)=>{
if (err){
    console.log(err);
    
}

})