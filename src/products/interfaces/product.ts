
export interface Product {
    coins:                  number;
    coins_forzada?:          number | null;
    coins_sale?:             number | null;
    destacado:              number;
    nombre:                 string;
    id_producto:            number;
    id_categoria:           number;
    id_subcategoria:        number;
    id_marca:               number;
    precioEspecial:         number;
    precioLista:            number;
    precioListaAnterior?:    null;
    precioEspecialAnterior?: null;
    precio_bruto?:           null;
    descuento_liquidacion?:  null;
    imagenes?:               Imagene[] | null;
    vendible:               number;
    stock?:                  number;
    codigo?:                 Codigo;
    sale:                   boolean;
    codigo_principal?:       string[] | null;
    garantia?:               number;
    garantia_oficial:       number;
    busca_en_ml?:            string;
    iva:                    number;
    precioEspecialCombo?:    number | null;
    precioListaCombo?:       number | null;
}

export enum Codigo {
    Disponible = "disponible",
}

export interface Imagene {
    nombre:             string;
    id_producto_imagen: number;
    orden:              number;
}
