'use client'
import Image from 'next/image'


const normalizeSrc = (src: string) => src[0] === '/' ? src.slice(1) : src
function cloudinaryLoader({ src, width, quality }: { src: string, width: number, quality: number }) {
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  return `https://res.cloudinary.com/dlwdq84ig/image/upload/${params.join(',')}/${normalizeSrc(src)}`;
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <Image alt="Subscribe" width="332" height="603" loader={cloudinaryLoader} src={{ src: "nzfcdwiovgmsgiqbqi1i", width: 300, height: 600 }} />
      <Image alt="Subscribe" width="332" height="603" loader={cloudinaryLoader} src={{ src: "ugej2plc123a2vn8dbjj", width: 300, height: 600 }} />

    </main >
  )
}
