import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { privateRoutes, publicRoutes } from './routes'
import MainLayout from './components/layouts/MainLayout'
import { Provider } from 'react-redux'
import store from './redux/store'
import PrivateRoute from '~/components/PrivateRoute'


function App() {
  return(
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Routes>
            {publicRoutes.map((route, i) => {
              const Layout = route.layout || MainLayout
              return (<Route key={i} 
                       path={route.path} 
                       element={<Layout><route.component/></Layout>
                      }/>)
            })}

            {privateRoutes.map((route, i) =>{
              const Layout = route.layout || MainLayout
              return (<Route key={i} 
                      path={route.path} 
                      element={
                        <PrivateRoute>
                          <Layout>
                            <route.component />
                          </Layout>
                        </PrivateRoute>
                      }/>)
            })}
          </Routes>
        </div>
      </Router>
    </Provider>
  )  
}

export default App
