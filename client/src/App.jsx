import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PocetnaStrana from './pages/PocetnaStrana';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import KontrolnaTabla from './pages/KontrolnaTabla';
import Header from './components/Header';
import ONama from './pages/ONama';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import OnlyNovinarPrivateRoute from './components/OnlyNovinarPrivateRoute';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';
import PostPage from './pages/PostPage';
import ScrollToTop from './components/ScrollToTop';


export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<PocetnaStrana />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path='/kontrolna-tabla' element={<KontrolnaTabla />} />
        </Route>
        <Route element={<OnlyNovinarPrivateRoute />}>
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/update-post/:postId' element={<UpdatePost />} />
        </Route>
        <Route path='/o-nama' element={<ONama />} />
        <Route path='/post/:postSlug' element={<PostPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}