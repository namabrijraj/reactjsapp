import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'


const Register = () => {
    const [user,setUserData] = useState({})
    const [msg,setMsg] = useState("")
    const navigate = useNavigate();
    const registerForm = (event) => {
        event.preventDefault()
        if(user){
            registerUser(user)
        }
    }
    const registerUser = async () => {
        await axios({
            method: 'post',
                url: 'http://localhost:8000/api/user',
                data: user
        }).then((response) => {
            console.log(response)
            if(response.status==201){
                return navigate('/login')
            } else {
                navigate('/')
            }
            setMsg(response.message)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    const inputHandle = (e) => {
        setUserData((oldVal) => {
            const {name,value} = e.target
            console.log(name)
            console.log(value)
            return {
                ...oldVal,
                [name] : value
            }
        })
    }
    return (
        <>
            <section class="inner_page_head">
                <div class="container_fuild">
                    <div class="row">
                    <div class="col-md-12">
                        <div class="full">
                            <h3>Sign Up</h3>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <section class="why_section layout_padding">
                <div class="container">                
                    <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                        <div class="full">
                            <form action="/" onSubmit={registerForm} >
                                <fieldset>
                                <input type="text" placeholder="Enter your first name" name="firstname" value={user.firstname} onChange={inputHandle} />
                                <input type="text" placeholder="Enter your last name" name="lastname" value={user.lastname} onChange={inputHandle} />
                                <input type="email" placeholder="Enter your email address" name="email" value={user.email} onChange={inputHandle}/>
                                <input type="password" placeholder="Enter your password" name="password" value={user.password} onChange={inputHandle}/>
                                <input type="text" placeholder="Enter your mobile number" name="mobile" value={user.mobile} onChange={inputHandle}/>
                                <textarea placeholder="Enter your address" name="address" value={user.address} onChange={inputHandle}></textarea>
                                <input type="submit" value="Submit" />
                                </fieldset>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register;