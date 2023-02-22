<template>
    <div></div>
</template>

<script>
import api from '@/api';
export default {
    mixins: [api],
    mounted() {
        console.log('컴포넌트 mounted');
        //믹스인 mounted
        //컴포넌트 mounted
    },
    unmounted() {
        console.log('컴포넌트 unmounted');
        //믹스인 unmounted
        //컴포넌트 unmounted
    }
}
</script>