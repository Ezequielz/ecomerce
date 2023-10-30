import { Group } from "@/products/interfaces/group"
import { ProductDetail } from "@/products/interfaces/productDetail"

interface Props {
  group: Group
  prodDetail: ProductDetail
}
export const Table = ({ group, prodDetail }: Props) => {

  return (
    <article className="p-3 h-auto">
      <header>
        <h5 >{group.nombre}</h5>
        <hr
          className="mb-2 h-px border-t-0 bg-[#fd611a]" />

      </header>

      <ul className="tableDescriptions ">



        {prodDetail && prodDetail.caracteristicas &&
          prodDetail.caracteristicas.map((caract, i) => (
            <>
              {
                group.id === caract.id_agrupador &&
                <li key={i} className='text-xs p-1 '>
                  <div className="flex flex-row gap-2 justify-between ">
                    <span className="font-semibold">
                      {caract.etiqueta.charAt(0).toUpperCase() + caract.etiqueta.slice(1)}

                    </span>
                    <span >
                      {
                        caract.tipo === 'booleano' 
                        ? (caract.valor === '1' ? 'Yes' : 'No')
                        : caract.valor + (caract.unidades && caract.unidades)
                      }
                     
                    </span>
                  </div>
                </li>
              }
            </>

          ))
        }

      </ul>
    </article>
  )
}
