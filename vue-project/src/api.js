import axios from 'axios';

export default {
    mounted() {
        console.log('믹스인 mounted');
    },
    onUnmounted() {
        console.log('믹스인 unmounnted');
    },
    methods: {
        async $callAPI(url,method, data) {          //$ 함수 이름 앞에 달러표시는 오버라이딩을 방지하기 위해서 
            return (await axios({
                method: method,
                url,
                data
            }).catch(e =>{
                console.log(e);
            })).data;
        }
    }
}