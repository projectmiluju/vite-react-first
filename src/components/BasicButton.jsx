export default function BasicButton({onClick, children}) {
    return(
        <button onClick={onClick}>{children}</button>
    );
}