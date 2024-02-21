import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa"
import './TableCard.css'
import { useSelector } from 'react-redux'

const TableCard = ({ table }) => {
    const { currentTheme } = useSelector((state) => state.theme)
    console.log('Theme: ', currentTheme)

  return (
    <div
        style={{
            backgroundColor: table.isBooked ? 'var(--success-color)' : 'var(--error-color)',
            color: `var(--${currentTheme}-text)`
        }} 
        className='table_card'
        >
        <h3 className='table_title'>Table {table.id}</h3>
        <p className='table_status_container' style={{
            color: `var(--${currentTheme}-text)`
        }}>Status <FaLongArrowAltRight /> {table.isBooked ? 'Booked' : 'Vacant'}</p>
    </div>
  )
}

export default TableCard