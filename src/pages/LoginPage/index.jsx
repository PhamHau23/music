import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './LoginPage.module.scss'
import { ShowPassIcon, HiddenPassIcon } from 'src/icon'

function LoginPage(){

  const c = classNames.bind(styles)
  const [showPass, setShowPass] = useState(false)
  const [register, setRegister] = useState(false)

  //show password
  const handleClick  = () => {
    setShowPass(!showPass)
  }

  //chuyển đổi giữa đăng kí và đăng nhập
  const handleClick2 = () => {
    setRegister(!register)
  }

  return(
    <div className={c('loginPage')}>
      <div className={c('content')}>
        <h1>Đăng Nhập</h1>
        <div className={c('userName','relative')}>
          <label htmlFor="">Username</label>
          <input type="text" />
        </div>

        <div className={c('password','relative')}>
          <label htmlFor="">Password</label>
          <input type={showPass ? 'text' : 'password'} />
          <span style={{cursor: 'pointer'}} onClick={handleClick} className='flex flex-center'>
            {showPass ? <ShowPassIcon/> : <HiddenPassIcon />}
          </span>
        </div>

        {register ? ' ' 
        :<div className={c('password','relative')}>
          <label htmlFor="">Confirm Password</label>
          <input type={showPass ? 'text' : 'password'} />
          <span style={{cursor: 'pointer'}} onClick={handleClick} className='flex flex-center'>
            {showPass ? <ShowPassIcon/> : <HiddenPassIcon />}
          </span>
        </div>}

        <div className={c('login-button')}>
          <button className='button'>
            {register ? 'Đăng Nhập' : 'Đăng Kí'}
          </button>
          {
            register 
            ? <span>Nếu chưa có tài khoản hãy <a onClick={handleClick2}>đăng kí tại đây!</a></span>
            : <span>Nếu đã có tài khoản hãy <a onClick={handleClick2}>đăng nhập ngay!</a></span>
          }
        </div>
      </div>
    </div>
  )
}

export default LoginPage;
