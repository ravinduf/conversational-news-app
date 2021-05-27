import React from 'react'

import NewsCard from './NewsCard/NewsCard'

const NewsCards = ({ articles }) => {
    return (
        <div>
            <h1>News Cards</h1>
            {articles.map((articles, index) => (
                <NewsCard key={index}/>
            ))}
        </div>
    )
}

export default NewsCards
