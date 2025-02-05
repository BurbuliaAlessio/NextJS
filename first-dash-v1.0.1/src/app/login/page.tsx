import './style.scss';

const Login = () => {
    return (
        <main className="login">
            <div className='container'>
                <h1>Login</h1>
                <form>
                    <label htmlFor="username">
                        <p>Username</p>
                        <input type="text" name="username" id="username" />
                    </label>
                    <label htmlFor="password">
                        <p>Password</p>
                        <input type="password" name="password" id="password" />
                    </label>
                    <button className='button' onClick={(e) => {e.preventDefault(); isAuth}}>
                        Login       
                    </button>
                </form>
            </div>
        </main>
    );
}

export default Login;