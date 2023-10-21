/* eslint-disable @next/next/no-img-element */
import { MdLocalShipping, MdOutlineSecurity } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import { AiOutlineCheck, AiOutlineInfoCircle } from 'react-icons/ai';
import { getCategorieById, getFilterById, getMarcaById, getProductById } from "@/products/services/productServices"
import { Breadcrumbs } from '@/components/breadcrumbs';
import { getProductDetailsBySlug } from '../../../products/services/productServices';

interface Props {
  params: {
    slug: string
  }
  searchParams?: { [key: string]: string | string[] | undefined }
}
const Page = async ({ params: { slug }, searchParams  }: Props) => {


  const product = await getProductById({ slug })
  const details = await getProductDetailsBySlug({ slug })

  const categorie = await getCategorieById({ id: product.id_subcategoria })
  const filter = await getFilterById({ id: categorie.id_agrupador })
  const marca = await getMarcaById({ id: product.id_marca })


  const priceSpecial = (+product.precioEspecial).toLocaleString('es-ar', {
    currency: 'ARS',
    style: 'currency',
    maximumSignificantDigits: 8
  })
  const priceTotal = (+product.precioLista).toLocaleString('es-ar', {
    currency: 'ARS',
    style: 'currency',
    maximumSignificantDigits: 8
  })
  const priceCuota = (+product.precioLista / 12).toLocaleString('es-ar', {
    currency: 'ARS',
    style: 'currency',
    maximumSignificantDigits: 6
  })

  return (
    <section className="py-5 px-40">
      <article className="flex justify-between bg-white p-5 rounded-lg">
        <picture className="w-1/2 p-3">
          <img src={product?.imagenes
            ? `https://imagenes.compragamer.com/productos/compragamer_Imganen_general_${product.imagenes[0].nombre}-grn.jpg`
            : undefined}
            alt=""
            className="w-full h-auto"
          />
        </picture>

        <div className="w-1/2 p-3">

          <h1 className="text-xl ">{product && product.nombre}</h1>
          <Breadcrumbs filter={filter.nombre} categorie={categorie.nombre} marca={marca.nombre} />
          <hr
            className="my-3 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />

          <div className="flex flex-row justify-center items-center gap-5">
            <div className="p-5 flex flex-col w-1/3 text-blue-500">
              <p className='m-auto text-[10px] flex items-center gap-1'>
                Precio especial
                <span
                  className="transititext-primary text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                  data-te-toggle="tooltip"
                  data-te-ripple-init
                  title="Pagando por depósito o transferencia bancaria"
                  data-te-ripple-color="light"
                  data-te-placement="left"
                ><AiOutlineInfoCircle /></span
                >
              </p>
              <strong className="text-3xl font-bold ">{priceSpecial}
              </strong>
            </div>

            <div className="w-1/2">
              <div className="p-1 border-solid border-purple-500 border-2 rounded-md flex flex-row justify-center items-center">
                <p className="flex flex-col text-[10px] w-1/2 p-0 whitespace-normal text-center text-purple-500">
                  <span className="">
                    12 cuotas

                  </span>
                  <span className="-mt-1.5">
                    sin interes de

                  </span>
                  <span className="text-lg -mt-1">
                    {priceCuota.toString()}

                  </span>


                </p>

                <p className="flex flex-col text-[10px] w-1/2 text-center p-2">
                  <span className="mt-1">
                    precio de lista

                  </span>
                  <span className="text-lg -mt-1">
                    {priceTotal}
                  </span>

                </p>

              </div>
            </div>

          </div>

          <hr
            className="my-3 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />

          <div className="flex flex-col gap-2 text-green-500 text-sm" >
            <span className='flex flex-row gap-1 items-center'>
              <MdOutlineSecurity />
              {marca.garantia_oficial === 1 ? 'Garantía Oficial - ' : 'Garantia - '}
              {marca.garantia_meses_por_defecto} meses
            </span>

            {product.stock! > 0 ? (
              <span className='flex flex-row gap-1 items-center'>
                <AiOutlineCheck /> Stock disponible
              </span>
            ) : (
              <span className='flex flex-row gap-1 items-center text-red-500'>
                <IoMdClose /> Stock no disponible
              </span>
            )}


            <span className='flex flex-row gap-1 items-center'>
              <MdLocalShipping /> Envíos a todo el país.
            </span>
          </div>

          <hr
            className="my-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />

          <button
            className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-1 px-6 rounded"
          >Sumar al carrito</button>
          {/* {
            productDetails.caracteristicas &&
            productDetails.caracteristicas.map((a: any) => (
              <div key={a.id_producto}> {a.etiqueta}</div>
            ))
          } */}

        </div>


      </article>


    </section>
  )
}

export default Page