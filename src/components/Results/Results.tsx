import './Results.scss';

import { MockData } from '../../App';

type ResultsProps = {
  data?: MockData
}

function Results({data}: ResultsProps) {
  return (
    <section>
      <pre>{data ? JSON.stringify(data, undefined, 2) : undefined}</pre>
    </section>
  );
}

export default Results;
