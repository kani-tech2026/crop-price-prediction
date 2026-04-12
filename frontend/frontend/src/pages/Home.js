import React, { useState } from 'react';
import axios from 'axios';

function Home() {
  const [cropName, setCropName] = useState("");
  const [location, setLocation] = useState("");
  const [result, setResult] = useState(null);

  const handlePredict = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/predict", { cropName, location });
      console.log("Response from backend:", res.data);
      setResult(res.data);
    } catch (err) { 
      console.error("Error:", err);
      alert("Server Error! Make sure backend is running on port 5000"); 
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🌾 Crop Price Prediction</h1>
      <p style={styles.subtitle}>Get AI-powered crop price predictions instantly</p>
      
      <div style={styles.card}>
        <form onSubmit={handlePredict} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Crop Name</label>
            <input 
              placeholder="e.g., Carrot, Rice, Wheat" 
              value={cropName}
              onChange={(e) => setCropName(e.target.value)} 
              style={styles.input} 
              required 
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Location</label>
            <input 
              placeholder="e.g., Chennai, Delhi" 
              value={location}
              onChange={(e) => setLocation(e.target.value)} 
              style={styles.input} 
              required 
            />
          </div>

          <button type="submit" style={styles.btn}>Predict Price</button>
        </form>

        {result && (
          <div style={styles.result}>
            <h3>📊 Prediction Results</h3>
            <div style={styles.priceComparison}>
              <div style={styles.priceBox}>
                <h4>📈 Current Market Price</h4>
                <p style={styles.priceValue}>₹{result.marketRate || result.currentPrice || 'N/A'}</p>
                <small>per kg (Today)</small>
              </div>
              <div style={styles.arrow}>→</div>
              <div style={styles.priceBoxHighlight}>
                <h4>🤖 AI Predicted Price</h4>
                <p style={styles.priceValue}>₹{result.price || result.predictedPrice || 'N/A'}</p>
                <small>per kg (Expected)</small>
              </div>
            </div>
            
            <div style={styles.detailsBox}>
              <p><strong>🌾 Crop:</strong> {result.crop || cropName}</p>
              <p><strong>📍 Location:</strong> {result.location || location}</p>
              <p><strong>🌦️ Weather:</strong> {result.weather || 'N/A'}</p>
              
              {result.price && result.marketRate && (
                <div style={{...styles.trendBox, borderColor: result.price > result.marketRate ? '#4CAF50' : '#f44336'}}>
                  <strong>
                    {result.price > result.marketRate ? '📈 Price Rising' : '📉 Price Dropping'}
                  </strong>
                  <p>
                    {result.price > result.marketRate 
                      ? `💡 Trend Analysis: Prices are expected to increase. It's better to wait ${Math.round((result.price - result.marketRate) / 2)} days before selling for better profit!`
                      : `💡 Trend Analysis: Prices are dropping. Sell within the next 2-3 days to get better rates!`
                    }
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div style={styles.infoGrid}>
        <div style={styles.infoCard}>
          <h3>💡 About AgroPredict</h3>
          <p>Helping farmers get accurate crop prices using AI and real-time market data.</p>
        </div>
        <div style={styles.infoCard}>
          <h3>🎯 How It Works</h3>
          <p>Enter your crop name and location to get instant price predictions based on market trends.</p>
        </div>
        <div style={styles.infoCard}>
          <h3>📱 Features</h3>
          <p>Real-time predictions, Weather data, Tips, Market rates, Multi-language support.</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px 20px',
    maxWidth: '900px',
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
  card: {
    backgroundColor: '#f9f9f9',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    marginBottom: '30px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column'
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#333'
  },
  input: {
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '1rem',
    fontFamily: 'Arial'
  },
  btn: {
    padding: '12px 30px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'background 0.3s',
    marginTop: '10px'
  },
  result: {
    marginTop: '20px',
    padding: '20px',
    backgroundColor: '#e8f5e9',
    borderLeft: '4px solid #4CAF50',
    borderRadius: '5px'
  },
  priceComparison: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: '20px',
    margin: '20px 0',
    padding: '15px',
    backgroundColor: 'white',
    borderRadius: '8px'
  },
  priceBox: {
    flex: 1,
    padding: '15px',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    textAlign: 'center',
    border: '2px solid #ddd'
  },
  priceBoxHighlight: {
    flex: 1,
    padding: '15px',
    backgroundColor: '#fff9e6',
    borderRadius: '8px',
    textAlign: 'center',
    border: '2px solid #ffc107'
  },
  priceValue: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#2d5016',
    marginTop: '10px'
  },
  arrow: {
    fontSize: '2rem',
    color: '#4CAF50',
    fontWeight: 'bold'
  },
  detailsBox: {
    backgroundColor: 'white',
    padding: '15px',
    borderRadius: '8px',
    marginTop: '15px'
  },
  trendBox: {
    marginTop: '15px',
    padding: '12px',
    border: '2px solid #4CAF50',
    borderRadius: '5px',
    backgroundColor: '#f1f8f6'
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px'
  },
  infoCard: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    borderTop: '3px solid #4CAF50'
  }
};

export default Home;
