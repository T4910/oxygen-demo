import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-90 backdrop-blur-md z-10 shadow-sm p-2">
      <div className="container mx-auto">
        <Image 
          src="/oxygenlogo.png" 
          alt="Oxygen Logo" 
          width={150} 
          height={40} 
          className="h-10 w-auto"
        />
      </div>
    </header>
  );
} 