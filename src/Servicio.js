const luchad = require("./Luchador")
const luchador = require("./Empresa");
const fs = require('fs')
let luchadores = []
let empresas = []


//Crear una funcion para guardar
function guardarDatos(datos){
    //Verficar si se quiere guardar una empresa o un luchador-----------------------------
    if(Object.keys(datos).length >= 3){
        //Verificar que el luchador que se quiere guardar no exista en el array
        //Verificar con el uso del metodo "some" si algun nombre se encuentra contenido en el array
        let comparando = luchadores.some(luchador => luchador.getNombreLuchador() == datos.getNombreLuchador())
        //Realizar el guardado si no se encuentra el nombre en el array
        if(!comparando){
            luchadores.push(datos)

            fs.writeFileSync('RegistroLuchadores.txt', JSON.stringify(luchadores, null, 2))
        }else{
            console.log(`
            El luchador que quieres registrar ya esta existe
            Nombre: ${datos.getNombreLuchador()}
            Empresa: ${datos.empresaContrato}
            `)
        }
    }
    //Guardado de empresa--------------------------------
    else{
        //Verificar que la empresa que se quiere guardar no exista en el array
        let validacion = empresas.some(empresa => empresa.getNombreEmpresa() == datos.getNombreEmpresa())
        if(!validacion){
            empresas.push(datos)

            fs.writeFileSync("RegistroEmpresas.txt", JSON.stringify(empresas, null, 2))

        }else{
            console.log(`
            El luchador que quieres registrar ya esta existe
            Nombre: ${datos.getNombreEmpresa()}
            Empresa: ${datos.getPaisEmpresa()}
            `)
        }


    }

}

//----------------------------Mostrar valores segun la empresa----------------------------------------------------
function luchadorPorEmpresa(empresaNombre){

    //Validar que la empresa exista en el registro
    let validacio = empresas.some(empresa => empresa.getNombreEmpresa() === empresaNombre);

    if(validacio) {

//--Con forEach vamos a recorrer el arreglo de luchadores con la condicional de que el
        //atributo del empresaContrato sea igual al valor dado para imprimir los nombres
        console.log(`Empresa solicitada: ${empresaNombre}`)
        setTimeout(() => {
            luchadores.forEach(luchad => {
                //Imprimir solo si el nombre de de las empresas es el mismo
                if(luchad.empresaContrato == empresaNombre){
                    console.log(`Nombre: ${luchad.getNombreLuchador()}`
                    )

                }

            })
        },1500)
//---



    }

}


//Dar opcion de mostrar luchadores registrados o empresas
function motrarDatos(opcion){
    //Mostrar luchadores
    switch(opcion){
        case 1:
            console.log("Luchadores registrados")
            for(let i = 0; i < luchadores.length; i++){
                console.log(luchadores[i].getNombreLuchador());
            }
            break;

        case 2:
            console.log("Empresas registradas")
            for(let i = 0; i < empresas.length; i++){

                console.log(empresas[i].getNombreEmpresa());
            }
            break;


    }



}


function eliminarDatos(empresaORluchador, confirm){
    //Verificar si se requiere eliminar una empresa o un luchador
    //Buscar luchador
    if(empresaORluchador.length > 4){
        let luchadorAeliminar = empresaORluchador
        let eliminar = luchadores.some(luchador => luchador.getNombreLuchador() == luchadorAeliminar);
        if(eliminar){
            let indexLuchador = luchadores.findIndex(luchador => luchador.getNombreLuchador() === luchadorAeliminar);

            console.log(`
                Informacion del luchador que deseas eliminar
                - Nombre: ${luchadores[indexLuchador].getNombreLuchador()}
                - Empresa: ${luchadores[indexLuchador].empresaContrato}
                `)

            console.log(`Estas seguro de que quieres eliminar a este personaje: ${confirm}`)

            if(confirm){


                setTimeout(function (){
                    luchadores.splice(indexLuchador, 1)
                    console.log("Luchador eliminado")
                    motrarDatos(1)
                    fs.writeFileSync('RegistroLuchadores.txt', JSON.stringify(luchadores, null, 4))
                },1500)


            }else{
                console.log(`Cancelando la eliminación`)
            }



        }
    }

    //Buscar empresa para eliminarla
    else{
        let empresaEliminar = empresaORluchador
        let eliminarEmpresa = empresas.some(empres => empres.getNombreEmpresa() === empresaEliminar);

        if(eliminarEmpresa){
            console.log(`
            Empresa que deseas eliminar es: ${empresaEliminar}
            `)
            if(confirm){
                let indexEmpresa = empresas.findIndex(empres => empres.getNombreEmpresa() === empresaEliminar)
                empresas.splice(indexEmpresa, 1)
                console.log("Empresa eliminada")
                setTimeout(() =>{
                    fs.writeFileSync('RegistroEmpresas.txt', JSON.stringify(empresas, null, 4))
                    motrarDatos(2)
                },1500)
            }

        }
    }
}

function peticion(callback, parametro){
    callback(parametro);
}




module.exports = {
    guardarDatos,
    motrarDatos,
    luchadorPorEmpresa,
    eliminarDatos,
    peticion,
}
