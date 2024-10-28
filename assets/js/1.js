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

//ACT 1 - Realizar una función para filtrar los jugadores que tengan más de 20 goles
function filtrarGoles(futbolistas) {
    let futbolistasGoleadores = [];
    for (let index = 0; index < futbolistas.length; index++) {
        if (futbolistas[index].goles > 20) {
            futbolistasGoleadores[index] = futbolistas[index].nombre;
        }
    }

    return futbolistasGoleadores.filter(nombre => nombre !== undefined);
}
//ACT 2 - Obtener el total de goles de todos los jugadores 
function calcularTotal(futbolistas){
    let total = 0;
    for (let index = 0; index < futbolistas.length; index++) {
        total += futbolistas[index].goles;
    }

    return total;

}

//ACT 3 - Ordenar los jugadores por asistencias (de mayor a menor) 
function ordenarPorAsistencia(futbolistas) {
    for (let i = 0; i < futbolistas.length - 1; i++) {
        for (let j = 0; j < futbolistas.length - 1 - i; j++) {
            if (futbolistas[j].asistencias > futbolistas[j + 1].asistencias) {
                // Intercambiar si el jugador j tiene menos asistencias que el jugador j + 1
                const temp = futbolistas[j];
                futbolistas[j] = futbolistas[j + 1];
                futbolistas[j + 1] = temp;
            }
        }
    }

    return futbolistas;
}

//ACT 4 - Contar tarjetas rojas y amarillas por equipo  
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
//ACT 5 - Obtener el promedio de goles por partido para cada jugador  
function promedioGoles(futbolistas) {
    let promedioDeGoles = [];
    
    for (let index = 0; index < futbolistas.length; index++) {
        let promedio = futbolistas[index].goles / futbolistas[index].partidosJugados;
        const registroMedio = {
            nombre: futbolistas[index].nombre,
            promedio: promedio
        };
        promedioDeGoles.push(registroMedio);
    }

    return promedioDeGoles;
}

//ACT 6 - Encontrar el jugador con más asistencias 
function mvpAsists(futbolistas) {
    let topAsistencia = futbolistas[0];

    for (let index = 0; index < futbolistas.length; index++) {
        if (futbolistas[index].asistencias > topAsistencia.asistencias) {
            topAsistencia = futbolistas[index].nombre;
        }
    }

    return topAsistencia.nombre;
}

//ACT 7 - Listar los nombres de los jugadores por posición  
function listarJugadoresPorPosicion(futbolistas) {
    const jugadoresPorPosicion = {
        Portero: [],
        Defensa: [],
        Centrocampista: [],
        Delantero: []
    };

    for (let index = 0; index < futbolistas.length; index++) {
        const futbolista = futbolistas[index];

        if (futbolista.posicion === "Portero") {
            jugadoresPorPosicion.Portero.push(futbolista.nombre);
        } else if (futbolista.posicion === "Defensa") {
            jugadoresPorPosicion.Defensa.push(futbolista.nombre);
        } else if (futbolista.posicion === "Mediocampista") {
            jugadoresPorPosicion.Centrocampista.push(futbolista.nombre);
        } else if (futbolista.posicion === "Delantero") {
            jugadoresPorPosicion.Delantero.push(futbolista.nombre);
        }
    }

    return jugadoresPorPosicion;
}


//Flujo
console.log(filtrarGoles(futbolistas));
console.log("Se han marcado "+calcularTotal(futbolistas)+" goles entre todos");
console.log(ordenarPorAsistencia(futbolistas));
console.log(contarTarjetas(futbolistas));
console.log(promedioGoles(futbolistas));
console.log("El jugador con mas asistencias es: "+mvpAsists(futbolistas));
console.log(listarJugadoresPorPosicion(futbolistas));