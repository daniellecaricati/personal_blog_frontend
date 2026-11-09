import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Home} from './pages/home/Home';
import { Navbar} from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';
import { Profile } from './pages/profile/Profile';
import { Login } from './pages/login/Login';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-zinc-50">
        <Navbar />
        
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/profile" element={<Profile />} />                
            </Routes>
          </div>

        <Footer />
      </div>    
    </BrowserRouter>
  );
}

export default App;