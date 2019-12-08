import React from 'react';
import './App.css';
import AppRouter from './routes';
import { Provider } from 'react-redux';
import { store } from './store';

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          App in progress
          <AppRouter />
        </div>
      </Provider>
    )
  }
}
export default App;
