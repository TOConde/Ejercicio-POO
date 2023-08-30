class Persona {
  private dni: string;
  private nombre: string;
  private edad: number;

  constructor(dni: string, nombre: string, edad: number) {
    this.dni = dni;
    this.nombre = nombre;
    this.edad = edad;
  }

  getDni(){
    return this.dni;
  }

  getNombre() {
    return this.nombre;
  }

  getEdad() {
    return this.edad
  }
}

class Alumno extends Persona{
  private examenes: Examen[] = [];

  constructor(dni: string, nombre: string, edad: number) {
    super(dni, nombre, edad);
  }

  agregarExamen(materia: string, nota: number) {
    const examen = new Examen(materia, nota);
    this.examenes.push(examen);
  }

  promedioAlumno(): number {
    if (this.examenes.length === 0) {
      return 0
    }

    let sumaNotas = 0;
    for (const examen of this.examenes) {
      sumaNotas += examen.getNota();
    }

    return sumaNotas / this.examenes.length;
  }
}

class Colegio {
  private alumnos: Alumno[] = [];

  constructor() {
    
  }

  agregarAlumno(estudiante: Alumno) {
    this.alumnos.push(estudiante)
  }

  promedioTotal(): number {
    if (this.alumnos.length === 0) {
      return 0;
    }

    let sumaPromedios = 0;
    for (const alumno of this.alumnos) {
      sumaPromedios += alumno.promedioAlumno();
    }

    return sumaPromedios / this.alumnos.length;
  }
}

class Examen {
  private materia: string;
  private nota: number;

  constructor(materia: string, nota: number) {
    this.materia = materia;
    this.nota = nota;
  }

  getMateria() {
    return this.materia;
  }

  getNota() {
    return this.nota
  }
}

// Creo la instancia de colegio
const colegio = new Colegio;

// Creo instancias de alumnos
const alumno1 = new Alumno("111", "Juan", 15);
alumno1.agregarExamen("matematica", 8);
alumno1.agregarExamen("historia", 7);

const alumno2 = new Alumno("222", "Pablo", 16);
alumno2.agregarExamen("matematica", 9);
alumno2.agregarExamen("historia", 4);

// Agrego alumnos al colegio
colegio.agregarAlumno(alumno1);
colegio.agregarAlumno(alumno2);

// Calculo promedio individual
console.log(`${alumno1.getNombre()} - Promedio: ${alumno1.promedioAlumno()}`);
console.log(`${alumno2.getNombre()} - Promedio: ${alumno2.promedioAlumno()}`);

// Calculo promedio general
console.log(`Promedio general del colegio es: ${colegio.promedioTotal()}`)

