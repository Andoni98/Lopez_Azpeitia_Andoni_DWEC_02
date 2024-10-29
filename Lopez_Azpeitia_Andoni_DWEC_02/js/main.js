import { GastoCombustible } from "./GastoCombustible.js";
// ------------------------------ 1. VARIABLES GLOBALES ------------------------------
let tarifasJSON = null;
let gastosJSON = null;
let tarifasJSONpath = '\\json\\tarifasCombustible.json';
let gastosJSONpath = '\\json\\gastosCombustible.json';

// ------------------------------ 2. CARGA INICIAL DE DATOS (NO TOCAR!) ------------------------------
// Esto inicializa los eventos del formulario y carga los datos iniciales
document.addEventListener('DOMContentLoaded', async () => {
    // Cargar los JSON cuando la página se carga, antes de cualquier interacción del usuario
    await cargarDatosIniciales();

    // mostrar datos en consola
    console.log('Tarifas JSON: ', tarifasJSON);
    console.log('Gastos JSON: ', gastosJSON);

    calcularGastoTotal();

    // Inicializar eventos el formularios
    document.getElementById('fuel-form').addEventListener('submit', guardarGasto);
    
    resetForm();
});

function resetForm(){
    document.getElementById("fuel-form").reset();
}

// Función para cargar ambos ficheros JSON al cargar la página
async function cargarDatosIniciales() {

    try {
        // Esperar a que ambos ficheros se carguen
        tarifasJSON = await cargarJSON(tarifasJSONpath);
        gastosJSON = await cargarJSON(gastosJSONpath);

    } catch (error) {
        console.error('Error al cargar los ficheros JSON:', error);
    }
}

// Función para cargar un JSON desde una ruta específica
async function cargarJSON(path) {
    const response = await fetch(path);
    if (!response.ok) {
        throw new Error(`Error al cargar el archivo JSON: ${path}`);
    }
    return await response.json();
}

// ------------------------------ 3. FUNCIONES ------------------------------
// Calcular gasto total por año al iniciar la aplicación
function calcularGastoTotal() {
    // array asociativo con clave=año y valor=gasto total
    let aniosArray = {
        2010:gastosJSON[50].precioViaje+gastosJSON[51].precioViaje+gastosJSON[52].precioViaje+gastosJSON[53].precioViaje+gastosJSON[54].precioViaje,
        2011:gastosJSON[45].precioViaje+gastosJSON[46].precioViaje+gastosJSON[47].precioViaje+gastosJSON[48].precioViaje+gastosJSON[49].precioViaje,
        2012:gastosJSON[40].precioViaje+gastosJSON[41].precioViaje+gastosJSON[42].precioViaje+gastosJSON[43].precioViaje+gastosJSON[44].precioViaje,
        2013:gastosJSON[35].precioViaje+gastosJSON[36].precioViaje+gastosJSON[37].precioViaje+gastosJSON[38].precioViaje+gastosJSON[39].precioViaje,
        2014:gastosJSON[30].precioViaje+gastosJSON[31].precioViaje+gastosJSON[32].precioViaje+gastosJSON[33].precioViaje+gastosJSON[34].precioViaje,
        2015:gastosJSON[25].precioViaje+gastosJSON[26].precioViaje+gastosJSON[27].precioViaje+gastosJSON[28].precioViaje+gastosJSON[29].precioViaje,
        2016:gastosJSON[20].precioViaje+gastosJSON[21].precioViaje+gastosJSON[22].precioViaje+gastosJSON[23].precioViaje+gastosJSON[24].precioViaje,
        2017:gastosJSON[15].precioViaje+gastosJSON[16].precioViaje+gastosJSON[17].precioViaje+gastosJSON[18].precioViaje+gastosJSON[19].precioViaje,
        2018:gastosJSON[10].precioViaje+gastosJSON[11].precioViaje+gastosJSON[12].precioViaje+gastosJSON[13].precioViaje+gastosJSON[14].precioViaje,
        2019:gastosJSON[5].precioViaje+gastosJSON[6].precioViaje+gastosJSON[7].precioViaje+gastosJSON[8].precioViaje+gastosJSON[9].precioViaje,
        2020:gastosJSON[0].precioViaje+gastosJSON[1].precioViaje+gastosJSON[2].precioViaje+gastosJSON[3].precioViaje+gastosJSON[4].precioViaje
    }
    const aniosArray2010 = document.getElementById('gasto2010');
    aniosArray2010.innerHTML=Math.round(aniosArray[2010] * 100) / 100;
    const aniosArray2011 = document.getElementById('gasto2011');
    aniosArray2011.innerHTML=Math.round(aniosArray[2011] * 100) / 100;
    const aniosArray2012 = document.getElementById('gasto2012');
    aniosArray2012.innerHTML=Math.round(aniosArray[2012] * 100) / 100;
    const aniosArray2013 = document.getElementById('gasto2013');
    aniosArray2013.innerHTML=Math.round(aniosArray[2013] * 100) / 100;
    const aniosArray2014 = document.getElementById('gasto2014');
    aniosArray2014.innerHTML=Math.round(aniosArray[2014] * 100) / 100;
    const aniosArray2015 = document.getElementById('gasto2015');
    aniosArray2015.innerHTML=Math.round(aniosArray[2015] * 100) / 100;
    const aniosArray2016 = document.getElementById('gasto2016');
    aniosArray2016.innerHTML=Math.round(aniosArray[2016] * 100) / 100;
    const aniosArray2017 = document.getElementById('gasto2017');
    aniosArray2017.innerHTML=Math.round(aniosArray[2017] * 100) / 100;
    const aniosArray2018 = document.getElementById('gasto2018');
    aniosArray2018.innerHTML=Math.round(aniosArray[2018] * 100) / 100;
    const aniosArray2019 = document.getElementById('gasto2019');
    aniosArray2019.innerHTML=Math.round(aniosArray[2019] * 100) / 100;
    const aniosArray2020 = document.getElementById('gasto2020');
    aniosArray2020.innerHTML=Math.round(aniosArray[2020] * 100) / 100;
}

// guardar gasto introducido y actualizar datos
function guardarGasto(event) {
    event.preventDefault();

    // Obtener los datos del formulario
    const tipoVehiculo = document.getElementById('vehicle-type').value;
    const fecha = new Date(document.getElementById('date').value);
    const kilometros = parseFloat(document.getElementById('kilometers').value);
    var tarifa ;
    var año = fecha.getFullYear();
    var precioViaje;
    if(tipoVehiculo=='furgoneta'&&año==2020){
        tarifa = tarifasJSON.tarifas[0].vehiculos.furgoneta;
        precioViaje = Math.round(tarifa*kilometros*100)/100
        function gasto2020(){
            var gasto2020 = document.getElementById('gasto2020')
            gasto2020.innerHTML = Math.round((Number(gasto2020.textContent)+precioViaje)*100)/100
        }
        window.onload = gasto2020();
    }
    if(tipoVehiculo=='moto'&&año==2020){
        tarifa = tarifasJSON.tarifas[0].vehiculos.moto;
        precioViaje = Math.round(tarifa*kilometros*100)/100
        function gasto2020(){
            var gasto2020 = document.getElementById('gasto2020')
            gasto2020.innerHTML = Math.round((Number(gasto2020.textContent)+precioViaje)*100)/100
        }
        window.onload = gasto2020();
    }
    if(tipoVehiculo=='camion'&&año==2020){
        tarifa = tarifasJSON.tarifas[0].vehiculos.camion;
        precioViaje = Math.round(tarifa*kilometros*100)/100
        function gasto2020(){
            var gasto2020 = document.getElementById('gasto2020')
            gasto2020.innerHTML = Math.round((Number(gasto2020.textContent)+precioViaje)*100)/100
        }
        window.onload = gasto2020();
    }
    if(tipoVehiculo=='furgoneta'&&año==2019){
        tarifa = tarifasJSON.tarifas[1].vehiculos.furgoneta;
        precioViaje = Math.round(tarifa*kilometros*100)/100
        function gasto2019(){
            var gasto2019 = document.getElementById('gasto2019')
            gasto2019.innerHTML = Math.round((Number(gasto2019.textContent)+precioViaje)*100)/100
        }
        window.onload = gasto2019();
    }
    if(tipoVehiculo=='moto'&&año==2019){
        tarifa = tarifasJSON.tarifas[1].vehiculos.moto;
        precioViaje = Math.round(tarifa*kilometros*100)/100
        function gasto2019(){
            var gasto2019 = document.getElementById('gasto2019')
            gasto2019.innerHTML = Math.round((Number(gasto2019.textContent)+precioViaje)*100)/100
        }
        window.onload = gasto2019();
    }
    if(tipoVehiculo=='camion'&&año==2019){
        tarifa = tarifasJSON.tarifas[1].vehiculos.camion;
        precioViaje = Math.round(tarifa*kilometros*100)/100
        function gasto2019(){
            var gasto2019 = document.getElementById('gasto2019')
            gasto2019.innerHTML = Math.round((Number(gasto2019.textContent)+precioViaje)*100)/100
        }
        window.onload = gasto2019();
    }
    if(tipoVehiculo=='furgoneta'&&año==2018){
        tarifa = tarifasJSON.tarifas[2].vehiculos.furgoneta;
        precioViaje = Math.round(tarifa*kilometros*100)/100
        function gasto2018(){
            var gasto2018 = document.getElementById('gasto2018')
            gasto2018.innerHTML = Math.round((Number(gasto2018.textContent)+precioViaje)*100)/100
        }
        window.onload = gasto2018();
    }
    if(tipoVehiculo=='moto'&&año==2018){
        tarifa = tarifasJSON.tarifas[2].vehiculos.moto;
        precioViaje = Math.round(tarifa*kilometros*100)/100
        function gasto2018(){
            var gasto2018 = document.getElementById('gasto2018')
            gasto2018.innerHTML = Math.round((Number(gasto2018.textContent)+precioViaje)*100)/100
        }
        window.onload = gasto2018();
    }
    if(tipoVehiculo=='camion'&&año==2018){
        tarifa = tarifasJSON.tarifas[2].vehiculos.camion;
        precioViaje = Math.round(tarifa*kilometros*100)/100
        function gasto2018(){
            var gasto2018 = document.getElementById('gasto2018')
            gasto2018.innerHTML = Math.round((Number(gasto2018.textContent)+precioViaje)*100)/100
        }
        window.onload = gasto2018();
    }
    if(tipoVehiculo=='furgoneta'&&año==2017){
        tarifa = tarifasJSON.tarifas[3].vehiculos.furgoneta;
        precioViaje = Math.round(tarifa*kilometros*100)/100
        function gasto2017(){
            var gasto2017 = document.getElementById('gasto2017')
            gasto2017.innerHTML = Math.round((Number(gasto2017.textContent)+precioViaje)*100)/100
        }
        window.onload = gasto2017();
    }
    if(tipoVehiculo=='moto'&&año==2017){
        tarifa = tarifasJSON.tarifas[3].vehiculos.moto;
        precioViaje = Math.round(tarifa*kilometros*100)/100
        function gasto2017(){
            var gasto2017 = document.getElementById('gasto2017')
            gasto2017.innerHTML = Math.round((Number(gasto2017.textContent)+precioViaje)*100)/100
        }
        window.onload = gasto2017();
    }
    if(tipoVehiculo=='camion'&&año==2017){
        tarifa = tarifasJSON.tarifas[3].vehiculos.camion;
        precioViaje = Math.round(tarifa*kilometros*100)/100
        function gasto2017(){
            var gasto2017 = document.getElementById('gasto2017')
            gasto2017.innerHTML = Math.round((Number(gasto2017.textContent)+precioViaje)*100)/100
        }
        window.onload = gasto2017();
    }
    if(tipoVehiculo=='furgoneta'&&año==2016){
        tarifa = tarifasJSON.tarifas[4].vehiculos.furgoneta;
        precioViaje = Math.round(tarifa*kilometros*100)/100
        function gasto2016(){
            var gasto2016 = document.getElementById('gasto2016')
            gasto2016.innerHTML = Math.round((Number(gasto2016.textContent)+precioViaje)*100)/100
        }
        window.onload = gasto2016();
    }
    if(tipoVehiculo=='moto'&&año==2016){
        tarifa = tarifasJSON.tarifas[4].vehiculos.moto;
        precioViaje = Math.round(tarifa*kilometros*100)/100
        function gasto2016(){
            var gasto2016 = document.getElementById('gasto2016')
            gasto2016.innerHTML = Math.round((Number(gasto2016.textContent)+precioViaje)*100)/100
        }
        window.onload = gasto2016();
    }
    if(tipoVehiculo=='camion'&&año==2016){
        tarifa = tarifasJSON.tarifas[4].vehiculos.camion;
        precioViaje = Math.round(tarifa*kilometros*100)/100
        function gasto2016(){
            var gasto2016 = document.getElementById('gasto2016')
            gasto2016.innerHTML = Math.round((Number(gasto2016.textContent)+precioViaje)*100)/100
        }
        window.onload = gasto2016();
    }
    if(tipoVehiculo=='furgoneta'&&año==2015){
        tarifa = tarifasJSON.tarifas[5].vehiculos.furgoneta;
        precioViaje = Math.round(tarifa*kilometros*100)/100
        function gasto2015(){
            var gasto2015 = document.getElementById('gasto2015')
            gasto2015.innerHTML = Math.round((Number(gasto2015.textContent)+precioViaje)*100)/100
        }
        window.onload = gasto2015();
    }
    if(tipoVehiculo=='moto'&&año==2015){
        tarifa = tarifasJSON.tarifas[5].vehiculos.moto;
        precioViaje = Math.round(tarifa*kilometros*100)/100
        function gasto2015(){
            var gasto2015 = document.getElementById('gasto2015')
            gasto2015.innerHTML = Math.round((Number(gasto2015.textContent)+precioViaje)*100)/100
        }
        window.onload = gasto2015();
    }
    if(tipoVehiculo=='camion'&&año==2015){
        tarifa = tarifasJSON.tarifas[5].vehiculos.camion;
        precioViaje = Math.round(tarifa*kilometros*100)/100
        function gasto2015(){
            var gasto2015 = document.getElementById('gasto2015')
            gasto2015.innerHTML = Math.round((Number(gasto2015.textContent)+precioViaje)*100)/100
        }
        window.onload = gasto2015();
    }
    if(tipoVehiculo=='furgoneta'&&año==2014){
        tarifa = tarifasJSON.tarifas[6].vehiculos.furgoneta;
        precioViaje = Math.round(tarifa*kilometros*100)/100
        function gasto2014(){
            var gasto2014 = document.getElementById('gasto2014')
            gasto2014.innerHTML = Math.round((Number(gasto2014.textContent)+precioViaje)*100)/100
        }
        window.onload = gasto2014();
    }
    if(tipoVehiculo=='moto'&&año==2014){
        tarifa = tarifasJSON.tarifas[6].vehiculos.moto;
        precioViaje = Math.round(tarifa*kilometros*100)/100
        function gasto2014(){
            var gasto2014 = document.getElementById('gasto2014')
            gasto2014.innerHTML = Math.round((Number(gasto2014.textContent)+precioViaje)*100)/100
        }
        window.onload = gasto2014();
    }
    if(tipoVehiculo=='camion'&&año==2014){
        tarifa = tarifasJSON.tarifas[6].vehiculos.camion;
        precioViaje = Math.round(tarifa*kilometros*100)/100
        function gasto2014(){
            var gasto2014 = document.getElementById('gasto2014')
            gasto2014.innerHTML = Math.round((Number(gasto2014.textContent)+precioViaje)*100)/100
        }
        window.onload = gasto2014();
    }
    if(tipoVehiculo=='furgoneta'&&año==2013){
        tarifa = tarifasJSON.tarifas[7].vehiculos.furgoneta;
        precioViaje = Math.round(tarifa*kilometros*100)/100
        function gasto2013(){
            var gasto2013 = document.getElementById('gasto2013')
            gasto2013.innerHTML = Math.round((Number(gasto2013.textContent)+precioViaje)*100)/100
        }
        window.onload = gasto2013();
    }
    if(tipoVehiculo=='moto'&&año==2013){
        tarifa = tarifasJSON.tarifas[7].vehiculos.moto;
        precioViaje = Math.round(tarifa*kilometros*100)/100
        function gasto2013(){
            var gasto2013 = document.getElementById('gasto2013')
            gasto2013.innerHTML = Math.round((Number(gasto2013.textContent)+precioViaje)*100)/100
        }
        window.onload = gasto2013();
    }
    if(tipoVehiculo=='camion'&&año==2013){
        tarifa = tarifasJSON.tarifas[7].vehiculos.camion;
        precioViaje = Math.round(tarifa*kilometros*100)/100
        function gasto2013(){
            var gasto2013 = document.getElementById('gasto2013')
            gasto2013.innerHTML = Math.round((Number(gasto2013.textContent)+precioViaje)*100)/100
        }
        window.onload = gasto2013();
    }
    if(tipoVehiculo=='furgoneta'&&año==2012){
        tarifa = tarifasJSON.tarifas[8].vehiculos.furgoneta;
        precioViaje = Math.round(tarifa*kilometros*100)/100
        function gasto2012(){
            var gasto2012 = document.getElementById('gasto2012')
            gasto2012.innerHTML = Math.round((Number(gasto2012.textContent)+precioViaje)*100)/100
        }
        window.onload = gasto2012();
    }
    if(tipoVehiculo=='moto'&&año==2012){
        tarifa = tarifasJSON.tarifas[8].vehiculos.moto;
        precioViaje = Math.round(tarifa*kilometros*100)/100
        function gasto2012(){
            var gasto2012 = document.getElementById('gasto2012')
            gasto2012.innerHTML = Math.round((Number(gasto2012.textContent)+precioViaje)*100)/100
        }
        window.onload = gasto2012();
    }
    if(tipoVehiculo=='camion'&&año==2012){
        tarifa = tarifasJSON.tarifas[8].vehiculos.camion;
        precioViaje = Math.round(tarifa*kilometros*100)/100
        function gasto2012(){
            var gasto2012 = document.getElementById('gasto2012')
            gasto2012.innerHTML = Math.round((Number(gasto2012.textContent)+precioViaje)*100)/100
        }
        window.onload = gasto2012();
    }
    if(tipoVehiculo=='furgoneta'&&año==2011){
        tarifa = tarifasJSON.tarifas[9].vehiculos.furgoneta;
        precioViaje = Math.round(tarifa*kilometros*100)/100
        function gasto2011(){
            var gasto2011 = document.getElementById('gasto2011')
            gasto2011.innerHTML = Math.round((Number(gasto2011.textContent)+precioViaje)*100)/100
        }
        window.onload = gasto2011();
    }
    if(tipoVehiculo=='moto'&&año==2011){
        tarifa = tarifasJSON.tarifas[9].vehiculos.moto;
        precioViaje = Math.round(tarifa*kilometros*100)/100
        function gasto2011(){
            var gasto2011 = document.getElementById('gasto2011')
            gasto2011.innerHTML = Math.round((Number(gasto2011.textContent)+precioViaje)*100)/100
        }
        window.onload = gasto2011();
    }
    if(tipoVehiculo=='camion'&&año==2011){
        tarifa = tarifasJSON.tarifas[9].vehiculos.camion;
        precioViaje = Math.round(tarifa*kilometros*100)/100
        function gasto2011(){
            var gasto2011 = document.getElementById('gasto2011')
            gasto2011.innerHTML = Math.round((Number(gasto2011.textContent)+precioViaje)*100)/100
        }
        window.onload = gasto2011();
    }
    if(tipoVehiculo=='furgoneta'&&año==2010){
        tarifa = tarifasJSON.tarifas[10].vehiculos.furgoneta;
        precioViaje = Math.round(tarifa*kilometros*100)/100
        function gasto2010(){
            var gasto2010 = document.getElementById('gasto2010')
            gasto2010.innerHTML = Math.round((Number(gasto2010.textContent)+precioViaje)*100)/100
        }
        window.onload = gasto2010();
    }
    if(tipoVehiculo=='moto'&&año==2010){
        tarifa = tarifasJSON.tarifas[10].vehiculos.moto;
        precioViaje = Math.round(tarifa*kilometros*100)/100
        function gasto2010(){
            var gasto2010 = document.getElementById('gasto2010')
            gasto2010.innerHTML = Math.round((Number(gasto2010.textContent)+precioViaje)*100)/100
        }
        window.onload = gasto2010();
    }
    if(tipoVehiculo=='camion'&&año==2010){
        tarifa = tarifasJSON.tarifas[10].vehiculos.camion;
        precioViaje = Math.round(tarifa*kilometros*100)/100
        function gasto2010(){
            var gasto2010 = document.getElementById('gasto2010')
            gasto2010.innerHTML = Math.round((Number(gasto2010.textContent)+precioViaje)*100)/100
        }
        window.onload = gasto2010();
    }
    var gastoCombustible = new GastoCombustible(tipoVehiculo, fecha, kilometros, precioViaje)
    gastoCombustible.convertToJSON (gastoCombustible)
    document.getElementById('fuel-form').reset();

    
}

