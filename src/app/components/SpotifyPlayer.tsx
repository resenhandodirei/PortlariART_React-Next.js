'use client'

import { useEffect } from 'react';

export default function SpotifyPlayer() {
  useEffect(() => {
    const token = 'SEU_ACCESS_TOKEN'; // Substitua com seu token de acesso

    // Verifica se o SDK está disponível no navegador
    if (window.Spotify) {
      const player = new window.Spotify.Player({
        name: 'Meu Player',
        getOAuthToken: cb => cb(token),
        volume: 0.5
      });

      // Evento: Player está pronto
      player.addListener('ready', ({ device_id }) => {
        console.log('Player is ready with device ID', device_id);
      });

      // Evento: Player erro
      player.addListener('error', ({ message }) => {
        console.error(message);
      });

      // Conecta o player ao Spotify
      player.connect();

      return () => {
        player.disconnect();
      };
    }
  }, []);

  return (
    <div className="w-full flex justify-center py-6">
      <div className="w-full h-16 bg-[#2D3766] rounded-lg flex justify-between items-center px-4">
        <span className="text-white">Reproduzindo Música...</span>
        <button className="text-white px-4 py-2 rounded-lg bg-[#8C0343]">Play</button>
      </div>
    </div>
  );
}
