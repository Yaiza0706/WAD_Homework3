<template>
  <section>
    <Header></Header>
    <section class="main-container">
        <div class="profile" v-for="(profile, index) in profiles" :key="index">
          <img :src="profile.image" :alt="profile.firstname">
          <h2>{{profile | name}}</h2>
          <button class="follow-button" @click="likefunction">Follow</button>
        </div>
    </section>
  </section>
</template>

<script>
  import Header from "./Header"
	export default {
		name: 'Browse',
    components:{
      Header,
    },
    methods:{

      likefunction: function(event){
        let button=event.target;
        if(button.classList.contains('followed')){
          button.classList.remove('followed')
          button.textContent='Follow';
        } else{
            button.classList.add('followed')
            button.textContent= 'Followed';
        }
      }

    },
		computed: {
			profiles: function () {
        return this.$store.state.profiles
      }
		},
    filters:{
      name(p){
        return p.firstname + ' ' + p.lastname;
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.profile {
    width: 45%;
    display: inline-block;
    border: 1px solid #dedede;
    border-radius: 5px;
    text-align: center;
    margin: 1%;
}
.profile img{
    width: 75px;
    height: 75px;
    border-radius: 100%;
    object-fit: cover;
    object-position: top;
    margin: 5px;
}

.profile h2{
    font-size: 16px;
}

.follow-button{
    background-color: #82008f;
}

.follow-button.followed{
    background-color: #ffffff;
    border: 1px solid #82008f;
    color: #82008f;
}

</style>
