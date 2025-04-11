'use client'

export default function SpotifyPlayer() {
  return (
    <div className="w-full flex justify-center py-6">
      <iframe
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4dyzvuaRJ0n?utm_source=generator"
        width="100%"
        height="80"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="rounded-lg max-w-xl w-full shadow-md"
      />
    </div>
  )
}
