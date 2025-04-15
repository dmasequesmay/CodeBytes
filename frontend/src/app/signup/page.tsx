export default function Signup(){
    /* REPLACE img source IN 5th LINE*/
    return (
        <div>
            <img className='justify-center w-50 mx-auto space-x-50 p-4' src='' alt='mascot' width={32} height={32}></img> 
            <p className='flex justify-center mx-auto space-x-50 p-4'>[Welcome Message!]</p>
            <div className='flex flex-col justify-center w-200 mx-auto space-x-50 p-4 border border-white rounded-lg'>
            <p className='flex justify-center w-auto mx-auto space-x-50'>Sign Up!</p>
            <label>Username</label>
            <input type='text' id='username' className='p-1 border border-white rounded m-2'></input>
            <label>Email</label>
            <input type='text' id='email' className='p-1 border border-white rounded m-2'></input>
            <label>Password</label>
            <input type='password' id='password' className='p-1 border border-white rounded m-2'></input>
            <div className='flex items-center m-2'>
                <div className='border-t border-white flex-grow'></div>
                <div className='flex justify-center w-auto mx-auto'>or sign up with</div>
                <div className='border-t border-white flex-grow'></div>
            </div>
            <div className='flex justify-center m-1 w-50 mx-auto space-x-50 border border-white rounded-lg'>
                <p className='m-1'>Sign up with Google</p>
            </div>
            <div>
                <p className='text-center'>Already have an account? <a href='#' className='text-blue-600 dark:text-blue-500 hover:underline'>Log in</a></p>
            </div>
            </div>
        </div>
    );
}
