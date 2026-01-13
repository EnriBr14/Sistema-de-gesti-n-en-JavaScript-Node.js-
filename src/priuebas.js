const fs = require('fs')

async   function lamado(){
    try{
        let datos = await fs.readFileSync("RegistroLuchadores.txt", "utf8");
        console.log(dat.then( () => {
            dat
        } ));
    }catch(err){
        console.log(err);
    }
}

lamado()