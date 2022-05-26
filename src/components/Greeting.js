import React, {useState} from 'react';
import Output from './Output';

const Greeting = () => {
    const [changed, setChanged] = useState(false);

    function changedHandler() {
        setChanged(true);
    }

  return (
    <Output>
        <h1>hello world!</h1>
        {changed && <p>Changed!</p>}
        {!changed && <p>happy to see you</p>}
        <button onClick={changedHandler}>Change</button>
    </Output>
  )
}

export default Greeting