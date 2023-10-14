'use client'
import { useQuery } from "@tanstack/react-query"
import { getCategories } from '@/products/services/productServices';

export const useCategories = () => {
  
    const { isLoading, isError, error, data: categories = [], isFetching } = useQuery(
        ['categories'],
        () => getCategories(),
        {
            staleTime: 1000 * 60 * 60
        }
    )


  return {
    isLoading,
    isError,
    error,
    categories,
    isFetching
    }
}