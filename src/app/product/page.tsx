

import { Banner } from "@/components/banner"
import { ProductList } from "@/products/components/productList"
import { Sidebar } from "@/products/components/sidebar"
// import { Categorie } from "@/products/interfaces/categorie"
import { getCategorieById, getCategories, getFilters, getProducts } from "@/products/services/productServices"
// import { getProductDetailsBySlug } from '../../products/services/productServices';
interface Props {
    params: {
      slug: string
    }
    searchParams?: { [key: string]: string | undefined }
  }

  export default async function Products ({ params: { slug }, searchParams  }: Props) {
    const cat: number = searchParams?.cat ? +searchParams.cat : 0
    const search = searchParams?.criterio && searchParams.criterio 
    const products = await getProducts({searchParams})
    const allFilters = await getFilters()
    const categories = await getCategories()
    // let arr:any = []
    // const a = await products.map(async(product) => await getProductDetailsBySlug({slug: '_'+product.id_producto}))
    // console.log('ASD',a)
    let categorie
    if (cat > 0) {
        // categorie =  {nombre:(await getCategorieById({id:cat})).nombre}
        categorie =  await getCategorieById({id:cat})
    }
    return (
        <section className="px-36 py-4 ">
            <Banner cat={cat} search={!!search}/>
            <div className="flex flex-row justify-center items-start">
                <Sidebar allFilters={allFilters} categories={categories} cat={categorie} />
                <ProductList products={products} chip={ {catName: categorie?.nombre , search}}/>

            </div>

        </section>
    )
}
