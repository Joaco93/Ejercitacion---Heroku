const fs = require("fs");
const path = require("path");

const controlador = {
    register: (req,res)=>{
        res.render(path.resolve(__dirname,"./views", "register.ejs"))
    },
}

module.exports = controlador ;
