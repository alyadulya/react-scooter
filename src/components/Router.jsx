import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsPage from "../pages/DetailsPage";
import MainPage from "../pages/MainPage";

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/room/:roomId" element={<DetailsPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router;