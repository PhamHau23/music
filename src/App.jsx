import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { publicRoutes } from './routes'
import MainLayout from './components/MainLayout'
import { Provider } from 'react-redux'
import store from './redux/store'


function App() {
  return(
    <Provider store={store}>
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
    </Provider>
  )  
}

export default App
