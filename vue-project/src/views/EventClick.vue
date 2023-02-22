<template>
    <div>
        <button type="button" @click="increaseCounter">Add 1</button>
        <p>The counter is : {{ccounter}} </p>
        </div>
</template>
<script>
    export default {
        data() {
            return {
                counter:0
            };
        },
        methods: {
            increaseCOunter(){
                this.counter = this.counter + 1;
            }
        }
    }
</script>
