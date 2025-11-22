import { BrowserRouter, Switch, Route } from "react-router-dom"
import StudentsPage from "./pages/StudentsPage"
import TodosPage from "./pages/TodosPage"
import NavigationComponent from "./components/NavigationComponent"
import SingleTodoPage from "./pages/SingleTodoPage"
const App = () => {
  return (
    <BrowserRouter>
    <NavigationComponent />
    <Switch>
      <Route path="/students">
      <StudentsPage />
      </Route>

      <Route path="/todos">
      <TodosPage />
      </Route>

      <Route path="/todo/:id/">
      <SingleTodoPage />
      </Route>
    </Switch>
    
    </BrowserRouter>
  )
}

export default App;