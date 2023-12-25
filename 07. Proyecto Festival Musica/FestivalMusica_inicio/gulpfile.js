//archivo de configuracion de GULP
//creacion de tareas GULP con NPX

function tarea(done) {
  console.log("mi 1º tarea");
  done();
}

//funciones de GULP
const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require('sass'));
const plumber = require('gulp-plumber'); //plumber es una dependencia de gulp que sirve para no parar la ejecucion del watch cuando guardas y hay un error en el codigo.
function css(done) {
  //compilar la tarea sass. Los pipe se ejecutan en cadena, cuando finaliza uno, se ejecuta el siguiente.
  //guardar la compilacion en otro directorio
  //identificar el archivos SASS
  // **/*.scss es para que todos los cambios en todos los archivos cuando guardes se escuche el cambio y el watch se ejecute
  src("src/scss/**/*.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(dest("build/css"));
  done();
}

function dev(done) {
  //compilar la tarea sass. Los pipe se ejecutan en cadena, cuando finaliza uno, se ejecuta el siguiente.
  //guardar la compilacion en otro directorio
  //identificar el archivos SASS
  watch("src/scss/**/*.scss", css)
  done();
}

//codigo de nodeJS
exports.tarea = tarea;
exports.css = css;
exports.dev = dev;
