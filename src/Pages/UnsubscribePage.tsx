import { useForm, FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import axios from 'axios';
import { useState } from 'react';

const UnsubscribePage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: FieldValues) => {
    setIsSubmitting(true);
    try {
      await axios.delete('http://localhost:4000/deleteMail', { data });
    } catch (error: unknown) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
      navigate('/');
    }
  };
  return (
    <div className='min-h-[765px] items-stretch w-full flex justify-center flex-col gap-6 p-36'>
      {isSubmitting && <Loader />}
      <h1 className='text-xl font-bold text-center font-base text-neutral-500 '>
        Unsubscribe from our newsletter
      </h1>
      <form
        className='flex border-2 items-center justify-between rounded-full overflow-hidden'
        onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('email', { required: true })}
          type='email'
          placeholder='Enter your email'
          className='border-none p-2 px-4 w-[350px] focus:outline-none focus:ring-0 focus:border-transparent'
        />
        {errors.email && (
          <span className='text-red-500'>This field is required</span>
        )}
        <button
          className='p-2 bg-forest text-neutral-200'
          type='submit'>
          Unsubscribe
        </button>
      </form>
    </div>
  );
};

export default UnsubscribePage;
