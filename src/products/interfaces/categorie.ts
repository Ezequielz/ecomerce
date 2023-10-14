// Generated by https://quicktype.io

export interface Categorie {
    id:                        number;
    nombre:                    string;
    id_agrupador:              number;
    imagen?:                    string;
    sub_cate_oculto_ponderado?: string;
    banners_sub_categorias?:    BannersSubCategoria[] | null;
    orden?:                     number | null;
}

export interface BannersSubCategoria {
    id:                number;
    id_sub_cate:       number;
    descripcion:       string;
    nombre:            string;
    nombre_tablet:     string;
    nombre_mobile:     string;
    estado:            number;
    fecha_lanzamiento?: null;
    fecha_vencimiento?: null;
}
