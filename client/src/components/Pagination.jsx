export default function Pagination( { videogamesPerPage, videogames, pagination } ) {
    const pageNumber = []

    for (let i = 0; i < Math.ceil(videogames/videogamesPerPage); i++) {
        pageNumber.push(i+1)
    }

    return (
        <nav>
            <ul>
                {
                    pageNumber && pageNumber.map((number) => {
                        return <li key={number}>
                            <button onClick={() => pagination(number)}>{number}</button>
                        </li>
                    })
                }
            </ul>
        </nav>
    )
}