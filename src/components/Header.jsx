import Menu from "./Menu";
import Costom from "./Costom";
export default function Header({
  loop,
  random = Math.random(),
  isActive = true,
}) {
  return (
    <header className="bg-neutral-900 text-white">
      {/* <h1>
        The {loop} th Random number: {random}
        {isActive && <p>Active</p>}
        <Menu {...{ loop }} />
      </h1> */}
      <Costom>
        <Costom>
          <p>Hello 2</p>
        </Costom>
      </Costom>
    </header>
  );
}
