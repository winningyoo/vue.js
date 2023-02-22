<template>
    <div></div>
</template>

<script>
import ApiMixin from '../api.js';
export default {
    mixins: [ApiMixin], // 사용할 믹스인 파일을 배열로 등록 
    data() {
        return {
            productList: []
        };
    },
    async mounted() {
        this.productList = await this.$callAPI("https://cde1f814-49e0-4d4c-8d68-b717cd0776dd.mock.pstmn.io/list","get");
        console.log(this.productList);
    }
}
</script>