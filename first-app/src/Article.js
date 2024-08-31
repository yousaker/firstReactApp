export default function Article({ person, email, age }) {
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          boxShadow: "0px 10px 10px gray",
          color: "black",
          margin: "10px",
        }}
      >
        <h1>{person}</h1>
        <h3>{email}</h3>
        <h3>{age}</h3>
        <hr></hr>
        <p>,knbhvgcf hvgcf v dhgdh kjhg </p>
      </div>
    </>
  );
}
