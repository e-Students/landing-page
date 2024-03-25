import { useRef, useState } from 'react';
import Acordeon from '../components/Acordeon';
import AcordionModal from '../components/modals/AcordionModal';

interface LandingPageProps {
  data: { title: string; content: string[]; id: number }[];
}

const LandingPage = ({ data }: LandingPageProps) => {
  const modalRef = useRef({ title: '', content: [''], id: 0 });
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <div className='flex flex-col gap-10 flex-shrink  items-center font-base justify-around bg-white transition-all p-10'>
      {modalOpen && (
        <AcordionModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          data={modalRef.current}
        />
      )}
      {data.map((item) => (
        <Acordeon
          onOpen={() => {
            setModalOpen(true);
            modalRef.current = item;
          }}
          title={item.title}
          description={item.content}
          key={item.id}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default LandingPage;
