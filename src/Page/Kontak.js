import React, { Component } from 'react';
import Header from './Header';
import '../Style/Header.css';

class Kontak extends Component {
  render() {
    return(
      <div id="kontak_image">
        <Header />
        <div id="kontak">
          <h3>
            Kapung Sukamantri Dusun 1 No 127 RT 005 RW 001 Desa Sukaraya Kecamatan Karang Bahagia Kabupaten Bekasi
          </h3>
          <p>
            085889451527
          </p>
        </div>
      </div>
    )
  }
}

export default Kontak;
