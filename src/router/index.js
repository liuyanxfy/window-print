import Vue from 'vue'
import Router from 'vue-router'
import WindowPrint from '@/components/WindowPrint'
import VuePrint from '@/components/vue-print.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'windowPrint',
            component: WindowPrint
        },
        {
            path: '/vuePrint',
            name: 'vuePrint',
            component: VuePrint
        }
    ]
})