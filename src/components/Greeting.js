import React, {useState} from 'react'

const Greeting = () => {
    const [changed, setChanged] = useState(false);

    function changedHandler() {
        setChanged(true);
    }

  return (
    <div>
        <h1>hello world!</h1>
        {changed && <p>Changed!</p>}
        {!changed && <p>happy to see you</p>}
        <button onClick={changedHandler}>Change</button>
    </div>
  )
}

export default Greeting