import BookingForm from "./BookingForm";
import RoomPrice from "./RoomPrice"

const BookingCard = () => {
    return (
        <div className="booking-card">
            <div className="booking-card__wrapper">
                <RoomPrice />
                <BookingForm />
            </div>
        </div>
    )
}

export default BookingCard;