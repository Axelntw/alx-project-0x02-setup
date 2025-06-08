import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">
            <h2>My App</h2>
          </Link>
        </div>
        
        <nav className="navigation">
          <ul className="nav-list">
            <li className="nav-item">
              <Link href="/home" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/posts" className="nav-link">
                Posts
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/users" className="nav-link">
                Users
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <style jsx>{`
        .header {
          background-color: #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 70px;
        }

        .logo h2 {
          margin: 0;
          color: #007bff;
          cursor: pointer;
        }

        .logo h2:hover {
          color: #0056b3;
        }

        .navigation {
          display: flex;
        }

        .nav-list {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 30px;
        }

        .nav-item {
          display: flex;
        }

        .nav-link {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          padding: 8px 16px;
          border-radius: 4px;
          transition: all 0.2s;
        }

        .nav-link:hover {
          background-color: #f8f9fa;
          color: #007bff;
        }

        @media (max-width: 768px) {
          .container {
            flex-direction: column;
            height: auto;
            padding: 15px 20px;
          }

          .nav-list {
            gap: 15px;
            margin-top: 15px;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;