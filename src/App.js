import DynamicForm from "./Components/DynamicForm/DynamicForm";
import Introduction from "./Components/Introduction/Introduction";
import NavBarForm from "./Components/NavBar/NavBarForm";
import Services from "./Components/Services/Services";




function App() {
  return (
    <div >
      <NavBarForm/>
      <Introduction/>
      <Services/>
      <DynamicForm/>
    </div>
  );
}

export default App;
