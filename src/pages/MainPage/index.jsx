import HeroHeader from '../../components/HeroHeader';
import RoomCard from '../../components/RoomCard';

const MainPage = () => {
    return (
        <div className="container wrapper-l">
            <HeroHeader />
            <div className="room-cards">
                <div className="room-cards__list wrapper-m">
                    <RoomCard />
                </div>
            </div>
        </div>
    )
}

export default MainPage;