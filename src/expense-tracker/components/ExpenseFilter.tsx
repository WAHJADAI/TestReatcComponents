import React from "react";
interface Props{
    onSelectCategory :(category :string)=>void
}
const ExpenseFilter = ({onSelectCategory}:Props) => {

  return (
    <select className="form-select" onChange={(e)=>onSelectCategory(e.target.value)}>
      <option value="">All category</option>
      <option value="Groceries">Groceries</option>
      <option value="Uyilities">Uyilities</option>
      <option value="Entertainment">Entertainment</option>
    </select>
  );
};

export default ExpenseFilter;
