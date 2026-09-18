import React, { useState } from 'react';
import '../components_styles/Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: '',
    authorized: false,
  });

  const [touched, setTouched] = useState({
    email: false,
  });

  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusNotification, setStatusNotification] = useState({
    type: '', // 'success' | 'error' | ''
    message: '',
  });

  // Strict email regex validation
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.trim()) {
      return 'Email is required.';
    }
    if (!emailRegex.test(email.trim())) {
      return 'Invalid email. Please enter a valid email address (e.g., name@gmail.com).';
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));

    if (name === 'email' && touched.email) {
      setEmailError(validateEmail(value));
    }
  };

  const handleEmailBlur = () => {
    setTouched((prev) => ({ ...prev, email: true }));
    setEmailError(validateEmail(formData.email));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatusNotification({ type: '', message: '' });

    setTouched((prev) => ({ ...prev, email: true }));

    const error = validateEmail(formData.email);
    if (error) {
      setEmailError(error);
      setStatusNotification({
        type: 'error',
        message: 'Please resolve the errors highlighted below.',
      });
      return;
    }

    if (!formData.authorized) {
      setStatusNotification({
        type: 'error',
        message: 'Please check the authorization box to proceed.',
      });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      console.log('Submitted Data:', formData);
      setIsSubmitting(false);
      setStatusNotification({
        type: 'success',
        message: 'Thank you! Your enquiry has been submitted successfully.',
      });

      // Clear form
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        message: '',
        authorized: false,
      });

      setTouched({ email: false });
      setEmailError('');

      setTimeout(() => {
        setStatusNotification({ type: '', message: '' });
      }, 5000);
    }, 800);
  };

  return (
    <section className="login-section" id="login">
      <div className="login-container">
        {/* Left Column */}
        <div className="login-left-col">
          <div className="login-brand-wrapper">
            <img
              src="/Images/housing_society.png"
              alt="Housing Society"
              className="login-brand-img"
            />
          </div>

          <h3 className="b06-heading">ABOUT B06 TOWER</h3>

          <p className="b06-paragraph">
            Sahira Township, Gajularamaram is a large residential community in
            North Hyderabad. Spread over 35 acres, it offers 3 BHK apartments
            with modern amenities like a gym, power backup, and play areas.
            Located near major roads, schools, and hospitals, it provides great
            connectivity and is ideal for both living and investment.
          </p>

          <div className="address-container">
            <div className="pin-icon-wrap">
              <svg
                viewBox="0 0 24 24"
                className="map-pin-svg"
                fill="currentColor"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <div className="address-details">
              <span>Housingsociety.net</span>
              <span>B06 Tower, Sahira Township,</span>
              <span>Gajularamaram, Hyderabad,</span>
              <span>Telangana 500055</span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="login-right-col">
          <div className="right-header-row">
            <h2 className="get-in-touch-heading">GET IN TOUCH</h2>
          </div>

          <p className="get-in-touch-paragraph">
            Want to know more about Sahira Township? Fill out the contact form
            below, and our team will reach out to you soon.
          </p>

          <h3 className="contact-heading">Contact</h3>

          {/* Dynamic Banner Notification */}
          {statusNotification.message && (
            <div
              className={`status-alert-box ${
                statusNotification.type === 'success'
                  ? 'alert-box-success'
                  : 'alert-box-error'
              }`}
            >
              <span className="alert-symbol">
                {statusNotification.type === 'success' ? '✓' : '⚠'}
              </span>
              <span>{statusNotification.message}</span>
            </div>
          )}

          <form className="login-form-element" onSubmit={handleSubmit} noValidate>
            <div className="input-field-wrapper">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="login-input-field"
              />
            </div>

            <div className="input-field-wrapper">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleEmailBlur}
                required
                className={`login-input-field ${
                  touched.email && emailError ? 'input-field-error' : ''
                }`}
              />
              {touched.email && emailError && (
                <span className="field-error-message">
                  ⚠ {emailError}
                </span>
              )}
            </div>

            <div className="input-field-wrapper">
              <div className="login-phone-group">
                <div className="phone-country-select">
                  <span className="flag-icon">🇮🇳</span>
                  <span className="flag-arrow">&#9662;</span>
                  <span className="country-code">+91</span>
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="phone-native-input"
                />
              </div>
            </div>

            <div className="input-field-wrapper">
              <input
                type="text"
                name="location"
                placeholder="Enter your location"
                value={formData.location}
                onChange={handleChange}
                className="login-input-field"
              />
            </div>

            <div className="input-field-wrapper">
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="login-textarea-field"
              ></textarea>
            </div>

            {/* Checkbox Group */}
            <label className="auth-checkbox-label">
              <input
                type="checkbox"
                name="authorized"
                checked={formData.authorized}
                onChange={handleChange}
                required
              />
              <span className="auth-checkbox-text">
                I authorize Housingsociety.net to contact me via Email, SMS,
                WhatsApp, and Call. This will override DND/NDNC preferences.
              </span>
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="login-action-btn"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;