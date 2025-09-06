"use client";

import dynamic from 'next/dynamic';

const FriendSuggestions = dynamic(() => import('@/components/features/FriendSuggestions'), { ssr: false });

export default FriendSuggestions;
