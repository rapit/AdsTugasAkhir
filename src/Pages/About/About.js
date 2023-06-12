import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";
import Header from '../../Components/Header/Header';

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Us</h2>
            <p className='fs-17' id>BukaBuku adalah sebuah platform yang memudahkan pengguna dalam menemukan dan membaca buku secara praktis melalui perangkat elektronik. Dalam dunia yang sibuk dan waktu yang terbatas, BukaBuku hadir sebagai solusi yang mempercepat proses pencarian buku yang diinginkan. Dengan fitur-fitur yang lengkap, pengguna dapat dengan mudah mencari buku berdasarkan judul, penulis, genre, atau kata kunci lainnya. Informasi lengkap tentang setiap buku, termasuk sinopsis, informasi penulis, dan ulasan pengguna, membantu pengguna dalam memilih bacaan yang sesuai dengan minat dan preferensi mereka. BukaBuku juga memfasilitasi pengguna untuk berbagi buku favorit mereka dengan orang lain melalui fitur berbagi buku. Pengguna dapat mengunggah buku elektronik yang dimiliki ke platform dan membagikannya dengan pengguna lain, meningkatkan minat baca masyarakat serta memberikan kesempatan kepada orang lain untuk menikmati bacaan yang mereka sukai.
Selain menjadi tempat untuk menemukan dan membaca buku, BukaBuku juga mengutamakan pengalaman pengguna yang personal. Dengan fitur login dan edit profil yang terintegrasi, pengguna dapat mengatur preferensi mereka, menyusun daftar buku favorit, dan membuat catatan pribadi. Mereka juga dapat berinteraksi dengan komunitas pengguna lainnya, berbagi ulasan, dan saling merekomendasikan buku. Hal ini menciptakan lingkungan yang menyenangkan bagi para pencinta buku untuk berkomunikasi dan bertukar pengalaman.
Dalam era digital, BukaBuku menjadi alternatif yang praktis bagi para pengguna yang tidak memiliki waktu untuk pergi ke toko buku atau perpustakaan. Dengan akses mudah melalui perangkat elektronik, pengguna dapat menemukan buku yang mereka cari dalam hitungan detik. Dukungan fitur rating dan ulasan juga membantu pengguna dalam mengevaluasi kualitas buku sebelum memutuskan untuk membacanya. BukaBuku tidak hanya memperluas cakupan pengetahuan dan wawasan pengguna, tetapi juga menciptakan ikatan komunitas yang kuat di antara pencinta buku.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About