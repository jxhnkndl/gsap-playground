import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const App = () => {
  const main = useRef();

  useGSAP(
    () => {
      gsap.from('.heading', { x: -250, duration: 1, ease: 'power3.out' });
      gsap.to('.overlay', { width: '0%', duration: 1, ease: 'power3.out' });
    },
    { scope: main }
  );

  return (
    <main ref={main} className='h-screen flex justify-center items-center'>
      <div className='relative overflow-hidden'>
        <h1 className='heading inline-block text-9xl font-bold text-transparent bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] bg-clip-text'>
          GSAP PLAYGROUND
        </h1>
        <div className='overlay absolute top-0 right-0 bottom-0 left-0 z-10 origin-right bg-white'></div>
      </div>
    </main>
  );
};

export default App;
