import React from 'react';
import { type PostProps } from '../../interfaces';

const PostCard: React.FC<PostProps> = ({ id, title, body, userId }) => {
  return (
    <div className="post-card">
      <div className="post-header">
        <h3 className="post-title">{title}</h3>
        <span className="post-meta">Post #{id} | User #{userId}</span>
      </div>
      <div className="post-body">
        <p className="post-content">{body}</p>
      </div>

      <style jsx>{`
        .post-card {
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          padding: 20px;
          margin: 16px 0;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          background-color: white;
          transition: box-shadow 0.3s ease;
        }

        .post-card:hover {
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }

        .post-header {
          margin-bottom: 12px;
        }

        .post-title {
          margin: 0 0 8px 0;
          color: #333;
          font-size: 1.25rem;
          font-weight: 600;
          text-transform: capitalize;
        }

        .post-meta {
          color: #666;
          font-size: 0.875rem;
          background-color: #f8f9fa;
          padding: 4px 8px;
          border-radius: 4px;
        }

        .post-body {
          margin: 0;
        }

        .post-content {
          margin: 0;
          color: #555;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
};

export default PostCard;