import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card'

const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`./data.json`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [])

  return (
    <div>
      <Banner />
      <ul className="gallery">
        {data.map((rent) => (
          <Card
            key={rent.id}
            id={rent.id}
            title={rent.title}
            cover={rent.cover}
          />
        ))}
      </ul>
    </div>
  )
}

export default Home