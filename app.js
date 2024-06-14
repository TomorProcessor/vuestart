const app = Vue.createApp({
    data() {
        return {
            testValue: 'testValue',
            nameOfClass: 'nameOfClass'
        };
    },
    methods: {
        testFunc() {
            return 'testFunc result value';
        }
    }
});
app.mount('#user-goal');