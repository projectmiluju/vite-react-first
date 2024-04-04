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
    // return (
    //     <li>
    //         {isPacked ? name + '!': name}
    //     </li>
    // )

    // 논리 연산자
    return (
        <li>
            {name} { isPacked && '✔'}
        </li>
    )
}