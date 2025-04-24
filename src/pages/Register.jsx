import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from 'uuid';


export const users = "http://localhost:3000/users";

function Register (){
    const [messages, setMessages] = useState({
        email: "",
        phone: "",
        linkedin: "" 
    });
    const [formData, setFormData] = useState({
        id: uuid(),
        name: "",
        email: "",
        phone: "",
        js: false,
        html: false,
        css: false,
        python: false,
        linkedin: "",
        password: ""
    });
    const navigate = useNavigate()

    function handleChange(e){
        const name = e.target.id;
        const value= e.target.value;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    function handleClick(e){
        const name = e.target.id;
        const checked = e.target.checked
        setFormData({
            ...formData,
            [name]: checked
        })
    }
    
    function handleSubmit(e){
        e.preventDefault()
        fetch(users, {
            method: "POST",
            headers : {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(data => {
            console.log(data)
            setFormData({
                id: uuid(),
                name: "",
                email: "",
                phone: "",
                js: false,
                html: false,
                css: false,
                python: false,
                linkedin: "",
                password: ""
            })
            navigate("/")
        })
    }


    function check(e){
        if(e.target.name === "email"){
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!emailPattern.test(e.target.value)){
                const newMessage = <p>Invalid email</p>
                setMessages({
                    ...messages,
                    email: newMessage
                })
            }
            else{
                setMessages({
                    ...messages,
                    email: ""
                })
            }
        }
        else if(e.target.name === "phone"){
            const phonePattern = /^\+2547\d{2}\d{3}\d{3}$/;
            
            if (!phonePattern.test(e.target.value)){
                const newMessage = <p>Invalid number</p>
                setMessages({
                    ...messages,
                    phone: newMessage
                })
            }
            else{
                setMessages({
                    ...messages,
                    phone: ""
                })
            }
        }
        else if(e.target.id === "linkedin"){
            const phonePattern = /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)/;
            console.log
            if (!phonePattern.test(e.target.value)){
                const newMessage = <p>Invalid link</p>
                setMessages({
                    ...messages,
                    linkedin: newMessage
                })
            }
            else{
                setMessages({
                    ...messages,
                    linkedin: ""
                })
            }
        }
    }
    
    return (
        <main>
            <header>
                <h1>Create an account - Job Tracker</h1>
            </header>

            <form onSubmit={handleSubmit}>
                <h2>Register Account</h2>

                <div className="formElement">
                    <label htmlFor="">Name: </label>
                    <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange}/>
                </div>

                <div className="formElement">
                    <label htmlFor="">Email: </label>
                    <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    onBlur={check} 
                    value={formData.email} 
                    onChange={handleChange}/>
                </div>

                {messages.email}

                <div className="formElement">
                    <label htmlFor="">Phone: </label>
                    <input 
                    type="phone" 
                    id="phone" 
                    name="phone" 
                    onBlur={check} 
                    value={formData.phone} 
                    onChange={handleChange}/>
                </div>

                {messages.phone}

                <div className="formElement">
                    <p>Skills</p>
                    <label htmlFor="js">Javascript</label>
                    <input 
                    type="checkbox" 
                    id="js" 
                    checked={formData.js} 
                    onChange={handleClick}/><br/>

                    <label htmlFor="html">HTML</label>
                    <input 
                    type="checkbox" 
                    id="html" 
                    checked={formData.html} 
                    onChange={handleClick}/><br/>

                    <label htmlFor="css">CSS</label>
                    <input 
                    type="checkbox" 
                    id="css" 
                    checked={formData.css} 
                    onChange={handleClick}/><br/>
                    <label htmlFor="python">Python</label>
                    <input 
                    type="checkbox" 
                    id="python" 
                    checked={formData.python} 
                    onChange={handleClick}/><br/>
                </div>

                <div className="formElement">
                    <label htmlFor="linkedin">LinkedIn: </label>
                    <input 
                    type="text" 
                    id="linkedin" 
                    onBlur={check}
                    value={formData.linkedIn} 
                    onChange={handleChange}/>
                    {messages.linkedin}
                </div>

                <div className="formElement">
                    <label htmlFor="password">Password: </label>
                    <input 
                    type="password" 
                    name="password" 
                    id="password"
                    value={formData.password}
                    onChange={handleChange}/>
                </div>

                <button type="submit">Register</button>

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