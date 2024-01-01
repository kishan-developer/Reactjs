import React from 'react';
import  './BookList.css';
import BookCard from '../BookCard/BookCard';

const BookList = ({books}) => {


    return (
        <div className='booklist'>
            <h1>BookList</h1>
            {
                books.map((book)=> {
                    // const {id, author, genre , summar } = book;
                    
                    return(
                        <BookCard/>
                        // <h1>BookList</h1>
                       
                    )
                })
            }
        </div>
    );
}

export default BookList;
