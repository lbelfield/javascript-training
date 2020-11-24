// The DOM (Document Object Model) is an object {} representation of the 
// HTML in a tree structure and can be manipulated.
// In 1 Browser.js, we see the HTML example
// The DOM representation of that HTML is below.
// Note: 
    // 1 it is in an object format
    // 2 it is in a tree structure
```
html {
    head {
        title
        meta
        meta
        meta
        link
    }

    body {
        h1 {
            "This is a page"
        }
        p {
            "Lore Ipsum"
        }
    }
}
```

// HTML parses into an object {} tree (DOM)
// DOM renders and can be manipulated via APIs or via Dev Tools (Elements tab)
// representation of HTML
// Elements of HTML become nodes in the DOM.

// codepen 
// iframe are sub documents (document within the main document)
// it has it's own separate DOM
// can select iframes within the console via a dropdown (next to clear)
// can grab the document in console - #document
document
// If we manipulate the DOM, we don't return a new HTML from the server
// , we use the api that manipulates the tree object and re-paints

// HTML in an object {} format, and a tree
// start with a tree. 
// Have a set of APIs to pick and choose things out of the tree, depending on what you want. 
// Can traverse, get specific p, get all children/siblings/parents etc
// don't return a new HTML from the server, we use the api and the manipulation, then re-render

// Two ways to manipulate the DOM (and trigger a re-render): 
    // 1 In the Dev Tools>Elements we can manipulate values, reshuffle, etc
    // 2 In the Dev Tools>Console we can manipulate via code using API

// querySelector is a command in the api, like WHERE to LINQ
const h1 = document.querySelector("h1");
typeof h1                     // is an object (as above)

// DOM is mutable, just use get;set; values
// JavaScript API in DOM adds it and it renders on page, despite not being in initial H1

// can't remove/add elements in DOM. Have to remove in the parent
// store the parent node first, so you can reuse it
// note children and parents because it's a tree
h1.parentNode 
h1.parentNode.removeChild(h1);
h1.parentNode.appendChild(h1);


// span
// create the element
// this creates it in memory

const span = document.createElement('SPAN')
span
span.parentNode
span.parentElement

// we assign a text value to the span
const spanText = document.createTextNode('Hello World')
span.appendChild(spanText)
span

// but this isn't added to the dom yet.
// so we need to add it
const parent = document.querySelector('div')
parent
parent.appendChild(span)

// Note how verbose this is... so much code to write little 


// .------------------------------.
// innerHTML is a getter and setter
span.innerHTML
parent.innerHTML
parent.innerHTML = 'Hello <strong>hi</strong>!'
// element is a proper element, eg <h1>
// node is any thing, eg #text
parent.childElementCount // 1

parent.childNodes // 3

// .------------------------------.
// DOM is incredibly quick
// It is batched
parent.innerHTML = 'Hello <strong>hi</strong>!'
// It will paint out the raw HTML (with elements). takes 0.1ms
// layout phase and painting happens in batches