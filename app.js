const App = new  Vue({
    el: "#app",
     data: {
         step: 1,
         totalSteps:  3,
         form:{
             name: null,
             email: null,
             phone: null,
             message: null
         }
     },
     methods: {
         nextStep : function (){
             this.step++;
         },
         prevStep : function (){
             this.step--;
         },
         sendResponse: function(){
             alert('Datos enviados');
         }
     },
     mounted() {
        //  alert('llego');
     }
})