<template>
    <button type="button" @click="checkChild">자식 컴포넌트 데이터 조회</button>
    <child-component ref="child_component" />
</template>
<script>
import ChildComponent from './ChildComponent5';
export default {
    components: {ChildComponent},
    methods: {
        checkCdild() {
            alert(this.msg);
        }
    }
}

</script>