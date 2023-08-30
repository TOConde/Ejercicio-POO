var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(dni, nombre, edad) {
        this.dni = dni;
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.getDni = function () {
        return this.dni;
    };
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    return Persona;
}());
var Alumno = /** @class */ (function (_super) {
    __extends(Alumno, _super);
    function Alumno(dni, nombre, edad) {
        var _this = _super.call(this, dni, nombre, edad) || this;
        _this.examenes = [];
        return _this;
    }
    Alumno.prototype.agregarExamen = function (materia, nota) {
        var examen = new Examen(materia, nota);
        this.examenes.push(examen);
    };
    Alumno.prototype.promedioAlumno = function () {
        if (this.examenes.length === 0) {
            return 0;
        }
        var sumaNotas = 0;
        for (var _i = 0, _a = this.examenes; _i < _a.length; _i++) {
            var examen = _a[_i];
            sumaNotas += examen.getNota();
        }
        return sumaNotas / this.examenes.length;
    };
    return Alumno;
}(Persona));
var Colegio = /** @class */ (function () {
    function Colegio() {
        this.alumnos = [];
    }
    Colegio.prototype.agregarAlumno = function (estudiante) {
        this.alumnos.push(estudiante);
    };
    Colegio.prototype.promedioTotal = function () {
        if (this.alumnos.length === 0) {
            return 0;
        }
        var sumaPromedios = 0;
        for (var _i = 0, _a = this.alumnos; _i < _a.length; _i++) {
            var alumno = _a[_i];
            sumaPromedios += alumno.promedioAlumno();
        }
        return sumaPromedios / this.alumnos.length;
    };
    return Colegio;
}());
var Examen = /** @class */ (function () {
    function Examen(materia, nota) {
        this.materia = materia;
        this.nota = nota;
    }
    Examen.prototype.getMateria = function () {
        return this.materia;
    };
    Examen.prototype.getNota = function () {
        return this.nota;
    };
    return Examen;
}());
// Creo la instancia de colegio
var colegio = new Colegio;
// Creo instancias de alumnos
var alumno1 = new Alumno("111", "Juan", 15);
alumno1.agregarExamen("matematica", 8);
alumno1.agregarExamen("historia", 7);
var alumno2 = new Alumno("222", "Pablo", 16);
alumno2.agregarExamen("matematica", 9);
alumno2.agregarExamen("historia", 4);
// Agrego alumnos al colegio
colegio.agregarAlumno(alumno1);
colegio.agregarAlumno(alumno2);
// Calculo promedio individual
console.log("".concat(alumno1.getNombre(), " - Promedio: ").concat(alumno1.promedioAlumno()));
console.log("".concat(alumno2.getNombre(), " - Promedio: ").concat(alumno2.promedioAlumno()));
// Calculo promedio general
console.log("Promedio general del colegio es: ".concat(colegio.promedioTotal()));
