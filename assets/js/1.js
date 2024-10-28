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

function filtrarGoles(futbolistas) {
    let futbolistasGoleadores = [];
    for (let index = 0; index < futbolistas.length; index++) {
        if (futbolistas[index].goles > 20) {
            futbolistasGoleadores[index] = futbolistas[index].nombre;
        }
    }

    return futbolistasGoleadores.filter(nombre => nombre !== undefined);
}

function calcularTotal(futbolistas){
    let total = 0;
    for (let index = 0; index < futbolistas.length; index++) {
        total += futbolistas[index].goles;
    }

    return total;

}

//Ordenar
/* Version rebuscada
function contarTarjetas(futbolistas) {
    let registroTarjetas = [];

    for (let index = 0; index < futbolistas.length; index++) {
        const equipo = futbolistas[index].equipo;

        if (futbolistas[index].tarjetaRoja || futbolistas[index].tarjetaAmarilla) {
            let encontrado = false;

            // Verifica si el equipo ya está en registroTarjetas
            for (let i = 0; i < registroTarjetas.length; i++) {
                if (registroTarjetas[i].equipos === equipo) {
                    registroTarjetas[i].ntarjetas += futbolistas[index].tarjetaAmarilla + futbolistas[index].tarjetaRoja;
                    encontrado = true;
                    break;
                }
            }

            // Si no está, crea un nuevo objeto para el equipo
            if (!encontrado) {
                const tarjEquipos = {
                    equipos: equipo,
                    ntarjetas: futbolistas[index].tarjetaAmarilla + futbolistas[index].tarjetaRoja
                };
                registroTarjetas.push(tarjEquipos);
            }
        }
    }

    return registroTarjetas;
}
*/
// Version Guarra pero funcional
function contarTarjetas(futbolistas) {
    const tarjetasPorEquipo = {
        InterMiami: 0,
        AlNassr: 0,
        ManchesterCity: 0,
        Liverpool: 0,
        RealMadrid: 0,
        PSG: 0,
        AlHilal: 0,
    };

    for (let index = 0; index < futbolistas.length; index++) {
        if (futbolistas[index].tarjetaRoja || futbolistas[index].tarjetaAmarilla) {
            if (futbolistas[index].equipo === "Inter Miami") {
                tarjetasPorEquipo.InterMiami += futbolistas[index].tarjetaAmarilla + futbolistas[index].tarjetaRoja;
            } else if (futbolistas[index].equipo === "Al Nassr") {
                tarjetasPorEquipo.AlNassr += futbolistas[index].tarjetaAmarilla + futbolistas[index].tarjetaRoja;
            } else if (futbolistas[index].equipo === "Manchester City") {
                tarjetasPorEquipo.ManchesterCity += futbolistas[index].tarjetaAmarilla + futbolistas[index].tarjetaRoja;
            } else if (futbolistas[index].equipo === "Liverpool") {
                tarjetasPorEquipo.Liverpool += futbolistas[index].tarjetaAmarilla + futbolistas[index].tarjetaRoja;
            } else if (futbolistas[index].equipo === "Real Madrid") {
                tarjetasPorEquipo.RealMadrid += futbolistas[index].tarjetaAmarilla + futbolistas[index].tarjetaRoja;
            } else if (futbolistas[index].equipo === "Paris Saint-Germain") {
                tarjetasPorEquipo.PSG += futbolistas[index].tarjetaAmarilla + futbolistas[index].tarjetaRoja;
            } else if (futbolistas[index].equipo === "Al-Hilal") {
                tarjetasPorEquipo.AlHilal += futbolistas[index].tarjetaAmarilla + futbolistas[index].tarjetaRoja;
            }
        }
    }

    return tarjetasPorEquipo;
}


//Flujo
console.log(filtrarGoles(futbolistas));
console.log("Se han marcado "+calcularTotal(futbolistas)+" goles entre todos");
console.log(contarTarjetas(futbolistas));