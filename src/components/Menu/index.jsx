export default function Menu({ changeBgColor }) {
  return (
    <header className="bg-green-500">
      <div>Menu for App.jsx</div>
      <button onClick={changeBgColor}>Change color</button>
    </header>
  );
}
