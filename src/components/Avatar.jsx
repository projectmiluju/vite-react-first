export default function Avatar(props){
    return(
        <img
            className="avatar"
            src={props.shoes.imageUrl}
            alt={props.shoes.name}
            width={props.size}
            height={props.size}
        />
    );
}