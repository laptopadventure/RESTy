import './results.scss';

import { MockData } from '../../app';

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
