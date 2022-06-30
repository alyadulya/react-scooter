const RoomAmenities = () => {
    return (
        <div className="room-amenities">
            <ul className="room-amenities__list">
                <li className={`room-amenities__item `}>
                    <img src="/images/room-wifi.svg" alt="Wifi" className="room-amenities__icon" />
                    <span className="room-amenities__title">Wi-Fi</span>
                </li>
                <li className={`room-amenities__item `}>
                    <img src="/images/room-breakfast.svg" alt="Breakfast" className="room-amenities__icon" />
                    <span className="room-amenities__title">Breakfast</span>
                </li>
                <li className={`room-amenities__item non-available`}>
                    <img src="/images/room-bar.svg" alt="Mini Bar" className="room-amenities__icon" />
                    <span className="room-amenities__title">Mini Bar</span>
                </li>
                <li className={`room-amenities__item non-available`}>
                    <img src="/images/room_service.svg" alt="Room Service" className="room-amenities__icon" />
                    <span className="room-amenities__title">Room Service</span>
                </li>
                <li className={`room-amenities__item `}>
                    <img
                        src="/images/room-breeze.svg"
                        alt="Air-Conditioner"
                        className="room-amenities__icon"
                    />
                    <span className="room-amenities__title">Air Conditioner</span>
                </li>
                <li className={`room-amenities__item non-available`}>
                    <img
                        src="/images/room-mountain-range.svg"
                        alt="Great-View"
                        className="room-amenities__icon"
                    />
                    <span className="room-amenities__title">Great View</span>
                </li>
                <li className={`room-amenities__item `}>
                    <img
                        src="/images/room-no-smoke-symbol.svg"
                        alt="Smoke-Free"
                        className="room-amenities__icon"
                    />
                    <span className="room-amenities__title">Smoke Free</span>
                </li>
                <li className={`room-amenities__item `}>
                    <img src="/images/room-dog.svg" alt="Pet Friendly" className="room-amenities__icon" />
                    <span className="room-amenities__title">Pet Friendly</span>
                </li>
                <li className={`room-amenities__item non-available`}>
                    <img
                        src="/images/room-crawling-baby-silhouette.svg"
                        alt="Child Friendly"
                        className="room-amenities__icon"
                    />
                    <span className="room-amenities__title">Child Friendly</span>
                </li>
            </ul>
        </div>
    )
}

export default RoomAmenities;