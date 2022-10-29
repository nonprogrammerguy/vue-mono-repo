let PlanItemComponent = {
    template: '#plan-item-template',
    props: {
        name: {type: String, default: 'The Hooker', required: true},
        selected: { type: Boolean, default: false }
    },
    methods: {
        select() {
            this.$emit('select', this.name);
        }
    }
};

let PlanItemPickerComponent = {
    components: {
        PlanItemComponent: PlanItemComponent
    },
    template: '#plan-item-picker-template',
    data() {
        return {
            selectedPlan: null,
            plans: [
                'The Idiot',
                'The Single',
                'The Curious',
                'The Addict'
            ],
        }
    },
    methods: {
        selectPlan(plan) {
            this.selectedPlan = plan
        }
    }
};

Vue.createApp({
    components: {
        PlanItemPicker: PlanItemPickerComponent
    }
})
.mount('#app');
