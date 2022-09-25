const drinkList = {
    data(){
        return {
            checkOrder : {
                time : '',
                totalPrice : '',
                orderItem : [],
            },
            temporaryStorage : {},
            addToCarts : [],
            totalPrice : 0,
            iceType: ['正常冰', '少冰', '微冰', '去冰', '熱'],
            sugarType: ['全糖', '七分', '半糖', '三分', '無糖'],
            toppingsType: ['珍珠', '粉條', '小粉圓', '椰果', '芋頭'],
            products : [
                {
                    name : "珍珠奶茶",
                    engName : "Pearl Milk Tea",
                    price : 60,
                    defaults : {
                        ice : '',
                        sugar : '',
                        toppings : ['']
                    }                                      
                },
                {
                    name : "椰果鮮奶茶",
                    engName : "Coconut Milk Tea",
                    price : 60,
                    defaults : {
                        ice : '',
                        sugar : '',
                        toppings : ['']
                    }                            
                },
                {
                    name : "鮮奶茶",
                    engName : "Pure Milk Tea",
                    price : 50,
                    defaults : {
                        ice : '',
                        sugar : '',
                        toppings : ['']
                    }                   
                    
                },
                {
                    name : "古意冬瓜茶 (糖固定)",
                    engName : "Winter Melon Drink",
                    price : 30,
                    defaults : {
                        ice : '',
                        sugar : '全糖',
                        toppings : ['']
                    }                                             
                },
                {
                    name : "蜜香紅茶",
                    engName : "lack Tea",
                    price : 30,
                    defaults : {
                        ice : '',
                        sugar : '',
                        toppings : ['']
                    }                           
                },
                {
                    name : "包種青茶",
                    engName : "Package Black Tea",
                    price : 55,
                    defaults : {
                        ice : '',
                        sugar : '',
                        toppings : ['']
                    }                           
                },
                {
                    name : "檸檬烏龍",
                    engName : "Lemon Oolong Tea",
                    price : 55,
                    defaults : {
                        ice : '',
                        sugar : '',
                        toppings : ['']
                    }                          
                },
                {
                    name : "薑母茶 (熱)",
                    engName : "Ginger Tea",
                    price : 55,
                    defaults : {
                        ice : '熱',
                        sugar : '',
                        toppings : ['']
                    }                                           
                },
                {
                    name : "青草茶",
                    engName : "Herbal Tea",
                    price : 35,
                    defaults : {
                        ice : '',
                        sugar : '',
                        toppings : ['']
                    }                          
                },
                {
                    name : "金桔檸檬",
                    engName : "Kumquat Lemonade",
                    price : 40,
                    defaults : {
                        ice : '',
                        sugar : '',
                        toppings : ['']
                    }                          
                },               
            ],
        }
    },
    created(){

    },
    methods :{
        clickSelectProducts(products){
            this.temporaryStorage = {
                ...products,
                ice : products.defaults.ice !== ''? products.defaults.ice : "" ,
                sugar : products.defaults.sugar !== ''? products.defaults.sugar : "",
                toppings : [],
                notice : '',
                count : 1,                
            }
        },
        calcTotalPrice(){
            this.totalPrice = 0;
            this.addToCarts.forEach((item) => {
                // console.log(item);
                this.totalPrice+=item.subTotal
            })
        },
        resetAddToCarts(){
            this.temporaryStorage = {}
        },
        // 以下刪除還未搞懂功能
        clickDeleteItem(products){           
            const index = this.addToCarts.indexOf((item) => {                                                      
                item.name === products.name
            });            
            this.addToCarts.splice(index,1);
            this.totalPrice = this.totalPrice - products.subTotal;
        },
        clickAddToCarts(products){
            if (this.addToCarts.length == 0){
                alert('要先點選飲品唷');
                return;
            }
            const calcPrice = {
                ...products,
                subTotal : (products.price + (products.toppings.length * 10) ) * products.count
            }
            this.addToCarts.push(calcPrice);
            this.calcTotalPrice();
            this.resetAddToCarts();
        },
        clickGenerateOrder(Carts,Price){
            const date = new Date().toLocaleString();
            this.checkOrder.time = date;
            this.checkOrder.totalPrice = Price;
            this.checkOrder.orderItem = Carts;
            this.addToCarts = [];
            this.resetAddToCarts();
        },
        // clickDeletecheckOrder(){
        //     this.checkOrder = [];
        // }
    }
}

Vue.createApp(drinkList).mount('#app')