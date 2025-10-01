// src/App.jsx
import ShoppingList from "./components/ShoppingList";
import ProductList from "./components/ProductList";
import MenuCategories from "./components/MenuCategories";
import BookList from "./components/BookList";
import AnimalFilter from "./components/AnimalFilter";
import StudentGroups from "./components/StudentGroups";
import "./App.css";
import MessageList from "./components/MEssageList";

function App() {
  return (
    <div className="app-container">
      <h1>React List Rendering Exercises</h1>

      <section className="exercise-section">
        <h2>Exercise 1: Shopping List</h2>
        <ShoppingList />
      </section>

      <section className="exercise-section">
        <h2>Exercise 2: Highlight Expensive Products</h2>
        <ProductList />
      </section>

      <section className="exercise-section">
        <h2>Exercise 3: Nested Categories</h2>
        <MenuCategories />
      </section>

      <section className="exercise-section">
        <h2>Exercise 4: Numbered List</h2>
        <BookList />
      </section>

      <section className="exercise-section">
        <h2>Exercise 5: Filter and Render</h2>
        <AnimalFilter />
      </section>

      <section className="exercise-section">
        <h2>Exercise 6: Group by Grade</h2>
        <StudentGroups />
      </section>

      <section className="exercise-section">
        <h2>Exercise 7: Conditional Rendering</h2>
        <MessageList />
      </section>
    </div>
  );
}

export default App;
