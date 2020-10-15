// let dropDownComp = Vue.component('drop-down', {
    
//     props:['words', 'link'],
//     data: function(){

//         return {shown: true}

//     },
//     methods:{
//         dropper: function(){
//            this.shown = !this.shown
//         }
//     },
//     template:`
//       <div v-on:click = '$emit("drop()")'> <q>{{words}} {{this.shown}}</q><p>-<a v-bind:href='link'> </a></p> </div>
//     `
// })









let app = new Vue({
    el: '#app',
    data: {
        message: "",
        seer: false,
        drop1: true,
        drop2: true

    },
    created(){
        console.log('This is a test')
    }
})
