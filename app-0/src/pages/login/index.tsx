import { useRouter } from "next/router";
import { JSX } from "react"

export const Login = (): JSX.Element => {
    const router = useRouter();
    return (
            <main>
                    <p>Login</p>
                    <p>
                        {router.query.error}
                    </p>
                    <form action="">
                        <label htmlFor="username">
                            <span>Username</span>
                            <input type="text" name="username" id="" />
                        </label>
                        <label htmlFor="password">
                            <span>Password</span>
                            <input type="password" name="password" id="" />
                        </label>
                    </form>
            </main>
    )
}

export default Login;