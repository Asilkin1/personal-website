import React, { useEffect, useState } from 'react';
import certificatesData from '../../data/certificates.json';
import './Certificates.css'
const Certificates = () => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    // Since we're importing the JSON directly, we can set it immediately
    setCertificates(certificatesData);
  }, []);

  return (
    <div className="certificates">
      <div className="certificates-counter">{certificates.length}</div>
      <ul>
        {certificates.map((certificate, index) => (
          <li key={index}>
            <h3>{certificate.name}</h3>
            <p><strong>Date Obtained:</strong> {certificate.dateObtained}</p>
            {certificate.expirationDate && (
              <p><strong>Expiration Date:</strong> {certificate.expirationDate}</p>
            )}
            <p>
              <a href={certificate.imageLink} target="_blank" rel="noopener noreferrer">
                <img src={certificate.imageLink} alt={certificate.name} style={{ width: '100px', height: 'auto' }} />
              </a>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certificates;
