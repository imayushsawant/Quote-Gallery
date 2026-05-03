# Quote Gallery

**[Live Demo](https://imayushsawant.github.io/Quote-Gallery/)**

A classy, Pinterest-inspired gallery of curated quotes built with vanilla HTML, CSS, and JavaScript. 

This simple web application dynamically fetches motivational and insightful quotes using an external API. It beautifully presents the data utilizing modern CSS techniques (CSS Grid, flexbox) and multiple elegant Google Fonts integrated directly into the stylesheet. 

## Features
* **Dynamic Styling**: Automatically cycles through 10 soft pastel colors and 6 distinctive classy fonts using CSS `:nth-of-type` selectors.
* **Pagination**: Click the "Load More" button to dynamically fetch and append new quotes directly to the grid without ever reloading the page.
* **Responsive Design**: Adjusts seamlessly from a sleek 2-column desktop grid to an accessible 1-column layout for mobile viewing.
* **Hover Interactions**: Soft shadows and subtle scaling bring depth to items when hovered over.
* **Clean Code Architecture**: JavaScript dynamically renders layout blocks while pure CSS handles absolutely all the styling logic (no inline looping colors in JS).

## Installation & Setup

1. **Clone the repository** or download the compressed ZIP file.
2. Ensure you have the file structure intact:
   ```text
   index.html
   js/
     quote.js
   css/
     style.css
   ```
3. Open `index.html` in your web browser. No server setup is required.

## API Used
This project fetches real-time quotes using the open public endpoint from **FreeAPI.app**:
`https://api.freeapi.app/api/v1/public/quotes`

## Customization
* **Fonts**: Update the Google Font `<link>` imports in the `HEAD` of `index.html` and adjust `font-family` inside `style.css` under the 10 distinct nth-of-type blocks.
* **Colors**: Change the hex codes mapped out in the `.quoteCard:nth-of-type()` section of `style.css` to redefine your palette.
* **API queries**: Edit the URL parameters (like `page`, `limit`, or `query`) in `quote.js` `fetch` requests to alter the amount or specific topics of data pulled.

## License
Free to use and modify for personal learning and practice.
