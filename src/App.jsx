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
    </>
  );
}