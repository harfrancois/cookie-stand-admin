import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Table from '../components/Table'
import { useState } from 'react'


export default function Home() {
  const [locations, setLocations] = useState([])
  const hourly_sales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
  function formHandler(e) {
    e.preventDefault();
    let formData = {
      id: locations.length +1,
      location: e.target.Location.value,
      minCustomer : e.target.Minimum.value,
      maxCustomer : e.target.Maximum.value,
      avgCookies : e.target.Average.value,
      hourlySales : hourly_sales.map(hour => Math.floor(Math.random() * (e.target.Maximum.value - e.target.Minimum.value) + e.target.Minimum.value))
    }
    setLocations([...locations, formData])
    e.target.reset()
  }

  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <Header/>

      <main >
        <Form onSubmit={formHandler} />
        <Table locations={locations}/>
      </main>

      <Footer count={locations.length}/>
    </div>
  )
}
