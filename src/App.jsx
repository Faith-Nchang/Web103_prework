import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './components/Button.jsx'
import { Link } from 'react-router-dom'
import Home from './components/Home.jsx'
import Creators from './components/Creators.jsx'
import './App.css'


import {supabase } from './client.js'

function App() {
  const location = useLocation();
  const [showCreators, setShowCreators] = useState(false)
  const [creators, setCreators] = useState([])
  const [loading, setLoading] = useState(true)
  const creatorsListRef = useRef(null)

  // fetch the creators using supabase client
  useEffect(() => {
    // Show creators if redirected with state
    if (location.state && location.state.showCreators) {
      setShowCreators(true);
    }
  }, [location.state]);

  useEffect(() => {
    const fetchCreators = async () => {
      setLoading(true)
      try {
        const { data, error } = await supabase.from('creators').select('*')
        if (error) {
          throw error
        }
        setCreators(data)
      } catch (error) {
        console.error('Error fetching creators:', error)
        setCreators([])
      } finally {
        setLoading(false)
      }
    }
    fetchCreators()
  }, [])

  const handleShowCreators = () => {
    setShowCreators(true)
  }

  useEffect(() => {
    if (showCreators && creatorsListRef.current) {
      creatorsListRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [showCreators])

  return (
    <>
      
      <div>
        <Home creators={creators} setViewCreators={handleShowCreators} />
      </div>


      {showCreators && (
        <div ref={creatorsListRef}>
          {loading ? (
            <p>Loading creators...</p>
          ) : (
            <div className='creators-list'>
              {creators.length === 0 ? (
                <p>No creators added yet.</p>
              ) : (
                <Creators creators={creators} />
              )}
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default App
