export default function Avatar({shoes, size=(200)}){
    return(
        <img
            className="avatar"
            src={shoes.imageUrl}
            alt={shoes.name}
            width={size}
            height={size}
        />
    );
}