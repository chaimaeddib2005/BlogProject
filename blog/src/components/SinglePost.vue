<template>
    <div class="post">
      <h3 style="color:green;">{{ post.title }}</h3>
      <p>{{ post.body.substring(0, 50) }}...</p>
      <router-link :to="'/post/' + post.id">...Lire plus</router-link>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      post: Object, // ✅ Post object comes from parent component
    },
  };
  </script>
  