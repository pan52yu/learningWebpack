import { marquee } from './marquee.js'
import { tab } from './tab.js'

marquee()
tab()

import './styles/index.css'
import './styles/index.less'

import gifSrc from './assets/1.gif'
import pngSrc from './assets/logo_small.png'

const gif = document.createElement('img')
const png = document.createElement('img')

gif.src = gifSrc
png.src = pngSrc

document.body.appendChild(gif)
document.body.appendChild(png)

import './assets/fonts/iconfont.css'

const jt = () => {
    console.log('测试处理高版本js语法功能！')
}
console.log(jt)

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
