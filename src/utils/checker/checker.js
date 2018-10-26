import Modernizr from 'modernizr';

export const checker = () => new Promise((resolve, reject) => {
  if (!Modernizr.getusermedia) {
    /* INFO: Check for access */
    reject(
      new Error('Your browser doesn\'t support getUserMedia (according to Modernizr).'),
    );
  }
  if (!Modernizr.webworkers) {
    /* INFO: web workers, typed arrays and file API are required by gif.js */
    reject(
      new Error('Your browser doesn\'t support web workers (according to Modernizr).'),
    );
  }
  if (!Modernizr.filereader) {
    reject(
      new Error('Your browser doesn\'t support File API (according to Modernizr).'),
    );
  }
  if (!Modernizr.typedarrays) {
    reject(
      new Error('Your browser doesn\'t support typed arrays (according to Modernizr).'),
    );
  }

  resolve();
});
