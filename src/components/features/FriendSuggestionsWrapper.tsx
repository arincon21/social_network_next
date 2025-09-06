'use client';

import dynamic from 'next/dynamic';

// El componente que vamos a cargar dinámicamente
const FriendSuggestions = dynamic(() => import('@/components/features/FriendSuggestions'), { ssr: false });

// Definimos la interfaz para las props del componente original
interface Friend {
  id: number;
  name: string;
  avatar: string;
  mutualFriends: number;
}

interface FriendSuggestionsProps {
  friends: Friend[];
}

// El wrapper ahora acepta las props y las pasa al componente cargado dinámicamente
const FriendSuggestionsWrapper: React.FC<FriendSuggestionsProps> = (props) => {
  return <FriendSuggestions {...props} />;
};

export default FriendSuggestionsWrapper;