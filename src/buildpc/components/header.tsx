/* eslint-disable @next/next/no-img-element */
'use client'

import { useBuildPCStore } from "@/store/buildPC"

export const HeaderBuildPc = () => {
    const { hardware, paso, tipo } = useBuildPCStore(state => state)
    const urlImg = 'https://imagenes.compragamer.com/assets/marcas-sponsor/'
    return (
        <header>
            <h2 className="text-xl font-semibold">{hardware[+paso - 1].title}</h2>
            <div className="flex flex-row items-center">
                <p className="mt-5">
                    {hardware[+paso - 1].txt}
                </p>
                {
                    tipo &&
                    <img src={`${urlImg}${tipo === 48 ? 'intel.png' : 'amd.png'}`} alt="" />
                }
            </div>
        </header>
    )
}
