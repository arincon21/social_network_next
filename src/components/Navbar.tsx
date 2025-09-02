"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Search, Bell, MessageSquare, CheckSquare, ChevronDown, LogOut, FileText, Star } from "lucide-react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const notifRef = useRef<HTMLDivElement | null>(null);

  const [messagesOpen, setMessagesOpen] = useState(false);
  const msgRef = useRef<HTMLDivElement | null>(null);

  const [friendsOpen, setFriendsOpen] = useState(false);
  const friendRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const target = e.target as Node;
      if (menuRef.current && menuRef.current.contains(target)) {
        return; // clicked inside profile menu
      }
      if (notifRef.current && notifRef.current.contains(target)) {
        return; // clicked inside notif menu
      }
      if (msgRef.current && msgRef.current.contains(target)) {
        return; // clicked inside messages menu
      }
      if (friendRef.current && friendRef.current.contains(target)) {
          return; // clicked inside friends menu
        }
      // clicked outside menus
  setMenuOpen(false);
  setNotificationsOpen(false);
  setMessagesOpen(false);
  setFriendsOpen(false);
    }

  document.addEventListener('pointerdown', onDocClick);
  return () => document.removeEventListener('pointerdown', onDocClick);
  }, []);

  const handleSelect = (action: string) => {
    // placeholder: implement navigation/actions as needed
    console.log('menu select:', action);
    setMenuOpen(false);
  };

  const handleNotifSelect = (id: number | string) => {
    console.log('notif select:', id);
    setNotificationsOpen(false);
  };

  const handleMsgSelect = (id: number | string) => {
    console.log('msg select:', id);
    setMessagesOpen(false);
  };

  const messages = [
    {
      id: 1,
      name: 'Diana Jameson',
      excerpt: "¡Hola James! Soy Diana, solo quería que supieras que tenemos que reprogramar...",
      time: 'hace 4 horas',
      avatar: 'https://placehold.co/48x48',
    },
    {
      id: 2,
      name: 'Jake Parker',
      excerpt: "¡Genial, nos vemos mañana!",
      time: 'hace 4 horas',
      avatar: 'https://placehold.co/48x48',
    },
    {
      id: 3,
      name: 'Elaine Dreyfuss',
      excerpt: "Tendremos que revisar eso en la oficina y...",
      time: 'Ayer',
      avatar: 'https://placehold.co/48x48',
    },
  ];

  const friendRequests = [
    {
      id: 1,
      name: 'Tamara Romanoff',
      subtitle: 'Amiga en común: Sarah Hetfield',
      avatar: 'https://placehold.co/48x48',
    },
    {
      id: 2,
      name: 'Tony Stevens',
      subtitle: '4 amigos en común',
      avatar: 'https://placehold.co/48x48',
    },
    {
      id: 3,
      name: 'Mary Jane Stark',
      subtitle: 'Tú y Mary Jane Stark ahora son amigos. Escribe en su muro.',
      avatar: 'https://placehold.co/48x48',
    },
  ];

  const handleFriendAction = (id: number | string, action: 'accept' | 'decline') => {
    console.log('friend action', id, action);
    setFriendsOpen(false);
  };

  // Toggle helpers: when opening one menu, close the others
  const toggleFriends = () => {
    setFriendsOpen((s) => {
      const next = !s;
      if (next) {
        setMessagesOpen(false);
        setNotificationsOpen(false);
        setMenuOpen(false);
      }
      return next;
    });
  };

  const toggleMessages = () => {
    setMessagesOpen((s) => {
      const next = !s;
      if (next) {
        setFriendsOpen(false);
        setNotificationsOpen(false);
        setMenuOpen(false);
      }
      return next;
    });
  };

  const toggleNotifications = () => {
    setNotificationsOpen((s) => {
      const next = !s;
      if (next) {
        setFriendsOpen(false);
        setMessagesOpen(false);
        setMenuOpen(false);
      }
      return next;
    });
  };

  const toggleMenu = () => {
    setMenuOpen((s) => {
      const next = !s;
      if (next) {
        setFriendsOpen(false);
        setMessagesOpen(false);
        setNotificationsOpen(false);
      }
      return next;
    });
  };

  const notifications = [
    {
      id: 1,
      name: 'Sarah Hetfield',
      text: 'comentó en tu foto.',
      highlight: 'foto',
      time: 'Ayer a las 5:32am',
      avatar: 'https://placehold.co/48x48',
      excerpt: '“¡Se ve increíble con ese atuendo! Deberíamos ver cada...”',
    },
    {
      id: 2,
      name: 'Green Goo Rock',
      text: 'te invitó a asistir a su evento Goo en Gotham Bar.',
      highlight: 'Gotham Bar',
      time: '5 de marzo a las 6:43pm',
      avatar: 'https://placehold.co/48x48',
    },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-20 h-[70px] bg-[#3f4257]">
      <div className="mx-auto h-full px-4 flex items-center gap-4">
       
        {/* Left: Page title / logo */}
        <div className="w-[300px] flex items-center gap-4 pl-[80px]">
          <div className="text-white font-bold tracking-wider text-xl">NOTICIAS</div>
        </div>

        {/* Center: Search */}
        <div className="flex-1 flex justify-center mx-4">
          <div className="relative w-full max-w-[600px] h-[70px]">
            <input
              aria-label="Buscar"
              placeholder="Busca aquí personas o páginas..."
              className="w-full h-full bg-[#47495f] text-sm text-gray-200 placeholder:text-gray-400 pl-4 pr-10 outline-none"
            />
            <span className="absolute inset-y-0 right-3 flex items-center text-gray-300">
              <Search size={25} />
            </span>
          </div>
        </div>

        {/* Right: icons + profile */}
        <div className="flex-1 flex items-center justify-end gap-8 pr-[60px] h-full">
            <div className="flex items-center gap-3 text-gray-200">
            <div className="relative" ref={friendRef}>
              <button onClick={toggleFriends} className="p-2 rounded-full hover:bg-[#4a4d62] cursor-pointer">
                <CheckSquare size={20} />
              </button>
              <span className="absolute -top-1 -right-1 bg-[#2ecc71] text-[10px] text-white rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                6
              </span>

              <div className={`origin-top-right absolute right-0 mt-[5px] w-[360px] bg-white rounded-sm shadow-[0_0_34px_0_rgba(63,66,87,0.1)] overflow-hidden z-40 transition-opacity ${friendsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="flex items-center justify-between px-4 py-3 border-b">
                  <div className="text-[9px] text-gray-400 font-semibold">NOTIFICACIONES</div>
                  <div className="flex items-center gap-4">
                    <button className="text-[9px] text-gray-600">AJUSTES</button>
                    <button className="text-[9px] text-gray-600">MARCAR TODO COMO LEÍDO</button>
                  </div>
                </div>

                <div className="max-h-64 overflow-y-auto">
                  {friendRequests.map((f) => (
                    <div key={f.id} className="w-full text-left px-4 py-4 flex items-center justify-between gap-4 hover:bg-gray-50">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 relative rounded-full overflow-hidden">
                          <Image src={f.avatar} alt={f.name} width={40} height={40} className="object-cover" unoptimized />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800">{f.name}</div>
                          <div className="text-sm text-gray-400">{f.subtitle}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button onClick={() => handleFriendAction(f.id, 'accept')} className="w-10 h-10 bg-sky-400 text-white rounded flex items-center justify-center">+</button>
                        <button onClick={() => handleFriendAction(f.id, 'decline')} className="w-10 h-10 bg-gray-300 text-gray-600 rounded flex items-center justify-center">-</button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4">
                  <button onClick={() => { console.log('check events'); setFriendsOpen(false); }} className="w-full bg-sky-400 text-white py-3 font-semibold rounded-b">Revisa todos tus eventos</button>
                </div>
              </div>
            </div>

            <div className="relative" ref={msgRef}>
              <button onClick={toggleMessages} className="p-2 rounded-full hover:bg-[#4a4d62] cursor-pointer">
                <MessageSquare size={20} />
              </button>
              <span className="absolute -top-1 -right-1 bg-[#7f5af0] text-[10px] text-white rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                2
              </span>

              <div className={`origin-top-right absolute right-0 mt-[5px] overflow-hidden w-[360px] bg-white rounded-sm shadow-[0_0_34px_0_rgba(63,66,87,0.1)] z-40 transition-opacity ${messagesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="flex items-center justify-between px-4 py-3 border-b">
                  <div className="text-[9px] text-gray-400 font-semibold">CHAT / MENSAJES</div>
                  <div className="flex items-center gap-4">
                    <button className="text-[9px] text-gray-600">AJUSTES</button>
                    <button className="text-[9px] text-gray-600">MARCAR TODO COMO LEÍDO</button>
                  </div>
                </div>

                <div className="max-h-64 overflow-y-auto">
                  {messages.map((m) => (
                    <button key={m.id} onClick={() => handleMsgSelect(m.id)} className="w-full text-left px-4 py-4 flex gap-4 items-start hover:bg-gray-50">
                      <div className="w-10 h-10 relative rounded-full overflow-hidden">
                        <Image src={m.avatar} alt={m.name} width={40} height={40} className="object-cover" unoptimized />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm">
                          <span className="font-semibold text-gray-800">{m.name}</span>
                        </div>
                        <div className="text-sm text-gray-500 mt-1">{m.excerpt}</div>
                        <div className="text-xs text-gray-400 mt-2">{m.time}</div>
                      </div>
                      <div className="text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-4">
                  <button onClick={() => { console.log('view all messages'); setMessagesOpen(false); }} className="w-full bg-[#6b43d6] text-white py-3 font-semibold rounded-b">Ver todos los mensajes</button>
                </div>
              </div>
            </div>

            <div className="relative" ref={notifRef}>
              <button
                onClick={toggleNotifications}
                className="p-2 rounded-full hover:bg-[#4a4d62] cursor-pointer"
                aria-haspopup="true"
                aria-expanded={notificationsOpen}
              >
                <Bell size={20} />
              </button>
              <span className="absolute -top-1 -right-1 bg-[#ff6b6b] text-[10px] text-white rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                8
              </span>

              {/* Notifications dropdown */}
              <div className={`origin-top-right absolute right-0 mt-[5px] w-[360px] bg-white z-40 shadow-[0_0_34px_0_rgba(63,66,87,0.1)] rounded-sm transition-opacity overflow-hidden ${notificationsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="flex items-center justify-between px-4 py-3 border-b">
                  <div className="text-[9px] text-gray-400 font-semibold">NOTIFICACIONES</div>
                  <div className="flex items-center gap-4">
                    <button className="text-[9px] text-gray-600">AJUSTES</button>
                    <button className="text-[9px] text-gray-600">MARCAR TODO COMO LEÍDO</button>
                  </div>
                </div>

                <div className="max-h-64 overflow-y-auto">
                  {notifications.map((n) => (
                    <button key={n.id} onClick={() => handleNotifSelect(n.id)} className="w-full text-left px-4 py-4 flex gap-4 items-start hover:bg-gray-50">
                      <div className="w-10 h-10 relative rounded-full overflow-hidden">
                        <Image src={n.avatar} alt={n.name} width={40} height={40} className="object-cover" unoptimized />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm">
                          <span className="font-semibold text-gray-800">{n.name}</span>
                          <span className="text-gray-700"> {n.text?.replace(n.highlight || '', '')}</span>
                          <span className="text-orange-500"> {n.highlight}</span>
                        </div>
                        <div className="text-xs text-gray-400 mt-2">{n.time}</div>
                        {n.excerpt && (
                          <div className="mt-3 bg-gray-100 p-2 rounded text-sm text-gray-600 inline-block">{n.excerpt}</div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-4">
                  <button onClick={() => { console.log('view all notifications'); setNotificationsOpen(false); }} className="w-full bg-orange-500 text-white py-3 font-semibold">Ver todas las notificaciones</button>
                </div>
              </div>
            </div>
          </div>

          {/* Profile */}
            <div className="relative" ref={menuRef}>
            <div
              onClick={toggleMenu}
              aria-haspopup="true"
              aria-expanded={menuOpen}
              className="flex items-center gap-3 px-3 py-1 hover:bg-[#4a4d62] cursor-pointer h-full"
            >
              <div className="relative w-10 h-10">
                <Image src="https://placehold.co/35x35" alt="Avatar" width={35} height={35} className="object-cover rounded-full" unoptimized />             
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#2ecc71] border-2 border-[#45475f] rounded-full" />
              </div>
              <div className="text-left text-gray-100">
                <div className="text-sm font-semibold">James Spiegel</div>
                <div className="text-[9px] text-gray-300 tracking-widest">VAQUERO DEL ESPACIO</div>
              </div>
              <ChevronDown size={18} className="text-gray-200" />
            </div>

            {/* Dropdown menu */}
            <div className={`origin-top-right absolute right-0 w-64 bg-white rounded-sm shadow-[0_0_34px_0_rgba(63,66,87,0.1)] z-30 transition-opacity ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              <div className="p-3 border-b border-gray-100 text-xs text-gray-400 font-semibold">TU CUENTA</div>
              <div className="divide-y divide-gray-50">
                <button onClick={() => handleSelect('profile-settings')} className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-gray-50">
                  <FileText className="w-5 h-5 text-gray-500" />
                  <span className="text-sm text-gray-800 font-medium">Configuración de perfil</span>
                </button>
                <button onClick={() => handleSelect('create-page')} className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-gray-50">
                  <Star className="w-5 h-5 text-gray-500" />
                  <span className="text-sm text-gray-800 font-medium">Crear página de favoritos</span>
                </button>
                <button onClick={() => handleSelect('logout')} className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-gray-50">
                  <LogOut className="w-5 h-5 text-gray-500" />
                  <span className="text-sm text-gray-800 font-medium">Cerrar sesión</span>
                </button>
              </div>

              <div className="p-3 border-t border-gray-100">
                <div className="text-xs text-gray-400 font-semibold mb-2">AJUSTES DE CHAT</div>
                <div className="grid grid-cols-2 gap-2">
                  <button onClick={() => handleSelect('status-online')} className="flex items-center gap-2 text-sm p-2 rounded hover:bg-gray-50">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full inline-block" /> En línea
                  </button>
                  <button onClick={() => handleSelect('status-away')} className="flex items-center gap-2 text-sm p-2 rounded hover:bg-gray-50">
                    <span className="w-2 h-2 bg-amber-300 rounded-full inline-block" /> Ausente
                  </button>
                  <button onClick={() => handleSelect('status-disconnected')} className="flex items-center gap-2 text-sm p-2 rounded hover:bg-gray-50">
                    <span className="w-2 h-2 bg-rose-400 rounded-full inline-block" /> Desconectado
                  </button>
                  <button onClick={() => handleSelect('status-invisible')} className="flex items-center gap-2 text-sm p-2 rounded hover:bg-gray-50">
                    <span className="w-2 h-2 bg-slate-200 rounded-full inline-block" /> Invisible
                  </button>
                </div>
              </div>

              <div className="p-3 border-t border-gray-100">
                <div className="text-xs text-gray-400 font-semibold mb-2">ESTADO PERSONALIZADO</div>
                <div className="flex gap-2">
                  <input placeholder="Vaquero del espacio" className="flex-1 px-3 py-2 border rounded text-sm" />
                  <button onClick={() => handleSelect('save-status')} className="px-3 bg-[#6b43d6] text-white rounded">✓</button>
                </div>
              </div>

              <div className="p-3 border-t border-gray-100">
                <div className="text-xs text-gray-400 font-semibold mb-2">ACERCA DE OLYMPUS</div>
                <div className="space-y-2">
                  <button onClick={() => handleSelect('terms')} className="text-left w-full text-sm hover:text-gray-700">Términos y Condiciones</button>
                  <button onClick={() => handleSelect('faqs')} className="text-left w-full text-sm hover:text-gray-700">Preguntas frecuentes</button>
                  <button onClick={() => handleSelect('careers')} className="text-left w-full text-sm hover:text-gray-700">Carreras</button>
                  <button onClick={() => handleSelect('contact')} className="text-left w-full text-sm hover:text-gray-700">Contacto</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
