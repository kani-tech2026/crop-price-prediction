import React, { useState } from 'react';

function Prices() {
  const [priceData] = useState([
    { id: 1, crop: 'Rice', location: 'Chennai', price: '₹45/kg', trend: '↑ 3.2%', quality: 'Grade A' },
    { id: 2, crop: 'Wheat', location: 'Delhi', price: '₹32/kg', trend: '↓ 1.5%', quality: 'Standard' },
    { id: 3, crop: 'Carrot', location: 'Mumbai', price: '₹28/kg', trend: '↑ 2.1%', quality: 'Fresh' },
    { id: 4, crop: 'Onion', location: 'Bangalore', price: '₹42/kg', trend: '→ 0.5%', quality: 'Organic' },
    { id: 5, crop: 'Tomato', location: 'Hyderabad', price: '₹35/kg', trend: '↑ 4.8%', quality: 'Fresh' },
    { id: 6, crop: 'Potato', location: 'Pune', price: '₹25/kg', trend: '↓ 2.3%', quality: 'Standard' },
    { id: 7, crop: 'Maize', location: 'Jaipur', price: '₹38/kg', trend: '↑ 1.9%', quality: 'Grade A' },
    { id: 8, crop: 'Cotton', location: 'Gujarat', price: '₹185/kg', trend: '↓ 0.8%', quality: 'Premium' },
  ]);

  const [filter, setFilter] = useState('');

  const filteredData = priceData.filter(item => 
    item.crop.toLowerCase().includes(filter.toLowerCase()) ||
    item.location.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📊 Current Market Prices</h1>
      <p style={styles.subtitle}>Real-time crop prices across India</p>

      <div style={styles.filterBox}>
        <input 
          type="text"
          placeholder="Search by crop or location..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={styles.filterInput}
        />
      </div>

      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr style={styles.tableHeader}>
              <th style={styles.th}>🌾 Crop</th>
              <th style={styles.th}>📍 Location</th>
              <th style={styles.th}>💰 Price</th>
              <th style={styles.th}>📈 Trend</th>
              <th style={styles.th}>⭐ Quality</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map(item => (
              <tr key={item.id} style={styles.tableRow}>
                <td style={styles.td}>{item.crop}</td>
                <td style={styles.td}>{item.location}</td>
                <td style={styles.td}><strong>{item.price}</strong></td>
                <td style={{...styles.td, color: item.trend.includes('↑') ? 'green' : 'red'}}>
                  <strong>{item.trend}</strong>
                </td>
                <td style={styles.td}>{item.quality}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={styles.infoSection}>
        <h3>💡 Price Information</h3>
        <div style={styles.infoGrid}>
          <div style={styles.infoCard}>
            <h4>📊 Price Updates</h4>
            <p>Prices are updated every hour with real market data.</p>
          </div>
          <div style={styles.infoCard}>
            <h4>🌍 Multiple Locations</h4>
            <p>View prices from major agricultural markets across India.</p>
          </div>
          <div style={styles.infoCard}>
            <h4>📈 Trend Analysis</h4>
            <p>Track price movements to make better selling decisions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px 20px',
    maxWidth: '1000px',
    margin: '0 auto'
  },
  title: {
    textAlign: 'center',
    fontSize: '2.5rem',
    color: '#2d5016',
    marginBottom: '10px'
  },
  subtitle: {
    textAlign: 'center',
    fontSize: '1.1rem',
    color: '#666',
    marginBottom: '30px'
  },
  filterBox: {
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center'
  },
  filterInput: {
    width: '100%',
    maxWidth: '500px',
    padding: '12px',
    border: '2px solid #ddd',
    borderRadius: '5px',
    fontSize: '1rem'
  },
  tableContainer: {
    overflowX: 'auto',
    marginBottom: '30px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    borderRadius: '8px'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: 'white'
  },
  tableHeader: {
    backgroundColor: '#2d5016',
    color: 'white'
  },
  th: {
    padding: '15px',
    textAlign: 'left',
    fontWeight: 'bold'
  },
  tableRow: {
    borderBottom: '1px solid #ddd',
    transition: 'background 0.2s'
  },
  td: {
    padding: '12px 15px'
  },
  infoSection: {
    backgroundColor: '#f9f9f9',
    padding: '30px',
    borderRadius: '8px'
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    marginTop: '20px'
  },
  infoCard: {
    backgroundColor: 'white',
    padding: '15px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }
};

export default Prices;
