import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./routes/Home.jsx";
import Detail from "./routes/Detail.jsx";

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
                {/*
                     경로가 /3, /8, /25 같은 첫번째 자리에 값이 들어올 경우
                     Detail 컴포넌트를 화면에 띄워줘야 되는 상황
                     => 첫번째 자리가 고정 값이 "/about" 아니라
                         "/동적으로 변하는값"이 옴
                 */}
                <Route path={"/:id"} element={<Detail />} />
                {/*
                     내가 원하는건 경로의 첫번째 자리에 어떤 값이든 들어오면,
                     Detail이라는 컴포넌트를 화면에 띄워줄거야
                     근데, 그렇게 하면서 그 들어온 값은 react-router
                     니가 "id"라는 이름을 붙여서 갖고 있어줘
                 */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
