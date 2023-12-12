var quotes = [
  {
    Quotes:
      "“You only live once, but if you do it right, once is enough.”",
    Author: "― Mae West",
  },
  {
    Quotes:
      "“Everything you can imagine is real.”",
    Author: "― Pablo Picasso",
  },
  {
    Quotes:
      `“It does not do to dwell on dreams and forget to live.”`,
    Author: "― J.K. Rowling",
  },
  {
    Quotes:
      `“The best revenge is massive success.”`,
    Author: "--Frank Sinatra",
  },
  {
    Quotes:
      `“It's not what happens to you, but how you react to it that matters.”`,
    Author: "--Epictetus",
  },
];

function getQuote() {
   
        var num = Math.floor(Math.random() *quotes.length);
  console.log(num);
  document.getElementById("quote").innerHTML =quotes[num].Quotes;
  document.getElementById("author").innerHTML =quotes[num].Author;
}
