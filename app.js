async function getQuote() {
    try {
      const response = await fetch("https://dummyjson.com/quotes");
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.quotes.length);
      const randomQuote = data.quotes[randomIndex];
      document.getElementById("quote").textContent = `"${randomQuote.quote}"`;
      document.getElementById("author").textContent = `– ${randomQuote.author}`;
    } catch (error) {
      document.getElementById("quote").textContent = "Failed to fetch quote.";
      document.getElementById("author").textContent = "";
    }
  }
  getQuote();
  function Tweet(){
    window.open("https://twitter.com/intent/tweet?text="+ quote.innerHTML,+"----by" + author.innerHTML ,"Tweet Window", "width=600" , "hight=300");
}

  // Load a quote when the page loads
  window.onload = getQuote;
