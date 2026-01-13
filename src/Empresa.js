class Empresa{
    #idEmpresa;
    #nombreEmpresa;
    #paisEmpresa;
    constructor({idEmpresa,nombreEmpresa, paisEmpresa, luchadoresContratados}) {
        this.#idEmpresa = idEmpresa;
        this.#nombreEmpresa = nombreEmpresa;
        this.#paisEmpresa = paisEmpresa;
        this.luchadoresContratados = luchadoresContratados;
    }

    toString(){
        return `Empresa ${this.#idEmpresa} 
      Pais: ${this.#paisEmpresa}`;
    }

    toJSON(){
        return `ID: ${this.#idEmpresa} - Empresa ${this.#nombreEmpresa} - Pais: ${this.#paisEmpresa} `;
    }

    //getters and setters
    getIdEmpresa(){return this.#idEmpresa;}
    setIdEmpresa(idEmpresa){this.#idEmpresa = idEmpresa;}

    getPaisEmpresa(){return this.#paisEmpresa;}
    setPaisEmpresa(empresa){this.#paisEmpresa = empresa;}

    getNombreEmpresa(){return this.#nombreEmpresa;}
    setNombreEmpresa(nombreNuevio){this.#nombreEmpresa = nombreNuevio;}
}

module.exports = Empresa;