import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PocetnaStrana from './pages/PocetnaStrana'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import KontrolnaTabla from './pages/KontrolnaTabla'
import Header from './components/Header'
import ONama from './pages/ONama'


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<PocetnaStrana />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/kontrolna-tabla' element={<KontrolnaTabla />} />
        <Route path='/o-nama' element={<ONama />} />
      </Routes>
    </BrowserRouter>
  )
}