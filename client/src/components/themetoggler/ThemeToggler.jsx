import React from 'react'
import './ThemeToggler.css'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../../redux/features/themeSlice' 
import { motion } from 'framer-motion'
import { IoMdSunny, IoMdMoon } from "react-icons/io";

const ThemeToggler = () => {
    const dispatch = useDispatch();
    const { currentTheme } = useSelector((state) => state.theme)
    const isLightModeOn = currentTheme === 'light'

  return (
    <motion.div    
        onClick={() => dispatch(toggleTheme())} 
        className='toggler_container'
        animate={{
            justifyContent: isLightModeOn ? 'flex-start' : 'flex-end',
            backgroundColor: isLightModeOn ? 'var(--dark-background)' : 'var(--light-background)',
            transition: {
                duration: 0.25
            }
        }}>
        <motion.div
            layout
            style={{
                backgroundColor: isLightModeOn ? 'var(--light-background)' : 'var(--dark-background)'
            }} 
            className="toggle_btn"
            >
                {isLightModeOn ? <IoMdSunny color='var(--light-text)' /> : <IoMdMoon color='var(--dark-text)' />}
            </motion.div>
    </motion.div>
  )
}

export default ThemeToggler