import React, { useCallback, useState } from 'react';

const Count = React.memo(function({count, handleClick}) {
  console.log(count);
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handleClick}>Add</button>
    </div>
  );
})

function App() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(
    () => {
      setCount(count+1);
    },
    [count],
  );
  // const propCount = useMemo(() => (count), [count])
  const [wrapperCount, setWrapperCount] = useState(0);
  const wrapperClick = () => {
    setWrapperCount(wrapperCount + 1);
  }
  return (<>
    <h1>{wrapperCount}</h1>
    <button onClick={wrapperClick}>Wrapper Add</button>
    <Count count={count} handleClick={handleClick}/>
  </>)
}

export default App;
