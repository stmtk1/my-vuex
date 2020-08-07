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
    state = {...this.$options.store}
    this.$store = $store
}

export default {
    install: (vue, options) => {
        vue.mixin({ beforeCreate }
        )
    },
};
