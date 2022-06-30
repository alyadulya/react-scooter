import BookingCard from "../../components/BookingCard";
import MosaicHeader from "../../components/MosaicHeader";
import RoomAmenities from "../../components/RoomAmenities";
import RoomInfo from "../../components/RoomInfo";

const DetailsPage = () => {
    // const

    return (
        <div className="container wrapper-l">
            <MosaicHeader />
            <main className="main">
                <div className="wrapper-m main__wrapper">
                    <section className="main_left">
                        <RoomInfo />
                        <RoomAmenities />
                    </section>
                    <section className="main_right">
                        <BookingCard />
                    </section>
                </div>
            </main>
        </div>
    )
}

export default DetailsPage;