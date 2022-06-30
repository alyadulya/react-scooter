import LineBreak from "../LineBreak"

const RoomInfo = () => {
    return (
        <div className="room-info">
            <h2 className="room-info__title">Single Room</h2>
            <ul className="room-info__intro-list">
                <li className="room-info__intro-item">
                    Max number of guests: 1 - 1
                </li>
                <li className="room-info__intro-item">Room size: 18 m²</li>
                <li className="room-info__intro-item">Bed size: Single</li>
                <li className="room-info__intro-item">Private bath: 1</li>
            </ul>
            <p className="room-info__description">
                Single Room is only reserved for one guest. There is a bedroom with a single size bed and a private bathroom. Everything you need prepared for you: sheets and blankets, towels, soap and shampoo, hairdryer are provided. In the room there is AC and of course WiFi.    
            </p>
            <LineBreak location="room-info" />
            <div className="room-info__checks">
                <div className="room-info__check">
                    <span className="room-info__check-title">Check in</span>
                    <span className="room-info__check-time">15:00 - 19:00</span>
                </div>
                <div className="room-info__check">
                    <span className="room-info__check-title">Check out</span>
                    <span className="room-info__check-time">10:00</span>
                </div>
            </div>
        </div>
    )
}

export default RoomInfo;