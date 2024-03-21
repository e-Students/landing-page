const Footer = () => {
  const onsubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
  };
  return (
    <footer className='flex flex-col items-center justify-center gap-3 p-8 font-base'>
      <p className='text-sm  text-center'>
        You can follow our news by entering your email below and clicking the
        button, the first 1,000 to subscribe will get a special medal and extra
        points!
      </p>
      <form
        className='flex gap-2 border-2 items-center justify-between rounded-full overflow-hidden'
        onSubmit={onsubmit}>
        <input
          type='email'
          placeholder='Enter your email'
          className='border-none px-2 w-[350px] focus:outline-none focus:ring-0 focus:border-transparent'
        />
        <button
          className='p-2 bg-forest text-neutral-200'
          type='submit'>
          Subscribe
        </button>
      </form>
    </footer>
  );
};

export default Footer;
