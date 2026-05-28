import { useState } from "react"

const QuotesApp = () => {
    const [quote, setQuote] = useState({
        text: "I feel like I'm too busy writing history to read it.",
        author: "Ye"
    })
    const [favorites, setFavorites] = useState([])
    const [showFav, setShowFav] = useState(false)

    const toggleFav = () => {
        setShowFav(!showFav)
    }

    const addToFav = () => {
        const isAlreadyFav = favorites.some((fav) => fav.text === quote.text)
        
        if(!isAlreadyFav){
            setFavorites([...favorites, quote])
        } 
    }

    const fetchNewQuote = async () => {
        const url = 'https://api.kanye.rest'
        const res = await fetch(url)
        const data = await res.json()
        setQuote({
            text: data.quote,
            author: "Ye"
        })
    }

    return (
        <div className="container">
            <div className="quotes-app">
                <h1 className="app-heading">Yeote.</h1>
                <i className="bx bxs-heart fav-icon" onClick={toggleFav}></i>
                <div className="quote">
                    <i className="bx bxs-quote-alt-left left-quote"></i>
                    <p className="quote-text">{quote.text}</p>
                    <p className="quote-author">{quote.author}</p>
                    <i className="bx bxs-quote-alt-right right-quote"></i>
                </div>
                <div className="buttons">
                    <button className="btn btn-new" onClick={fetchNewQuote}>New Quote</button>
                    <button className="btn btn-fav" onClick={addToFav}>Add to Favorite</button>
                </div>
                
                {showFav && (
                    <div className="favourites">
                        <button className="btn-close" onClick={toggleFav}>
                            <i className="bx bx-x"></i>
                        </button>

                        {/* TLOP Header */}
                        <div className="tlop-header-group">
                            <h2 className="tlop-text stagger-1">FAVOURITES</h2>
                            <h2 className="tlop-text stagger-2">FAVOURITES</h2>
                            <h2 className="tlop-text stagger-3">FAVOURITES</h2>
                            <h2 className="tlop-text stagger-4">FAVOURITES</h2>
                        </div>

                        {/* Saved Quotes List */}
                        <div className="saved-quotes-list">
                            {favorites.map((favQuote, index) => (
                                <div className="fav-quote" key={index}>
                                    <div className="fav-quote-delete">
                                        <i className="bx bx-x-circle"
                                            onClick={() => {
                                                const updatedFav = favorites.filter((item, i) => i !== index)
                                                setFavorites(updatedFav)
                                            }}
                                        ></i>
                                    </div>
                                    <div className="fav-quote-content">
                                        <div className="fav-quote-text">{favQuote.text}</div>
                                        <div className="fav-quote-author">{favQuote.author}</div>
                                    </div>
                                </div>
                            ))}    
                        </div>

                        {/* TLOP Footer */}
                        <div className="tlop-footer-group">
                            <h3 className="tlop-text tlop-subtext stagger-1">WHICH / ONE</h3>
                            <h3 className="tlop-text tlop-subtext stagger-2">WHICH / ONE</h3>
                            <h3 className="tlop-text tlop-subtext stagger-3">WHICH / ONE</h3>
                            <h3 className="tlop-text tlop-subtext stagger-4">WHICH / ONE</h3>
                        </div>
                    </div>
                )}    
            </div>
        </div>
    )
}

export default QuotesApp