import './Results.scss';

import { ResultsData } from '../../app';
import { FormResult } from '../Form/Form';

type ResultsProps = {
  loading: boolean
  params?: FormResult
  data: ResultsData
}

function Results(props: ResultsProps) {
  const {body} = props.data

  const {url, method} = props.params || {url: undefined, method: undefined};
  return (
    <div className="panel">
      <div className="panel-header">Results</div>
      <div className="panel-content">
        <div>
          <div>Request Method: {!!method && method}</div>
          <div>URL: {!!url && url}</div>
        </div>
        <div>
          <section>
            {props.loading ? (
              <div>Loading... (Or, a bad request!)</div>
            ) : body ? (
              <pre className="results" data-testid="results" >{body && JSON.stringify(body, undefined, 2)}</pre>
            ) : (
              <div>Waiting for a request...</div>
            )}
          </section>
        </div>
      </div>
    </div>
    
  );
}

export default Results;
