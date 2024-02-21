import React from 'react'
import './Tables.css'
import TableCard from '../tablecard/TableCard'

const Tables = ({ tables }) => {
  return (
    <div className='tables_container'>
        {
            tables?.map((table) => (
                <TableCard key={table.id} table={table} />
            ))
        }
    </div>
  )
}

export default Tables