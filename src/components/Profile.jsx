import Avatar from "./Avatar";
import Card from "./Card";

export default function Profile(){
    const shoes = {
        imageUrl: 'https://media.istockphoto.com/id/942926448/ko/%EC%82%AC%EC%A7%84/%EB%B2%A0%EC%9D%B4%EC%A7%80%EC%83%89-%EB%B0%B0%EA%B2%BD-%EC%83%89%EA%B9%94%EB%90%9C-%EC%97%AC%EC%9E%90-%EC%8B%A0%EB%B0%9C-%EC%84%B8%ED%8A%B8.jpg?s=2048x2048&w=is&k=20&c=CNKBhYkLE73kHaszM7ETzkR2BnFLg4vQrhY2tcmqonE=',
        name: 'color',
    }
    const size = 90;
    return(
    <>
        <Card>
            <Avatar shoes={shoes} size={size}/>
        </Card>
        <Avatar shoes={shoes} size={size}/>    
        </>
    );
}