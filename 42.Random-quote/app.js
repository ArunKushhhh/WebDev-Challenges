//quoteBtn
const generateQuoteBtn = document.getElementById("quote-btn");

//quoteOutput
const quoteOutput = document.getElementById("quote-output");

//authorOutput
const authorOutput = document.getElementById("author-output");

generateQuoteBtn.addEventListener("click", generateQuote);

// console.log(generateQuoteBtn);
// console.log(quoteOutput);
// console.log(authorOutput);

//https://www.shopify.com/blog/motivational-quotes

const arrayOfQuotes = [
  {
    author: "Albert Einstein",
    quote:
      "We cannot solve problems with the kind of thinking we employed when we came up with them.",
  },
  {
    author: "Mahatma Gandhi",
    quote:
      "Learn as if you will live forever, live like you will die tomorrow.",
  },
  {
    author: "Mark Twain",
    quote:
      "Stay away form those people who try to disparage your ambitions. Small minds always do that, but great minds will give you a feeling that you can become great too.",
  },
  {
    author: "Norman Vincent Peale",
    quote: "When you change your thoughts, remember to also change your world.",
  },
  {
    author: "Walter Anderson",
    quote:
      "It is inly when we take chances, when out lives improve. The initial and the most difficult risk that we need to take is to become honest.",
  },
  {
    author: "Eleanor Roosevelt",
    quote:
      "When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.",
  },
  {
    author: "Diane McLaren",
    quote:
      "Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it on us to put these pieces together.",
  },
  {
    author: "Winston S. Churchill",
    quote:
      "Success is not final; final is not fatal; It is the courage to continue that counts.",
  },
  {
    author: "Herman Melville",
    quote: "It is better to fail in originality than to succeed in imitation.",
  },
  {
    author: "Colin R.Davis",
    quote:
      "The road to success and the road to failure are almost exactly the same.",
  },
  {
    author: "Dale Carnegie",
    quote:
      "Develop success form failure. Discouragement and failure are two of the surest stepping stones to success.",
  },
  {
    author: "Henry David Thoreau",
    quote: "Success usually comes to those who are too busy looking for it.",
  }
];

function generateQuote() {
  let random = Number.parseInt(Math.random() * arrayOfQuotes.length + 1);
  quoteOutput.innerHTML = `<span>${arrayOfQuotes[random].quote} </span>`;
  authorOutput.innerHTML = `<small>-${arrayOfQuotes[random].author}-</small>`;
}
