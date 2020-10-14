// https://www.taniarascia.com/this-bind-call-apply-javascript/

// call vs apply: 
// call requires the arguments to be passed in one-by-one 
// apply takes the arguments as an array

// call and apply vs bind
// bind permanently changes the original function
// call and apply is a one-off call to the original function


const book = {
  title: 'Brave New World',
  author: 'Aldous Huxley',
}

function summary() {
  console.log(`${this.title} was written by ${this.author}.`)
}

function longerSummary(genre, year) {
  console.log(
    `${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}.`,
  )
}

// 1
summary() // returns "undefined was written by undefined"

// 2 Call
summary.call(book); // returns "Brave New World was written by Aldous Huxley".

// 3 Call with params
longerSummary.call(book, 'dystopian', 1932) // genre = dystopian. year = 1932

// 4 Apply
summary.apply(book); // returns "Brave New World was written by Aldous Huxley".

// 5 Apply with params
// longerSummary.apply(book, 'dystopian', 1932); // errors
longerSummary.apply(book, ['dystopian', 1932]); // correct

// 6 Bind
const braveNewWorldSummary = summary.bind(book);
braveNewWorldSummary();

