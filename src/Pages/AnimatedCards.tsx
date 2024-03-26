import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import { data } from '../data/Articles.data';
import { useState } from 'react';

const AnimatedCards = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  return (
    <>
      {data.map((item) => (
        <motion.div
          key={item.id}
          onClick={() => setSelectedId(item.id.toString())}
          layoutId={item.id.toString()}
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1, x: -10, y: -10, gap: -10, padding: 50 }}
          className={` row-span-3 grid grid-cols-12  cursor-pointer transition-all duration-500 font-base `}>
          {item.id % 2 !== 0 ? (
            <>
              <motion.h2
                className='text-4xl flex col-span-6 w-full h-full items-center text-center justify-center flex-col 
             '>
                {item.title}
              </motion.h2>
              <motion.div className='col-span-6 flex flex-col  justify-center text-xs text-primary text-end'>
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
            <div
              className='relative bg-white flex mx-auto  w-[90%] min-h-fit
              mt-[200px] items-center justify-center flex-col p-10 gap-8 
            rounded-lg'>
              <motion.h2 className='text-4xl flex col-span-6  text-black font-base font-bold '>
                {data.find((item) => item.id.toString() === selectedId)?.title}
              </motion.h2>
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
