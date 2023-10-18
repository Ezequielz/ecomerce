import { getCategorieById } from "@/products/services/productServices"

export const Banner = async( {cat}: { cat: number; } ) => {
  
  const categorie = await getCategorieById({id: cat })
  const catImage = categorie?.banners_sub_categorias? categorie.banners_sub_categorias[0].nombre : 'subcategoria_default.jpg'
  const urlImg = `https://imagenes.compragamer.com/bannerSubcategoria/${cat === 0 ? 'subcategoria_default.jpg': catImage } `
  return (
    <div>
        <picture className="relative">
            <img src={urlImg} alt="" />
            <p className="absolute bottom-0.5 left-3 text-white font-semibold text-2xl">
              {
                cat === 0 ? 'DESTACADOS' : categorie.nombre.toUpperCase()
              }
              
            </p>
        </picture>
    </div>
  )
}
