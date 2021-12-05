import { createSignal, onCleanup, onMount } from "solid-js";

function Count(props) {
  onMount(() => {
    console.log('Mounted Count');
  });
  onCleanup(() => {
    console.log('Unmounted Count');
  });
  return (
    <h1>Count: {props.children}</h1>
  );
}

export default function App() {
  const [count, setCount] = createSignal(0);

  function increment() {
    setCount((c) => c + 1);
  }

  function decrement() {
    setCount((c) => c - 1);
  }
  onMount(() => {
    console.log('Mounted App');
  });
  onCleanup(() => {
    console.log('Unmounted App');
  });

  return (
    <>
      <Count>{count()}</Count>
      <button onClick={increment}>
        Increment
      </button>
      <button onClick={decrement}>
        Decrement
      </button>
    </>
  );
}