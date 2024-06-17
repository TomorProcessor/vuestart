const app = Vue.createApp({
    data() {
        return {
            testValue: 'testValue',
            nameOfClass: 'nameOfClass',
            valueForTestFunc: 'testFunc result value',
            counter: 0,
            inputContent: '',
            storedInputContent: '',
            selectedBox: '',
            list: [],
            enteredListItem: ''
        };
    },
    /**
     * csak akkor futnak le, ha az általuk használt változó
     * értéke megváltozik, html-ben hívni tilos, értékként
     * kell őket behivatkozni
     */
    computed: {
        counterInBinary() {
            return this.counter.toString(2);
        }
    },
    /**
     * minden olyan esetben hívódnak, amikor a nevüknek megfelelő
     * data változó értéke megváltozik, lehetnek egy paraméteresek
     * is, amikor az új értéked adja csak át
     */
    watch: {
        counter(newValue, oldValue) {
            console.log('counter has changed, oldValue', oldValue, 'newValue', newValue);
        }
    },
    /**
     * amennyiben html-ben hívva vannak, akkor minden egyes
     * újra renderelésnél lefutnak
     */
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
        },
        setInputContent() {
          this.inputContent = this.$refs.inputText.value;
        },
        handleSubmit() {
            console.log('handleSubmit called');
        },
        storeInput() {
            this.storedInputContent = this.inputContent;
        },
        reset() {
            this.counter = 0;
            this.inputContent = '';
            this.storedInputContent = '';
        },
        selectBox(boxLetter) {
            this.selectedBox = boxLetter;
        },
        updateStyle(boxLetter) {
            let borderColor = '#ccc';
            if (boxLetter === this.selectedBox) borderColor = 'red';
            return {borderColor: borderColor };
        },
        boxIsSelected(boxLetter) {
            return boxLetter === this.selectedBox;
        },
        addToList() {
            this.list.push(this.enteredListItem);
        },
        removeFromList(index) {
            this.list.splice(index, 1);
        },
        generateRandomString(length = 10) {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let result = '';
            const charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }
    }
});
app.mount('#user-goal');