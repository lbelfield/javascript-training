// 1

// Three things: 
// - Event (action)
// - Listeners (subscribe to an event)
// - Event System (thing that links the two)


// Events-Listeners relationship = one-to-many
// Ask the event system to subscribe to the event

// Event System dispatches to the listener (invokes + pass data) 
// listeners don't get just invoked. They get any data related to the event
// Listeners receive those properties... the whole event payload

// Event - Mouse Move
// Listener - Thing subscribed to event
// Event System - dispatches event to listener
// Eg: Mouse move happened and this is the data that is carried to the listener
{
  x: 0,
  y: 0
}