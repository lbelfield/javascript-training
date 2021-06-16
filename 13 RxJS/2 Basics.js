// chaining (Functional programming)

// lodash for events
  // tons of API functions, just check their website

// Reactive:
  // you declare that the mechanism exists. 
  // Therefore, after you've subscribed once, you don't need to redeclare it (it retriggers)
  // can change this without anyone ever knowing

// pub sub method


// Observables definition:
  // https://www.learnrxjs.io/learn-rxjs/concepts/rxjs-primer
  // An observable represents a stream, or source of data that can arrive over time. 
  // You can create an observable from nearly anything, but the most common use case in RxJS is from events. 
  // This can be anything from mouse moves, button clicks, input into a text field, or even route changes. 
  // The easiest way to create an observable is through the built in creation functions.

// Event Listeners vs Observables
  // can pipe Observables, but can't chain/pipe Event Listeners.
  // you would need to write some extra code if you want to chain an Event Listener.

// import the fromEvent operator
import { fromEvent } from 'rxjs';

// grab button reference
const button = document.getElementById('myButton');

// create an observable of button clicks
const myObservable = fromEvent(button, 'click');


// At this point we have an observable but it's not doing anything. 
// This is because observables do not activate a producer (like wiring up an event listener), 
// until there is a SUBSCRIBER

// stream of events
// three parts: observables, pipe operator (pipe the observables), subscribers (endpoint, not pipable)
