// 이 파일은 글 상세 화면을 담당하는 컴포넌트 파일

import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import styles from "./Detail.module.css";

function Detail() {
    const { id } = useParams();

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
        return <div className={styles.loading}>본문을 불러오는 중입니다...</div>;
    }

    if (!post) {
        return <div className={styles.loading}>존재하지 않는 게시글입니다.</div>;
    }

    return (
        <div className={styles.container}>
            <Link to={"/"} className={styles.backLink}>&larr; 목록으로 돌아가기</Link>

            <article className={styles.article}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.meta}>
                    <span>게시물 번호 : {post.id}</span>
                    <span style={{ margin: "0 12px" }}>|</span>
                    <span>작성자 : {post.userId}</span>
                </div>
                <div className={styles.body}>{post.body}</div>
            </article>
        </div>
    );
}

export default Detail;
