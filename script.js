const bind = Vue.createApp({
    data () {
        return {
            test: "color",      //test tham chiếu tới thẻ html, color tham chiếu tới style
            size: 28      
        }
    }
})

const ifElse = Vue.createApp({
    data() {
        return {
            writeStock: 4,
            text: 'I like taco, pizza, Thai beef salad, pho soup and tagine.'
        }
    }
})

//show nhanh hơn if else
const show = Vue.createApp({
    data() {
        return {
            showDiv: true,
            fontSize: "fontSize"
        }
    }
})


const loop = Vue.createApp({
    data() {
        return {
            foods: [
                'bánh canh',
                'bánh xèo',
                'cơm tấm',
                'gà rán'
            ],
            manyFoods: [
                'img_burrito.svg',
                'img_burrito.svg',
                'img_burrito.svg',
                'img_burrito.svg',
                'img_burrito.svg'
            ]
        }
    }
})


loop.mount('#loop')
show.mount("#show")
ifElse.mount("#ifElse")
bind.mount("#bind")       //phải có dòng này Vue mới chạy