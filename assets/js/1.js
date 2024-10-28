'use strict'

//Arrays de objetos
const futbolistas = [
    {
        nombre: "Lionel Messi",
        equipo: "Inter Miami",
        posicion: "Delantero",
        goles: 40,
        asistencias: 18,
        partidosJugados: 30,
        tarjetaAmarilla: 3,
        tarjetaRoja: 0
    },
    {
        nombre: "Cristiano Ronaldo",
        equipo: "Al Nassr",
        posicion: "Delantero",
        goles: 35,
        asistencias: 12,
        partidosJugados: 28,
        tarjetaAmarilla: 5,
        tarjetaRoja: 1
    },
    {
        nombre: "Kevin De Bruyne",
        equipo: "Manchester City",
        posicion: "Mediocampista",
        goles: 10,
        asistencias: 22,
        partidosJugados: 25,
        tarjetaAmarilla: 2,
        tarjetaRoja: 0
    },
    {
        nombre: "Virgil van Dijk",
        equipo: "Liverpool",
        posicion: "Defensa",
        goles: 5,
        asistencias: 3,
        partidosJugados: 27,
        tarjetaAmarilla: 4,
        tarjetaRoja: 1
    },
    {
        nombre: "Thibaut Courtois",
        equipo: "Real Madrid",
        posicion: "Portero",
        goles: 0,
        asistencias: 1,
        partidosJugados: 29,
        tarjetaAmarilla: 2,
        tarjetaRoja: 0
    },
    {
        nombre: "Erling Haaland",
        equipo: "Manchester City",
        posicion: "Delantero",
        goles: 45,
        asistencias: 5,
        partidosJugados: 30,
        tarjetaAmarilla: 3,
        tarjetaRoja: 0
    },
    {
        nombre: "Kylian Mbappé",
        equipo: "Paris Saint-Germain",
        posicion: "Delantero",
        goles: 42,
        asistencias: 10,
        partidosJugados: 29,
        tarjetaAmarilla: 2,
        tarjetaRoja: 0
    },
    {
        nombre: "Neymar Jr",
        equipo: "Al-Hilal",
        posicion: "Delantero",
        goles: 20,
        asistencias: 15,
        partidosJugados: 26,
        tarjetaAmarilla: 4,
        tarjetaRoja: 1
    }
];

function filtrarEdad(futbolistas) {
    for (let index = 0; index < futbolistas.length; index++) {
        if(futbolistas[index].goles > 20){
            console.log(futbolistas[index].nombre);
        }
        
    }
    
}

function calcularTotal(futbolistas){
    let total = 0;
    for (let index = 0; index < futbolistas.length; index++) {
        total += futbolistas[index].goles;
    }

    return total;

}

//Ordenar

function contarTarjetas(futbolistas){
    let tarjetas = 0;
    let registroTarjetas = [];
    for (let index = 0; index < futbolistas.length; index++) {
        if(futbolistas[index].tarjetaRoja || futbolistas[index].tarjetaAmarilla){
            tarjetas++;
            const tarjEquipos = {
                'equipos': futbolistas[index].equipo,
                'ntarjetas': tarjetas
            };
            registroTarjetas.push(tarjEquipos);
        }
           
    }

    return registroTarjetas;
}


//Flujo
filtrarEdad(futbolistas);
console.log("Se han marcado "+calcularTotal(futbolistas)+" goles entre todos");
let registroTarjetas = contarTarjetas(futbolistas);
console.log(registroTarjetas);