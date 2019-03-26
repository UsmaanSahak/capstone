import React from 'react';
import {ProductConsumer} from "../../ProductContext.js";
import {Link} from "react-router-dom";
import styled from "styled-components";

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      add_cart_display:"block",
      mess_display: "none"
    }
  }

  changeDisplay(){
    this.setState({
      add_cart_display: "none",
      mess_display: "block"
    })
  }


  render() {
    return (
      <ProductConsumer>{value=>{
        const {id,title,img,price,inCart, info, time} = value.viewProduct;
        return(
          <DetailWrapper>
            <div className="container h-100" >
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 col-md-6 col-sm-12 picture">
                  <img src={img} />
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12 info">
                  <h2 className="font-weight-bold"> {title} </h2>
                  <p> {info} </p>
                  <p>
                    <span className="font-weight-bold">Price:   </span> 
                    <span>$</span><span>{price}</span>
                  </p>
                  <p>
                    <span className="font-weight-bold">Time Remaining:   </span>
                    <span>{time} minutes left</span> 
                  </p> 
                  <p className="text-success" style={{display:this.state.mess_display}}><span>&#10003;</span> successfully added to cart</p>
                  <button className="btn btn-primary rounded-pill addCart pt-0 mt-0" style={{display:this.state.add_cart_display}} onClick={()=>{
                    this.changeDisplay();
                    value.addToCart(id);
                  }}>
                    <i className="fas fa-cart-plus"/>
                    <span>Claim To Cart</span>
                  </button>
                </div>
              </div>
              <div className="row justify-content-center">
                <Link to="/browse">
                  <button className="btn btn-secondary">
                    <span>Go Back</span>
                  </button>
                </Link>
              </div>
            </div>
          </DetailWrapper>
      )}}
      </ProductConsumer>
    );
  }
}

const DetailWrapper = styled.div
`
  height:50rem;

  img{
    height: 80%;
    width:70%;
  }
  .row{
    height: 30rem;
  }

  .addCart{
    border: 0;
  }
  .btn:focus,.btn:active {
    outline: none !important;
    box-shadow: none;
  }
`


export default Detail;