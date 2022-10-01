import React from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form, {FormResult} from './components/form';
import Results from './components/results';

export type MockData = {
  count: number,
  results: FormResult[],
}

export type callApi = (requestParams: FormResult) => void;

class App extends React.Component {
  state: {
    data?: MockData,
    requestParams?: FormResult,
  }

  constructor(props: {}) {
    super(props);
    this.state = {
      data: undefined,
      requestParams: undefined,
    };
  }

  callApi = (requestParams: FormResult): void => {
    // mock output
    const data: MockData = {
      count: 2,
      results: [
        {name: 'fake thing 1', method:'GET', url: 'http://fakethings.com/1'},
        {name: 'fake thing 2', method:'GET', url: 'http://fakethings.com/2'},
      ],
    };
    this.setState({data, requestParams});
  }

  render() {
    const { requestParams } = this.state
    return (
      <React.Fragment>
        <Header />
        <div>Request Method: {!!requestParams && requestParams.method}</div>
        <div>URL: {!!requestParams && requestParams.url}</div>
        <Form handleApiCall={this.callApi} />
        <Results data={this.state.data} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
