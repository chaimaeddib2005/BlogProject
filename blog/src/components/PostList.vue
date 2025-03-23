<template>
    <div>
      <h2 style="color:blue;margin-left:5vw;">À la une</h2>
      <div v-if="filteredPosts.length">
        <SinglePost style="border:1px solid black;margin:1vw;" v-for="post in filteredPosts" :key="post.id" :post="post" />
      </div>
      <p v-else>Aucun article trouvé...</p>
    </div>
  </template>
  
  <script>
  import SinglePost from "./SinglePost.vue";
  
  export default {
    components: { SinglePost },
    props: ["posts", "selectedTag"], // ✅ Receive selectedTag from HomeView
    computed: {
      filteredPosts() {
        if (!this.selectedTag) return this.posts; // ✅ Show all if no tag selected
        return this.posts.filter(post => post.tags.includes(this.selectedTag)); // ✅ Filter by tag
      },
    },
  };
  </script>
  