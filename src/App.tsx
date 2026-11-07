import React from 'react';
import {Home} from './pages/home/Home';
import { Navbar} from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';


const App: React.FC = () => {
  return (
   <div className="flex flex-col min-h-screen">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;