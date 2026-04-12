import React, { useState } from 'react';

function Weather() {
  const [weatherData] = useState([
    { id: 1, location: 'Chennai', temp: '32°C', humidity: '78%', rainfall: '2.5mm', condition: 'Partly Cloudy', advisory: '🌧️ Light rain expected' },
    { id: 2, location: 'Delhi', temp: '28°C', humidity: '65%', rainfall: '0mm', condition: 'Clear', advisory: '☀️ Good irrigation day' },
    { id: 3, location: 'Mumbai', temp: '30°C', humidity: '72%', rainfall: '1.2mm', condition: 'Cloudy', advisory: '⛅ Moderate conditions' },
    { id: 4, location: 'Bangalore', temp: '25°C', humidity: '68%', rainfall: '0.5mm', condition: 'Clear', advisory: '☀️ Ideal for planting' },
    { id: 5, location: 'Hyderabad', temp: '31°C', humidity: '70%', rainfall: '3.1mm', condition: 'Rainy', advisory: '🌧️ Heavy rain expected' },
    { id: 6, location: 'Pune', temp: '26°C', humidity: '62%', rainfall: '0mm', condition: 'Clear', advisory: '☀️ Perfect weather' }
  ]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🌦️ Weather & Crop Conditions</h1>
      <p style={styles.subtitle}>Real-time weather data for optimal farming</p>

      <div style={styles.grid}>
        {weatherData.map(item => (
          <div key={item.id} style={styles.weatherCard}>
            <h3 style={styles.cardTitle}>📍 {item.location}</h3>
            
            <div style={styles.weatherItem}>
              <span style={styles.label}>🌡️ Temperature:</span>
              <span style={styles.value}>{item.temp}</span>
            </div>
            
            <div style={styles.weatherItem}>
              <span style={styles.label}>💧 Humidity:</span>
              <span style={styles.value}>{item.humidity}</span>
            </div>
            
            <div style={styles.weatherItem}>
              <span style={styles.label}>🌧️ Rainfall:</span>
              <span style={styles.value}>{item.rainfall}</span>
            </div>
            
            <div style={styles.weatherItem}>
              <span style={styles.label}>⛅ Condition:</span>
              <span style={styles.value}>{item.condition}</span>
            </div>
            
            <div style={styles.advisory}>
              <strong>Advisory:</strong> {item.advisory}
            </div>
          </div>
        ))}
      </div>

      <div style={styles.infoSection}>
        <h3>📌 Weather Impact on Crops</h3>
        <div style={styles.tipsGrid}>
          <div style={styles.tipCard}>
            <h4>☀️ High Temperature</h4>
            <p>Increase irrigation frequency. Consider shade management for sensitive crops like tomato and lettuce.</p>
          </div>
          <div style={styles.tipCard}>
            <h4>🌧️ Heavy Rainfall</h4>
            <p>Ensure proper drainage. Avoid irrigation. Monitor for fungal diseases and pests.</p>
          </div>
          <div style={styles.tipCard}>
            <h4>💧 Low Humidity</h4>
            <p>Risk of pest infestation increases. Regular monitoring and preventive measures needed.</p>
          </div>
          <div style={styles.tipCard}>
            <h4>⛅ Moderate Weather</h4>
            <p>Ideal conditions for most farming activities including planting and harvesting.</p>
          </div>
        </div>
      </div>

      <div style={styles.forecastSection}>
        <h3>📅 7-Day Forecast Tips</h3>
        <ul style={styles.forecastList}>
          <li>✅ Monday: Best day for planting new crops</li>
          <li>✅ Tuesday: Continue regular maintenance</li>
          <li>⚠️ Wednesday: Rain expected - prepare drainage</li>
          <li>⚠️ Thursday: Humid conditions - watch for pests</li>
          <li>✅ Friday: Clear weather - good for harvesting</li>
          <li>✅ Saturday: Perfect irrigation day</li>
          <li>⚠️ Sunday: Possible storm - secure loose items</li>
        </ul>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px 20px',
    maxWidth: '1100px',
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    marginBottom: '40px'
  },
  weatherCard: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    borderTop: '4px solid #2196F3'
  },
  cardTitle: {
    color: '#2d5016',
    marginBottom: '15px',
    fontSize: '1.3rem'
  },
  weatherItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 0',
    borderBottom: '1px solid #eee'
  },
  label: {
    fontWeight: 'bold',
    color: '#333'
  },
  value: {
    color: '#2196F3',
    fontWeight: 'bold'
  },
  advisory: {
    marginTop: '15px',
    padding: '10px',
    backgroundColor: '#fff3cd',
    borderLeft: '3px solid #ffc107',
    borderRadius: '3px'
  },
  infoSection: {
    backgroundColor: '#f9f9f9',
    padding: '30px',
    borderRadius: '8px',
    marginBottom: '30px'
  },
  tipsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '15px',
    marginTop: '20px'
  },
  tipCard: {
    backgroundColor: 'white',
    padding: '15px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  forecastSection: {
    backgroundColor: '#e8f5e9',
    padding: '25px',
    borderRadius: '8px',
    borderLeft: '4px solid #4CAF50'
  },
  forecastList: {
    marginTop: '15px',
    paddingLeft: '20px',
    lineHeight: '2'
  }
};

export default Weather;
