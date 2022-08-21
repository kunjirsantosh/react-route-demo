import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home'
import { Navbar } from './components/Navbar';
import { OderSummary } from './components/OderSummary';
import { NoMatch } from './components/NoMatch'
import { Products } from './components/Products';
import { FeaturedProducts } from './components/Products/FeaturedProducts';
import { NewProducts } from './components/Products/NewProducts';
import { Users } from './components/Users';
import { Admin } from './components/Admin'
import { UserDetails } from './components/UserDetails';
import { Profile } from './components/Profile';
import { AuthProvider } from './components/Auth';
import { Login } from './components/Login';
import { RequireAuth } from './components/RequireAuth';

const LazyAbout = React.lazy(()=> import('./components/About'));

function App() {
  return (
    <AuthProvider>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='about' element={ <React.Suspense fallback="...Loading"><LazyAbout/></React.Suspense>}></Route>
      <Route path='oder-summary' element={<OderSummary/>}></Route>
      <Route path='profile' element={<RequireAuth ><Profile/></RequireAuth>}></Route>
      <Route path='login' element={<Login/>}></Route>
      <Route path='products' element={<Products/>}>
        <Route index element={<FeaturedProducts/>}/>
        <Route path='featured' element={<FeaturedProducts/>}></Route>
        <Route path='new' element={<NewProducts/>} ></Route>
      </Route>
      <Route  path='users' element={<Users/>}> 
          <Route path=':userId' element={<UserDetails/>}/>
          <Route path='admin' element={<Admin/>}/>
      </Route>
      <Route path='*' element={<NoMatch/>}></Route>
    </Routes>
    </AuthProvider> 
  );
}

export default App;
