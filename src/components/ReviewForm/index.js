// ReviewForm.js
import React, { useState } from 'react';

import "./index.css"

const books = [
  {
    id:1,
    book_name:"War and Peace",
    img_url : "https://c7.alamy.com/comp/W58G85/elsies-young-folks-in-peace-and-war-finley-martha-1828-1909-W58G85.jpg",
    author: "Leo Tolstoy"

  }, {
    id:2,
    book_name:"Ulysses",
    img_url : "https://c7.alamy.com/comp/2R76EH0/hms-ulysses-by-scottish-author-alistair-maclean-published-in-1955-the-original-mid-century-illustrated-1950s-book-cover-illustrated-by-john-rose-the-book-tells-the-story-of-the-difficult-challenges-faced-by-the-arctic-convoys-to-russia-during-world-war-ii-2R76EH0.jpg",
    author: "James Joyce"
  },{
    id:3,
    book_name:"Jane Eyre",
    img_url : "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1557343311i/10210._SY75_.jpg",
    author: "Charlotte Brontë"
  },
  {
    id:4,
    book_name:"Hamlet",
    img_url : "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1351051208i/1420._SY75_.jpg",
    author: "William Shakespeare" 
  },
  {
    id:5,
    book_name:"The Odyssey",
    img_url : "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1711957706i/1381._SY75_.jpg",
    author: " Homer" 
  },
  {
    id:6,
    book_name:"Life of Pi",
    img_url : "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1631251689i/4214._SY75_.jpg",
    author: " Yann Martel" 
  },
  {
    id:7,
    book_name:"Catch-22",
    img_url : "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1463157317i/168668._SY75_.jpg",
    author: " Joseph Heller" 
  },
  {
    id:4,
    book_name:"Lolita",
    img_url : "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1377756377i/7604._SY75_.jpg",
    author: "Vladimir Nabokov" 
  },
  {
    id:4,
    book_name:"The Stand",
    img_url : "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1213131305i/149267._SX50_.jpg",
    author: " Stephen King" 
  },
  {
    id:4,
    book_name:"HAtlas Shrugged",
    img_url : "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1405868167i/662._SY75_.jpg",
    author: "Ayn Rand" 
  }
]

function ReviewForm({ addReview }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [reviewer, setReviewer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview({ title, author, content, reviewer });
    setTitle('');
    setAuthor('');
    setContent('');
    setReviewer('');
  };

  return (
    <>
    <div className='book-cointainer'> 
       {
        books.map((book) =>(
          <div className='book-item'>
          <img src={book.img_url} alt={book.book_name}/> 
            <div className='text-cointainer'>
              <h1>{book.book_name}</h1>
              <p>{book.author}</p>
            </div>
         </div>
        ))
       }
    </div>
    <form  onSubmit={handleSubmit}>
      <h2>Submit a Review</h2>
      <div className='content-elemet'>
        <input
          type="text" placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <div className='content-elemet'>
        <input
          type="text"  placeholder="Reviewer’s Name" value={reviewer} onChange={(e) => setReviewer(e.target.value)}
          required
        />
        <textarea
          placeholder="Review Content" value={content} onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit Review</button>
    </form>
    </>
  );
  
}

export default ReviewForm;
