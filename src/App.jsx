import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./routes/Home.jsx";

function App() {
    return (
        <BrowserRouter>
            {/*
                  App이 실행이 되면서, 최상단의 BrowserRouter가 실행됨에 따라
                  사용자가 요청한 경로가 React와 동기화됨 (사용자가 요청한 경로를 React가 읽어들임)
             */}
            <Routes>
                {/* React가 읽어들인 "/" 경로에 따라 Routes는 저 쪽으로 가라고 지시함 */}
                <Route path={"/"} element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
