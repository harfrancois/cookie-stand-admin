export default function LoginForm({ onLogin }) {

    async function handleSubmit(event) {
        event.preventDefault();
        onLogin(event.target.username.value, event.target.password.value);
    }

    return (
        <form onSubmit={handleSubmit} className='justify-center relative flex py-6 bg-purple-500 rounded-md mx-40'>
            <fieldset autoComplete='off'>
                <legend className='text-5xl'>Log In</legend>
                <label htmlFor="username" className='text-xl'>Username</label>
                <input className="m-2" name="username" />
                <label htmlFor="password" className='text-xl'>Password</label>
                <input className=" m-2" type="password" name="password" />
                <button className="bg-purple-700 p-2 border border-black m-2 text-2xl">Log In</button>
            </fieldset>
        </form>
    );
}