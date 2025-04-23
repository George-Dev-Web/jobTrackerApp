import { useState } from "react"
import { Link } from "react-router-dom"

function Register (){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        js: false,
        html: false,
        css: false,
        linkedIn: ""
    })
    return (
        <main>
            <header>
                <h1>Create an account - Job Tracker</h1>
            </header>
            <form>
                <h2>Register Account</h2>
                <div className="formElement">
                    <label htmlFor="">Name: </label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
                </div>
                <div className="formElement">
                    <label htmlFor="">Email: </label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>
                </div>
                <div className="formElement">
                    <label htmlFor="">Phone: </label>
                    <input type="phone" id="phone" name="phone" value={formData.phone} onChange={handleChange}/>
                </div>
                <div className="formElement">
                    <p>Skills</p>
                    <label htmlFor="js">Javascript</label>
                    <input type="checkbox" id="js" checked={formData.js} onChange={handleChange}/><br/>
                    <label htmlFor="html">HTML</label>
                    <input type="checkbox" id="html" checked={formData.html} onChange={handleChange}/><br/>
                    <label htmlFor="css">CSS</label>
                    <input type="checkbox" id="css" checked={formData.css} onChange={handleChange}/><br/>
                    <label htmlFor="python">Python</label>
                    <input type="checkbox" id="python" checked={formData.python} onChange={handleChange}/><br/>
                </div>
                <div className="formElement">
                    <label htmlFor="linkedin">LinkedIn: </label>
                    <input type="text" id="linkedin" value={.} onChange={handleChange}/>
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