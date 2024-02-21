import React, { useState } from 'react'
import './Tables.css'
import TableCard from '../tablecard/TableCard'
import TableBookingModal from '../tablebookingmodal/TableBookingModal';

const Tables = ({ tables }) => {
    const [ modalVisible, setModalVisible ] = useState(false);
    const [ activeTable, setActiveTable ] = useState('');

    console.log('Active Table: ', activeTable);

  return (
    <div className='tables_container'>
        {
            tables?.map((table) => (
                <TableCard 
                    key={table.table_id} 
                    table={table}
                    setModalVisible={setModalVisible}
                    setActiveTable={setActiveTable} />
            ))
        }
        {
            modalVisible ? 
                <TableBookingModal 
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    activeTable={activeTable} /> : null
        }
    </div>
  )
}

export default Tables