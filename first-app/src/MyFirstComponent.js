export default function MyFirstComponent() {
  const person = {
    name: "yarob",
    pernom: "ssa",
  };
  const stylep = {
    backgroundColor: "green",
    fontSize: "20px",
    boxShadow: "0px 10px black",
  };
  return (
    <div>
      <h1
        style={{
          backgroundColor: "blue",
          fontSize: "20px",
        }}
      >
        {SayHello()} hamid {person.name}
      </h1>
      <p style={stylep}>hhhhhhhhhh</p>
      <button onClick={al}>Clique</button>
    </div>
  );
}

function SayHello() {
  return "hello avec ";
}
function al() {
  alert("hello");
}
