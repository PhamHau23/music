import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './LoginPage.module.scss'
import { ShowPassIcon, HiddenPassIcon } from 'src/icon'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login, registerAccount } from '~/redux/slices/userSlice'

function LoginPage(){

  const c = classNames.bind(styles)
  const [showPass, setShowPass] = useState(false)
  const [register, setRegister] = useState(false)
  const formRef = useRef()
  const dispatch = useDispatch()
  const {isLogin} = useSelector((state) => state.user)
  const navigate = useNavigate()

  //show password
  const handleClick  = () => {
    setShowPass(!showPass)
  }

  //chuyển đổi giữa đăng kí và đăng nhập
  const handleClick2 = () => {
    setRegister(!register)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = {
      username: e.target.username.value,
      password: e.target.password.value,
    }

    register ? dispatch(registerAccount(formData)) : dispatch(login(formData))
  }

  useEffect(() => {
    if(isLogin) {
      navigate('/profile')
    }
  }, [dispatch, handleSubmit])

  return(
    <form className={c('loginPage')} onSubmit={handleSubmit} ref={formRef}>
      <div className={c('content')}>
        <h1>
          {register ? 'Đăng Kí' : 'Đăng Nhập'}
        </h1>
        <div className={c('userName','relative')}>
          <label htmlFor="username">Username</label>
          <input type="text" name='username' id='username'/>
        </div>

        <div className={c('password','relative')}>
          <label htmlFor="password" id='password'>Password</label>
          <input type={showPass ? 'text' : 'password'} name='password'/>
          <span style={{cursor: 'pointer'}} onClick={handleClick} className='flex flex-center'>
            {showPass ? <ShowPassIcon/> : <HiddenPassIcon />}
          </span>
        </div>

        {register ?
        <div className={c('password','relative')}>
          <label htmlFor="confirmPassword" id='confirmPassword'>Confirm Password</label>
          <input type={showPass ? 'text' : 'password'} name='confirmPassword'/>
          <span style={{cursor: 'pointer'}} onClick={handleClick} className='flex flex-center'>
            {showPass ? <ShowPassIcon/> : <HiddenPassIcon />}
          </span>
        </div>: ''}

        <div className={c('login-button')}>
          <button className='button'>
            {register ? 'Đăng Kí' : 'Đăng Nhập'}
          </button>
          {
            register 
            ? <span>Nếu đã có tài khoản hãy <a onClick={handleClick2}>đăng nhập ngay!</a></span>
            : <span>Nếu chưa có tài khoản hãy <a onClick={handleClick2}>đăng kí tại đây!</a></span>
          }
        </div>
      </div>
    </form>
  )
}

export default LoginPage;
