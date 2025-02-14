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
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const dispatch = useDispatch()
  const {isLogin, loading, errorMessage, error} = useSelector((state) => state.user)
  const navigate = useNavigate()
  const formRef = useRef(null)
  const labelUsernameRef = useRef(null)
  const labelPasswordRef = useRef(null)
  const labelConfirmPasswordRef = useRef(null)
  const toastLoadingId = useRef(null)

  //show password
  const handleClickShowPass  = () => {
    setShowPass(!showPass)
  }

  //chuyển đổi giữa đăng kí và đăng nhập
  const handleClick2 = () => {
    setRegister(!register)
  }

  //change event
  const handleChangeUsername = (e) => {
    labelUsernameRef.current.style.display = 'none'
    setUsername(e.target.value)
  }

  const handleChangePass = (e) => {
    labelPasswordRef.current.style.display = 'none'
    setPassword(e.target.value)
  }

  const handleChangeConfirmPass = (e) => {
    labelConfirmPasswordRef.current.style.display = 'none'
    setConfirmPassword(e.target.value)
  }

  //blur event
  const handleBlurUsername = () => {
    if(!username){
      labelUsernameRef.current.style.display = 'block'
    }else{
      labelUsernameRef.current.style.display = 'none'
    }
  }

  const handleBlurPassword = () => {
    if(!username){
      labelPasswordRef.current.style.display = 'block'
    }else{
      labelPasswordRef.current.style.display = 'none'
    }
  }

  const handleBlurConfirmPassword = () => {
    if(!username){
      labelConfirmPasswordRef.current.style.display = 'block'
    }else{
      labelConfirmPasswordRef.current.style.display = 'none'
    }
  }

  //submit form
  const handleSubmit = async (e) => {
    e.preventDefault()

    if(!username || !password){
      toast.warning('vui lòng nhập đầy đủ tài khoản và mật khẩu', {
        closeButton: true
      })
      return
    }

    if(register && password !== confirmPassword){
      toast.warning('xác nhận mật khẩu không chính xác',{
        closeButton: true
      })
      labelConfirmPasswordRef.current.style.display = 'block'
      return
    }

    const formData = {
      username: username,
      password: password
    }

    register ? dispatch(registerAccount(formData)) : dispatch(login(formData))

    toastLoadingId.current = register ? toast.loading('đang đăng ký') : toast.loading('đang đăng nhập')
  }

  useEffect(() => {
    if(loading == false && error){
      toast.dismiss(toastLoadingId.current)
      toast.error(errorMessage,{
        closeButton: true
      })
    }
  }, [loading, error])

  useEffect(() => {
    if(register && loading == false && !error){
      toast.dismiss(toastLoadingId.current)
      toast.success('đăng ký thành công')
    }
  }, [loading, error, dispatch])

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
          <input onChange={handleChangeUsername} onBlur={handleBlurUsername} type="text" value={username} name='username' id='username'/>
          <label className={c('notification')} ref={labelUsernameRef}>vui lòng nhập username</label>
        </div>

        <div className={c('password','relative')}>
          <label htmlFor="password" id='password'>Password</label>
          <input onChange={handleChangePass} onBlur={handleBlurPassword} type={showPass ? 'text' : 'password'} value={password} name='password'/>
          <span style={{cursor: 'pointer'}} onClick={handleClickShowPass} className='flex flex-center'>
            {showPass ? <ShowPassIcon/> : <HiddenPassIcon />}
          </span>
          <label className={c('notification')} ref={labelPasswordRef}>vui lòng nhập mật khẩu</label>
        </div>

        {register ?
        <div className={c('password','relative')}>
          <label htmlFor="confirmPassword" id='confirmPassword'>Confirm Password</label>
          <input onChange={handleChangeConfirmPass} onBlur={handleBlurConfirmPassword} value={confirmPassword} type={showPass ? 'text' : 'password'} name='confirmPassword'/>
          <span style={{cursor: 'pointer'}} onClick={handleClickShowPass} className='flex flex-center'>
            {showPass ? <ShowPassIcon/> : <HiddenPassIcon />}
          </span>
          <label className={c('notification')} ref={labelConfirmPasswordRef}>mật khẩu không chính xác</label>
        </div>: ''}

        <div className={c('login-button')}>
          <button className='button' >
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
