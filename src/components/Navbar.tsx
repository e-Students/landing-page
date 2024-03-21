
import Button from './Button';
import Logo from './Logo';
const Navbar = () => {
  return (
    <nav className=' bg-primary w-full h-[100px] flex flex-wrap items-center justify-between px-4 font-base'>
      <div className='ml-8'><Logo /></div>

      <section className='flex items-center justify-center gap-3 mr-12'>
        <Button
          className='flex items-center gap-1 px-4 py-2 text-base bg-forest border-white text-smoke'
          >
          Contact us
        </Button>
      </section>
    </nav>
  );
};

export default Navbar;
