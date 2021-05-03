const misFunciones = require('./funcionesDeTareas');


let accion = process.argv[2]
    
    switch (accion) {
    case 'listar':
        console.log('---------------');
        let tareas = misFunciones.leerJSON();
        tareas.forEach(unaTarea => {
            console.log('La tarea ' + unaTarea.titulo + ' se encuentra ' + unaTarea.estado);
        });
        console.log('---------------');
        break;

    case 'crear':
        let tareaGuardar = {
            titulo: process.argv[3],
            estado: 'pendiente'
        }
        misFunciones.guardarTarea(tareaGuardar);
        break

    case 'filtrar':
        let estado = process.argv[3];
        let resultado = misFunciones.leerPorEstado(estado);
        console.log('------------');
        resultado.forEach(element => {
            console.log('La tarea ' + element.titulo + ' se encuentra ' + element.estado);
        })
        console.log('------------');
        break

    case undefined:
        console.log('---------------');
        console.log('Atención - Tienes que pasar una acción');
        console.log('---------------');
        break;
        
    default:
        console.log('---------------');
        console.log('No entiendo qué quieres hacer');
        console.log('---------------');
        break;
    }