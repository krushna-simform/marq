import OtDropdown from "./components/Dropdown";

function App() {
  return (
    <OtDropdown
      label="Options"
      items={[{ label: "Item 1" }, { label: "Item 2" }]}
    />
  );
}

export default App;
