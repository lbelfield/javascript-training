// Parse -> Request -> DNS -> Protocol -> Server 
// -> Response (package of things) -> JSON deserialise 
// -> unparse -> Download HTML -> Head, Body -> Build sequence of operations
// ReST

// From Response onwards...
// Let me show you something in screen. 
// The browser analyses HTML:  
// HTML file is Download and Parsed, then convert into DOM.
// HTML becomes DOM. DOM is converted by browser
// The browser decides what to render 
// Document Object Model: a Tree
// DOM Node - DOM Tree (parents, siblings, children)

// Can build DOM Tree, but it is missing styling - just a bunch of text, then resolves 
// The browser analyses CSS:
// CSS file is downloaded and parsed, then converted into CSS OM
// CSS is a render blocking resource: bad because Flash of Unstyled Content (FOUC)
// Better to have a blank screen whilst CSS downloads and parses despite DOM already being built
// CSS file becomes CSS OM. CSS OM is converted by browser.
// Browser - CSS OM - CSS Object Model (Like DOM for CSS)
// Render element depending on CSS
// Paint something

// Scripts are a different thing. Script becomes blocking.
// Scripts are also a render blocking resource
// Browser doesn't render until scripts are done BECAUSE IT COULD CHANGE THE DOM.

// Since 2010, big shift:
// Moved from everything happens in Server to everything happens in the browser
// HTML and CSS already works.
// Need scripting for complex interactions
// Download, Parse, Execute
// <head> should be all resources that need to work - but blocks rendering, so we put no scripts here.
// <body> should be all content



<html>
    <head>
        <title>Page title</title>

        <meta />
        <meta />
        <meta />

        <!--
            This is render blocking, the browser does not render what's in the body
            until this file is downloaded and parsed. this is done here because of 
            Flash of Unstyled Content. We want the styling to appear on the screen
            to give a better UX.
        -->
        <link href="style.css" rel="stylesheet" />
    </head>
    <body>
        <h1>This is a page</h1>
        <p>Lore Ipsum</p>

        <!--
            This, as a script, is render blocking,
            and that's why we put it here, at the bottom. 
            UX can wait for complex interactions.
            Not as important as painting the screen 
        -->
        <script src="app.js"></script>
    </body>
</html>

