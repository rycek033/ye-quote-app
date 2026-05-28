# Yeote. 🏔️

A React-based quote generator that delivers random thoughts and quotes from Kanye West (Ye), utilizing the [kanye.rest](https://kanye.rest/) API. 

More than just a quote app, **Yeote** is a visual tribute to Ye's discography. The UI/UX design is heavily inspired by the aesthetic eras of some of his most iconic albums.

## Aesthetic Themes & Easter Eggs

Every section of this app has been styled to match a different era of Ye's music:

* **The Main View (*ye* - 2018):** Features a moody, mountainous gradient background, a dark glassmorphic card, and the chaotic neon green handwritten font directly inspired by the *ye* album cover.
* **The Favorites Modal (*The Life of Pablo* - 2016):** Opening your saved quotes transitions the app into the chaotic, staggering layout of *TLOP*, complete with the signature peach/orange background, heavy black Helvetica typography, and repetitive "WHICH / ONE" text.
* **The Heart Icon (*Yeezus* - 2013, *808's & Heartbreak - 2008*):** The favorite toggle icon uses a brutalist, high-contrast "red tape" gradient with a harsh mechanical drop-shadow, paying homage to the minimalist *Yeezus* CD case, heartbroken icon is a node to 2008 Ye album.
* **The Action Button (*Kids See Ghosts* - 2018):** The "Add to Favorite" button uses a soft watercolor gradient (Sandy Beige, Soft Coral, Muted Blue) inspired by Takashi Murakami's iconic album artwork.

## Features

* **Random Quote Generation:** Click "New Quote" to fetch a fresh, random Ye quote.
* **Save Favorites:** Click the KSG-themed button or the Yeezus heart to save a quote to your favorites list.
* **Manage Favorites:** View all your saved quotes in the *TLOP*-styled modal. Easily delete quotes you no longer want to keep.
* **Responsive Design:** Fully responsive layout that adapts to mobile, tablet, and desktop screens.

## Tech Stack

* **Frontend:** React.js (Hooks: `useState`)
* **Styling:** Pure CSS (Custom Fonts, CSS Grid/Flexbox, UI Gradients, Glassmorphism)
* **API:** Fetch API utilizing [Kanye.Rest](https://api.kanye.rest)
* **Icons:** Boxicons

## Installation & Setup

To run this project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/rycek033/ye-quote-app.git](https://github.com/rycek033/ye-quote-app.git)
Navigate into the directory:

Bash
cd ye-quote-app
Install the dependencies:

Bash
npm install
Start the development server:

Bash
npm run dev
# OR if using Create React App: npm start
Open the app:
Open your browser and visit http://localhost:5173 (or the port specified in your terminal).

폰️ Fonts Used
AwesomeBi_polar (Custom local .ttf font) for the main quote text.

Helvetica Neue / Arial for the The Life of Pablo UI.

Bebas Neue & Handlee via Google Fonts.

Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

I feel like I'm too busy writing history to read it. — Ye
