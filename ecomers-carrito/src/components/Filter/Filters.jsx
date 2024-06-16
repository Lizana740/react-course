import { useId} from 'react'
import './Filters.css'
import { useFilter } from '../../hooks/useFilter'

export function Filters(){
    const {filters,setFilter } = useFilter()

    const idFilterPrice = useId()
    const idFilterCategory = useId()

    const handleChangeMinPrice = (event)=>{
        let val = event.target.value 
        setFilter((prev)=>({
            ...prev,
            minPrice:val
        }))
    }

    const handleChangeCategory = (event)=> {
        let val = event.target.value
        setFilter((prev)=>({
            ...prev,
            category:val
        }))
    }

   return(

    <section className="filters">
        <div>
            <label htmlFor={idFilterPrice}>Price</label>
            <input 
                type="range" 
                id={idFilterPrice}
                min='0'
                max='1500'
                onChange={handleChangeMinPrice}
                value={filters.minPrice}
            />
            <span>{filters.minPrice}</span>
        </div>
        <div>
            <label htmlFor={idFilterCategory}> Category</label>
            <select id={idFilterCategory} onChange={handleChangeCategory}>
                <option value="all">Todas</option>
                <option value="smartphones"> Smartphones</option>
                <option value="laptops">Notebooks</option>
                <option value="fragrances">Fragrances</option>
            </select>
        </div>
    </section>
   ) 
}