'use client'

import { useSearchParams } from "next/navigation"
import { usePathname } from "next/navigation"


export default function SortProducts() {
    const searchParams = useSearchParams()
    const pathname = usePathname()

    console.log(pathname)
    
    function updateSorting(sortOrder: string) {
        console.log(searchParams.toString())
        const params = new URLSearchParams(searchParams.toString())
        params.set("sort", sortOrder)

        window.history.pushState(null, "", `?${params.toString()}`)


        console.log(window.history);

    }
    
    return (
        <>
            <button onClick={() => updateSorting("asc")}>Sort Ascending</button>
            <button onClick={() => updateSorting("desc")}>Sort Descending</button>
        </>
    )
}