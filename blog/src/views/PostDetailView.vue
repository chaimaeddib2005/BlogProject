<template>
    <div v-if="post">
      <h2 style="text-align:center;color:blue;">{{ post.title }}</h2>
      <p style="border:1px solid black;text-align:justify;font-size:2vw;margin:1vw;padding:1vw;">{{ post.body }}</p>
      <div style="display:inline-block;" v-for="tag in post.tags" :key="tag">
        <p style="color:red;font-weight:bold;margin-left:2vw;margin-right:2vw;">#{{ tag }}</p>  
  
      </div>
    </div>
    <div v-else>
      <p>Chargement...</p>
    </div>
  </template>
  
  <script>
  
  export default {
    data() {
      return {
        post: null,
      };
    },
    async mounted() {
      const postId = this.$route.params.id;
      try {
        const response = await fetch("http://localhost:3001/posts"); // Fetch JSON data
        const posts = await response.json();
        this.post = posts.find(post => post.id == postId); // Find the matching post
      } catch (error) {
        console.error("Erreur de chargement des articles:", error);
      }
    },
  };
  </script>
  