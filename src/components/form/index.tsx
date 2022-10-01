import React from 'react';

import './form.scss';
import { callApi } from '../../app';

export type FormResult = {
  name: string,
  method: string,
  url: string,
}

export default function Form({handleApiCall}: {handleApiCall: callApi}) {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: FormResult = {
      name: "pokemon call",
      method:'GET',
      url: 'https://pokeapi.co/api/v2/pokemon',
    };
    handleApiCall(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label >
        <span>URL: </span>
        <input name='url' type='text' />
        <button type="submit">GO!</button>
      </label>
      <label className="methods">
        <span id="get">GET</span>
        <span id="post">POST</span>
        <span id="put">PUT</span>
        <span id="delete">DELETE</span>
      </label>
    </form>
  );
}
 