// Google Analytics utility functions
// Make sure gtag is available globally

/**
 * Track a custom event in Google Analytics
 * @param {string} action - The action being tracked (e.g., 'click', 'view', 'download')
 * @param {string} category - The category of the event (e.g., 'button', 'video', 'navigation')
 * @param {string} label - Optional label for additional context
 * @param {number} value - Optional numeric value
 */
export const trackEvent = (action, category, label = '', value = null) => {
  if (typeof window !== 'undefined' && window.gtag) {
    const eventData = {
      event_category: category,
      event_label: label,
    };
    
    if (value !== null) {
      eventData.value = value;
    }
    
    window.gtag('event', action, eventData);
  }
};

/**
 * Track a page view (useful for SPA navigation)
 * @param {string} pageTitle - The title of the page
 * @param {string} pagePath - The path of the page
 */
export const trackPageView = (pageTitle, pagePath) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-M2G18EHY11', {
      page_title: pageTitle,
      page_location: pagePath,
    });
  }
};

/**
 * Track custom user interactions
 * @param {string} interaction - The type of interaction
 * @param {object} data - Additional data to track
 */
export const trackInteraction = (interaction, data = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', interaction, {
      custom_parameter: data,
    });
  }
};

// Examples of how to use:
// trackEvent('click', 'button', 'header-cta');
// trackEvent('play', 'video', 'hero-video');
// trackPageView('Home', '/');
// trackInteraction('scroll', { section: 'about' });
