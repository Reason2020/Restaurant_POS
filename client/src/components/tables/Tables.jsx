import React from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getTables } from '../../api/tablesApi'
import './Tables.css'
import TableCard from '../tablecard/TableCard'

const Tables = () => {
    const queryClient = useQueryClient()

    const {
        isLoading,
        isError,
        error,
        data: tables
    } = useQuery({
        queryKey: ['tables'],
        queryFn: getTables
    })

    if (isLoading) return <p>Loading data...</p>
    if (isError) return <p>{error.message}</p>
    console.log("Tables List: ", tables)

  return (
    <div className='tables_container'>
        {
            tables.map((table) => (
                <TableCard key={table.id} table={table} />
            ))
        }
    </div>
  )
}

export default Tables