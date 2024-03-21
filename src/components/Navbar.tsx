import { BsFillEnvelopeAtFill } from 'react-icons/bs';
import Button from './Button';
import Logo from './Logo';
const Navbar = () => {
  return (
    <nav className=' bg-primary w-full h-[100px] flex flex-wrap items-center justify-between px-4 font-base font-medium'>
      <Logo />

      <section className='flex items-center justify-center gap-3 mr-3'>
        <Button
          className='flex items-center gap-1'
          Icon={
            <BsFillEnvelopeAtFill
              size={16}
              className='text-silver-400'
            />
          }>
          Contact
        </Button>
        <Button
          className='border  py-1 px-3 rounded-full text-sm '
          handler={() => {}}>
          Newsletter
        </Button>
        <Button>Form</Button>
      </section>
    </nav>
  );
};

export default Navbar;
