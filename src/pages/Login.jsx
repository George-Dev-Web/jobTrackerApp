import { Link } from "react-router-dom"

function Login(){
    return (
    <main>
        <header>
            <h1>Login to the Job Tracker App</h1>
        </header>
        <form>
            <div className="formElement">
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email"/>
            </div>
            <div className="formElement">
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password"/>
            </div>
            <input type="button" value="Login" />
        </form>
        <div>
            <p>
                Don't have an Account? 
                <Link to={"/register"}>Register</Link>
            </p>
        </div>
    </main>)
}

export default Login