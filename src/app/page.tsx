
import { ProductList } from "@/products/components/productList"
import { Sidebar } from "@/products/components/sidebar"
import { getProducts } from "@/products/services/productServices"

interface Props {
  params: {
    slug: string
  }
  searchParams?: { [key: string]: string | undefined }
}

 export default async function Home({ params: { slug }, searchParams  }: Props) {
   
   const products = await getProducts({searchParams})

  // console.log('qqq')
  return (
    <main >
      <section className="py-5 px-40 flex flex-row justify-center items-start">
        <Sidebar />
        <ProductList products={products} />

      </section>

    </main>
  )
}
