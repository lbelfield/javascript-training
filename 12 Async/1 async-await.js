// async-await is syntactical sugar around promises.
// promise, then = await

// Promises are schedulers
// When you have a promise, you're not blocking the thread, 
// you're scheduling something to run when the promise gets resolved
// in the meanwhile, the main thread is not blocked 
// Think about the wording; promise me you'll run x after y

// This makes sense because JavaScript is single-threaded
// Gets split into two parts; before await and after await
// before await can be resolved, but after the await needs to finish before it continues

// (very detailed)
// Timers are very similar to Promises
// task vs micro-task
// needed if race-conditions debugging
// promises are about micro-tasks
// timers are entirely new tasks

// Event Loop, V8