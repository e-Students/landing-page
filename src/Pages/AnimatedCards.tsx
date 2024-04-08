import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import { data } from '../data/Articles.data';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { Modal } from '../components/modals/Modal';

const AnimatedCards = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const popUpTimer = setTimeout(() => {
      setIsModalOpen(true);
    }, 5000);

    return () => {
      clearTimeout(popUpTimer);
    };
  }, []);
  return (
    <>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}>
          <Footer showPolicy={false} />
        </Modal>
      )}
      {data.map((item) => (
        <motion.div
          key={item.id}
          onClick={() => setSelectedId(item.id.toString())}
          layoutId={item.id.toString()}
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1, x: -10, y: -10, gap: -10, padding: 50 }}
          className={` row-span-3 grid grid-cols-12 font-base `}>
          {item.id % 2 !== 0 ? (
            <>
              <motion.div
                className=' text-3xl flex 
              col-span-6 w-full h-full items-center text-center 
              justify-center flex-col relative  '>
                <motion.h2 className='  m-auto z-50'>{item.title}</motion.h2>{' '}
                <motion.img
                  src={item.img}
                  alt={item.title}
                  className=' absolute inset-0 w-full h-full object-cover opacity-45 rounded-lg '
                />
              </motion.div>
              <motion.div className='col-span-6 flex flex-col  justify-center text-xs text-primary text-end cursor-pointer'>
                <motion.p
                  className={clsx(
                    'col-span-6 text-sm p-5  text-black text-start '
                  )}>
                  {item.content[0]}
                </motion.p>
                ... Read More
              </motion.div>
            </>
          ) : (
            <>
              <motion.div className='col-span-6 flex flex-col  justify-center text-xs text-primary text-start'>
                <motion.p
                  className={clsx(
                    'col-span-6 text-sm p-5 text-start text-black '
                  )}>
                  {item.content[0]}
                </motion.p>
                ... Read More
              </motion.div>
              <motion.div
                className='text-3xl flex col-span-6 
                w-full h-full items-center text-center justify-center flex-col relative
                 '>
                <motion.h2 className=' m-auto z-10'>{item.title}</motion.h2>{' '}
                <motion.img
                  src={item.img}
                  alt={item.title}
                  className=' absolute inset-0 w-full h-full object-cover opacity-65 rounded-lg  '
                />
              </motion.div>
            </>
          )}
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            onClick={() => setSelectedId(null)}
            className=' absolute top-0 left-0 bg-gray-900/40  h-screen w-full '>
            <div
              className='relative bg-white flex mx-auto  w-[90%] min-h-fit
              mt-[200px] items-center justify-center flex-col p-10 gap-8 
            rounded-lg'>
              <motion.h2 className='text-4xl flex col-span-6  text-black font-base font-bold '>
                {data.find((item) => item.id.toString() === selectedId)?.title}
              </motion.h2>
              <motion.img
                src={
                  data.find((item) => item.id.toString() === selectedId)?.img
                }
                alt='selected'
                className='w-full h-[200px] object-cover rounded-lg '
              />
              {data
                .find((item) => item.id.toString() === selectedId)
                ?.content.map((item) => (
                  <motion.p
                    className='
            text-sm flex text-black font-base font-light'>
                    {item}
                  </motion.p>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AnimatedCards;
