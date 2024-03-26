import medals from '../assets/medals.jpg';
import campus from '../assets/campus.jpg';
import students from '../assets/students_talking.jpg';

type DataProps = {
  id: number;
  title: string;
  content: string[];
  img: string;
};

export const data: DataProps[] = [
  {
    id: 1,
    img: medals,
    title: 'Rewards, badges and points',
    content: [
      `At eStudents, we believe in recognising and rewarding your active participation in the community. That's why we've created a points and rewards system that allows you to earn points for your contributions and redeem them for amazing benefits and exclusive opportunities. Not only will you earn points... you will have a series of achievements that will earn you badges. Are you the most popular in your class? Or perhaps the smartest? Have you won an event on our platform? Compete and show off your badges and reach the top of the ranking! (Badges may give you access to exclusive activities but shhh).`,

      `You will find quests that will give you a specific set of points or rewards. These missions will range from answering questions in the forum, attending events or participating in weekly missions depending on your location and tastes. From discounts in local establishments to access to exclusive events such as parties, congresses..., there is something for everyone on our platform.`,

      `We are committed to making every activity meaningful and rewarding, giving you incentives to stay involved and contribute to the growth and success of our community.`,
    ],
  },
  {
    id: 2,
    img: students,
    title: 'We are here to help you',
    content: [
      `At eStudents we believe that university isn't just about studying; it's also about creating meaningful connections and building a strong, supportive community. Did you know that a group of friends at university usually stays together forever? Our platform is designed to facilitate connections between students both within and between universities, foster collaboration and create a sense of belonging throughout our community.`,

      `From online chats and conferences to study groups and social events, there are countless opportunities to meet new people, explore shared interests and form lasting friendships. We pride ourselves on being an inclusive and welcoming space where all students can feel welcome and valued.`,

      `Our goal is to create an environment where you can learn, grow and thrive, both academically and personally. Join our community today - together, we can achieve great things and create memories that will last a lifetime. In reality, the greatest reward we can offer you is the connection with your soul mate (although if you give me a few points I won't complain).`,
    ],
  },
  {
    id: 3,
    img: campus,
    title: 'Students around the globe!',
    content: [
      `At eStudents, we're here to be your companion on the college journey, and that includes both the academic and personal side! Our study and theme rooms are like your second home on campus, where you can hang out with your friends, ask questions about that algebra problem you don't understand (did someone say: "Rewards for studying"?) or just hang out with other students while you work on projects.`,
      `Speaking of projects, are you a young entrepreneur, do you have a business in the works, are you an artist...? Advertise here and look for collaborators, networking events or even the announcement of your next concert. Are you going to be the next superstar? Remember us when it happens please.
    Honestly, we know that university has its rough patches, so when you feel you need a little support, both teachers and verified psychologists will be here to listen and lend a hand. Because we know that university life can be a whirlwind, and we don't want you to miss a second of the fun!`,
      `And when you feel like you need a little support, our verified teachers and psychologists are here to listen and lend a hand. Because we know that university life can be a whirlwind, and we don't want you to miss a second of the fun!`,
    ],
  },
];
