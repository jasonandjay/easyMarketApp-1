import React from 'react';
import "./index.css"
import isChecked from "../../../static/img/isCheck.png"
import noChecked from "../../../static/img/noCheck.png"
import {inject,observer} from "mobx-react"
@inject('shopCar')
@observer
class Shopping extends React.Component{
    constructor(){
        super()
        this.state={
            allChecked:false
        }
    }
    componentDidMount(){
        this.props.shopCar.getShopCarList()
    }
    render(){
        let {cartList}=this.props.shopCar.shopList;
        console.log(cartList)
        return <div className="shopCar">
           <div className="shopCar_header">
               <span><b>★</b>30天无忧退货</span>
               <span><b>★</b>48小时快递退款</span>
               <span><b>★</b>满88元包邮</span>
           </div>
           <div className="shopCar_main">
              <div className="shopCar_carWrap">
                  {
                      cartList&&cartList.map(item=>{
                          return <div className="shopCar_item" key={item.goods_id}> 
                                    <div className="shopCar_item_isChecked">
                                        <img src={item.checked?isChecked:noChecked} alt=""/>
                                    </div>
                                    <div className="shopCar_item_img">
                                        <img src={item.list_pic_url} alt=""/>
                                    </div>
                                    <div className="shopCar_item_msg">
                                        <div>{item.goods_name}</div>
                                        <div></div>
                                        <div className="shopCar_item_price">￥：{item.market_price}</div>
                                    </div>
                                    <div>x{item.number}</div>
                                        
                                    
                                </div>
                      })
                  }
              </div>
           </div>
           <div className="shopCar_do">
                <div></div>
                <div>
                    已选(1) ￥24
                </div>
                <div>编辑</div>
                <div>下单</div>
           </div>
        </div>
    }
}

export default Shopping;