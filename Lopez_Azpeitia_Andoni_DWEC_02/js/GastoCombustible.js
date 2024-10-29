class GastoCombustible {
    constructor(vehicleType, date, kilometers, precioViaje){
        this.vehicleType=vehicleType;
        this.date=date;
        this.kilometers=kilometers;
        this.precioViaje=precioViaje;
    }
    convertToJSON (object) {
    let JSONvalor = JSON.stringify(object)
    var JSONvariable = "<li>"+JSONvalor+"</li>";
    document.getElementById('expense-list').innerHTML += JSONvariable;
    }
}
export {GastoCombustible}