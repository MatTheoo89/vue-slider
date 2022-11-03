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
    changeImg(index){
      this.activeImage = index;
    },
    nextPrev(isNext){
      console.log(isNext);
      
      isNext ? this.activeImage++ : this.activeImage--;
      
      if(this.activeImage === this.movies.length){
        this.activeImage = 0;
      }
      else if(this.activeImage < 0){
        this.activeImage = this.movies.length - 1
      }
    },
  },
  mounted(){ 
    // ! da far partire al montaggio
    setInterval(() =>{
      this.nextPrev(true);
    }, 3000);
  },
  created(){
    // ! da far partire alla creazione
  },
}).mount('#app')






