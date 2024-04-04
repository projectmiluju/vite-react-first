export default function Item({ name, isPacked }){

    // if (isPacked){
    //     return (
    //      <li>{name}</li>
    //     );
    // } else {
    //     return (
    //         <li>{name} none</li>
    //     )
    // }

    // 삼항연산자 사용
    return (
        <li>
            {isPacked ? name + '!': name}
        </li>
    )
}