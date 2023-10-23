/* eslint-disable react/no-unescaped-entities */

import { FaUserCircle } from "react-icons/fa"

const faqs = [
    {
        id: 1,
        target: 'collapseOne',
        title: 'Realizar un pedido',
        question: '¿Cómo realizo un pedido?',
        answer: 'Solo tenés que seleccionar todos los productos que deseas adquirir y luego hacer click en el botón "Realizar pedido".'
    }, {
        id: 2,
        target: 'collapseTwo',
        title: 'Precio',
        question: '¿El precio que figura en la web es el precio final?',
        answer: 'Todos los precios en la web incluyen el IVA, y se encuentran expresados en pesos argentinos.'

    }, {
        id: 3,
        target: 'collapseThree',
        title: 'Formas de pago',
        question: '¿Cuáles son las formas de pago?',
        answer: 'Contamos con dos formas de pago: a través de depósito/transferencia bancaria, con la cual obtenés el precio especial, o bien, a través de los métodos Pago Gamer (Visa o MasterCard) o MercadoPago (Tarjetas online, PagoFácil y RapiPago) con los cuales podés abonar en cuotas, al precio de lista.'
    },
    {
        id: 4,
        target: 'collapseFour',
        title: 'Depósito - Transferencia bancaria',
        question: '¿Cómo abono a través de depósito/transferencia?',
        answer: 'Una vez se realiza el pedido, te facilitamos los datos del CBU. Debes abonar e informar el pago desde nuestra web, antes de la fecha de vencimiento de la reserva.'
    },
    {
        id: 5,
        target: 'collapseFive',
        title: 'Pago Gamer',
        question: '¿Qué es Pago Gamer?',
        answer: 'Es un método exclusivo de Compra Gamer, para abonar de manera online a través de tarjetas Visa y Mastercard, con el cual podés acceder a 3 y 12 cuotas sin interés si empleas una tarjeta de crédito brindada por una entidad bancaria.'
    },
    {
        id: 6,
        target: 'collapseSix',
        title: 'Mercadopago',
        question: '¿Cómo puedo abonar a través de MercadoPago?',
        answer: 'Podés hacerlo de tres formas: Con tarjetas online en cuotas (no se puede acceder a cuotas sin interés); A través de RapiPago/ PagoFácil (se abona al precio de lista, pero no se pueden hacer cuotas, sólo se puede abonar en un pago); y realizando una transferencia desde tu cuenta de MercadoPago.'
    },
    {
        id: 7,
        target: 'collapseSeven',
        title: 'Envíos',
        question: '¿Cómo gestiono el envío de mi pedido?',
        answer: 'En primer lugar, para conocer el costo del envío, una vez al agregues al carrito tu compra, solo debes colocar tu código postal en el recuadro correspondiente, seleccionar la mensajería de tu preferencia y elegir si deseas el retiro en alguna sucursal o la entrega a domicilio. Actualmente realizamos envíos a todo el país través de Oca y Andreani; y si te encontrás en CABA o alrededores, podrás seleccionar el servicio de Mensajería Privada que es exclusivo de Compra Gamer. Tené en cuenta que, para calcular el costo del envío, se toman en consideración tanto las dimensiones y peso del paquete como la distancia de la localidad de entrega.'
    },
    {
        id: 8,
        target: 'collapseEight',
        title: 'Facturación',
        question: '¿Cómo tramito la factura de mi compra?',
        answer: 'En todas las compras efectuadas en la web, brindamos sin excepción alguna, la factura de compra. Una vez que realiza y abona el pedido, enviamos a tu dirección de correo electrónico la factura correspondiente. Por supuesto, también podés descargarla desde la sección Mi cuenta < Mis facturas. En caso de que precises factura A, solo debes ingresar tu CUIT al cargar el pedido por la web. Tené en cuenta que la factura A puede tener percepciones.'
    },
]


export default async function Help() {
    return (
        <section className="px-36 py-5">
            <header>
                <h1 className="text-xl">Preguntas Frecuentes</h1>
            </header>
            <div id="accordeonHelp" className="pt-5 shadow-lg">
                {
                    faqs.map(faq => (
                        <div key={faq.id}
                            className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                            <h2 className="mb-0" id="headingOne">
                                <button
                                    className="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 p-2 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] "
                                    type="button"
                                    data-te-collapse-init
                                    aria-expanded="true"
                                    data-te-target={`#${faq.target}`}
                                    aria-controls={faq.target}>
                                    {faq.title}
                                    <span
                                        className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="#fd611a"
                                            className="h-5 w-5">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </span>
                                </button>
                            </h2>

                            <div
                                id={faq.target}
                                className="!visible hidden relative m-0 list-none p-0 "
                                data-te-collapse-item
                                data-te-collapse-show
                                aria-labelledby="headingOne"
                                data-te-parent="#accordeonHelp">
                                <div className="px-5 py-6">
                                    <h3 className="text-[#fd611a] text-sm py-2 font-semibold"> {faq.question} </h3>
                                    <p className="text-sm leading-tight"> {faq.answer} </p>
                                </div>
                            </div>
                        </div>

                    ))
                }



            </div>
            <div className="bg-white p-4 mt-3 shadow-lg">
                <h2 className="font-semibold text-lg">Servicio postventa y garantías</h2>
                <p className="text-sm leading-tight">Para realizar consultas/reclamos relacionadas con la garantía o devolución de alguna de tus compras, debajo de esta sección contamos con el apartado <strong>"Compra Gamer te ayuda. ¿Cuál es tu consulta?"</strong>  donde debes exponer tu caso, seleccionando el motivo de "Postventa" que se adapte a tu requerimiento y uno de nuestros representantes te ofrecerá la información correspondiente sobre cómo proceder.</p>
                <p className="text-sm leading-tight py-2">También podes sacar un turno para venir en forma presencial a gestionar tu garantía:</p>
                <button className="bg-[#fd611a] text-white py-2 px-4 rounded-md text-xs font-semibold flex gap-2 justify-center items-center shadow-md ">
                    TURNOS POSVENTA/GARANTÍAS
                </button>
            </div>
            <div className="bg-white p-4 mt-3 shadow-lg">
                <h2 className="font-semibold text-lg text-[#fd611a]">Compra Gamer te ayuda. ¿Cuál es tu consulta?</h2>
                <p className="text-sm leading-tight py-2">Para realizar una consulta es necesario que inicies sesión en tu cuenta

</p>
                <button className="bg-[#fd611a] text-white py-2 px-4 rounded-md text-xs font-semibold flex gap-2 justify-center items-center shadow-md ">
                    <span className="text-lg">
                        <FaUserCircle />
                    </span>
                    INICIAR SESIÓN
                </button>
            </div>
        </section>
    )
}