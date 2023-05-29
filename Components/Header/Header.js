import React from 'react';
import Navbar from '../Navbar/Navbar';
import Searchform from '../Searchform/Searchform';
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
      <header className='header'>
          <Navbar />
          <div className='header-content'>
            <h2 className='header-title text-capitalize'> Welcome to BukaBuku, your ultimate destination for reading books.</h2><br />
            <p className='header-text fs-15 fw-2'>Selamat datang di BukaBuku! Temukan ribuan buku digital dengan mudah dan praktis. Cari buku favorit Anda melalui fitur pencarian yang mudah digunakan. Nikmati kebebasan membaca tanpa batas dengan akses ke perpustakaan digital kami. Berbagi buku favorit, berikan rating, dan tulis ulasan. Bergabunglah dengan komunitas pembaca di BukaBuku! Selamat membaca!</p>
          <Searchform />
         </div>
       </header>
   </div>
 )
}

export default Header
