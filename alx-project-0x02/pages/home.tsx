import React, { useState } from 'react';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import { type Post } from '../interfaces';

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([
    {
      id: '1',
      title: 'About Us',
      content: 'We are a team of passionate developers creating amazing web applications with Next.js and React. Our mission is to deliver high-quality, user-friendly solutions.'
    },
    {
      id: '2',
      title: 'Our Services',
      content: 'We offer web development, mobile app development, and consulting services. Our expertise includes React, Next.js, TypeScript, and modern web technologies.'
    },
    {
      id: '3',
      title: 'Get Started',
      content: 'Ready to begin your project? Contact us today to discuss your requirements and see how we can help bring your ideas to life.'
    }
  ]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddPost = (data: { title: string; content: string }) => {
    const newPost: Post = {
      id: Date.now().toString(),
      title: data.title,
      content: data.content
    };
    setPosts(prevPosts => [newPost, ...prevPosts]);
  };

  return (
    <div className="home-container">
      <div className="header">
        <h1>Welcome to Our Home Page</h1>
        <button onClick={handleOpenModal} className="add-post-button">
          Add New Post
        </button>
      </div>
      
      <div className="posts-container">
        {posts.map(post => (
          <Card 
            key={post.id}
            title={post.title} 
            content={post.content} 
          />
        ))}
      </div>

      <PostModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleAddPost}
      />

      <style jsx>{`
        .home-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 40px 20px;
        }
        
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          flex-wrap: wrap;
          gap: 20px;
        }
        
        h1 {
          color: #333;
          font-size: 2.5rem;
          margin: 0;
        }

        .add-post-button {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 16px;
          font-weight: 600;
          transition: background-color 0.2s;
        }

        .add-post-button:hover {
          background-color: #0056b3;
        }

        .posts-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        @media (max-width: 768px) {
          .header {
            flex-direction: column;
            text-align: center;
          }
          
          h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
