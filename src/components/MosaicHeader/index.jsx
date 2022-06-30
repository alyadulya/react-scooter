import { Link } from "react-router-dom"

const MosaicHeader = () => {
    return (
        <>
            <header className="mosaic-header">
                <div className="mosaic-header__logo">
                    <Link to="/" className="mosaic-header__logo-link">
                        <img src="/images/hero-logo_block.svg" alt="WhiteSpace Logo" className="mosaic-header__logo-img" />
                    </Link>
                </div>
                <div className="mosaic-header__items">
                    <div className="mosaic-header__item mosaic-header__item--1">
                        <img src="https://images.unsplash.com/photo-1551776235-dde6d482980b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80" alt="Single Room" className="mosaic-header__img" />
                    </div>
                    <div className="mosaic-header__item mosaic-header__item--2">
                        <img src="https://images.unsplash.com/photo-1526880792616-4217886b9dc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Single Room" className="mosaic-header__img" />
                    </div>
                    <div className="mosaic-header__item mosaic-header__item--3">
                        <img src="https://images.unsplash.com/photo-1515511856280-7b23f68d2996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80" alt="Single Room" className="mosaic-header__img" />
                    </div>
                </div>
            </header>
        </>
    )
}

export default MosaicHeader;