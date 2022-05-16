import React,{useRef} from 'react'
import {ForkSpoon,Cateringe} from '../../assets'
import "./login.scss"

const Login = (props) => {
  return (
    <div className="login">
      <div className="child">
        <img src={Cateringe} alt='web logo' className="logo"/>
        <p>Its All About Food A Food</p>
        <p>We Here to Serve</p>
        <img src={ForkSpoon} alt='fork and spoon'/>
      </div>
      <div className="child">
        <h1>Masuk</h1>
        <form>
          <div>
            <label>Nama Pengguna</label>
            <input name="username" placeholder="joshgrobban"/>
          </div>
          <div>
            <label>Nama Pengguna</label>
            <input name="password" placeholder="**********" type="password"/>
          </div>
          <button className="loginBtn">Masuk</button>
        </form>
        <button className="registerBtn">Daftar Akun</button>
      </div>
    </div>
  )
}

export default Login
