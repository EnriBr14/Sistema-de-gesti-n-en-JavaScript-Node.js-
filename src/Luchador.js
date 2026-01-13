class Luchador{
    #idLuchador;
    #nombreLuchador;
    #nacionalidad
    constructor({idLuchador,nombreLuchador, empresaContrato,nacionalidad, rivales,facebbok,instagram, youtube}){
        this.#idLuchador = idLuchador;
        this.#nombreLuchador = nombreLuchador;
        this.empresaContrato = empresaContrato;
        this.#nacionalidad = nacionalidad;
        this.rivales = rivales;
        this.redesSociales = {
            facebook: facebbok,
            instagramar: instagram,
            youtube: youtube
        };
    }

    toString(){
        return`
        Nombre: ${this.#nombreLuchador}
        #empresaContrato: ${this.empresaContrato}
        redesSociales: ${this.redesSociales.facebook}
        `
    }


    toJSON(){
        return`ID: ${this.#idLuchador} Nombre: ${this.#nombreLuchador} - EmpresaContrato: ${this.empresaContrato} - RedesSociales: ${this.redesSociales.facebook}`
    }

    getIdLuchador(){return this.#idLuchador;}
    setIdLuchador(idLuchador){this.#idLuchador = idLuchador;}

    getNombreLuchador(){return this.#nombreLuchador;}
    setNombreLuchador(){return this.#nombreLuchador;}

    getNacionalidad(){return this.#nacionalidad;}
    setNacionalidad(){return this.#nacionalidad;}
}



module.exports = Luchador;