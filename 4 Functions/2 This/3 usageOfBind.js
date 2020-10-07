// usage of bind: 
// if we call an event listener, 
// then the this gets automatically and incorrectly set to the button
// we fix with Bind

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
