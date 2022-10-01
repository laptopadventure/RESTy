import ReactDOM from 'react-dom';

import App from './App';

function Main() {
  return <App />;
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
