console.log('collegato ok');

const {createApp} = Vue;

createApp({
  data(){
    return{
      movies: [
        {
          title: 'Batman',
          image: 'assets/img/batman-1999.jpg'
        },
        {
          title: 'Batman - il ritorno',
          image: 'assets/img/batman-il_ritorno.jpg'
        },
        {
          title: 'Batman Forever',
          image: 'assets/img/batman-forever.jpg'
        },
        {
          title: 'Batman & Robin',
          image:'assets/img/batman-&_robin.jpg'
        },
        {
          title: 'Batman begins',
          image: 'assets/img/batman-begins.jpg'
        },
        {
          title: 'Batman The dark knight',
          image: 'assets/img/batman-the_dark_knight.jpg'
        },
        {
          title: 'Batman The dark knight rises',
          image: 'assets/img/batman-the_dark_knight_rises.jpg'
        },
      ],
      activeImage: 0,
    }
  },
  methods: {
    // !funzioni
  },
  mounted(){ 
    // ! da far partire al montaggio
  },
  created(){
    // ! da far partire alla creazione
  },
}).mount('#app')






