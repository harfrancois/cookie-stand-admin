
export default function Form(props) {

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
