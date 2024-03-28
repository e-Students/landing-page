import { useState } from 'react';
import Button from './Button';
import logo from '../assets/logoestudents.png';
import ContactUsModal from './modals/ContactUsModal';
import { motion } from 'framer-motion';
const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <nav className=' bg-primary w-full min-h-[100px] flex flex-wrap items-center justify-between px-4 font-base'>
      <motion.div
        className='ml-8'
        initial='hidden'
        animate={{
          scale: [0.1, 1, 1.1],
          rotateY: [360, 0],
          transition: { duration: 2 },
          x: [100, 80, 60, 40, 20, 0],
        }}>
        <img
          src={logo}
          alt='logo eStudents'
        />
      </motion.div>

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
