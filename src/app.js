import Vue from 'vue'

let state = {}

function getState(name) {
    return state[name]
}

function setState(name, value) {
    state[name] = value
    return value
}

const $store = { get: getState, set: setState };

function beforeCreate() {
    if (typeof this.$options.store !== 'object') {
        console.err('store is not object')
        return
    }
    state = {...this.$options.store}
    this.$store = $store
}

const MyVuex = {
    install: (vue, options) => {
        vue.mixin({ beforeCreate }
        )
    },
};

Vue.use(MyVuex)

const app = new Vue({
    el: '#app',
    data: () => {
        return { message: 'hello world' }
    },
    created: function() {
        this.$store.set('message', 'hello world vuex')
    },
    store: {
        message: "hello world"
    }
});
