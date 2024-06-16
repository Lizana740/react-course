import { createContext,useState } from "react";

export const FilterContext = createContext()

export function FiltersProviders({children}){
    const [filters,setFilter]= useState({
        category:'all',
        minPrice: 0
    }
    )
    return(
        <FilterContext.Provider 
        value={{filters,setFilter}}
        >
            {children}
        </FilterContext.Provider>
    )
}