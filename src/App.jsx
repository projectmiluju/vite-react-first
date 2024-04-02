import Avatar from './components/Avatar'

export default function App() {

  const greet = 'Hello World';
  const footerMessage = 'Copyright 2024 by won';
  return (
    <>
      <h1>{greet}</h1>
      <hr />
      <Avatar/>
      <h3>{footerMessage}</h3>
    </>
  )
}