import { Link } from 'react-router-dom'

const Options = () => {
  return (
    <div className='w-full h-screen justify-center items-center flex'>
        <div className='items-center w-full flex flex-col'>
            <p>Select login method</p>
            <div className='w-full justify-center items-center flex flex-col gap-4'>
                <Link to="/password">Password</Link>
                <p>FaceID</p>
            </div>
        </div>
    </div>
  )
}

export default Options