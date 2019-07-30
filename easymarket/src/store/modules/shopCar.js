import {getShopCar,changeChecked,addShopCart,removeGoods} from "../../services/index"
import {observable,action} from "mobx"
export default class ShopCar{
    @observable shopList={}; //购物车的数据---；
    @observable allChecked=false; //非编辑状态的---全选---反选状态
    @observable checkedList=[];//选中状态的数据
    @observable doAllChecked=false //编辑状态的全选---反选状态:
    //获取购物车列表
    @action getShopCarList= async ()=>{
        let data=await  getShopCar()
        this.shopList=data;
        let flag=data.cartList.every(item=>item.checked===1)
        //给每一条数据添加编辑状态的是否选中状态：
        data.cartList.forEach(item=>{
            item.isDelete=false;
        })
        this.allChecked=flag
    }
    //不是编辑状态的------修改商品选中的状态
    @action checkedGoods= async (payload)=>{
        let data=await changeChecked(payload)
        if(data.errno===0){
            this.shopList=data.data
            let flag=data.data.cartList.every(item=>item.checked===1)
            data.data.cartList.forEach(item=>{
                item.isDelete=false;
            })
            this.allChecked=flag
        }
    }
    //修改商品的数量----重新添加购物车：
    @action addShop=async (payload)=>{
        let data=await addShopCart(payload)
        if(data.errno===0){
           this.getShopCarList()
        }
    }
    //删除购物车里的某条数据的---按钮显示与否 
    @action changeEditGoods=(payload)=>{
        //如果没有传参---则表明是编辑状态的删除全选--反选；
        if(!payload){
            this.doAllChecked=!this.doAllChecked
            this.shopList.cartList.forEach(item=>{
                item.isDelete=this.doAllChecked;
            })
            return 
        }
        if(payload==="完成"){
            this.doAllChecked=false;
            this.shopList.cartList.forEach(item=>{
                item.isDelete=false;
            })
        }
        this.shopList.cartList.forEach(item=>{
            if(item.product_id===payload.productIds){
                item.isDelete=!item.isDelete
            }
        })
        let flag=this.shopList.cartList.every(item=>item.isDelete)
        this.doAllChecked=flag
    }
    //点击删除按钮时删除某一条数据---or---删除多条数据
    @action deleteGoods=async (payload)=>{
        let data=await removeGoods(payload)
        this.shopList=data.data;
        let flag=data.data.cartList.every(item=>item.checked===1)
        data.data.cartList.forEach(item=>{
            item.isDelete=false;
        })
        this.allChecked=flag
    }
}