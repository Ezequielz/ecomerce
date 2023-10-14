'use client'
import { useQuery } from "@tanstack/react-query"
import { getFilters } from '@/products/services/productServices';

export const useFilters = () => {
  
    const { isLoading, isError, error, data: filters = [], isFetching } = useQuery(
        ['filters'],
        () => getFilters(),
        {
            staleTime: 1000 * 60 * 60
        }
    )


  return {
    isLoading,
    isError,
    error,
    filters,
    isFetching
    }
}