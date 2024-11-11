import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './LoginPage.module.scss'
import useFetchApi from 'src/hooks/useFetchApi'

const api = 'http://localhost:3000/api/quoc-gia'

function LoginPage(){

  const c = classNames.bind(styles)
  
  const data = useFetchApi('eu/the-loai')
  console.log(data)


  return(
    <div className={c('loginPage')}>
      {data.map((item) => (
        <li key={item.id}>
          <img src={item.img} alt="" />
        </li>
      ))}
    </div>
  )
}

export default LoginPage;
