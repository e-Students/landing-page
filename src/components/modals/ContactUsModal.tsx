import Button from '../Button';
import { Input } from '../Input';
import { Modal } from './Modal';
import { TextArea } from '../TextArea';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import clsx from 'clsx';
import { useState } from 'react';
import axios from 'axios';
import logo from '../../../public/favIcon.png';
import { LuLoader2 } from 'react-icons/lu';

interface ContactUsModalProps {
  isOpen?: boolean;
  onClose: () => void;
}

const ContactUsModal = ({ isOpen, onClose }: ContactUsModalProps) => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
      surName: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setDisabled(true);
    setIsLoading(true);
    try {
      //await axios.post('http://localhost:4000/contactUs', data);
      await axios.post('https://backend-landing.onrender.com/contactUs', data);
    } catch (error: unknown) {
      console.log(error);
    } finally {
      setDisabled(false);
      setIsLoading(false);
      onClose();
    }
  };
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}>
      <div className='p-4'>
        <div className='flex mb-4 items-center justify-center gap-3'>
          {' '}
          <img
            className=' rounded-full w-8 h-8'
            src={logo}
            alt='logo eStudents'
          />
          <h1 className=' text-2xl font-base text-medium  text-center'>
            Contact Us
          </h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            id='name'
            placeholder='Name'
            type='text'
            label='Name'
            register={register}
            errors={errors}
          />
          <Input
            id='surName'
            placeholder='Surname'
            type='text'
            label='Surname'
            register={register}
            errors={errors}
          />
          <Input
            id='email'
            placeholder='Email'
            type='email'
            label='Email'
            register={register}
            errors={errors}
          />
          <TextArea
            id='message'
            label='Message'
            register={register}
            errors={errors}
            className='resize-none h-32'
          />
          <Button
            type='submit'
            disabled={disabled}
            className={clsx(
              `mt-4 rounded-xl w-full bg-primary text-neutral-100 font-base`,
              disabled && 'opacity-50 cursor-default'
            )}
            Icon={isLoading ? <LuLoader2 /> : null}
            iconClassName={clsx(
              `opacity-0`,
              isLoading && 'opacity-100 animate-spin'
            )}
            showIcon={isLoading}>
            Submit
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default ContactUsModal;
