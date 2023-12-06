import React, { useState, useEffect } from 'react'


const FavoriteColor = () => {
    const [favoriteColor, setFavoriteColor] = useState('blue')
    const [count, setCount] = useState(0)
    useEffect(() => {
      setTimeout(() => {
      setFavoriteColor('green')
      }, 1000);
    }, [])
    

  return (

    <main className='FavoriteColor' >
        <h1>{`My favorite Color is ${favoriteColor}`}</h1>
    </main >
  )
}

export default FavoriteColor