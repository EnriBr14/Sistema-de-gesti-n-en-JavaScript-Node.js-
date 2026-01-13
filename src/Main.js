const Luchador = require("./Luchador")
const Empresa = require("./Empresa")
const Servicio = require ("./Servicio")
const {motrarDatos, luchadorPorEmpresa, eliminarDatos} = require("./Servicio");
//Empresas------------------------------------------------------------------------------------
const em1 = new Empresa({
    idEmpresa:1,
    nombreEmpresa: "WWE",
    paisEmpresa: "Estados Unidos",
    luchadoresContratados:[]})

const em2 = new Empresa({
    idEmpresa:2,
    nombreEmpresa: "AAA",
    paisEmpresa: "Mexico",
    luchadoresContratados:[]
})
const em3 = new Empresa({ idEmpresa:3,
    nombreEmpresa: "CMLL",
    paisEmpresa: "Mexico",
    luchadoresContratados:[]})
const em4 = new Empresa({
    idEmpresa:4,
    nombreEmpresa: "NXT",
    paisEmpresa: "Estados Unidos",
    luchadoresContratados:[]
})

//Guardando a las empresas
Servicio.guardarDatos(em1);
Servicio.guardarDatos(em2);
Servicio.guardarDatos(em3);
Servicio.guardarDatos(em4);

//Luchadores----------------------------------------------------------------------------------
//-------------------WWE
const l1 = new Luchador({
    idLuchador: 1,
    nombreLuchador: "El Grande Americano",
    empresaContrato: "WWE",
    nacionalidad: "Aleman",
    rivales: ["Dragon Lee", "HDLV", "Rey Misterio"],
    facebbok: "ElGrande",
    instagram: "@Americano",
    youtube: "El Grande Americano WWE"});

const l2 = new Luchador({
    idLuchador: 2,
    nombreLuchador: "Mistico",
    empresaContrato: "CMLL",
    nacionalidad: "Mexicano",
    rivales: ["El Difunto", "Mascara Dorada", "Atlantis"],
    facebbok: "Misitco Oficial",
    instagram: "@Carisitico",
    youtube: "Mistico Caristico"});

const l3 = new Luchador({
    idLuchador: 3,
    nombreLuchador: "Pshyco Clown",
    empresaContrato: "AAA",
    nacionalidad: "Mexicano",
    rivales: ["Sanson", "Forastero", "El Mesias"],
    facebbok: "Pshyco Clown Facebook",
    instagram: "@Pshyco Clown Instagram",
    youtube: "Pshyco Clown YouTube Channel"});

const l4 = new Luchador({
    idLuchador: 4,
    nombreLuchador: "Octagon Jr",
    empresaContrato: "AAA",
    nacionalidad: "Mexicano",
    rivales: ["Mr Iguana", "Murder Clown", "Cibernetico"],
    facebbok: "Octagon Jr Facebook",
    instagram: "@Octa Instagram",
    youtube: "Octagon YouTube Channel"});

const l5 = new Luchador({
    idLuchador: 5,
    nombreLuchador: "La Parka",
    empresaContrato: "AAA",
    nacionalidad: "Mexicano",
    rivales: ["L.A Park", "Mascara Año 2000", "El Mesias", "Charly Manson"],
    facebbok: "La ParkaFacebook",
    instagram: "@La Parka Instagram",
    youtube: "Parka YouTube Channel"});

const l6 = new Luchador({
    idLuchador: 6,
    nombreLuchador: "Pagano",
    empresaContrato: "AAA",
    nacionalidad: "Mexicano",
    rivales: ["Sanson", "Forastero", "Cibernetico"],
    facebbok: "Pagano Oficial Facebook",
    instagram: "@Noa Noa Style Instagram",
    youtube: "The Pagano YouTube Channel"});

const l7 = new Luchador({
    idLuchador: 7,
    nombreLuchador: "Mascara Dorada",
    empresaContrato: "CMLL",
    nacionalidad: "Mexicano",
    rivales: ["Misitico", "Atlantis", "Soberano Jr"],
    facebbok: "Mascara Dorada Oficial Facebook",
    instagram: "@Mascara Dorada Instagram",
    youtube: "Golden Mask YouTube Channel"});

const l8 = new Luchador({
    idLuchador: 8,
    nombreLuchador: "Soberano Jr",
    empresaContrato: "CMLL",
    nacionalidad: "Mexicano",
    rivales: ["Mascara Dorada", "Mistico", "El Barbaro"],
    facebbok: "",
    instagram: "Soberano Jr Instagram",
    youtube: "S Jr YouTube Channel"});

const l9 = new Luchador({
    idLuchador: 9,
    nombreLuchador: "Atlantis",
    empresaContrato: "CMLL",
    nacionalidad: "Mexicano",
    rivales: ["El Templario", "Neon", "Mistico"],
    facebbok: "Atlantis Oficial Facebook",
    instagram: "@Atlantis Instagram",
    youtube: "Atlantis YouTube Channel"});

const l10 = new Luchador({
    idLuchador: 10,
    nombreLuchador: "Penta OM",
    empresaContrato: "WWE",
    nacionalidad: "Mexicano",
    rivales: ["Dominik", "Rusell", "AJ Styles"],
    facebbok: "Penta Oficial Facebook",
    instagram: "@Penta Instagram",
    youtube: "Penta YouTube Channel"});

const l11 = new Luchador({
    idLuchador: 11,
    nombreLuchador: "Dominik MIstierio",
    empresaContrato: "WWE",
    nacionalidad: "Estados Unidos",
    rivales: ["Dragon Lee", "AJ Styles", "Hijo Del Vikingo"],
    facebbok: "DM Oficial Facebook",
    instagram: "@DM Instagram",
    youtube: "DM YouTube Channel"});

const l12 = new Luchador({
    idLuchador: 12,
    nombreLuchador: "Dragon Lee",
    empresaContrato: "WWE",
    nacionalidad: "Mexicano",
    rivales: ["Axiom", "AJ Styles", "Hijo Del Vikingo"],
    facebbok: "D Lee Oficial Facebook",
    instagram: "@D Lee Instagram",
    youtube: "Dr Lee YouTube Channel"});

const l13 = new Luchador({
    idLuchador: 13,
    nombreLuchador: "Rey Misterio",
    empresaContrato: "WWE",
    nacionalidad: "Estados Unidos",
    rivales: ["Dragon Lee", "AJ Styles", "Hijo Del Vikingo"],
    facebbok: "Rey Misterio Oficial Facebook",
    instagram: "@Rey Misterio Instagram",
    youtube: "Rey YouTube Channel"});

const l14 = new Luchador({
    idLuchador: 14,
    nombreLuchador: "J´Von Evans",
    empresaContrato: "NXT",
    nacionalidad: "Estados Unidos",
    rivales: ["Laredo Kid", "La Parka"],
    facebbok: "Evans Oficial Facebook",
    instagram: "@Evans Instagram",
    youtube: "Evans YouTube Channel"});

const l15 = new Luchador({
    idLuchador: 15,
    nombreLuchador: "Ethan Page",
    empresaContrato: "NXT",
    nacionalidad: "Estados Unidos",
    rivales: ["Hijo de Dr Wagner Jr", "Mr iguana"],
    facebbok: "EHT Oficial Facebook",
    instagram: "@ETH Instagram",
    youtube: "ETH YouTube Channel"});
//Guardando a los luchadores
Servicio.guardarDatos(l1);
Servicio.guardarDatos(l2);
Servicio.guardarDatos(l3);
Servicio.guardarDatos(l4);
Servicio.guardarDatos(l5);
Servicio.guardarDatos(l6);
Servicio.guardarDatos(l7);
Servicio.guardarDatos(l8);
Servicio.guardarDatos(l9);
Servicio.guardarDatos(l10);
Servicio.guardarDatos(l11);
Servicio.guardarDatos(l12);
Servicio.guardarDatos(l13);
Servicio.guardarDatos(l14);
Servicio.guardarDatos(l15);


//--------------------------------------------Pruebas------------------------------------------------------

const l16 = new Luchador({
    idLuchador: 16,
    nombreLuchador: "El Grande Americano",
    empresaContrato: "WWE",
    nacionalidad: "Aleman",
    rivales: ["Dragon Lee", "HDLV", "Rey Misterio"],
    facebbok: "ElGrande",
    instagram: "@Americano",
    youtube: "El Grande Americano WWE"});
//Servicio.guardarDatos(l16);

const em5 = new Empresa(5, "NXT", "Estados Unidos", []);
//Servicio.guardarDatos(em5);
//---------------------------------------------------------------------------------------------------------
// Menu Principal
// Opcion 1 - Mostrar luchadores registrados
// Opcion 2 - Mostrar empresas registraas
// - Mostrar luchadores por empresa (AAA - NXT - CMLL - WWE)
// - Eliminar luchador o empresa





//Servicio.luchadorPorEmpresa("CMLL")
//Servicio.eliminarDatos("WWE", true)
//Servicio.motrarDatos(1)


console.log("Callback----------------------------")
Servicio.peticion(motrarDatos, 1)
