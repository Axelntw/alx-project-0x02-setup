import React from 'react';
import Card from '../components/common/Card';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Our Home Page</h1>
      
      <Card 
        title="About Us" 
        content="We are a team of passionate developers creating amazing web applications with Next.js and React. Our mission is to deliver high-quality, user-friendly solutions." 
      />
      
      <Card 
        title="Our Services" 
        content="We offer web development, mobile app development, and consulting services. Our expertise includes React, Next.js, TypeScript, and modern web technologies." 
      />
      
      <Card 
        title="Get Started" 
        content="Ready to begin your project? Contact us today to discuss your requirements and see how we can help bring your ideas to life." 
      />
      
      <Card 
        title="Latest News" 
        content="Stay updated with our latest projects and announcements. We regularly share insights about web development trends and best practices." 
      />

      <style jsx>{`
        .home-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 40px 20px;
        }
        
        h1 {
          text-align: center;
          color: #333;
          margin-bottom: 40px;
          font-size: 2.5rem;
        }
      `}</style>
    </div>
  );
};

export default Home;
