import { Link } from "react-router-dom"

function Register (){
    return (
        <main>
            <header>
                <h1>Create an account - Job Tracker</h1>
            </header>
            <form>
                <h2>Register Account</h2>
                <div className="formElement">
                    <label htmlFor="">Name: </label>
                    <input type="text" id="name" name="name"/>
                </div>
                <div className="formElement">
                    <label htmlFor="">Email: </label>
                    <input type="email" id="email" name="email"/>
                </div>
                <div className="formElement">
                    <label htmlFor="">Phone: </label>
                    <input type="phone" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                </div>
                <div className="formElement">
                    <p>Skills</p>
                    <label htmlFor="js">Javascript</label>
                    <input type="checkbox" id="js"/><br/>
                    <label htmlFor="html">HTML</label>
                    <input type="checkbox" id="html"/><br/>
                    <label htmlFor="css">CSS</label>
                    <input type="checkbox" id="css"/><br/>
                    <label htmlFor="python">Python</label>
                    <input type="checkbox" id="python"/><br/>
                </div>
                <div className="formElement">
                    <label htmlFor="linkedin">LinkedIn: </label>
                    <input type="text" id="linkedin"/>
                </div>
                <input type="button" value="Register" />
            </form>
            <div>
                <p>
                    Already have an account? <Link to={"/login"}>Login Here</Link>
                </p>
            </div>
        </main>
    )
}

export default Register