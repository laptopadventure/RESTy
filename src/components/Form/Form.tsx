import React, { useState } from 'react';

import './Form.scss';
import { callApi } from '../../app';

export type FormResult = {
  name: string,
  method: string,
  url: string,
  data?: string,
}

export default function Form({handleApiCall}: {handleApiCall: callApi}) {

  const [data, setData] = useState('')
  const [url, setUrl] = useState('')
  const [method, setMethod] = useState('GET')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!url) {
      return //bad request
    }
    const formData: FormResult = {
      name: "Temp",
      method: method,
      url: url,
      data: data,
      // url: 'https://pokeapi.co/api/v2/pokemon',
    };
    handleApiCall(formData);
  }

  const isSelected = (buttonMethod: string) => {
    if(buttonMethod === method) {
      return 'form-selected'
    }
    return ''
  }

  return (
    <div className="panel">
      <div className="panel-header">API Call</div>
      <div className="panel-content">
        <form data-testid="form" onSubmit={handleSubmit}>
          <label className="input">
            <span>URL: </span>
            <input data-testid="form-input" onChange={(e) => setUrl(e.currentTarget.value)} name='url' type='text' />
            <button className="form-submit" type="submit">GO!</button>
          </label>
          <label className="methods">
            <div className={isSelected("GET")} onClick={() => setMethod("GET")} id="get">GET</div>
            <div className={isSelected("POST")} onClick={() => setMethod("POST")} id="post">POST</div>
            <div className={isSelected("PUT")} onClick={() => setMethod("PUT")} id="put">PUT</div>
            <div className={isSelected("DELETE")} onClick={() => setMethod("DELETE")} id="delete">DELETE</div>
          </label>
          <div className="panel-header">Payload</div>
          <label>
            <textarea onChange={(e) => setData(e.currentTarget.value)} className="obj-area" name="objectsubmit" id="obj" cols={32} rows={20}></textarea>
          </label>
        </form>
      </div>
    </div>
  );
}
 