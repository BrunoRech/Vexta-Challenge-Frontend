import React from 'react';
import Routes from './routes';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  toast.configure({
    position: 'top-right',
    autoClose: 8000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    newestOnTop: true
  });

  return (
    <>
      <Routes />
    </>
  );
}

export default App;
