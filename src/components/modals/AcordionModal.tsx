import { Modal } from './Modal';

type Data = {
  id: number;
  title: string;
  content: string[];
};

interface AcordionModalProps {
  isOpen?: boolean;
  onClose: () => void;
  data: Data | null;
}
const AcordionModal = ({ isOpen, onClose, data }: AcordionModalProps) => {
  if (!data) return null;
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}>
      <div className='flex flex-col items-center justify-center gap-4 p-10 transition-all'>
        <h1 className='text-2xl font-base font-semibold mb-6'>{data.title}</h1>
        {data.content.map((item, index) => (
          <>
            <p
              key={index}
              className='text-sm'>
              {item}
            </p>
          </>
        ))}
      </div>
    </Modal>
  );
};

export default AcordionModal;
