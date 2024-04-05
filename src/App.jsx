import BasicButton from "./components/BasicButton";

export default function App() {
  
  // function buttonCliked() {
  //   alert("hi");
  // }

  const buttonCliked = () => {
    arlert("hi");
  }
  
  return (
    <>
      <BasicButton onClick={buttonCliked}>클릭해주세요</BasicButton>

      <hr/>

      <div className="Toolbar" onClick={() => alert('you clicked on the toolbar')}>
        <button onClick={e => {
            e.stopPropagation();
            alert('Playing!')
          }}>Play Movie</button>
        <button onClick={e => {
            e.stopPropagation()
            alert('Uploading!')
          }}>Uploading Image</button>
      </div>
    </>
  );
}