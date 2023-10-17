import { useCallback } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export const useQueryParams = (name: string, value: string) => {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const createQueryString = useCallback(
        (name: string, value: string) => {
          const params = new URLSearchParams(searchParams)
          params.set(name, value)
     
          return params.toString()
        },
        [searchParams]
      )

      return { url: `${pathname + '?' + createQueryString(name, (value).toString())}` }
}