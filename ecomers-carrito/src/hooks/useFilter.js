import { useContext } from "react"
import { FilterContext } from "../context/context"

export function useFilter(){
    const {filters, setFilter} = useContext(FilterContext)
/*     const [filters, setFilter] = useState({
        category:'all',
        minPrice:'0'
      }) */
    
      const filterProduct = (products)=>{
        return products.filter(p => {
          return p.price >= filters.minPrice && (
    
            filters.category == 'all' ||
            p.category == filters.category
          )
        })
      }

    
    return {filters,setFilter, filterProduct}
}