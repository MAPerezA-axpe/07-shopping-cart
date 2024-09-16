import { useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export function Filters () {
    const { filters, setFilters } = useFilters()
    //const [minPrice, setMinPrice] = useState(0)

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        //setMinPrice(event.target.value)
        setFilters(prevState => ({
            ... prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        //setMinPrice(event.target.value)
        setFilters(prevState => ({
            ... prevState,
            category: event.target.value
        }))
    }

    return (
        <section className='filters'>
            <div>
                <label htmlFor={minPriceFilterId}>Precio</label>
                <input 
                    type='range'
                    id={minPriceFilterId}
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice}
                />
                <span>${filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor={minPriceFilterId}>Categoría</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value='all'>Todas</option>
                    <option value='laptops'>Portátiles</option>
                    <option value='smartphones'>Móviles</option>
                </select>
            </div>
        </section>
    )
}