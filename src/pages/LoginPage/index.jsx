import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './LoginPage.module.scss'
import { ShowPassIcon, HiddenPassIcon } from '~/icon'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login, registerAccount } from '~/redux/slices/userSlice'
import { toast, ToastContainer } from 'react-toastify'

function LoginPage(){

  const c = classNames.bind(styles)
  const [showPass, setShowPass] = useState(false)
  const [register, setRegister] = useState(false)
  const formRef = useRef()
  const dispatch = useDispatch()
  const {isLogin, loading, message, error} = useSelector((state) => state.user)
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

    const toastLoadingId = register ? toast.loading('đang đăng ký') : toast.loading('đang đăng nhập')

    if(register && loading === false && error === null){
      toast.dismiss(toastLoadingId)
      toast.success('đăng ký thành công')
    }

    if(loading === false && error){
      toast.dismiss(toastLoadingId)
      toast.error(error,{
        autoClose: false,
        closeButton: true
      })
    }
  }

  useEffect(() => {
    if(isLogin) {
      navigate('/')
    }
  }, [dispatch, handleSubmit])

  return(
    <form className={c('loginPage')} onSubmit={handleSubmit} ref={formRef}>
      <ToastContainer autoClose={2000} position='top-right' />
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
