import React from 'react'
import './index.scss'
import {Link} from 'react-router-dom'
import { inject, observer } from "mobx-react"

@inject('collect')
@observer

class Collectdetail extends React.Component {
    componentDidMount() {
        this.props.collect.getcollectData({ typeId: 0 })
    }
    goback(){
        
    }
    render() {
        let {getcollectList} =this.props.collect;
        return <div id='collect'>
            <header className='header'>
                <Link to='/pages/my' className='left'>◁</Link>
                <div className='title'>easyLikeGoods</div>
                <div className='right'></div>
            </header>
            {
                getcollectList && getcollectList.map((item,index)=>{
                    return <div key={index} className='touchClear'>
                    <div className='test'>
                        <div className='collectItem'>
                            <img src={item.list_pic_url} alt="" />
                        </div>
                        <div className='collectMsg'>
                            <div>{item.name}</div>
                            <div>{item.goods_brief}</div>
                            <div>￥{item.retail_price}元</div>
                        </div>
                    </div>
                    <div className='colse' onClick={()=>{
                        this.goback()
                    }}>删除</div>
                </div>
                })
            }
        </div>
    }
}

export default Collectdetail