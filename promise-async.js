const cookies = [{ name: 'Chocolate Cookies' }, { name: 'Macaron Cookies' }];
const newCookie = { name: 'Biscotti Cookies' };

// Progression 1: create a function to get all the cookies

// Progression 2: using setTimeout() - use 1000 units for time parameter
function getAllCookies() {
  setTimeout(() => {
    let result = '';
    cookies.forEach((cookie) => {
      result = result + `<li>${cookie.name}</li>`;
    });
    document.body.innerHTML = result;
  }, 1000);
}

//Progression 3: Create a function to creat cookies and create an object of Promise.

// Progression 4: adding two parameters and using setTimeout() - use 2000 units for time parameter

// Progression 5: handling errors and adding new cookie to the list
function createNewCookie(newCookie) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cookies.push(newCookie);

      let error = false;

      if ((error = false)) {
        reject('No cookies present.');
      } else {
        resolve();
      }
    }, 2000);
  });
}

// Progression 7: creating a new async function
async function gettingCookies() {
  await createNewCookie(newCookie);
  getAllCookies();
}
// calling the new async function
gettingCookies();
