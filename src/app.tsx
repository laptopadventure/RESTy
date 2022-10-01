import { useState } from 'react';

import './App.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Form, { FormResult } from './components/Form/Form';
import Results from './components/Results/Results';

export type MockData = {
  count: number,
  results: FormResult[],
}

export type callApi = (requestParams: FormResult) => void;

export default function App() {

  const [data, setData] = useState<MockData | undefined>(undefined);
  const [requestParams, setRequestParams] = useState<FormResult | undefined>(undefined);

  const callApi = (requestParams: FormResult): void => {
    // mock output
    const data: MockData = {
      count: 2,
      results: [
        {name: 'fake thing 1', method:'GET', url: 'http://fakethings.com/1'},
        {name: 'fake thing 2', method:'GET', url: 'http://fakethings.com/2'},
      ],
    };
    setData(data);
    setRequestParams(requestParams);
  }

  return (
    <>
      <Header />
      <div>Request Method: {!!requestParams && requestParams.method}</div>
      <div>URL: {!!requestParams && requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </>
  );
}
