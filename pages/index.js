import Head from 'next/head'
import { useState } from 'react';

export default function Home() {

  const [output, setForm] = useState([]);


  function InputHandler(e){
    e.preventDefault();
    let formData = {
      location : e.target.Location.value,
      minCustomer : e.target.Minimum.value,
      maxCustomer : e.target.Maximum.value,
      avgCustomer : e.target.Average.value,
    }

    const StringData = JSON.stringify(formData)

    e.preventDefault();
    setForm(StringData);
    e.target.reset();
  }
  return (
    <div>

      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <Header/>

      <main>
        <Form onSubmit={InputHandler}/>
        <Output output={output}/>
      </main>

      <Footer copyright='2022'/>

    </div>
  )
}

function Header() {
  return <header className='px-8 py-6 text-5xl bg-purple-800'>
      <h1>Cookie Stand Admin</h1>
  </header>
}

function Form(props){
  return (
    <div className='justify-center relative flex py-6'>

    <form onSubmit={props.onSubmit} className='flex-wrap w-1/2 p-2  bg-purple-500 rounded-md' >

      <h2 className='text-center py-5 text-3xl' > Create Cookie Stand </h2>

      <div className='flex py-2 pb-6'>
        <label className='pr-2'>Location</label>
        <input id='Location' className='flex-auto' />
      </div>

      <div className='flex justify-center relative'>

        <div>
          <label>Minimum Customers per Hour</label>
          <input id='Minimum'/>
        </div>

        <div>
          <label>Maximum Customers per Hour</label>
          <input id='Maximum'/>
        </div>

        <div>
          <label>Average Cookies per Sale</label>
          <input id='Average'/>
        </div>

        <button className=' px-9 py-3 bg-purple-700'>Create</button>

      </div>

    </form>

    </div>
  )

}

function Output(props){
  return (
    <div>
      <h3 className='justify-center relative flex py-6'>
        Report Table Coming Soon...
      </h3>
      <a className='flex justify-center' > {props.output}</a>
    </div>
  )

}

function Footer({ copyright }) {
  return (
      <footer className='p-5 text-2xl bg-purple-800'>
          <a>&copy;{copyright}</a>
      </footer>
  )
}