'use client'
import { useRouter } from "next/navigation"


export const Chip = ({ text }: { text: string }) => {
    const router = useRouter()
    if (text.length === 0) return null
    return (
        <span className="inline-flex items-center px-2 py-1  text-sm font-montserrat mb-2 text-white bg-[#fd611a] rounded-lg">
            {text}
            <button onClick={() => router.push('/product')} type="button" className="inline-flex items-center p-0 ml-2 text-sm  rounded-sm " >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#ffffff" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M8.475 17 12 13.475 15.525 17 17 15.525 13.475 12 17 8.475 15.525 7 12 10.525 8.475 7 7 8.475 10.525 12 7 15.525ZM12 22.2q-2.125 0-3.988-.8-1.862-.8-3.237-2.175Q3.4 17.85 2.6 15.988 1.8 14.125 1.8 12t.8-3.988q.8-1.862 2.175-3.237Q6.15 3.4 8.012 2.6 9.875 1.8 12 1.8t3.988.8q1.862.8 3.237 2.175Q20.6 6.15 21.4 8.012q.8 1.863.8 3.988t-.8 3.988q-.8 1.862-2.175 3.237Q17.85 20.6 15.988 21.4q-1.863.8-3.988.8Z"></path></svg>
                {/* <svg  aria-hidden="true" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg> */}
            </button>
        </span>
    )
}
