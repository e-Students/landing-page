import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import { data } from '../data/Articles.data';
import { useState } from 'react';

const AnimatedCards = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  return (
    <div className='bg-white'>
      {data.map((item) => (
        <motion.div
          key={item.id}
          onClick={() => setSelectedId(item.id.toString())}
          layoutId={item.id.toString()}
          className={` row-span-3 grid grid-cols-12  cursor-pointer transition-all duration-500 `}>
          {item.id % 2 !== 0 ? (
            <>
              <motion.h2 className='text-4xl flex col-span-6 w-full h-full items-center text-center justify-center'>
                {item.title}
              </motion.h2>

              <motion.p className={clsx('col-span-6 text-sm p-5')}>
                {item.content[0]}
              </motion.p>
            </>
          ) : (
            <>
              <motion.p className={clsx('col-span-6 text-sm p-5')}>
                {item.content[0]}
              </motion.p>
              <motion.h2 className='text-4xl flex col-span-6 w-full h-full items-center text-center justify-center'>
                {item.title}
              </motion.h2>
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
            <motion.h2 className='text-4xl flex col-span-6 w-full h-full items-center text-center justify-center text-white z-10'>
              {data.find((item) => item.id.toString() === selectedId)?.title}
            </motion.h2>
            <motion.p className='text-white z-10'>
              {
                data.find((item) => item.id.toString() === selectedId)
                  ?.content[0]
              }
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedCards;
