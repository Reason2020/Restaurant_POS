import React, { useState } from 'react'
import './TableBookingModal.css'
import { motion } from 'framer-motion'
import { bookTable } from '../../api/tablesApi'
import { useMutation } from '@tanstack/react-query'

const TableBookingModal = ({ setModalVisible, activeTable, modalVisible }) => {
    const [ name, setName ] = useState('');
    const [ contact, setContact ] = useState('');

    // const mutation = useMutation(bookTable)

    // const handleTableBooking = (e) => {
    //     e.preventDefault()

    //     mutation.mutate({
    //         id: activeTable,
    //         username: name,
    //         contact
    //     })

    //     setModalVisible(false)
    // }

  return (
    <motion.div
        initial={{
            opacity: 0
        }}
        animate={{
            opacity: 1,
        }}
        exit={{
            opacity: 0
        }}
        className='overlay'>
        <motion.form 
            onSubmit={handleTableBooking}
            initial={{
                scale: 0.5
            }}
            animate={{
                scale: 1,
            }}
            exit={{
                scale: 0.5
            }}
            className="form">
            <h3>Book Table {activeTable}?</h3>
            <input 
                type="text"
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)} />
            <input 
                type="text" 
                placeholder='Contact'
                value={contact}
                onChange={(e) => setContact(e.target.value)} />
            <div className="buttons_container">
                <button className='btn btn_cancel' onClick={() => setModalVisible(false)}>Cancel</button>
                <button className='btn btn_book' type="submit">Book Table</button>
            </div>
        </motion.form>
    </motion.div>
  )
}

export default TableBookingModal