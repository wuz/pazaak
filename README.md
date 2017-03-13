Pazaak 
======
[![Coverage Status](https://coveralls.io/repos/github/ohmfox/pazaak/badge.svg)](https://coveralls.io/github/ohmfox/pazaak)

[![Build
Status](https://travis-ci.org/ohmfox/pazaak.svg?branch=master)](https://travis-ci.org/ohmfox/pazaak)


A functional observable library.

## Installation

`npm install pazaak`

## Usage

```
var pazaak = require('pazaak').pazaak;

// Create a new observable
function myObservable() {
 //Return a function that takes a function
 return pazaak(observer => {
   try {
      var handler = ({ pageX, pageY }) => {
         //Observe a change
         observer.next({ x: pageX, y: pageY });
      }
      //Listen to browser mouse moves
      document.addEventListener('mousemove', handler);

      // Call complete after 10 seconds
      setTimeout(() => {
         observer.complete();
         document.removeEventListener('mousemove', handler);
      }, 10000);

      // Returns a destroy function
      return () => {
         document.removeEventListener('mousemove', handler);
      };
   } catch (e) {
      //Handle any errors
      observer.error(e);
   }
 });
}

// Subscribe to the observable (subs has an unsubscribe method to stop listening)
const subs = myObservable().subscribe({
  next({x, y}) {
    console.log(x, y);
  },
  error(e) {
    console.log(e);
  },
  complete() {
    console.log('done');
  }
});

```

## Tests

More tests need written - see contributing section.

`npm test`

## Contributing

Be sure to test and lint.

`npm run lint`

