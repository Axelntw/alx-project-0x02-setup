import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { type PostProps } from '../interfaces';

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        
        const data: PostProps[] = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="loading">Loading posts...</div>
        </div>
        <style jsx>{`
          .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 20px;
          }
          .loading {
            text-align: center;
            font-size: 1.2rem;
            color: #666;
          }
        `}</style>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="error">Error: {error}</div>
        </div>
        <style jsx>{`
          .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 20px;
          }
          .error {
            text-align: center;
            font-size: 1.2rem;
            color: #dc3545;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="container">
        <h1>All Posts</h1>
        <div className="posts-grid">
          {posts.map(post => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
              userId={post.userId}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .container {
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

        .posts-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
      `}</style>
    </div>
  );
};

export default Posts;