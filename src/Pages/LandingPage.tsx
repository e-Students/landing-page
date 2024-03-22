import Acordeon from '../components/Acordeon';

interface LandingPageProps {
  data: { title: string; content: string; id: number }[];
}

const LandingPage = ({ data }: LandingPageProps) => {
  return (
    <div className='grid grid-rows-9 h-full items-center font-base'>
      {data.map((item) => (
        <Acordeon
          title={item.title}
          description={item.content}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default LandingPage;
