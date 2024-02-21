import React from 'react'
import { Tables } from '../../components'
import { useQueryClient, useQuery } from '@tanstack/react-query'
import './Home.css'
import { getTables } from '../../api/tablesApi'
import { useSelector } from 'react-redux'

const Home = () => {
    const { currentTheme } = useSelector((state) => state.theme)

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

    if(isLoading) return <p>Loading data...</p>
    if (isError) return <p>{error.message}</p>

  return (
    <div className='home_content'>
        <div className="home_content_header" style={{
            color: `var(--${currentTheme}-text)`
        }}>
            <h2>Tables</h2>
            <p>{tables.length} Tables</p>
        </div>
        <Tables tables={tables} />
    </div>
  )
}

export default Home