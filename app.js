const app = Vue.createApp({
    data() {
        return {
            testValue: 'testValue',
            nameOfClass: 'nameOfClass',
            valueForTestFunc: 'testFunc result value',
            counter: 0,
            inputContent: ''
        };
    },
    methods: {
        testFunc() {
            /**
             * a Vue a data-ban lévő tagok-kat kirakja a saját
             * osztályváltozói közé
             */
            return this.valueForTestFunc;
        },
        add() {
            this.counter++;
        },
        sub() {
            this.counter--;
        },
        handleCounter(action) {
            if (action === 'increase') this.counter++;
            if (action === 'decrease') this.counter--;
        },
        handleInput(event) {
            this.inputContent = event.target.value;
        }
    }
});
app.mount('#user-goal');