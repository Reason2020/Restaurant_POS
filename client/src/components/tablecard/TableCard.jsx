import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa"
import './TableCard.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom' 

const TableCard = ({ table, setModalVisible, setActiveTable }) => {
    const { currentTheme } = useSelector((state) => state.theme)
    console.log('Theme: ', currentTheme)
    const navigate = useNavigate()

    const handleTableCardClick = () => {
        if (table.isbooked) {
            navigate(`tabledetails/${table.table_id}`)
        } else {
            setModalVisible(true);
            setActiveTable(table.table_id);
        }
    }

  return (
    <div
        onClick={handleTableCardClick}
        style={{
            backgroundColor: table.isbooked ? 'var(--success-color)' : 'var(--error-color)',
            color: `var(--${currentTheme}-text)`
        }} 
        className='table_card'
        >
        <h3 className='table_title'>Table {table.table_id}</h3>
        <p className='table_status_container'>Status <FaLongArrowAltRight /> {table.isbooked ? 'Booked' : 'Vacant'}</p>
    </div>
  )
}

export default TableCard