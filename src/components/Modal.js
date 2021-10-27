import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import DetailsTable from "./DetailsTable";


const items = [
    {
      id: '1',
      name: 'Product 1',
      img: 'https://psm7.com/wp-content/uploads/2021/10/Windows-11-5.jpg',
      weight: "200g",
      comments: ["CommentModel", " CommentModel"]
    },
    {
      id: '2',
      name: 'Product 2',
      img: 'https://psm7.com/wp-content/uploads/2021/10/Windows-11-5.jpg',
      weight: "200g",
      comments: ["CommentModel", " CommentModel"]
    },
    {
      id: '3',
      name: 'Product 3',
      img: 'https://psm7.com/wp-content/uploads/2021/10/Windows-11-5.jpg',
      weight: "200g",
      comments: ["CommentModel", " CommentModel"]
    },
  ]
  
export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
      
    <>
      <button onClick={toggleModal} className="btn-modal">
      Product View
      </button>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
              
            <h1>Add products</h1>
            <h2>Name</h2>
            <input
              type="text"
              placeholder="Type a Name here"
            />
            <h2>Image</h2>
            <input
              type="text"
              placeholder="Type a Image here"
            />
            <h2>Comments</h2>
            <input
              type="text"
              placeholder="Type a Comments here"
            />
            <button className="add-modal" onClick={toggleModal}>
              ADD
            </button>
            <h1>Product View:</h1>
            {items.map(item => {
      return (
            <div id={item.id} className="container-fluid">
              <div className="content">
              <h2>Name:</h2><h3>{item.name}</h3>
              <h2>Image</h2><img src={item.img} alt=""/>
              <h2>Comments:</h2><h3>{item.comments}</h3>
                <div className="btnHolder">
            <button className="delete-modal" onClick={toggleModal}>
              DELETE
            </button>
                </div>
              </div>
            </div>  
          );
        })}
            
          </div>
          <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
        </div>
      )}
    </>
  );
}
