import React from "react";
const data = await new Promise((resolve) => {
  setTimeout(() => {
    resolve("Data");
  }, 3000);
});
export default function LazyComponents() {
  return <div>Lazy Components</div>;
}
