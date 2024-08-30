export default function MyFirstComponent() {
  const person = {
    name: "yarob",
    pernom: "ssa",
  };
  return (
    <div>
      <h1>
        {SayHello()} hamid {person.name}
      </h1>
      <p>hhhhhhhhhh</p>
    </div>
  );
}

function SayHello() {
  return "hello avec ";
}
