// 이 파일은 글 상세 화면을 담당하는 컴포넌트 파일

import { useParams } from "react-router";
import { useEffect, useState } from "react";

function Detail() {
    // react-router가 갖고 있는 "id"라는 이름을 붙인 값을 꺼내와야 함
    // 사용자가 "10번 글을 보고 싶어" 10이라는 값은 URL 경로에서 react-router가 갖게 된 것
    // react-router가 "경로"에서 꺼내어 저장하고 있는 값은 useParams() 에서 구할 수 있음
    const { id } = useParams(); // useParams()는 이 컴포넌트를 띄울 때 react-router가 갖고 있는 { id: 값 }

    // URL은 무조건 string

    // 나 10번글 내용 받고 싶어 라고 백엔드에게 요청하고, 그 데이터를 가지고 화면을 출력

    // Home 컴포넌트에서는 "목록"을 다루는 컴포넌트였고   => 초기값도 [], 저장 후도 []
    // Detail 컴포넌트는 "글 상세"를 다루는 컴포넌트임

    // 글 하나에 대해서 백엔드가 보내는 객체 모양은
    // { userId: number, title: string, body: string, id: number }
    // 데이터가 도착되기 이전의 state 초기값은?
    // 변수의 모양을 잡을 때 '객체'라면 그 모양은 유지하고 있어야 함
    // post는 내가 임의로 객체를 만들어서 넣지 않고
    // 순수히 받아온 데이터만 들어가야 되는 state => 아직 데이터를 받지 않았다는 의미로 'null'
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(json => {
                setPost(json);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, []);

    if (loading) {
        return <div>본문을 불러오는 중입니다...</div>;
    }

    if (!post) {
        return <div>존재하지 않는 게시글입니다.</div>;
    }

    return (
        <div>
            <div>&larr; 목록으로 돌아가기</div>

            <article>
                <h1>{post.title}</h1>
                <div>
                    <span>게시물 번호 : {post.id}</span>
                    <span style={{ margin: "0 12px" }}>|</span>
                    <span>작성자 : {post.userId}</span>
                </div>
                <div>{post.body}</div>
            </article>
        </div>
    );
}

export default Detail;