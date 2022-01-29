import {UserContext} from '../../../App'
import React, { useContext , useState} from "react";
import { useNavigate } from "react-router-dom";
const axios = require('axios')


const Login = () => {    
    const [user,setUserData] = useState({})
    const [msg,setMsg] = useState("")
    const navigate = useNavigate();
    const {state,dispatch} = useContext(UserContext);

    const loginForm = (event) => {
        event.preventDefault()
        if(user){
            loginUser(user)
        }
    }
    const loginUser = async () => {
        await axios({
            method: 'post',
                url: 'http://localhost:8000/api/login',
                data: user
        }).then((response) => {
            if(response.status==201){
                dispatch({type:'USER',payload:response.data.user
            })
                return navigate('/')
            } else {
                navigate('/login')
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
                            <h3>Login</h3>
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
                            <form action="/" onSubmit={loginForm} >
                                <fieldset>
                                <input type="email" placeholder="Enter your email address" name="email" value={user.email} onChange={inputHandle} />
                                <input type="password" placeholder="Enter your password" name="password" value={user.password}  onChange={inputHandle} />
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

export default Login;