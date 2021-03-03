// React is used over vanilla JS 

// Why do we need a virtual DOM?

// Where do we not need vDOM? 
    // Myth
    // One change to the state - DOM Update - everything needs to be updated
    // If 1000 elements => Only one paint for both vDOM and DOM. vDOM isn't better for this
    // Janky - one by one changes, no difference

// Why React?
    // Complex state changes.
    // Because one state change doesn't only impact one element, ie doesn't work linearly, more complex.
    // One state change may have an impact on several elements sequentially (atomic).
    // Diffing in memory is very expensive.
    // This could result in multiple paints, which would give a janky experience.
 
// vDOM is a better data structure to solve problems that components have.
// Browser doesn't have this problem. 

// vDOM is: 
    // About performance in memory. 
    // Keeping state in sync whilst updates are happening
    // Only committed to your screen when all state changes have ended.
    // Diffing.

// Why is this important for Seniors/TLs to understand this when choosing a JS framework?
    // Never one size fits all.
    // React shouldn't be a default. It should be a choice given the scenario.
    // Vanilla JS, smaller libraries (jQuery) could be better in smaller apps