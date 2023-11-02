

export const CardSkelleton = () => {
    return (
        <article role="status" className={`relative flex flex-row justify-center items-center h-[120px] border-slate-200 bg-white border-solid border-2 rounded-lg p-2 shadow-lg`}>


            <picture className="w-1/4 flex justify-center ">
                <img
                    className="w-12  "
                    src='https://compragamer.com/PatchRouterSection/assets/img/iconoCG.gif' alt="gift logo compra g4mer"

                />

            </picture>

            <div className="w-3/4 flex flex-col p-2 animate-pulse">
                <div className="h-3 bg-gray-200 rounded-full w-48 mb-1"></div>
                <div className="h-3 bg-gray-200 rounded-full w-48 mb-2"></div>
                <div className="h-8 bg-gray-200 rounded-lg dark:bg-gray-700 w-20 mb-2.5"></div>
            </div>

        </article>
    )
}
