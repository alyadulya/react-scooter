import { Link } from 'react-router-dom';

const RoomCard = () => {
    return (
        <div className="room-card">
            <div className="room-card__wrapper" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1551776235-dde6d482980b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80'), linear-gradient(to right, #e4e4e4, #f8f8f8)` }}>
                <Link
                    className="room-card__link"
                    to={{
                        pathname: `/room/1`,
                        state: { roomID: 1 },
                    }}
                >
                    <div className="room-card__content">
                        <h2 className="room-card__title">Single Room</h2>
                        <div className="room-card__prices">
                            <span className="room-card__price-l">
                                NT$1380 <span className="room-card__price-s">weekday</span>
                            </span>
                            <span className="room-card__price-s room-card__price-s--gray">
                                NT$1500 weekend
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default RoomCard;