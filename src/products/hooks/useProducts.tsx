'use client'
import { useQuery } from "@tanstack/react-query"
import { getProducts } from '@/products/services/productServices';



interface Options {
    filterKey?: string;
}

export const useProducts = ({ filterKey }: Options) => {
  
    const { isLoading, isError, error, data: products = [], isFetching } = useQuery(
        ['products', { filterKey }],
        () => getProducts({filterKey}),
        {
            staleTime: 1000 * 60 * 60
        }
    )


  return {
    isLoading,
    isError,
    error,
    products,
    isFetching
    }
}