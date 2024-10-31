import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useEffect } from 'react';
import { publicRoutes } from './routes'
import MainLayout from './components/layouts/MainLayout'


function App() {
  return(
    <Router>
      <div className='App'>
        <Routes>
          {publicRoutes.map((route, i) => {
            const Layout = route.layout || MainLayout
            return (<Route key={i} path={route.path} element={<Layout><route.component/></Layout>}/>)
          })}
        </Routes>
      </div>
    </Router>
  )  
}

export default App
