// Note: vanilla JS

// usage of bind: 
// if we call an event listener, 
// then the this gets automatically and incorrectly set to the button
// we fix with Bind

document.getElementById("app").innerHTML = `
<button>Hello Vanilla!</button>
<div class="loading">
  Push My Button
</div>
`;

class MyComponent {
  constructor() {
    this.button = document.querySelector("button");
    this.loading = document.querySelector("div.loading");
    console.log("hello");

    // WHAT WE DON'T WANT!!! Callback this.onButtonClick means this = button
    // because this.button is at the front of line 10.
    // this.button.addEventListener("click", this.onButtonClick);

    // WHAT WE DO WANT!!! Callback this.onButtonClick means this = classMyComponent
    // because we are passing it in via the bind()
    this.button.addEventListener("click", this.onButtonClick.bind(this));
  }

  onButtonClick(event) {
    this.button.disabled = true;
    this.loading.innerHTML = "loading...";

    setTimeout(
      function () { // function ()
        this.button.disabled = false;
        this.loading.innerHTML = "You pushed my button";
        console.log("anonymous function");
      }.bind(this), // have to bind again because the 'this' reference is lost as the new function has it's own context
      3000
    );

    setTimeout(
      () => { // arrow function
        this.button.disabled = false;
        this.loading.innerHTML = "You pushed my button";
        console.log("arrow function");
      }, // if we use an arrow function, we don't need to bind with 'this'. It's not only a shortcut for not writing function(), but also keeps the context
      3000
    );
  }
}

const comp1 = new MyComponent();










class MyComponent {
  constructor() {
    this.button = document.querySelector('button');
    this.loading = document.querySelector('div.loading');

    // WHAT WE DON'T WANT!!! Callback this.onButtonClick means this = button 
    // because this.button is at the front of line 10.
    this.button.addEventListener('click', this.onButtonClick);

    // WHAT WE DO WANT!!! Callback this.onButtonClick means this = classMyComponent
    // because we are passing it in via the bind() 
    this.button.addEventListener('click', this.onButtonClick.bind(this));
  }
  
  onButtonClick(event) {
      this.button.disabled = true;
      this.loading.style.display = 'block';

      fetchData().then((data) => {
          // do something with data
          
          this.button.disabled = false;
          this.loading.style.display = 'none';
      })
  }
}

const comp1 = new MyComponent()
