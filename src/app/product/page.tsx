
import { Banner } from "@/components/banner"
import { ProductList } from "@/products/components/productList"
import { Sidebar } from "@/products/components/sidebar"
import { getCategories, getFilters, getProducts } from "@/products/services/productServices"
interface Props {
    params: {
      slug: string
    }
    searchParams?: { [key: string]: string | undefined }
  }

  export default async function Products ({ params: { slug }, searchParams  }: Props) {
    const cat: number = searchParams?.cat ? +searchParams.cat : 0
    const products = await getProducts({searchParams})
    const allFilters = await getFilters()
    const categories = await getCategories()

    return (
        <section className="px-36 py-4 ">
            <Banner cat={cat} />
            <div className="flex flex-row justify-center items-start">
                <Sidebar allFilters={allFilters} categories={categories}/>
                <ProductList products={products} />

            </div>

        </section>
    )
}
