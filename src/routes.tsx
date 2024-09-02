import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import { Header } from './components/Header'
import GlobalStyle from './styles/globalStyle'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function AppRouter(){
    return(
        <>
            <GlobalStyle/>
            <Router>
                <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/cadastro' element={<Register/>}/>
                </Routes>
            </Router>
        </>
    )
}