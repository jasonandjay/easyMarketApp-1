import {getProduct} from "../../services/index"
import {observable,action} from "mobx"

class Product{
    //产品信息
    @observable productInfo;

    @action async product(id){
        const data=await getProduct(id)
        this.productInfo=data
        console.log(data,"produvt")
    }
}
export default Product;