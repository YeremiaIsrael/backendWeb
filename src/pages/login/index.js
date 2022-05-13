import React,{useRef} from 'react'
import {ForkSpoon,Cateringe} from '../../assets'

const Login = (props) => {
  return (
    <div>
      <div>
        <img src={Cateringe} alt='web logo'/>
        <p>Its All About Food A Food</p>
        <p>We Here to Serve</p>
        <img src={ForkSpoon} alt='fork and spoon'/>
      </div>
      <div>
        <h1>Masuk</h1>
        <form>
          <div>
            <label>Nama Pengguna</label>
            <input name="username" placeholder="joshgrobban"/>
          </div>
          <div>
            <label>Nama Pengguna</label>
            <input name="password" placeholder="**********"/>
          </div>
          <button>Masuk</button>
        </form>
        <button>Daftar Akun</button>
      </div>
    </div>
  )
}

export default Login
