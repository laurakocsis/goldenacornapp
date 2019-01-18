import React from 'react';
import Navbar from './components/navbar';

const App = ({ children }) => (
  <div>
    <Navbar />
    {children}
  </div>
)

export default App;
