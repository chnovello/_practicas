let fs = require('fs');

let misFunciones = {
    leerJSON: function () {
        let tareas = fs.readFileSync('tareas.json', 'utf-8');

        tareas = JSON.parse(tareas);

        return tareas;
    },

    escribirJSON: function (arrayTareas) {
        let nuevasTareas = JSON.stringify(arrayTareas);
        fs.writeFileSync('tareas.json', nuevasTareas);
        console.log('---------------');
        console.log('Nueva tarea agregada');
        console.log('---------------');
    },

    guardarTarea: function (unaNuevaTarea) {
        let todasLasTareas = this.leerJSON();
        todasLasTareas.push(unaNuevaTarea);
        this.escribirJSON(todasLasTareas);
    },

    leerPorEstado: function (parametroEstado){
        let todasLasTareas = this.leerJSON();
        todasLasTareas = todasLasTareas.filter(unaTarea => {
            return unaTarea.estado == parametroEstado
        })
        return todasLasTareas;
    } 

}

module.exports = misFunciones;