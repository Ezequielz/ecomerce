
import { ProductList } from "@/products/components/productList"
import { Sidebar } from "@/products/components/sidebar"

export default function Home() {

  // console.log('qqq')
  return (
    <main className="py-5 px-40 flex flex-row justify-center items-start">
        <Sidebar />
        <ProductList />
    </main>
  )
}
