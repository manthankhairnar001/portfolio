import React, { useState, ChangeEvent, FormEvent } from 'react';


interface FormDataProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact(): React.JSX.Element {
  const [formData, setFormData] = useState<FormDataProps>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Track field shifts explicitly verifying either input boxes or textarea nodes safely
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Inquiry Submitted:', formData);
    alert(`Thank you for reaching out, ${formData.name}! Your message has been logged.`);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div>
      <div className="hero-banner">
        <h1 className="section-title">CONTACT ME</h1>
        <div className="line"></div>
        <p className="section-subtitle">For project collaborations or academic inquiries, feel free to reach out:</p>
      </div>

      <div className="contact-container">
        {/* Left Side: Contact Methods Links */}
        <div className="contact-details" style={{ marginTop: 0 }}>
          <a href="mailto:khairnarmanthan22@gmail.com" className="contact-method animate-delay-1">
            <strong>Email</strong>
            <span>khairnarmanthan22@gmail.com</span>
          </a>
          
          <a href="tel:7058353410" className="contact-method animate-delay-2">
            <strong>Contact On</strong>
            <span>7058353410</span>
          </a>
          
          <a href="https://www.linkedin.com/in/manthan-khairnar-891154314" target="_blank" rel="noreferrer" className="contact-method animate-delay-3">
            <strong>LinkedIn</strong>
            <span>linkedin.com/in/manthan-khairnar</span>
          </a>
          
          <a href="https://github.com/manthankhairnar001" target="_blank" rel="noreferrer" className="contact-method animate-delay-3" style={{ animationDelay: '0.4s' }}>
            <strong>GitHub</strong>
            <span>github.com/manthankhairnar001</span>
          </a>
        </div>

        {/* Right Side: Glassmorphism Inquiry Form */}
        <div className="contact-form-wrapper">
          <form onSubmit={handleSubmit} className="inquiry-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                placeholder="johndoe@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange} 
                required 
                placeholder="Project Collaboration"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={5} 
                value={formData.message} 
                onChange={handleChange} 
                required 
                placeholder="Tell me about your project or inquiry..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}