<template>
    <div v-binding:style='styleObject'>인라인 스타일 바인딩</div>
</template>
<script>
export default {
    data() {
        return {
            baseStyle: 'background-color:yellow;width:100%;height:200px;',
            addStyle: 'color:red;font-weight:bold;'
            };

            //오브젝트를 선언 해서 바인딩 할 수 있음
            // styleObject: {
            //     color: 'red',
            //     fontSize: '13px'
            // } 
            
        }
    }
</script>
