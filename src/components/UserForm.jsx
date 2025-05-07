// import { useState } from "react";

// function Form({ person }) {
//   const [name, setName] = useState(person.name);
//   const [email, setEmail] = useState(person.email);
//   return (
//     <div className="flex flex-col items-center justify-center">
//       <p>
//         On child, Name is {name} and Email is {email}
//       </p>
//       <input
//         className="border-2 border-gray-300 rounded-md p-2"
//         type="text"
//         value={name}
//         placeholder="Name"
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         className="border-2 border-gray-300 rounded-md p-2"
//         type="email"
//         value={email}
//         placeholder="Email"
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <p>Name: {name}</p>
//       <p>Email: {email}</p>
//       <button
//         className="bg-white text-black px-4 py-2 rounded-md"
//         onClick={() => {
//           (name || email) &&
//             alert(`Your name is ${name} and your email is ${email}`);
//         }}
//       >
//         Submit
//       </button>
//     </div>
//   );
// }
// export default function UserForm() {
//   const [person, setPerson] = useState({ name: "A", email: "B" });

//   return (
//     <div>
//       <p className="text-2xl font-bold text-center">
//         On parent, Name is {person.name} and Email is {person.email}
//       </p>
//       <Form person={person} setPerson={setPerson} />
//     </div>
//   );
// }

import { useState } from "react";
function Form({ name, email, setName, setEmail, company, setCompany }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <input
        className="border-2 border-gray-300 rounded-md p-2"
        type="text"
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="border-2 border-gray-300 rounded-md p-2"
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border-2 border-gray-300 rounded-md p-2"
        type="text"
        value={company.name}
        placeholder="Company"
        onChange={(e) => setCompany({ ...company, name: e.target.value })}
      />
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Company: {company.name}</p>
      <p>Address: {company.address}</p>
      <button
        className="bg-white text-black px-4 py-2 rounded-md"
        onClick={() => {
          if (name && email) {
            alert(`Your name is ${name} and your email is ${email}`);
          } else {
            alert("Please enter a name and email");
          }
        }}
      >
        Submit
      </button>
    </div>
  );
}

function AnotherFunction({ list }) {
  return (
    <ul className="bg-white text-black flex flex-col items-center justify-center">
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function UserList({ list, setList }) {
  return (
    <div className="w-96 border-2 border-gray-300 rounded-md bg-white text-black flex flex-col items-center justify-center">
      <ul>
        {list.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-4 bg-gray-100 px-2 py-1 rounded-md "
          >
            <span className="text-2xl font-bold px-2">{item}</span>
            <button
              className="bg-gray-300 border-gray-300 rounded-md px-4 py-2"
              onClick={() => setList((prev) => prev.filter((x) => x !== item))}
            >
              Delete User
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState({
    name: "Google",
    address: "123 Main St",
  });
  const [list, setList] = useState(["Apple", "Google", "Microsoft"]);
  return (
    <div>
      <Form {...{ name, email, setName, setEmail, company, setCompany }} />
      <div className="flex items-center justify-center">
        <UserList {...{ list, setList }} />
      </div>
      <AnotherFunction {...{ list }} />
    </div>
  );
}
