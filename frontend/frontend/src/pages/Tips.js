import React, { useState } from 'react';

function Tips() {
  const [selectedCategory, setSelectedCategory] = useState('general');

  const tips = {
    general: [
      { title: '🌾 Soil Preparation', desc: 'Use organic compost and manure. Test soil pH before planting. For rice, maintain 2-3 inches of water.', icon: '🌱' },
      { title: '💧 Water Management', desc: 'Drip irrigation saves 30-40% water. Water early morning or late evening. Avoid waterlogging.', icon: '💧' },
      { title: '🌿 Natural Pest Control', desc: 'Use neem oil spray for pest management. Plant marigold nearby to repel insects. Handpick larger pests.', icon: '🐛' },
      { title: '🍃 Fertilizing Tips', desc: 'Apply fertilizer in splits for better results. Use biofertilizers for sustainable farming. Avoid over-fertilizing.', icon: '🌿' },
    ],
    rice: [
      { title: '🌾 Best Season', desc: 'Monsoon season (June-July) is ideal. Prepare fields 2 weeks in advance with minimum tillage.', icon: '☔' },
      { title: '💚 Transplanting', desc: 'Transplant 30-40 day old seedlings. Use 20-25 seedlings per hill for better yield.', icon: '🌱' },
      { title: '🌊 Water Levels', desc: 'Maintain 5-6cm water depth during growing phase. Reduce water 2 weeks before harvest.', icon: '💧' },
      { title: '🎯 Yield Enhancement', desc: 'Expected yield: 40-50 quintals per hectare. Use certified seeds for 10% yield increase.', icon: '📊' },
    ],
    wheat: [
      { title: '🌾 Sowing Time', desc: 'Sow in November-December for best results. Use seed rate of 100-125 kg per hectare.', icon: '📅' },
      { title: '🌾 Variety Selection', desc: 'Choose disease-resistant varieties like HD2967, K0307. Check local recommendations.', icon: '🏆' },
      { title: '❄️ Cold Weather', desc: 'Wheat thrives in cool months. Earlier sowing helps escape terminal heat stress.', icon: '❄️' },
      { title: '🚜 Harvest Tips', desc: 'Harvest when grain moisture is 12-15%. Avoid delays to prevent grain loss.', icon: '🎊' },
    ],
    vegetables: [
      { title: '🥬 Tomato Care', desc: 'Support with stakes. Prune suckers. Spray fungicide for early blight. Expected yield: 20-25 tons/ha.', icon: '🍅' },
      { title: '🥒 Cucumber Growing', desc: 'Use trellising to save space. Water regularly. Harvest every 2-3 days for tenderness.', icon: '🥒' },
      { title: '🧅 Onion Storage', desc: 'Cure for 10-15 days in shade. Store in well-ventilated space. Can last 4-6 months.', icon: '🧅' },
      { title: '🥦 Broccoli Tips', desc: 'Best in cooler months. Head cuts when 4-6 inches. Side shoots develop after main harvest.', icon: '🥦' },
    ]
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎓 Farming Tips & Advice</h1>
      <p style={styles.subtitle}>Expert guidance for better crop yields</p>

      <div style={styles.categoryButtons}>
        <button 
          style={{...styles.categoryBtn, backgroundColor: selectedCategory === 'general' ? '#4CAF50' : '#ddd', color: selectedCategory === 'general' ? 'white' : 'black'}}
          onClick={() => setSelectedCategory('general')}
        >
          📚 General Tips
        </button>
        <button 
          style={{...styles.categoryBtn, backgroundColor: selectedCategory === 'rice' ? '#4CAF50' : '#ddd', color: selectedCategory === 'rice' ? 'white' : 'black'}}
          onClick={() => setSelectedCategory('rice')}
        >
          🍚 Rice
        </button>
        <button 
          style={{...styles.categoryBtn, backgroundColor: selectedCategory === 'wheat' ? '#4CAF50' : '#ddd', color: selectedCategory === 'wheat' ? 'white' : 'black'}}
          onClick={() => setSelectedCategory('wheat')}
        >
          🌾 Wheat
        </button>
        <button 
          style={{...styles.categoryBtn, backgroundColor: selectedCategory === 'vegetables' ? '#4CAF50' : '#ddd', color: selectedCategory === 'vegetables' ? 'white' : 'black'}}
          onClick={() => setSelectedCategory('vegetables')}
        >
          🥬 Vegetables
        </button>
      </div>

      <div style={styles.tipsGrid}>
        {tips[selectedCategory].map((tip, idx) => (
          <div key={idx} style={styles.tipCard}>
            <div style={styles.tipIcon}>{tip.icon}</div>
            <h3 style={styles.tipTitle}>{tip.title}</h3>
            <p style={styles.tipDesc}>{tip.desc}</p>
          </div>
        ))}
      </div>

      <div style={styles.additionalInfo}>
        <h3>📖 Additional Resources</h3>
        <div style={styles.resourceGrid}>
          <div style={styles.resourceCard}>
            <h4>🎥 Video Tutorials</h4>
            <p>Learn advanced farming techniques through our video library.</p>
          </div>
          <div style={styles.resourceCard}>
            <h4>📊 Success Stories</h4>
            <p>Real farmer experiences and their journey to higher yields.</p>
          </div>
          <div style={styles.resourceCard}>
            <h4>📞 Expert Advice</h4>
            <p>Connect with agricultural experts for personalized guidance.</p>
          </div>
          <div style={styles.resourceCard}>
            <h4>🔬 Research Updates</h4>
            <p>Latest agricultural research and scientific findings.</p>
          </div>
        </div>
      </div>

      <div style={styles.seasonalNote}>
        <h3>⏰ Seasonal Farming Calendar</h3>
        <p>📅 <strong>March-May:</strong> Summer crops like vegetables</p>
        <p>🌧️ <strong>June-September:</strong> Monsoon crops (rice, pulses)</p>
        <p>❄️ <strong>October-February:</strong> Winter crops (wheat, gram)</p>
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
  categoryButtons: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '30px'
  },
  categoryBtn: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'all 0.3s'
  },
  tipsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
    marginBottom: '40px'
  },
  tipCard: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    borderLeft: '4px solid #4CAF50',
    transition: 'transform 0.2s'
  },
  tipIcon: {
    fontSize: '2.5rem',
    marginBottom: '10px'
  },
  tipTitle: {
    color: '#2d5016',
    marginBottom: '10px'
  },
  tipDesc: {
    color: '#666',
    lineHeight: '1.6',
    fontSize: '0.95rem'
  },
  additionalInfo: {
    backgroundColor: '#f0f7e8',
    padding: '30px',
    borderRadius: '8px',
    marginBottom: '30px'
  },
  resourceGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '15px',
    marginTop: '20px'
  },
  resourceCard: {
    backgroundColor: 'white',
    padding: '15px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  seasonalNote: {
    backgroundColor: '#fff3cd',
    padding: '20px',
    borderRadius: '8px',
    borderLeft: '4px solid #ffc107'
  }
};

export default Tips;
