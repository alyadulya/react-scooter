const RoomPrice = () => {
    return (
        <div className="booking-card__prices">
            <div className="booking-card__price-item">
                <span className="booking-card__price-title">Mon-Thu per hour</span>
                <span className="booking-card__price-per-night">
                    Rp 20.000
                </span>
            </div>
            <div className="booking-card__price-item">
                <span className="booking-card__price-title">Fri-Sun per hour</span>
                <span className="booking-card__price-per-night">
                    Rp 30.000
                </span>
            </div>
        </div>
    )
}

export default RoomPrice;