import React, { useState } from 'react';
import { QRCode } from 'qrcode';
import './App.css';

function App() {

const [qrCodeData, setQrCodeData]= useState('');

const [qrCodeImage, setQRCodeImage]=useState('');

const generateQRCode = () =>{
  QRCode.toDataURL(qrCodeData, (err, url)=>{
    if(err) return console.error("Failed to generate QR Code", err);
    setQRCodeImage(url);
  })

}





  return (
    <div>
      <h2>QR Code Generator</h2>
      <div>
        <input type='text' value={qrCodeData}
        onChange={e=>setQrCodeData(e.target.value)}
        
        placeholder="Enter data to qrcode"/>
        <button onClick={generateQRCode}>Generate</button>
        
        
      </div>
      
    </div>
  );
}

export default App;
