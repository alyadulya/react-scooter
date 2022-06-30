const BookingForm = () => {
    return (
        <div className="boooking-card__form">
            <form action="" className="form">
                <div className="form__field">
                    <label htmlFor="guestname" className="form__label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form_input"
                        name="guestname"
                    />
                </div>
                <div className="form__field">
                    <label htmlFor="guestname" className="form__label">
                        Tel
                    </label>
                    <input
                        type="text"
                        className="form__input"
                        name="tel"
                    />
                </div>
                <div className="form__field">
                    <label htmlFor="guestname" className="form__label">
                        Dates
                    </label>
                    <div className="form__dates-wrapper"></div>
                    <div className="form__button-wrapper">
                        <button className="form__submit-btn">
                            Reserve
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default BookingForm;