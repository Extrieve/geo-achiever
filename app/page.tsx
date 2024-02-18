import Image from 'next/image'

export default function Home() {
  return (
    <div className='container align-middle'>
      <h1 className='text-lg'>Welcome to GeoAchiever</h1>
      <p>
        An innovative application designed for explorers and achievers worldwide!
      </p>
      <Image
        src="/images/geo-achiever-logo.png"
        alt="GeoAchiever Logo"
        width={500}
        height={500}
      />
    </div>
  )
}
