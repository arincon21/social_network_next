import { Heart, MessageSquare, Share2, MoreHorizontal } from 'lucide-react';
import Image from 'next/image';

interface Comment {
  id: number;
  author: { name: string; avatar: string };
  content: string;
  timeAgo: string;
}

interface Post {
  id: number;
  author: { name: string; avatar: string };
  timeAgo: string;
  content: string;
  image?: string;
  likes: { count: number; users: string[] };
  comments: number;
  shares: number;
  commentsList?: Comment[];
}

const posts: Post[] = [
  {
    id: 1,
    author: { name: 'Elaine Dreyfuss', avatar: 'https://placehold.co/48x48' },
    timeAgo: 'hace 9 horas',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consequat.',
    image: 'https://placehold.co/600x800',
    likes: { count: 24, users: ['Tú', 'Elaine'] },
    comments: 17,
    shares: 24,
    commentsList: [
      {
        id: 1,
        author: { name: 'James Spiegel', avatar: 'https://placehold.co/36x36' },
        content: '¡Buena publicación! Estoy de acuerdo con la mayor parte de esto.',
        timeAgo: 'hace 2 horas',
      },
      {
        id: 2,
        author: { name: 'Mathilda Brinker', avatar: 'https://placehold.co/36x36' },
        content: 'Buen punto, gracias por compartir.',
        timeAgo: 'hace 1 hora',
      },
    ],
  },
  {
    id: 2,
    author: { name: 'James Spiegel', avatar: 'https://placehold.co/48x48' },
    timeAgo: 'hace 38 minutos',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium der doloremque laudantium.',
    likes: { count: 3, users: [] },
    comments: 3,
    shares: 0,
    commentsList: [
      {
        id: 3,
        author: { name: 'Elaine Dreyfuss', avatar: 'https://placehold.co/36x36' },
        content: 'Respuesta',
        timeAgo: 'hace 30 minutos',
      },
    ],
  },
  {
    id: 3,
    author: { name: 'Mathilda Brinker', avatar: 'https://placehold.co/48x48' },
    timeAgo: 'hace 1 hora',
    content:
      'Ratione voluptatem sequi en lod nesciunt. Neque porro quisquam est, quinder dolorem ipsum quia dolor sit amet, consectetur adipisci velit en lorem ipsum duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
    likes: { count: 8, users: [] },
    comments: 0,
    shares: 0,
  },
];

const NewsFeed = () => {
  return (
    <div className='mb-[80px]'>
      {posts.map((post, idx) => (
        <div key={post.id} className={`relative bg-white border border-[#e6eef5] mt-[30px] max-w-[618px] mx-auto rounded-sm`}>

          <div className='p-6'>
            {/* Botones flotantes derecha */}
            <div className="absolute right-[-20px] top-[18px] flex flex-col items-center space-y-2">
              <button className="w-9 h-9 hover:bg-amber-600 cursor-pointer rounded-full bg-[#9a9fbf] flex items-center justify-center shadow-sm text-white">
                <Heart className="w-4 h-4" />
              </button>
              <button className="w-9 h-9 hover:bg-amber-600 cursor-pointer rounded-full bg-[#9a9fbf] flex items-center justify-center shadow-sm text-white">
                <MessageSquare className="w-4 h-4" />
              </button>
              <button className="w-9 h-9 hover:bg-amber-600 cursor-pointer rounded-full bg-[#9a9fbf] flex items-center justify-center shadow-sm text-white">
                <Share2 className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-start justify-between w-full box-border min-h-[110px]">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 relative">
                  <Image src="https://placehold.co/48x48" alt="avatar" width={48} height={48} className="object-cover" unoptimized />
                </div>
                <div className='relative'>
                  <div className="flex items-center space-x-3">
                    <h4 className="text-gray-800 font-semibold">{post.author.name}</h4>
                    <span className="text-sm text-gray-400">{post.timeAgo}</span>
                  </div>
                  <p className="mt-4 text-gray-500 leading-relaxed max-w-prose">{post.content}</p>
                </div>
              </div>
              <div className="text-gray-300 mr-5">
                <MoreHorizontal className="w-5 h-5" />
              </div>
            </div>

             {post.image && (
                    <div className="mt-4">
                      <img
                        src={post.image}
                        alt="Post image"
                        className="object-cover"
                      />
                    </div>
                  )}

            <div className="mt-6 flex items-center justify-between border-t border-gray-300 pt-6">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full overflow-hidden border-2 border-white">
                    <img src="https://placehold.co/24x24" alt="a" width={24} height={24} className="object-cover" />
                  </div>
                  <div className="w-6 h-6 rounded-full overflow-hidden border-2 border-white">
                    <img src="https://placehold.co/24x24" alt="b" width={24} height={24} className="object-cover" />
                  </div>
                  <div className="w-6 h-6 rounded-full overflow-hidden border-2 border-white">
                    <img src="https://placehold.co/24x24" alt="c" width={24} height={24} className="object-cover" />
                  </div>
                </div>

                <div className="ml-3 text-sm text-gray-500">
                  <div className="flex items-center text-[#9aa3b2]">
                    <Heart className="w-4 h-4 text-[#9aa3b2]" />
                    <span className="ml-2 text-sm text-gray-500">{post.likes.count}</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">A ti, a Elaine y a <span className="text-gray-500">{Math.max(0, post.likes.count - 2)} más les gusta esto</span></div>
                </div>
              </div>

              <div className="flex items-center space-x-6 text-gray-400">
                <div className="flex items-center space-x-2">
                  <MessageSquare className="w-5 h-5 text-gray-400" />
                  <span className="text-sm">{post.comments}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Share2 className="w-5 h-5 text-gray-400" />
                  <span className="text-sm">{post.shares}</span>
                </div>
              </div>
            </div>
          </div>



          {/* Render comments list if exists */}
          {post.commentsList && post.commentsList.length > 0 && (
            <>
              {post.commentsList.map((c) => (
                <div key={c.id} className='p-6 bg-[#f6f8fa] border-b border-gray-300'>
                  <div className="flex items-start space-x-3">
                    <div className="w-9 h-9 rounded-full overflow-hidden">
                      <img src={c.author.avatar || 'https://placehold.co/36x36'} alt={c.author.name} width={36} height={36} className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-semibold text-gray-800">{c.author.name}</div>
                          <div className="text-xs text-gray-400">{c.timeAgo}</div>
                        </div>
                      </div>
                      <div className="mt-2 text-gray-600 text-sm">{c.content}</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 pt-6 flex items-center gap-3">
                    <div className="flex items-center text-[#9aa3b2]">
                      <Heart className="w-4 h-4 text-[#9aa3b2]" />
                      <span className="ml-2 text-sm text-gray-500">{post.likes.count}</span>
                    </div>
                    <div className="text-xs text-gray-400">A ti, a Elaine y a <span className="text-gray-500">{Math.max(0, post.likes.count - 2)} más les gusta esto</span></div>
                  </div>
                </div>
              ))}

              {post.commentsList.length >= 2 && (
                <>
                  <div className="p-3 text-center cursor-pointer border-b border-gray-300">
                    <span className="text-xs text-gray-500 font-medium">Ver más comentarios +</span>
                  </div>
                  <div className="p-6">
                    <div className="bg-white">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                          <img src={'https://placehold.co/40x40'} alt="user" width={40} height={40} className="object-cover" />
                        </div>
                        <div className="flex-1">
                          <div className="border rounded-md border-[#eef3f6] p-3 flex items-center">
                            <input className="flex-1 text-sm text-gray-600 placeholder-gray-400 bg-transparent outline-none" placeholder="Escribe un comentario..." />
                            <button className="ml-2 text-gray-400">
                              <MessageSquare className="w-5 h-5" />
                            </button>
                          </div>

                          <div className="mt-4 flex justify-end items-center space-x-4">
                            <button className="px-4 py-2 border border-[#e6eef5] rounded-md text-sm text-gray-500">Cancelar</button>
                            <button className="px-4 py-2 bg-[#ff6b4a] text-white rounded-md text-sm">Publicar comentario</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;
