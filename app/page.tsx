import Image from 'next/image'

export default function Home() {
  return (
    <div className='m-auto text-center text-xl h-5'>
      <h1>Welcome to GeoAchiever</h1>
      <p className='text-sm'>
        An innovative application designed for explorers and achievers worldwide!
      </p>
      <Image
        src="https://media.discordapp.net/attachments/862790378925850624/1208816617799159879/file-bF8nD5eM3ZxSCK8B17e7WJsC.png?ex=65e4a934&is=65d23434&hm=a4457b18fb8d79b0b9ff2c06a23f7438f2a320fba52895111ce8fba89c59aaa2&=&format=webp&quality=lossless"
        alt="GeoAchiever Logo"
        width={500}
        height={500}
      />
    </div>
  )
}
