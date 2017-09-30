import { createStore,combineReducers } from 'redux';
import uuid from 'uuid';



//timestamps (miliseconds)
// Januray 1st 1978 (unix epoch)
// 33400, 10, -203




store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description:'Rent',amount:100,createdAt:-21000}));
const expenseTwo = store.dispatch(addExpense({description:'Coffee',amount:300,createdAt:-1000}));

// store.dispatch(removeExpense({id:expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id,{ amount:200 }));

//store.dispatch(setTextFilter('ffe'));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

//store.dispatch(setStartDate(252));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));
//console.log(expenseOne);

const demoState = {
    expenses:[
        {
            id:'afsdafasdf',
            description:'January rent',
            note:'This was the final payment fot that address',
            amount:54500,
            createdAt:0
        }],
    filters:{
        text:'rent',
        sortBy:'amount', //date or amount
        startDate:undefined,
        endDate:undefined
    }
};
