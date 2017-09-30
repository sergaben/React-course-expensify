import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/style.css';

const store = configureStore();

// addExpense -> water bill
store.dispatch(addExpense({description:'Water bill'}));
// addExpense -> gas bill
store.dispatch(addExpense({description:'Gas bill'}));
// setTextFilter -> bill
store.dispatch(setTextFilter('Water'));
// getVisibleExpenses -> print visibles ones to screen
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
console.log(visibleExpenses);

ReactDOM.render(<AppRouter/>,document.getElementById('app'));