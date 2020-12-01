import ReactDOM from 'react-dom';
import Routes from './routes';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { withStore } from "./store/configureStore";

ReactDOM.render(
  withStore(Routes),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
