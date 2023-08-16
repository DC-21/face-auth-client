
const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-white">
        <div className="flex flex-col justify-center items-center w-[400px] h-[500px] border-2 border-blue-900 bg-white rounded">
            <h1 className="text-blue-900 text-xl font-semibold">Login Please</h1>
            <div className="w-full flex flex-col justify-center items-center">
                <div className="w-full flex flex-col justify-center items-center mt-2">
                    <label className="mt-2 text-blue-800">Email</label>
                    <input className="h-10 border-1 border-blue-900 justify-center" placeholder="email"/>
                </div>
                <div className="w-full flex flex-col justify-center items-center mt-2">
                    <label className="mt-2 text-blue-800">Password</label>
                    <input className="h-10 border-1 border-blue-900 justify-center" placeholder="password"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login