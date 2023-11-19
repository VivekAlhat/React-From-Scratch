import React from "../core/React";

const CustomGreeting = () => {
  const [name, setName, subscribe] = React.useState("");

  subscribe(() => <CustomGreeting />, document.getElementById("root"));

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(`Hello ${name}`);
  };

  return (
    <div className="box">
      <h3>Form example</h3>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          placeholder="Enter your name"
          onchange={(e) => setName(e.target.value)}
          autocomplete={false}
        />
        <div style={{ display: "flex", gap: "4px" }}>
          <button style={{ width: "100%" }} type="submit">
            Click me
          </button>
          <button style={{ width: "100%" }} type="button">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomGreeting;
