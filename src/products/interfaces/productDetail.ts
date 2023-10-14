// Generated by https://quicktype.io

export interface ProductDetail {
    id_producto:     number;
    incluidos?:       Incluido[] | null;
    niveles?:         Niveles | null;
    caracteristicas?: Caracteristica[] | null;
}

export interface Caracteristica {
    etiqueta:       string;
    valor:          string;
    unidades:       Unidades;
    id_agrupador:   number;
    tipo:           Tipo;
    ondenAgrupador: number;
}

export enum Tipo {
    Booleano = "booleano",
    Cadena = "cadena",
    Numerico = "numerico",
}

export enum Unidades {
    A = "a",
    Bits = "bits",
    Cfm = "cfm",
    Cl = "cl",
    DB = "db",
    DBA = "dba",
    Empty = "",
    G = "g",
    GB = "gb",
    Gr = "gr",
    Horas = "horas",
    Hz = "hz",
    IPS = "ips",
    Iops = "iops",
    KB = "kb",
    Kg = "kg",
    M = "m",
    M1 = "m:1",
    MB = "mb",
    MBS = "mb/s",
    MS = "ms",
    Ma = "ma",
    Metros = "metros",
    Mhz = "mhz",
    Mm = "mm",
    MmH2O = "mm/h2o",
    Mpx = "mpx",
    Mts = "mts",
    Nm = "nm",
    Pulgadas = "pulgadas",
    R = "r",
    RPM = "rpm",
    Slots = "slots",
    TB = "tb",
    Teclas = "teclas",
    The1 = ":1",
    Unidades = "''",
    UnidadesDB = "db (-)",
    V = "v",
    W = "w",
    º = "º",
    Ω = "Ω",
}

export interface Incluido {
    id_incluido: number;
    nombre:      string;
    cantidad:    number;
    imagen?:      Imagen[] | null;
}

export interface Imagen {
    nombre:             string;
    id_producto_imagen: number;
    orden:              number;
}

export interface Niveles {
    nivel_cpu: number;
    nivel_gpu: number;
}
