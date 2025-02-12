import React from 'react';
import './index.scss'
import { Carousel, WingBlank } from 'antd-mobile';
import Lazyimg, { withLazyimg } from 'react-lazyimg-component';
// 引入 volecity.js
import 'velocity-animate';
import 'velocity-animate/velocity.ui';

class TopGoods extends React.Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
    }
    render() {
        let { data } = this.state;
        return <WingBlank className='WingBlank'>
         <div className='topGoodsTitle'>专题精选</div>
            <Carousel className="space-carousel"
                frameOverflow="visible"
                cellSpacing={10}
                slideWidth={0.8}
                autoplay
                infinite
                dots={false}
                afterChange={index => this.setState({ slideIndex: index })}
            >
                {this.props.topicList && this.props.topicList.map((val, index) => (
                    <a
                        key={val.id}
                        style={{
                            display: 'block',
                            position: 'relative',
                            height: this.state.imgHeight,
                       
                        }}
                    >
                        <img className='img'
                            src={val.item_pic_url}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                                this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        <div className='topGoodSubTitle'>
                            {val.title}
                            <span className='topGoodPrice'>￥{val.price_info}元起</span>
                        </div>
                        <div className='topGoodTitle'>{val.subtitle}</div>
                    </a>
                ))}
            </Carousel>
        </WingBlank>
    }
}

export default TopGoods
