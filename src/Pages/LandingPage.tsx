import Acordeon from '../components/Acordeon';

interface LandingPageProps {
  data: { title: string; content: string; id: number }[];
}

const LandingPage = ({ data }: LandingPageProps) => {
  return (
    <div className='grid h-full items-center font-base'>
      {data.map((item) => (
        <Acordeon
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
