/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client'
import { useQueryParams } from '@/hooks/useQueryParams'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'


export const ButtonsForBuild = ({ tipo, paso }: { tipo?: string | undefined, paso?: string | undefined | number }) => {
    const [sub, setSub] = useState('')
    const router = useRouter()
    const { url } = useQueryParams('sub', sub)

    useEffect(() => {
        router.push(url)
    }, [sub])

    return (
        <>
            {
                (paso === '1' || !paso) &&
                <header className="flex flex-row gap-2 pb-4">
                    <Link href={`/buildpc?tipo=27&paso=1`}
                        className='border-[1px] border-solid border-slate-400 text-white py-2 px-4 rounded-md text-xs font-semibold flex gap-2 justify-center items-center shadow-md ' >
                        <img className="w-16 "  src="https://imagenes.compragamer.com/assets/marcas-sponsor/amd.png" alt="" />
                    </Link>
                    <Link href={`/buildpc?tipo=48&paso=1`}
                        className="border-[1px] border-solid border-red-500 text-white py-2 px-4 rounded-md text-xs font-semibold flex gap-2 justify-center items-center shadow-md " >
                        <img className="w-16" src="https://imagenes.compragamer.com/assets/marcas-sponsor/intel.png" alt="" />
                    </Link>

                </header>
            }
            {
                paso === '10' &&
                <header className='flex flex-row gap-2'>
                    <button
                        onClick={() => setSub(s => s = 'auriculares')}
                        className='py-1 px-3 rounded-lg mb-2 bg-[#fd611a] '>
                        auriculares
                    </button>
                    <button
                        onClick={() => setSub(s => s = 'teclados')}
                        className='py-1 px-3 rounded-lg mb-2 bg-[#fd611a] '>
                        teclados
                    </button>
                    <button
                        onClick={() => setSub(s => s = 'mousepad')}
                        className='py-1 px-3 rounded-lg mb-2 bg-[#fd611a] '>
                        mousepad
                    </button>
                    <button
                        onClick={() => setSub(s => s = 'mouse')}
                        className='py-1 px-3 rounded-lg mb-2 bg-[#fd611a] '>
                        mouse
                    </button>
                    <button
                        onClick={() => setSub(s => s = 'coolerfan')}
                        className='py-1 px-3 rounded-lg mb-2 bg-[#fd611a] '>
                        coolerfan
                    </button>
                    <button
                        onClick={() => setSub(s => s = 'all')}
                        className='py-1 px-3 rounded-lg mb-2 bg-[#fd611a] '>
                        Todos
                    </button>

                </header>
            }
        </>
    )
}
