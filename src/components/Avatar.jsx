import './Avatar.css'

export default function Avatar() {

    const imgSrc = 'https://media.istockphoto.com/id/1465760540/ko/%EC%82%AC%EC%A7%84/%EC%95%84%EC%B9%A8-%ED%96%87%EC%82%B4%EC%9D%B4-%EB%B9%84%EC%B9%98%EB%8A%94-%EC%8B%A0%EC%84%A0%ED%95%9C-%EC%8B%9D%EB%AC%BC-%ED%96%89%EB%B3%B5%ED%95%9C-%EB%82%98%EC%9D%98-%EC%A7%91.jpg?s=2048x2048&w=is&k=20&c=Xn3DexQVp5YcxqYlYYII14EX5tP6WOnhb-EzYkwKRNQ=';
    return(
        <img
            src={imgSrc}
            alt="Gregorio Y. zara"
            className="avatar"
        />
    );
}