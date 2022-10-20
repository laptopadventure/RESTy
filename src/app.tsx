import { useState } from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Form, { FormResult } from './components/Form/Form';
import Results from './components/Results/Results';

export type callApi = (requestParams: FormResult) => void;

export type ResultsData = {
  header: any
  body: any
}

export default function App() {

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<ResultsData | undefined>(undefined);
  const [requestParams, setRequestParams] = useState<FormResult | undefined>(undefined);

  const callApi = async (req: FormResult) => {

    setLoading(true);

    try {

      
      const options: RequestInit = {
        method: req.method,
      }
      if(req.method !== 'GET') {
        options.body = JSON.stringify(req.data)
      }

      let fetched = await fetch(req.url, options);
      
      let res
      //we can't .json() html
      if(fetched.headers.get("content-type")?.includes("html")) {
        res = fetched.status;
      } else {
        res = await fetched.json();
      }
  
      setData({
        header: fetched.headers,
        body: res,
      });
      setRequestParams(req);
    } catch (error) {
      if(error instanceof Error) {
        setData({
          header: {},
          body: error.message,
        });
      }
    }
    setLoading(false);
  }

  const propData = data ?? {header: undefined, body: undefined}

  return (
    <>
      <Header />
      <div style={{
          display:'flex',
          justifyContent: 'space-evenly'
        }}
        className="main" >
        <Results loading={loading} params={requestParams} data={propData} />
        <Form handleApiCall={callApi} />
      </div>
      <Footer />
    </>
  );
}
