// useEffects() is a powerful Hook used for functions
// It calls the function that you pass every time the component gets mounted
// Call me whenever an update has been triggered

// useEffects() -> no dependency array - run every time
// useEffects() -> value in dependency array - boolean check to run if true

// every time there is a change in the dependencies, then run the code

// Steps for useEffects:
  // Initial Load:
    // 1 Component Mounts
    // 2 Render
    // 3 Effects gets called and run
  
  // Change in our parent component:
    // 1 Component changes
    // 2 Re-render
    // 3 Effects gets called
    // 4 Check dependency array
    // 5 Has any value (state) in our effects' dependency array changed value.
    // 6.1 If yes, run the code
    // 6.2 If no, don't run the code

export default function CountLabel({ count, bold = false }) {
  useEffect(() => {
    console.log('CountLabel is mounted');
  }); // No dependency array => render everything in the component everytime
}

export default function CountLabel({ count, bold = false }) {
  useEffect(() => {
    console.log('CountLabel is mounted');
  }, []); // the [] is the dependencies array! This is empty. Run this code on initial render
          // No dependencies stated, so will never run again
}

export default function CountLabel({ count, bold = false }) {
  useEffect(() => {
    console.log('CountLabel count prop is changed');
  }, [count]); // [count] is the dependencies array and contains count. 
               // Whenever the code runs, if the count label has been updated, then we re-render
               // if so, run what is in the useEffects()
}





// Remember we said Hooks are like a Constructor. We also have something similar to a Destructor
// We store the value in a return that will run the next time we re-render

// Steps for useEffects with a return():
  // Initial Load:
    // 1 Component Mounts
    // 2 Render
    // 3 Effects gets called and run
    // 4 Store the Destructor in a variable
  
  // Change in our parent component:
    // 1 Component changes
    // 2 Re-render
    // 3 Effects gets called
    // 4 Check dependency array
    // 5 If Destructor has a stored output, then run (4 on initial load)
    // 6 Has any value (state) in our effects' dependency array changed value.
    // 7.1 If yes, run the code
    // 7.2 If no, don't run the code

export default function CountLabel({ count, bold = false }) {
  useEffect(() => {
    console.log(`CountLabel count prop is changed to value ${count}`);

    return () => { // Like our destructor; on our next re-render, we will call this!
      console.log(`CountLabel count prop is about to changed from value ${count}`);
    };
  }, [count]); // 
}