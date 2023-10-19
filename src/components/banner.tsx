import { getCategorieById } from "@/products/services/productServices"

export const Banner = async( {cat, search}: { cat: number, search: boolean } ) => {
  
  const categorie = await getCategorieById({id: cat })
  const catImage = categorie?.banners_sub_categorias? categorie.banners_sub_categorias[0].nombre : 'subcategoria_default.jpg'
  // let urlImg = `https://imagenes.compragamer.com/bannerSubcategoria/${cat === 0 ? 'subcategoria_default.jpg': catImage } `
  let urlImg : {
    link: string,
    alt: string,
    tag: string
  }

  if (search) {
    urlImg = {
      link: `https://compragamer.net/categorias_demo/defaultAngular.jpg`,
      alt: 'Imagen de resultado de busqueda',
      tag: 'RESULTADO DE LA BUSQUEDA'
    }
  } else if (!search && cat !== 0) {
    urlImg = {
      link: `https://imagenes.compragamer.com/bannerSubcategoria/${catImage}`,
      alt: 'imagen de la categoria',
      tag: `${categorie.nombre.toUpperCase()}`
    }
  } else{
    urlImg = {
      link: 'https://imagenes.compragamer.com/bannerSubcategoria/subcategoria_default.jpg',
      alt: 'imagen default de categorias',
      tag: 'DESTACADOS'
    }
  }

  
  return (
    <div>
        <picture className="relative">
            <img src={urlImg.link} alt={urlImg.alt} className="w-full"/>
            <p className="absolute bottom-0.5 left-3 text-white font-semibold text-2xl">
              {urlImg.tag}    
            </p>
        </picture>
    </div>
  )
}
