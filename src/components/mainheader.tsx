import Link from "next/link"
import { FaUserCircle, FaShoppingCart } from 'react-icons/fa';
import { Search } from "./search"


export const MainHeader = () => {
    return (
        <header className=" bg-white -ml-3">
            <div className="flex flex-row gap-[2.8rem] pt-6 pb-3 justify-center items-center  m-auto">
                <Link href={"/"} className="" >
                    <picture>
                        <img className="object-cover" src='http://localhost:3000/images/logo.png' width='229px' height='300px' alt="logo compra gammer" />
                    </picture>
                </Link>
                <Search />
                <div className="flex flex-row items-center justify-center gap-8">
                    <button className="bg-[#fd611a] text-white py-2 px-4 rounded-md text-xs font-semibold flex gap-2 justify-center items-center shadow-md ">
                        <span className="text-lg">
                            <FaUserCircle />
                        </span>
                        INICIAR SESIÓN
                    </button>
                    <button className="text-2xl">
                        <span className="relative">
                            <FaShoppingCart />
                            <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-3 -right-2 dark:border-gray-900">0</div>
                        </span>
                    </button>
                </div>

            </div>
        </header>
    )
}
