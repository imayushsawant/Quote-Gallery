async function main() {

  async function quotes(page) {
    const url = `https://api.freeapi.app/api/v1/public/quotes?page=${page}&limit=4`;
    const options = { method: 'GET', headers: { accept: 'application/json' } };
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      // console.log(data);
      return data.data.data
    } catch (error) {
      console.error(error);
    }
  }

  let page = 1
  const cardContainer = document.getElementById('QuotesCard')
  const quoteButton = document.getElementById('quoteButton')

  const initialQuotes = await quotes(page);
  createQuotes(initialQuotes);

  async function createQuotes(quoteList) {
    quoteList.forEach(element => {
      const contentDiv = document.createElement('div')
      const author = document.createElement('p')

      contentDiv.className = 'quoteCard'
      contentDiv.innerHTML = element.content
      author.innerHTML = `—${element.author}`

      contentDiv.appendChild(author)
      cardContainer.appendChild(contentDiv)
    });
  }

  quoteButton.addEventListener('click', async () => {
    page++
    const newQuotes = await quotes(page)
    createQuotes(newQuotes)
    
  })

}




main()
