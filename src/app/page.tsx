import BirthdayCard from "@/components/BirthdayCard";
import CalendarWidget from "@/components/CalendarWidget";
import FriendSuggestions from "@/components/FriendSuggestions";
import NewsFeed from "@/components/NewsFeed";
import RenderWeatherIcon from "@/components/RenderWeatherIcon";
import SocialPostComponent from "@/components/SocialPostComponent";

export default function Home() {
	return (
		<div className='flex gap-[30px]'>
			<div className='w-[293px] flex flex-col gap-7'>
				<RenderWeatherIcon />
				<CalendarWidget />
			</div>
			<div className='w-[640px]'>
				<SocialPostComponent />
				<NewsFeed />
			</div>
			<div className='w-[293px] flex flex-col gap-7'>
				<BirthdayCard name="Jane Doe" profileImage="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=60&h=60&fit=crop&crop=face" />
				<FriendSuggestions />
			</div>
		</div>
	);
}
