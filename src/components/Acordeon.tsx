import clsx from 'clsx';
import { useRef } from 'react';
import { motion } from 'framer-motion';

interface AcordeonProps {
  title: string;
  description: string[];
  className?: string;
  id: number;
  onOpen?: () => void;
}

const Acordeon = ({
  title,
  description,
  className,
  id,
  onOpen,
}: AcordeonProps) => {
  const acordionRef = useRef<HTMLDivElement>(null);
  console.log(acordionRef);
  return (
    <motion.div
      onClick={onOpen}
      className={`row-span-3 grid grid-cols-12  cursor-pointer transition-all duration-500 ${className}`}
      ref={acordionRef}>
      {id % 2 !== 0 ? (
        <>
          <motion.h2 className='text-4xl flex col-span-6 w-full h-full items-center text-center justify-center'>
            {title}
          </motion.h2>

          <motion.p className={clsx('col-span-6 text-sm p-5')}>
            {description[0]}
          </motion.p>
        </>
      ) : (
        <>
          <motion.p className={clsx('col-span-6 text-sm p-5')}>
            {description[0]}
          </motion.p>
          <motion.h2 className='text-4xl flex col-span-6 w-full h-full items-center text-center justify-center'>
            {title}
          </motion.h2>
        </>
      )}
    </motion.div>
  );
};

export default Acordeon;
