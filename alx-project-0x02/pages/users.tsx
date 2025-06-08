import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { type UserProps } from '../interfaces';

const Users: React.FC = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        
        const data: UserProps[] = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="loading">Loading users...</div>
        </div>
        <style jsx>{`
          .container {
            max-width: 1000px;
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
            max-width: 1000px;
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