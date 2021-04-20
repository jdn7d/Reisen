import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './Components/App'
import {createStore, applyMiddleware} from 'redux'
import reducer from "./redux/reducer"
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'


//provider allows us to provide our store and redux all of it's child comp

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

