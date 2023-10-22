import { RiTwitterXFill } from 'react-icons/ri';
import { SiYoutube } from 'react-icons/si';
import { CarouselMarcas } from "./carouselMarcas"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


export const Footer = () => {
    return (
        <section className="bg-[#fd611a]">
            <header>
                <CarouselMarcas />
            </header>
            <div className="flex flex-row px-36 py-5 text-center">
                <div className="w-1/6 text-white text-end px-3 border-r-white border-solid border-r-[0.5px] ">
                    <picture className="flex justify-end">
                        <img
                            className="w-16 h-full"
                            src="http://localhost:3000/images/data_fiscal.jpg" alt="imagen de data fiscal" />

                    </picture>
                </div>
                <div className="w-1/3 text-white border-r-white border-solid border-r-[0.5px] pt-2">
                    <button className="text-xs font-semibold px-2 py-1 border-[1px] border-white rounded-md hover:bg-white hover:text-[#fd611a] transition-all ease-in-out duration-300">
                        Ayuda
                    </button>
                    <p className="text-sm mt-1">
                        Si tenés sugerencias o comentarios,
                    </p>
                    <p className="text-sm -mt-0.5">
                        contactanos
                    </p>
                </div>
                <div className="w-1/5 text-white border-r-white border-solid border-r-[0.5px] pt-5 px-3 ">
                    <button className=" text-xs font-semibold px-2 py-1 border-[1px] border-white rounded-md bg-white text-[#fd611a] hover:bg-[#fd611a] hover:text-white transition-all ease-in-out duration-300">
                        ¡Trabajá con nosotros!
                    </button>
                    <button className="mt-2 text-xs font-semibold px-2 py-1 border-[1px] border-white rounded-md hover:bg-white hover:text-[#fd611a] transition-all ease-in-out duration-300">
                        Botón de arrepentimiento
                    </button>
                </div>
                <div className="w-1/5 text-white pt-5 px-3 flex flex-col justify-start">
                    <p className='mb-3 text-sm'>Seguinos en</p>
                    <div className='flex gap-2 justify-center  items-center '>
                        <a className="cursor-pointer text-white rounded-full border-white border-[1px] p-1.5 hover:bg-white hover:text-[#fd611a] transition-all ease-in-out duration-300">
                            <RiTwitterXFill />
                        </a>
                        <a className="cursor-pointer text-white rounded-full border-white border-[1px] p-1.5 hover:bg-white hover:text-[#fd611a] transition-all ease-in-out duration-300">
                            <SiYoutube />
                        </a>
                        <a className="cursor-pointer text-white rounded-full border-white border-[1px] p-1.5 hover:bg-white hover:text-[#fd611a] transition-all ease-in-out duration-300">
                            <FaFacebookF />
                        </a>
                        <a className="cursor-pointer text-white rounded-full border-white border-[1px] p-1.5 hover:bg-white hover:text-[#fd611a] transition-all ease-in-out duration-300">
                            <FaLinkedinIn />
                        </a>
                        <a className="cursor-pointer text-white rounded-full border-white border-[1px] p-1.5 hover:bg-white hover:text-[#fd611a] transition-all ease-in-out duration-300">
                            <FaInstagram />
                        </a>


                    </div>
                </div>

            </div>
            <footer className='bg-white text-[9px] text-center p-0.5'>
                <p className=''>
                    Las marcas y logos de compragamer.com compragamer.com/tv compragamer.com/reviews son propiedad de Newton Station SRL

                </p>
                <p className='-my-0.5'>
                    Todos los derechos reservados 2017
                </p>
            </footer>
        </section>
    )
}
