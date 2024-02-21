const db = require('../db')

//get all tables
const getAllTables = async (req, res) => {
    try {
        const response = await db.query('SELECT * FROM tables ORDER BY table_id')
        if (response.rowCount > 0) {
            return res.status(200).json({
                success: true,
                messsage: 'Got all tables',
                data: response.rows
            })
        }
        res.status(400).json({
            success: false,
            message: 'No tables'
        })
    } catch (err) {
        console.log(`Server Error fetching tables: ${err}`);
        res.status(500).json({
            success: false,
            messsage: 'Server failure. Try again later.'
        })
    }
}

//add new table
const addNewTable = async (req, res) => {
    try {
        const response = await db.query('INSERT INTO tables (isBooked, username, contact) VALUES ($1, $2, $3)', [ false, null, null ])
        if (response.rowCount === 1) {
            res.status(201).json({
                success: true,
                message: 'Added new table'
            })
        }
    } catch (err) {
        console.log(`Server Error adding new table: ${err}`)
        res.status(500).json({
            success: false,
            message: 'Server failure. Try again later.'
        })
    }
}

//book a table
const bookTableById = async (req, res) => {
    try {
        const { id } = req.params
        const { username, contact } = req.body
        const response = await db.query('UPDATE tables SET isBooked=$1, username=$2, contact=$3 WHERE table_id=$4', [ true, username, contact, id ])
        if (response.rowCount === 1) {
            return res.status(200).json({
                success: true,
                message: `Booked table ${id} for ${username}`
            })
        }
        res.status(400).json({
            success: false,
            message: `Table ${id} does not exist or username or contact missing or in incorrect format`
        })
    } catch (err) {
        console.log(`Error booking table: ${err}`)
        res.status(500).json({
            success: false,
            message: 'Server failure. Try again later.'
        })
    }
}

const handleTableAction = async (req, res) => {
    try {
        const { id } = req.params
        const { action, username, contact } = req.body

        //validation for fields
        if (!action) {
            return res.status(400).json({
                success: false,
                message: 'Cannot leave action empty'
            });
        }

        //validate if action is valid
        if (action !== 'book' && action !== 'vacate') {
            return res.status(400).json({
                success: false,
                message: 'Invalid action'
            })
        }

        if (action === 'book') {
            //check if username and contact fields are empty
            if (!username || !contact) {
                return res.status(400).json({
                    success: false,
                    message: 'Cannot leave any field empty'
                })
            }
            
            const response = await db.query('UPDATE tables SET isBooked=$1, username=$2, contact=$3 WHERE table_id=$4', [ true, username, contact, id ])

            if (response.rowCount === 1) {
                return res.status(200).json({
                    success: true,
                    message: `Booked table ${id} for ${username}`
                })
            }
            res.status(400).json({
                success: false,
                message: `Table ${id} does not exist or username or contact missing or in incorrect format`
            })

        }

        if (action === 'vacate') {
            const response = await db.query('UPDATE tables SET isBooked=$1, username=$2, contact=$3 WHERE table_id=$4', [ false, null, null, id ])

            if (response.rowCount === 1) {
                return res.status(200).json({
                    success: true,
                    message: `Vacated Table ${id}`
                })
            }

            res.status(400).json({
                success: false,
                message: `Table ${id} does not exist`
            })
        }

    } catch (err) {
        console.log(`Error handling table action: ${err}`)
        res.status(500).json({
            success: false,
            message: 'Server failure. Try again later.'
        })
    }
}

module.exports = {
    getAllTables,
    addNewTable,
    handleTableAction
}