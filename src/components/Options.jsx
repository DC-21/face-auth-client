import { Link } from 'react-router-dom'

const Options = () => {
  return (
    <div className='w-full h-screen justify-center items-center flex'>
        <div className='items-center w-full flex flex-col'>
            <p>Select login method</p>
            <div className='w-full justify-center items-center flex flex-col gap-4'>
                <Link to="/password" className='py-2 px-2 bg-blue-900 rounded text-white mt-2'>Password</Link>
                <p className='py-2 px-4 bg-orange-500 rounded text-white mt-2'>FaceID</p>
            </div>
        </div>
    </div>
  )
}

export default Options