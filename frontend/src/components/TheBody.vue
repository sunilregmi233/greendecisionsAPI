<template>
  <div>
              <h2>About Us</h2>
              <h4>“
                Green Decisions Consulting is an Environmental Engineering Firm. <hr>
                We aspire to build bridges between Environment and Economy by cooperating and collaborating with Local, Provincial, National and International Partners.<hr>
                We believe that in this dawn of 21st century, accepting Greener ways of doing things is much easier with all the technology, expertise and information available within the reach of our fingers. <hr>
                We also believe in advocating on environment conservation and management and constantly maintaining collaboration with different organizations to make the sound of Green be heard.
                ” </h4>
     <h1>Posts List</h1>
     <div>
       <ol>
         <li v-for="post in info" v-bind:key="post.id">{{ post.title }}</li>
       </ol>
     </div>


  </div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      info: [],
      loading: true,
      errored: false
    }
  },
  created() {
    axios
      .get('http://127.0.0.1:8000/api/v1/')
      .then(response => {
        this.info = response.data
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
}
</script>

<style scoped>

</style>
