import React from "react";

import { BrowserRouter as Router, Route} from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { CreateUser } from "./components/CreateUser";
import { CreateExercise } from "./components/CreateExercise";
import { EditExercise } from "./components/EditExercise";
import { ExercisesList } from "./components/ExercisesList";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <section className="section">
        <div className="container">
          <NavBar />
          <br />
            <Route path="/" exact component={ExercisesList} />
            <Route path="/edit/:id" component={EditExercise} />
            <Route path="/create" component={CreateExercise} />
            <Route path="/user" component={CreateUser} />
          <br />
          <br />
          <Footer />
        </div>
      </section>
    </Router>
  );
}
export default App;
