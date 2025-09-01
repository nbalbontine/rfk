import React from 'react';
import { trackEvent, trackPageView, trackInteraction } from '../utils/analytics';

const AnalyticsTest = () => {
  const handleTestEvent = () => {
    trackEvent('click', 'test_button', 'analytics_test');
    alert('Event tracked! Check your browser console and Google Analytics Real-time reports.');
  };

  const handleTestPageView = () => {
    trackPageView('Test Page', '/analytics-test');
    alert('Page view tracked! Check your browser console and Google Analytics Real-time reports.');
  };

  const handleTestInteraction = () => {
    trackInteraction('custom_test', { timestamp: new Date().toISOString() });
    alert('Custom interaction tracked! Check your browser console and Google Analytics Real-time reports.');
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px', borderRadius: '8px' }}>
      <h3>Google Analytics Test Component</h3>
      <p>Use these buttons to test if Google Analytics is working correctly:</p>
      
      <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
        <button 
          onClick={handleTestEvent}
          style={{
            padding: '10px 15px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Test Event Tracking
        </button>
        
        <button 
          onClick={handleTestPageView}
          style={{
            padding: '10px 15px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Test Page View
        </button>
        
        <button 
          onClick={handleTestInteraction}
          style={{
            padding: '10px 15px',
            backgroundColor: '#ffc107',
            color: 'black',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Test Custom Interaction
        </button>
      </div>
      
      <div style={{ marginTop: '15px', fontSize: '14px', color: '#666' }}>
        <p><strong>To verify it's working:</strong></p>
        <ol>
          <li>Open your browser's Developer Tools (F12)</li>
          <li>Go to the Console tab</li>
          <li>Click any of the test buttons above</li>
          <li>Check Google Analytics Real-time reports in a few minutes</li>
        </ol>
      </div>
    </div>
  );
};

export default AnalyticsTest;
