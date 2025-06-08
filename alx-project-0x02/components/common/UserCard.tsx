import React from 'react';
import { type UserProps } from '../../interfaces';

const UserCard: React.FC<UserProps> = ({ id, name, email, address, phone, website }) => {
  return (
    <div className="user-card">
      <div className="user-header">
        <h3 className="user-name">{name}</h3>
        <span className="user-id">ID: {id}</span>
      </div>
      
      <div className="user-details">
        <div className="contact-info">
          <p className="user-email">
            <strong>Email:</strong> {email}
          </p>
          <p className="user-phone">
            <strong>Phone:</strong> {phone}
          </p>
          <p className="user-website">
            <strong>Website:</strong> {website}
          </p>
        </div>
        
        <div className="address-info">
          <p className="user-address">
            <strong>Address:</strong><br />
            {address.street}, {address.suite}<br />
            {address.city} {address.zipcode}
          </p>
        </div>
      </div>

      <style jsx>{`
        .user-card {
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          padding: 20px;
          margin: 16px 0;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          background-color: white;
          transition: box-shadow 0.3s ease;
        }

        .user-card:hover {
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }

        .user-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid #f0f0f0;
        }

        .user-name {
          margin: 0;
          color: #333;
          font-size: 1.25rem;
          font-weight: 600;
        }

        .user-id {
          color: #666;
          font-size: 0.875rem;
          background-color: #f8f9fa;
          padding: 4px 8px;
          border-radius: 4px;
        }

        .user-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .contact-info p,
        .address-info p {
          margin: 8px 0;
          color: #555;
          line-height: 1.5;
        }

        .user-email,
        .user-phone,
        .user-website {
          font-size: 0.9rem;
        }

        .user-address {
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .user-details {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .user-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }
      `}</style>
    </div>
  );
};

export default UserCard;