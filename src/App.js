import React from 'react';
import './App.css';
import Modal from './components/Modal'
import DetailsTable from './components/DetailsTable';

class App extends React.Component{

    state = {
      products: [
        {
          "id": "1",
          "name": "Product 1",
          "img": [
              "https://psm7.com/wp-content/uploads/2021/10/Windows-11-5.jpg",
            ],
            "count": 4,
            "size": {
            "width": 200,
            "height": 200
            },
            "weight": "200g",
            "comments": ["CommentModel", "CommentModel"]
            },
            {
              "id": "2",
              "name": "Product 2",
              "img": [
                  "https://psm7.com/wp-content/uploads/2021/10/Windows-11-5.jpg",
                ],
                "count": 4,
                "size": {
                "width": 200,
                "height": 200
                },
                "weight": "200g",
                "comments": ["CommentModel", "CommentModel"]
                },
                {
                  "id": "3",
                  "name": "Product 3",
                  "img": [
                      "https://psm7.com/wp-content/uploads/2021/10/Windows-11-5.jpg",
                    ],
                    "count": 4,
                    "size": {
                    "width": 200,
                    "height": 200
                    },
                    "weight": "200g",
                    "comments": ["CommentModel", "CommentModel"]
                    }
      ],
      index: 0
    };  
     handleModal = () => {
       this.setState({showModal: !this.state.showModal});
     }
  
     deleteEvent = (index) => {

    } 
  myRef = React.createRef();

  handleTab = index =>{
    this.setState({index: index})
    const images = this.myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  }


  render(){
    const {products, index} = this.state;
    return(
      <div className="app">
          <Modal />
              <h1>Product List</h1>
        {
          products.map(item =>(
            <div className="details" id={item._id}>
              <div className="big-img">
                <img src={item.img[index]} alt=""/>
              </div>

              <div className="box">
                <div className="row">
                  <h2>{item.name}</h2>
                </div>
                <DetailsTable images={item.img} tab={this.handleTab} myRef={this.myRef} />
                <button className="edit">Edit</button>

              </div>
            </div>
          ))
        }
      </div>
    );
  };
}

export default App;
