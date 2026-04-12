import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/contact/messages");
      setMessages(response.data.messages);
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (messageId) => {
    try {
      await axios.put(`http://localhost:5000/contact/messages/${messageId}/read`);
      setMessages(messages.map(msg => 
        msg.id === messageId ? {...msg, status: 'read'} : msg
      ));
    } catch (error) {
      console.error('Error marking message as read:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("http://localhost:5000/contact", formData);
      
      if (response.data.success) {
        setSubmitted(true);
        console.log('✅ Message sent successfully:', response.data);
        setTimeout(() => {
          setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
          setSubmitted(false);
        }, 3000);
      }
    } catch (error) {
      console.error('❌ Error sending message:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📞 Contact Us</h1>
      <p style={styles.subtitle}>We're here to help. Get in touch with us!</p>

      <div style={styles.contentGrid}>
        {/* Contact Form */}
        <div style={styles.formSection}>
          <h2 style={styles.sectionTitle}>Send us a Message</h2>
          
          {submitted && (
            <div style={styles.successMessage}>
              ✅ Thank you! Your message has been sent successfully. We'll get back to you soon!
            </div>
          )}

          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                style={styles.input}
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                style={styles.input}
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject of your message"
                style={styles.input}
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your inquiry..."
                style={{...styles.input, minHeight: '150px', fontFamily: 'Arial'}}
                required
              ></textarea>
            </div>

            <button type="submit" style={styles.submitBtn}>Send Message</button>
          </form>
        </div>

        {/* Contact Information */}
        <div style={styles.infoSection}>
          <h2 style={styles.sectionTitle}>Contact Information</h2>

          <div style={styles.infoCard}>
            <h3 style={styles.infoTitle}>📍 Office Address</h3>
            <p>AgroPredict Pro<br/>Agri-Tech Innovation Hub<br/>Bangalore, Karnataka 560001<br/>India</p>
          </div>

          <div style={styles.infoCard}>
            <h3 style={styles.infoTitle}>📞 Phone</h3>
            <p><strong>Support:</strong> +91-80-1234-5678<br/><strong>Sales:</strong> +91-80-9876-5432<br/><strong>Emergency:</strong> +91-95555-00000</p>
          </div>

          <div style={styles.infoCard}>
            <h3 style={styles.infoTitle}>✉️ Email</h3>
            <p><strong>Support:</strong> support@agropredict.com<br/><strong>Sales:</strong> sales@agropredict.com<br/><strong>Feedback:</strong> feedback@agropredict.com</p>
          </div>

          <div style={styles.infoCard}>
            <h3 style={styles.infoTitle}>🕐 Working Hours</h3>
            <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM<br/><strong>Saturday:</strong> 10:00 AM - 4:00 PM<br/><strong>Sunday:</strong> Closed</p>
          </div>

          <div style={styles.socialSection}>
            <h3 style={styles.infoTitle}>Follow Us</h3>
            <div style={styles.socialLinks}>
              <a href="#" style={styles.socialBtn}>📱 Facebook</a>
              <a href="#" style={styles.socialBtn}>🐦 Twitter</a>
              <a href="#" style={styles.socialBtn}>📸 Instagram</a>
              <a href="#" style={styles.socialBtn}>💼 LinkedIn</a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div style={styles.faqSection}>
        <h2 style={styles.sectionTitle}>❓ Frequently Asked Questions</h2>
        
        <div style={styles.faqGrid}>
          <div style={styles.faqCard}>
            <h4>How accurate are your price predictions?</h4>
            <p>Our AI model has 87% accuracy based on historical market data and current trends.</p>
          </div>
          
          <div style={styles.faqCard}>
            <h4>Do you charge for the app?</h4>
            <p>AgroPredict Pro is completely free! Premium features coming soon.</p>
          </div>
          
          <div style={styles.faqCard}>
            <h4>How often are prices updated?</h4>
            <p>Prices are updated every hour from major agricultural markets across India.</p>
          </div>
          
          <div style={styles.faqCard}>
            <h4>Can I get SMS alerts?</h4>
            <p>Yes! Subscribe to our SMS alerts for real-time price updates. Check settings for details.</p>
          </div>
          
          <div style={styles.faqCard}>
            <h4>Is my data secure?</h4>
            <p>Yes, we use SSL encryption and follow all GDPR guidelines to protect your data.</p>
          </div>
          
          <div style={styles.faqCard}>
            <h4>How can I provide feedback?</h4>
            <p>Use the feedback form above or email us at feedback@agropredict.com</p>
          </div>
        </div>
      </div>

      {/* Admin Section */}
      <div style={styles.adminSection}>
        <button 
          onClick={() => {
            setShowAdmin(!showAdmin);
            if (!showAdmin) fetchMessages();
          }}
          style={styles.adminBtn}
        >
          {showAdmin ? '🔒 Hide Admin Panel' : '🔑 Admin Panel'}
        </button>

        {showAdmin && (
          <div style={styles.adminPanel}>
            <h3 style={styles.adminTitle}>📧 Contact Messages ({messages.length})</h3>
            
            {loading ? (
              <p>Loading messages...</p>
            ) : messages.length === 0 ? (
              <p>No messages yet.</p>
            ) : (
              <div style={styles.messagesList}>
                {messages.map(msg => (
                  <div key={msg.id} style={{
                    ...styles.messageCard,
                    borderLeftColor: msg.status === 'unread' ? '#ff5722' : '#4CAF50'
                  }}>
                    <div style={styles.messageHeader}>
                      <h4 style={styles.messageTitle}>
                        {msg.subject || 'No Subject'} 
                        <span style={{
                          ...styles.statusBadge,
                          backgroundColor: msg.status === 'unread' ? '#ff5722' : '#4CAF50'
                        }}>
                          {msg.status}
                        </span>
                      </h4>
                      <small style={styles.timestamp}>
                        {new Date(msg.timestamp).toLocaleString()}
                      </small>
                    </div>
                    
                    <div style={styles.messageDetails}>
                      <p><strong>👤 Name:</strong> {msg.name}</p>
                      <p><strong>📧 Email:</strong> {msg.email}</p>
                      {msg.phone && <p><strong>📞 Phone:</strong> {msg.phone}</p>}
                    </div>
                    
                    <div style={styles.messageContent}>
                      <p><strong>💬 Message:</strong></p>
                      <p style={styles.messageText}>{msg.message}</p>
                    </div>
                    
                    {msg.status === 'unread' && (
                      <button 
                        onClick={() => markAsRead(msg.id)}
                        style={styles.readBtn}
                      >
                        Mark as Read
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
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
    marginBottom: '40px'
  },
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '30px',
    marginBottom: '40px'
  },
  formSection: {},
  infoSection: {},
  sectionTitle: {
    fontSize: '1.5rem',
    color: '#2d5016',
    marginBottom: '20px',
    borderBottom: '2px solid #4CAF50',
    paddingBottom: '10px'
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
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '1rem',
    fontFamily: 'Arial'
  },
  submitBtn: {
    padding: '12px 30px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    marginTop: '10px',
    transition: 'background 0.3s'
  },
  successMessage: {
    backgroundColor: '#e8f5e9',
    color: '#2e7d32',
    padding: '15px',
    borderRadius: '5px',
    marginBottom: '20px',
    borderLeft: '4px solid #4CAF50'
  },
  infoCard: {
    backgroundColor: '#f9f9f9',
    padding: '15px',
    borderRadius: '5px',
    marginBottom: '15px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  infoTitle: {
    color: '#2d5016',
    marginBottom: '8px'
  },
  socialSection: {
    marginTop: '20px'
  },
  socialLinks: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginTop: '10px'
  },
  socialBtn: {
    padding: '8px 15px',
    backgroundColor: '#2196F3',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '0.9rem'
  },
  faqSection: {
    backgroundColor: '#f0f7e8',
    padding: '30px',
    borderRadius: '8px',
    marginTop: '30px'
  },
  faqGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    marginTop: '20px'
  },
  faqCard: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    borderLeft: '4px solid #FFC107'
  },
  adminSection: {
    marginTop: '30px',
    textAlign: 'center'
  },
  adminBtn: {
    padding: '10px 20px',
    backgroundColor: '#666',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    marginBottom: '20px'
  },
  adminPanel: {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'left'
  },
  adminTitle: {
    color: '#2d5016',
    marginBottom: '20px',
    textAlign: 'center'
  },
  messagesList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  messageCard: {
    backgroundColor: 'white',
    padding: '15px',
    borderRadius: '8px',
    borderLeft: '4px solid #4CAF50',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  messageHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px'
  },
  messageTitle: {
    margin: 0,
    color: '#2d5016'
  },
  statusBadge: {
    padding: '2px 8px',
    borderRadius: '12px',
    color: 'white',
    fontSize: '0.7rem',
    marginLeft: '10px'
  },
  timestamp: {
    color: '#666',
    fontSize: '0.8rem'
  },
  messageDetails: {
    marginBottom: '10px'
  },
  messageContent: {
    marginBottom: '10px'
  },
  messageText: {
    backgroundColor: '#f9f9f9',
    padding: '10px',
    borderRadius: '5px',
    marginTop: '5px',
    whiteSpace: 'pre-wrap'
  },
  readBtn: {
    padding: '5px 10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    fontSize: '0.8rem'
  }
};

export default Contact;
