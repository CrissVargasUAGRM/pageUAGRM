export interface subject{
    materia: string
    links: Link[]
}

export interface Link{
    name: string,
    enlace: string
}

export interface Materias {
    id: string,
    title: string,
    materiasSemestre: subject[]
}