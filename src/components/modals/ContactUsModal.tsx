import Button from '../Button';
import { Input } from '../Input';
import { Modal } from './Modal';
import { TextArea } from '../TextArea';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import clsx from 'clsx';
import { useState } from 'react';
import axios from 'axios';

interface ContactUsModalProps {
  isOpen?: boolean;
  onClose: () => void;
}

const ContactUsModal = ({ isOpen, onClose }: ContactUsModalProps) => {
  const [disabled, setDisabled] = useState<boolean>(false);
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
    console.log(data);
    setDisabled(true);
    try {
      await axios.post('http://localhost:4000/contactUs', data);
    } catch (error: unknown) {
      console.log(error);
    } finally {
      setDisabled(false);
      onClose();
    }
  };
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}>
      <div className='p-4'>
        <h1 className='mb-4 text-2xl font-base text-medium w-full text-center'>
          Contact Us
        </h1>
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
              `mt-4 rounded-xl w-full bg-forest text-neutral-100 font-base`,
              disabled && 'opacity-50 cursor-default'
            )}>
            Submit
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default ContactUsModal;
