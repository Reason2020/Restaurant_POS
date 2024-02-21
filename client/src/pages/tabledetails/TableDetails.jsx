import React from 'react'
import { useParams } from 'react-router-dom'

const TableDetails = () => {
    const { id } = useParams()

  return (
    <div>TableDetails for table {id}</div>
  )
}

export default TableDetails