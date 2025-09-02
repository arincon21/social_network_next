"use client";

import React from 'react';
import { MoreHorizontal, UserPlus, Smile } from 'lucide-react';

interface Friend {
  id: number;
  name: string;
  avatar: string;
  mutualFriends: number;
}

const FriendSuggestions: React.FC = () => {
  const friends: Friend[] = [
    {
      id: 1,
      name: 'Francine Smith',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Francine&backgroundColor=b6e3f4',
      mutualFriends: 8
    },
    {
      id: 2,
      name: 'Hugh Wilson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hugh&backgroundColor=c0aede',
      mutualFriends: 6
    },
    {
      id: 3,
      name: 'Karen Masters',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Karen&backgroundColor=d1d4f9',
      mutualFriends: 6
    }
  ];

  return (
    <div className="w-full max-w-md bg-white border border-gray-100 rounded-sm">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800">Sugerencias de Amistad</h2>
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Friend List */}
      <div className="divide-y divide-gray-50">
        {friends.map((friend) => (
          <div key={friend.id} className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-3">
              {/* Avatar */}
              <div className="relative">
                <img
                  src={friend.avatar}
                  alt={friend.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-white"
                />
                <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full ring-2 ring-white"></div>
              </div>
              
              {/* Friend Info */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">{friend.name}</h3>
                <p className="text-xs text-gray-500">{friend.mutualFriends} amigos en común</p>
              </div>
            </div>

            {/* Add Friend Button */}
            <button className="relative group cursor-pointer">
              <div className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg p-2.5 transition-all transform hover:scale-105 active:scale-95">
                <div className="relative">
                  <Smile className="w-5 h-5 opacity-100 group-hover:opacity-0 transition-opacity duration-200" />
                  <UserPlus className="w-5 h-5 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Footer (opcional) */}
      <div className="px-6 py-3 border-t border-gray-100">
        <button className="text-sm text-blue-500 hover:text-blue-600 font-medium transition-colors">
          Ver todas las sugerencias
        </button>
      </div>
    </div>
  );
};

export default FriendSuggestions;