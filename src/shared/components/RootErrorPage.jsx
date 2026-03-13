import { Link, useRouteError } from 'react-router'

const RootErrorPage = () => {
  const error = useRouteError()
  console.log(error)
  return (
    <div className='h-screen max-w-7xl flex items-center justify-center bg-[#feffec]'>
      <div className='text-center tracking-widest'>
      <h1 className='text-5xl font-bold text-red-700 py-4'>Oops!!!</h1>
      <p className='text-sm text-gray-700 py-2'>Sorry, an unexpected error occurred.</p>
      <p className='font-semibold'>Error - {error.statusText || error.message}</p>
      <Link to={'/'}>
      <button className=' px-8 py-2 bg-[#63ce36] 
      text-lg tracking-widest text-center text-white mt-4 mb-4 uppercase '>
        Back to Homepage
      </button>
      </Link>
    </div>
    </div>
  )
}

export default RootErrorPage