import React, { useState } from 'react'

import NewExpense from './components/NewExpense/NewExpense'
import Expenses from './components/Expenses/Expenses'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )
}

export default App

// alternate return using the React object, but it's harder to read and ore cumbersome to write
// do not need to import React anymore in all of your component files which use JSX like before
// also this is why we always need a wrapper because when we use createElement you can only add children to append to it and not use createElement to make 2 of the same elements side by side

// return React.createElement(
//   'div',
//   {},
//   React.createElement('h2', {}, "Let's get started!"),
//   React.createElement(Expenses, { items: expenses })
// )
