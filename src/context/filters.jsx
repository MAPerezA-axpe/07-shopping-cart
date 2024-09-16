import { createContext, useState } from "react";

//1. Crear el contexto
export const FiltersContext = createContext() //Este es el contexto que tenemos que consumir
//El contexto solo se crea una vez (se trata de un Singleton)

//2. Crear el Provider para proveer el contexto
//Este es el que nos provee de acceso al contexto
export function FiltersProvider ({ children }) {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })
    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}