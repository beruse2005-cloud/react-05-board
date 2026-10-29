// 이 파일은 게시판 목록 화면을 담당하는 컴포넌트 파일

import { useEffect, useState } from "react";

function Home() {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true); // 로딩 과정인지 아닌지를 boolean으로 저장

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(json => {
                setList(json);
                setLoading(false); // 데이터를 불러오는 작업이 다 끝난다는 의미로 loading을 false
            })
            .catch(err => console.log(err));
    }, []);

    if (loading) {
        return <div>데이터를 로드 중입니다...</div>;
    }

    // useEffect를 통해서 최초 렌더링 이후에 useEffect 안의 함수를 실행하는데,
    // 정상적으로 모든 작업이 끝났을 때 setLoading(false)를 통해 loading 값이 바뀌고
    // state 값이 바뀌었으므로 그 때 이 아래에 있는 return이 화면에 리렌더링 됨

    return (
        <div>
            <h1>커뮤니티 게시판</h1>
            <table border={1} cellPadding={10} style={{ borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자 ID</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.userId}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Home;