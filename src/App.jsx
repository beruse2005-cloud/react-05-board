import { useState } from "react";

function App() {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true); // 로딩 과정인지 아닌지를 boolean으로 저장

    if (loading) {
        return <div>데이터를 로드 중입니다...</div>
    }

    return <></>;
}

export default App;