import { useState } from 'react';

const ShortCircuitOverview = () => {

  const [val1, setVal1] = useState('')
  const [val2, setVal2] = useState('john')

  return <div>
            <h2>short circuit overview</h2>
            <h4>Falsy OR: {val1 || 'hello world'}</h4>
            <h4>Truthy OR: {val2 || 'hello world'}</h4>
            <h4>Falsy AND: {val1 && 'hello world'}</h4>
            <h4>Truthy AND: {val2 && 'hello world'}</h4>
           </div>;
};
export default ShortCircuitOverview;
