import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Form from "./components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/categories";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "vvv", amount: 10, category: "Utilities" },
    { id: 4, description: "ccc", amount: 10, category: "Utilities" },
  ]);
  const [selectCategory, setSelectCategory] = useState("");

  let items = ["Photcharadanai", "me", "love", "black cat"];
  const name = "Draf";
  const visibleExpenses = selectCategory
    ? expenses.filter((e) => e.category === selectCategory)
    : expenses;
  const handleSelectedItem = (item: string) => console.log(item);
  return (
    <div className="App">
      <ListGroup
        items={items}
        heading={name}
        onSelectrdItem={handleSelectedItem}
      />
      <Message />

      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>Hello world</Alert>
      )}
      <Button
        onClick={() => {
          setAlertVisible(true);
        }}
      >
        My
      </Button>
      <Button
        colour="secondary"
        onClick={() => {
          setAlertVisible(true);
        }}
      >
        D
      </Button>

      <div>
        <h1>Form</h1>
        <Form />
      </div>
      <div>
        <h1>Expense</h1>
        <div className="mb-5">
          <ExpenseForm onSubmit={expense=>setExpenses([...expenses,{...expense,id:expenses.length+1}])} />
        </div>
        <div className="mb-3">
          <ExpenseFilter
            onSelectCategory={(category) => setSelectCategory(category)}
          />
          <ExpenseList
            expenses={visibleExpenses}
            onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
