import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'My App Demo',
    short_name: 'AppDemo',
    description: 'ตัวอย่างแอปพลิเคชันสำหรับทดลองใช้งาน',
    start_url: '/',
    display: 'standalone',
    background_color: '#f8fafc',
    theme_color: '#0f172a',
    icons: [
      {
        src: '/icon/demo.png',
        sizes: '192x192 512x512',
        type: 'image/png',
      },
    ],
  };
}