import { useState } from 'react';
import Button from './Button';
import Logo from './Logo';
import ContactUsModal from './modals/ContactUsModal';
const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
  console.log(isModalOpen);
  return (
    <nav className=' bg-primary w-full h-[100px] flex flex-wrap items-center justify-between px-4 font-base'>
      <div className='ml-8'>
        <Logo />
      </div>

      <section className='flex items-center justify-center gap-3 mr-12'>
        <Button
          onClick={() => setIsModalOpen(true)}
          className='flex items-center gap-1 px-4 py-2 text-base bg-forest border-white text-smoke'>
          <button onClick={() => setIsModalOpen(true)}>ContactUs</button>
        </Button>
        {isModalOpen && (
          <ContactUsModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </section>
    </nav>
  );
};

export default Navbar;
