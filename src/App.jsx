import BasicButton from "./components/BasicButton";
import UseRefHookDemo from "./components/UseRefHookDemo";

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
        <BasicButton onClick={() => alert('Playing!')}>Play Movie</BasicButton>
        <BasicButton onClick={() => alert('Uploading!')}>Uploading Image</BasicButton>
      </div>
      
      <hr/>
      <UseRefHookDemo></UseRefHookDemo>
    </>
  );
}