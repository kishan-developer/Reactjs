import React from 'react';
import './BookCard.css';

const BookCard = ({id, title, author, genre, summary}) => {
    return (
        <div className='card'>
            <h4 className='card_title'>{title}</h4>
            <div className='card_description'>
                <p>Author : {author}</p>
                <p>Genre : {genre}</p>
            </div>
            <div className='card_summary'>
                {summary}
            </div>
            <div className='card_buttons'>
                <button className='button'>Edit</button>
                <button className='button'>Delete</button>
            </div>
        </div>
    );
}

export default BookCard;
