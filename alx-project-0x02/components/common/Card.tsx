import React from 'react';
import { type CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
      </div>
      <div className="card-body">
        <p className="card-content">{content}</p>
      </div>
      
      <style jsx>{`
        .card {
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          padding: 20px;
          margin: 16px 0;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          background-color: white;
          transition: box-shadow 0.3s ease;
        }
        
        .card:hover {
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }
        
        .card-header {
          margin-bottom: 12px;
        }
        
        .card-title {
          margin: 0;
          color: #333;
          font-size: 1.25rem;
          font-weight: 600;
        }
        
        .card-body {
          margin: 0;
        }
        
        .card-content {
          margin: 0;
          color: #666;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
};

export default Card;
