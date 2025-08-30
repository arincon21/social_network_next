import WeatherComponent from '@/components/RenderWeatherIcon';
import SocialPostComponent from '@/components/SocialPostComponent';
import BirthdayCard from '@/components/BirthdayCard';
import NewsFeed from '@/components/NewsFeed';

export default function Home() {
  return (
    <div className='flex gap-[30px]'>
		<div className='w-[293px]'>
			<WeatherComponent/>	
		</div>
		<div className='w-[640px]'>
			<SocialPostComponent/>
			<NewsFeed/>
		</div>
		<div className='w-[293px]'>
			<BirthdayCard name="Jane Doe" profileImage="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=60&h=60&fit=crop&crop=face"/>
		</div>
	</div>
  );
}
