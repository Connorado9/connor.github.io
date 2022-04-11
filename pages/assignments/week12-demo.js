
/* need to know when user clicks button */

// document.querySelector('button');
// too general, would apply to the first button

// document.querySelector('.new-quote button');
// classes are also general, what happens if we use that class later on

// document.querySelector('#js-new-quote');
// document.getElementById('js-new-quote');
// id is the most specific, so use it

// grab an html element
const quoteButton = document.querySelector('#js-new-quote');

// listen for something on that element
quoteButton.addEventListener('click', getQuote);
                          //looking for, what to happen

const endpoint = 'https://catfact.ninja/fact';
const dogpoint = 'https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1';
const dogpic = 'https://dog.ceo/dog-api/';
const dogfacts = 'https://dog-api.kinduff.com/api/facts?number=1'

/* now we need to do something */
async function getQuote() {
  console.log("quote button was clicked"); /* debug */
  try { /* tries something to see if there's an error */
    const response = await fetch(dogfacts);

    const json = await response.json(); // javascript object notiation (json is file format that is human and machine readable)
    if(!response.ok) {
      throw Error(response.statusText);
    }
    console.log(json);
    displayQuote(json.facts[0]); //json[0] for array
  } catch(err) { /* if there isnt, do something else instead */
    console.log(err);
    alert('Failed');
  }
}

function displayQuote(quote) {
  const quoteText = document.querySelector('#js-quote-text'); /* will make the id */
  quoteText.textContent = quote;                              /* have the text content of quote */
}
