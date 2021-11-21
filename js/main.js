// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

const app = new Vue({
    el:"#app",
    data:{
        email: [],
    },
    created(){
        this.getRandomMail();
    },
    methods:{
        getRandomMail(){
            for(i=0; i< 10;i++){
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(response=>{
                    this.email.push(response.data.response)
                })
            }
            
        }
    }
    
});