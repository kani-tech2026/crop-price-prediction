import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Prices from './pages/Prices';
import Weather from './pages/Weather';
import Tips from './pages/Tips';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatLog, setChatLog] = useState([{ type: 'bot', msg: "Hi! 🤖 I'm your farming assistant! Ask me about crops, weather, pests, soil, irrigation, fertilizers, or anything farming-related! 🌾" }]);
  const [chatInput, setChatInput] = useState("");

  const speak = (text) => {
    const msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const handleChat = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = chatInput;
    setChatLog(prev => [...prev, { type: 'user', msg: userMsg }]);
    setChatInput("");

    // Enhanced AI responses with more intelligence
    const responses = {
      weather: "🌦️ Weather affects crops greatly! Check the Weather page for current conditions. Generally, rice and sugarcane do well in humid weather, while wheat prefers cooler temperatures.",
      crop: "🌾 Crop selection depends on season, soil, and weather. Rice for monsoon, wheat for winter, vegetables for year-round. What season are you planning for?",
      ai: "🤖 I'm an AI assistant specialized in farming! I can help with crop selection, weather advice, pest control, soil management, and market prices. Ask me anything farming-related!",
      pest: "🐛 Common pests: aphids, caterpillars, whiteflies. Use neem oil spray, introduce ladybugs, or use organic pesticides. Prevention is better than cure!",
      soil: "🌱 Healthy soil = good crops! Test pH (6.0-7.0 ideal), add organic matter, rotate crops, avoid chemical overuse. Compost is your best friend!",
      water: "💧 Water management is crucial! Drip irrigation saves 50% water. Water early morning/late evening. Rice needs standing water, wheat needs less.",
      fertilizer: "🌿 Use balanced NPK fertilizers. Organic options: compost, vermicompost, cow dung. Apply in splits - 50% at planting, rest during growth.",
      harvest: "🎯 Harvest timing matters! Rice: 120-150 days, Wheat: 110-120 days. Harvest when grains are mature but before they fall. Early morning is best!",
      profit: "💰 Maximize profit: Choose high-demand crops, use quality seeds, follow best practices, sell at peak prices. Check market rates regularly!",
      disease: "🦠 Common diseases: blight, rust, wilt. Use disease-resistant varieties, proper spacing, crop rotation, and fungicides when needed.",
      seed: "🌱 Quality seeds = 70% success! Use certified seeds, treat with fungicides before sowing, store properly. Hybrid seeds give higher yields!",
      organic: "🌱 Organic farming benefits: healthier food, better soil, premium prices. Use natural pesticides, compost, and avoid chemicals. Takes patience but worth it!",
      monsoon: "🌧️ Monsoon crops: Rice, maize, pulses, sugarcane. Prepare fields before rains, ensure drainage, use raised beds if needed.",
      winter: "❄️ Winter crops: Wheat, barley, peas, cauliflower, carrots. Cooler weather suits these crops. Protect from frost if temperatures drop.",
      summer: "☀️ Summer crops: Groundnut, sesame, vegetables like tomato, chili. Need irrigation, shade protection, pest management.",
      help: "🤝 I can help with: crop selection, weather advice, pest/disease control, soil management, irrigation, fertilizers, harvesting, market prices, and farming tips!",
      default: "That's an interesting question! I'm here to help with farming advice. Try asking about crops, weather, pests, soil, irrigation, fertilizers, or market prices! 🌾"
    };

    // Smart keyword matching with multiple variations
    const getResponse = (message) => {
      const msg = message.toLowerCase();

      // Direct keyword matches
      if (msg.includes('weather') || msg.includes('rain') || msg.includes('temperature') || msg.includes('humid')) return responses.weather;
      if (msg.includes('crop') || msg.includes('plant') || msg.includes('grow') || msg.includes('cultivate')) return responses.crop;
      if (msg.includes('ai') || msg.includes('robot') || msg.includes('assistant') || msg.includes('you are')) return responses.ai;
      if (msg.includes('pest') || msg.includes('bug') || msg.includes('insect') || msg.includes('aphid')) return responses.pest;
      if (msg.includes('soil') || msg.includes('land') || msg.includes('earth') || msg.includes('ground')) return responses.soil;
      if (msg.includes('water') || msg.includes('irrigation') || msg.includes('drip') || msg.includes('sprinkler')) return responses.water;
      if (msg.includes('fertilizer') || msg.includes('manure') || msg.includes('npk') || msg.includes('compost')) return responses.fertilizer;
      if (msg.includes('harvest') || msg.includes('pick') || msg.includes('collect') || msg.includes('reap')) return responses.harvest;
      if (msg.includes('profit') || msg.includes('money') || msg.includes('earn') || msg.includes('income')) return responses.profit;
      if (msg.includes('disease') || msg.includes('blight') || msg.includes('rust') || msg.includes('wilt')) return responses.disease;
      if (msg.includes('seed') || msg.includes('sowing') || msg.includes('planting')) return responses.seed;
      if (msg.includes('organic') || msg.includes('natural') || msg.includes('chemical free')) return responses.organic;
      if (msg.includes('monsoon') || msg.includes('rainy') || msg.includes('kharif')) return responses.monsoon;
      if (msg.includes('winter') || msg.includes('cold') || msg.includes('rabi')) return responses.winter;
      if (msg.includes('summer') || msg.includes('hot') || msg.includes('zaid')) return responses.summer;
      if (msg.includes('help') || msg.includes('what can you') || msg.includes('how can you')) return responses.help;

      // Question patterns
      if (msg.includes('what') && (msg.includes('crop') || msg.includes('plant'))) return responses.crop;
      if (msg.includes('how') && msg.includes('water')) return responses.water;
      if (msg.includes('how') && msg.includes('fertilizer')) return responses.fertilizer;
      if (msg.includes('when') && msg.includes('harvest')) return responses.harvest;

      // Default response
      return responses.default;
    };

    const reply = getResponse(userMsg);

    setTimeout(() => {
      setChatLog(prev => [...prev, { type: 'bot', msg: reply }]);
    }, 500);
  };

  return (
    <Router>
      <Navbar />
      <main style={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Chatbot */}
      <div style={styles.chatContainer}>
        {isChatOpen && (
          <div style={styles.chatWindow}>
            <div style={styles.chatHeader}>
              <span>Agro Assistant 🤖</span>
              <button onClick={() => setIsChatOpen(false)} style={styles.closeBtn}>✖</button>
            </div>
            <div style={styles.chatBody}>
              {chatLog.map((c, i) => (
                <div key={i} style={c.type === 'bot' ? styles.botMsg : styles.userMsg}>
                  {c.msg}
                </div>
              ))}
            </div>
            <form onSubmit={handleChat} style={styles.chatFooter}>
              <input
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask me anything..."
                style={styles.chatInput}
              />
              <button type="submit" style={styles.sendBtn}>Send</button>
            </form>
          </div>
        )}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          style={styles.chatIcon}
        >
          {isChatOpen ? "✖" : "💬"}
        </button>
      </div>

      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <p>&copy; 2024 AgroPredict Pro. All rights reserved.</p>
          <p>Empowering farmers with AI-powered crop insights</p>
        </div>
      </footer>
    </Router>
  );
}

const styles = {
  main: {
    minHeight: 'calc(100vh - 70px - 100px)',
    backgroundColor: '#fafafa'
  },
  footer: {
    backgroundColor: '#2d5016',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    marginTop: '40px'
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  chatContainer: {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    zIndex: 1000
  },
  chatIcon: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#2d5016',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    fontSize: '24px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    transition: 'transform 0.3s'
  },
  chatWindow: {
    width: '350px',
    height: '450px',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 5px 40px rgba(0,0,0,0.16)',
    marginBottom: '10px',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  chatHeader: {
    backgroundColor: '#2d5016',
    color: 'white',
    padding: '15px',
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  closeBtn: {
    backgroundColor: 'transparent',
    color: 'white',
    border: 'none',
    fontSize: '18px',
    cursor: 'pointer'
  },
  chatBody: {
    flex: 1,
    padding: '12px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    backgroundColor: '#f5f5f5'
  },
  botMsg: {
    backgroundColor: '#fff',
    padding: '10px 12px',
    borderRadius: '8px',
    alignSelf: 'flex-start',
    maxWidth: '80%',
    fontSize: '0.95rem',
    boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
    color: '#333'
  },
  userMsg: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 12px',
    borderRadius: '8px',
    alignSelf: 'flex-end',
    maxWidth: '80%',
    fontSize: '0.95rem'
  },
  chatFooter: {
    padding: '12px',
    borderTop: '1px solid #ddd',
    display: 'flex',
    gap: '8px',
    backgroundColor: '#fff'
  },
  chatInput: {
    flex: 1,
    padding: '8px 12px',
    border: '1px solid #ddd',
    borderRadius: '6px',
    outline: 'none',
    fontSize: '0.9rem'
  },
  sendBtn: {
    padding: '8px 15px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold'
  }
};

export default App;