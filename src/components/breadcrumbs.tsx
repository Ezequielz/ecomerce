
interface Props {
    filter: string,
    categorie: string,
    marca: string
}
export const Breadcrumbs = ({filter, categorie, marca} : Props) => {
    return (
        <nav className="bg-grey-light w-full rounded-md text-[10px]">
            <ol className="list-reset flex">
                <li>
                    <a
                        href="#"
                        className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 "
                    >{filter}</a
                    >
                </li>
                <li>
                    <span className="mx-2 text-neutral-500 dark:text-neutral-400">{'>'}</span>
                </li>
                <li>
                    <a
                        href="#"
                        className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 "
                    >{categorie}</a
                    >
                </li>
                <li>
                    <span className="mx-2 text-neutral-500 dark:text-neutral-400">&gt;</span>
                </li>
                <li className="text-neutral-500 dark:text-neutral-400">{marca}</li>
            </ol>
        </nav>
    )
}
