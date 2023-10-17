'use client'

import { useState } from "react"

export const Slider = () => {
    const [show, setShow] = useState(true)

    if (!show) return null

    return (
        <div className='p-0 bg-[#fd611a] relative'>
            <picture className="">
                <img src="http://localhost:3000/images/slider.png" className="w-full h-11 object-contain" alt="slider -pedidos unicamente via web-" />
            </picture>
                <div className="absolute flex justify-end top-[11px] right-2 p-0 cursor-pointer" onClick={() => setShow(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="7%" viewBox="0 0 24 24" width="7%" fill="#ffffff" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M8.475 17 12 13.475 15.525 17 17 15.525 13.475 12 17 8.475 15.525 7 12 10.525 8.475 7 7 8.475 10.525 12 7 15.525ZM12 22.2q-2.125 0-3.988-.8-1.862-.8-3.237-2.175Q3.4 17.85 2.6 15.988 1.8 14.125 1.8 12t.8-3.988q.8-1.862 2.175-3.237Q6.15 3.4 8.012 2.6 9.875 1.8 12 1.8t3.988.8q1.862.8 3.237 2.175Q20.6 6.15 21.4 8.012q.8 1.863.8 3.988t-.8 3.988q-.8 1.862-2.175 3.237Q17.85 20.6 15.988 21.4q-1.863.8-3.988.8Z"></path></svg>

                </div>
        </div>
    )
}