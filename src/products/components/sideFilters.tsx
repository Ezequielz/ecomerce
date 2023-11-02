import { Categorie } from "../interfaces/categorie"

export const SideFilters = ({ cat }: { cat: Categorie | undefined}) => {

    return (
        <>
            {
                cat === undefined  || cat.id < 1 ? (
                    <p className="bg-white p-5">Los filtros de productos son aplicables a las subcategorías,
                        elegí una en el menú de categorías.</p>
                )
                    : (
                        <p> hay cat {cat.nombre}</p>
                    )
            }
        </>
    )
}
