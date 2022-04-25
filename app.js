const app = Vue.createApp({

  
    data() {

        return {

            firstName: 'Mahmut',  
            lastName: 'Sarıkaya'   ,
             email: 'msrky1@gmail.com',
             gender: 'male',
             picture: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/John_Petrucci_-_04.jpg'
            
               
        }
    },

    methods: {
        
     async   getUser(){

        const res = await fetch ('https://randomuser.me/api')

        const { results } = await res.json()
                 this.firstName =  results[0].name.first
                 this.lastName = results[0].name.last
                 this.email = results[0].email
                 this.gender = results[0].gender
                 this.picture =  results[0].picture.large
    

   

        },
    },


})

app.mount('#app')

