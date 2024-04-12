import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import PolicyModal from './modals/PolicyModal';
import Button from './Button';
import Loader from './Loader';
import axios from 'axios';

const Footer = ({ showPolicy }: { showPolicy: boolean }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      email: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);

    try {
      await axios.post('https://backend-landing.onrender.com/newMail', data);
    } catch (error: unknown) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      {isLoading && <Loader />}
      <footer className=' bg-primary flex flex-col items-center justify-center gap-3 p-6 font-base w-full'>
        <p className='text-sm  text-center'>
          You can follow our news by entering your email below and clicking the
          button, the first 1,000 to subscribe will get a special medal and
          extra points!
        </p>
        <form
          className=' flex border-2 items-center justify-between rounded-full overflow-hidden'
          onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('email', { required: true })}
            type='email'
            placeholder='Enter your email'
            className='border-none p-2 w-[200px] md:w-[350px] focus:outline-none focus:ring-0 focus:border-transparent'
          />
          <button
            className='p-2 bg-forest text-neutral-200'
            type='submit'>
            Subscribe
          </button>
        </form>
        {showPolicy && (
          //Meter el policy en un modal
          <div className='text-center'>
            <Button
              onClick={() => setModalOpen(true)}
              className='text-white border-none text-md hover:underline'>
              <button onClick={() => setModalOpen(true)}>Privacy Policy</button>
            </Button>
            <PolicyModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
          </div>

        )}
      </footer>
    </>
  );
};

export default Footer;
