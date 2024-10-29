'use strict';

// Arrays de objetos
const futbolistas = [
    { nombre: "Lionel Messi", equipo: "Inter Miami", posicion: "Delantero", goles: 40, asistencias: 18, partidosJugados: 30, tarjetaAmarilla: 3, tarjetaRoja: 0 },
    { nombre: "Cristiano Ronaldo", equipo: "Al Nassr", posicion: "Delantero", goles: 35, asistencias: 12, partidosJugados: 28, tarjetaAmarilla: 5, tarjetaRoja: 1 },
    { nombre: "Kevin De Bruyne", equipo: "Manchester City", posicion: "Mediocampista", goles: 10, asistencias: 22, partidosJugados: 25, tarjetaAmarilla: 2, tarjetaRoja: 0 },
    { nombre: "Virgil van Dijk", equipo: "Liverpool", posicion: "Defensa", goles: 5, asistencias: 3, partidosJugados: 27, tarjetaAmarilla: 4, tarjetaRoja: 1 },
    { nombre: "Thibaut Courtois", equipo: "Real Madrid", posicion: "Portero", goles: 0, asistencias: 1, partidosJugados: 29, tarjetaAmarilla: 2, tarjetaRoja: 0 },
    { nombre: "Erling Haaland", equipo: "Manchester City", posicion: "Delantero", goles: 45, asistencias: 5, partidosJugados: 30, tarjetaAmarilla: 3, tarjetaRoja: 0 },
    { nombre: "Kylian Mbappé", equipo: "Paris Saint-Germain", posicion: "Delantero", goles: 42, asistencias: 10, partidosJugados: 29, tarjetaAmarilla: 2, tarjetaRoja: 0 },
    { nombre: "Neymar Jr", equipo: "Al-Hilal", posicion: "Delantero", goles: 20, asistencias: 15, partidosJugados: 26, tarjetaAmarilla: 4, tarjetaRoja: 1 }
];

// ACT 1 - Filtrar jugadores con más de 20 goles
const filtrarGoles = (futbolistas) => futbolistas
    .filter(futbolista => futbolista.goles > 20)
    .map(futbolista => futbolista.nombre);

// ACT 2 - Calcular el total de goles
const calcularTotal = (futbolistas) => futbolistas
    .reduce((total, futbolista) => total + futbolista.goles, 0);

// ACT 3 - Ordenar jugadores por asistencias (de mayor a menor)
const ordenarPorAsistencia = (futbolistas) => futbolistas
    .slice() // Crear una copia para no mutar el original
    .sort((a, b) => b.asistencias - a.asistencias);

// ACT 4 - Contar tarjetas rojas y amarillas por equipo
const contarTarjetas = (futbolistas) => futbolistas
    .reduce((tarjetasPorEquipo, futbolista) => {
        const equipo = futbolista.equipo.replace(/\s/g, ''); // Eliminar espacios para usar como clave
        tarjetasPorEquipo[equipo] = (tarjetasPorEquipo[equipo] || 0) + futbolista.tarjetaAmarilla + futbolista.tarjetaRoja;
        return tarjetasPorEquipo;
    }, {});

// ACT 5 - Obtener promedio de goles por partido para cada jugador
const promedioGoles = (futbolistas) => futbolistas
    .map(futbolista => ({
        nombre: futbolista.nombre,
        promedio: futbolista.goles / futbolista.partidosJugados
    }));

// ACT 6 - Encontrar el jugador con más asistencias
const mvpAsists = (futbolistas) => futbolistas
    .reduce((topAsistencia, futbolista) => futbolista.asistencias > topAsistencia.asistencias ? futbolista : topAsistencia).nombre;

// ACT 7 - Listar los nombres de los jugadores por posición
const listarJugadoresPorPosicion = (futbolistas) => {
    return futbolistas.reduce((jugadoresPorPosicion, futbolista) => {
        jugadoresPorPosicion[futbolista.posicion] = jugadoresPorPosicion[futbolista.posicion] || [];
        jugadoresPorPosicion[futbolista.posicion].push(futbolista.nombre);
        return jugadoresPorPosicion;
    }, {});
};

// Flujo
console.log(filtrarGoles(futbolistas));
console.log("Se han marcado " + calcularTotal(futbolistas) + " goles entre todos");
console.log(ordenarPorAsistencia(futbolistas));
console.log(contarTarjetas(futbolistas));
console.log(promedioGoles(futbolistas));
console.log("El jugador con más asistencias es: " + mvpAsists(futbolistas));
console.log(listarJugadoresPorPosicion(futbolistas));
