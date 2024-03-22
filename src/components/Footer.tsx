import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Loader from './Loader';
import axios from 'axios';

const Footer = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      email: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);

    try {
      console.log(data);
      await axios.post('http://localhost:4000/newMail', data);
    } catch (error: unknown) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      {isLoading && <Loader />}
      <footer className='bottom-0 left-0 right-0 bg-primary flex flex-col items-center justify-center gap-3 p-6 font-base'>
        <p className='text-sm  text-center'>
          You can follow our news by entering your email below and clicking the
          button, the first 1,000 to subscribe will get a special medal and
          extra points!
        </p>
        <form
          className='flex border-2 items-center justify-between rounded-full overflow-hidden'
          onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('email', { required: true })}
            type='email'
            placeholder='Enter your email'
            className='border-none p-2 w-[350px] focus:outline-none focus:ring-0 focus:border-transparent'
          />
          <button
            className='p-2 bg-forest text-neutral-200'
            type='submit'>
            Subscribe
          </button>
        </form>
      </footer>
    </>
  );
};

export default Footer;
