// API Configuration
// Change this URL to your deployed Laravel backend
const API_CONFIG = {
  // For local development
  development: 'http://localhost:8000/api',
  
  // For production - Replace with your actual backend URL
  // Options for hosting Laravel backend:
  // - Railway: https://railway.app
  // - Heroku: https://www.heroku.com
  // - DigitalOcean: https://www.digitalocean.com
  // - AWS: https://aws.amazon.com
  production: 'https://your-backend-url.com/api',
  
  // Automatically select based on hostname
  get baseURL() {
    // If running on localhost, use development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      return this.development;
    }
    // Otherwise use production
    return this.production;
  }
};

// API helper function
async function apiCall(endpoint, options = {}) {
  const url = `${API_CONFIG.baseURL}${endpoint}`;
  
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  };
  
  // Merge options
  const config = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };
  
  try {
    const response = await fetch(url, config);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'API request failed');
    }
    
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

