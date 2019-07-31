import React, { Component } from 'react'
import "./product.scss"
import {withRouter} from "react-router-dom"
import ImgLoading from "../ImgLoading/ImgLoading"
import { inject } from 'mobx-react';

class ProductInfo extends Component {
    constructor(props){
        super(props)
    }
    goToDetail(id){
        sessionStorage.setItem("productId",JSON.stringify({id:id}))
        this.props.history.push(`/productDetail/${id}`) 
    }
    render() {
        let {item}=this.props
        return (
            <div className="pro_wrap" onClick={()=>{this.goToDetail(item.id)}}>
                <ImgLoading imgSrc={item.list_pic_url}></ImgLoading>
                <p className="product_name">{item.name}</p>
                <p style={{color:"#f00",textAlign:"center"}}>{`￥${item.retail_price}元`}</p>
            </div>
        )
    }
}
export default withRouter(ProductInfo)
