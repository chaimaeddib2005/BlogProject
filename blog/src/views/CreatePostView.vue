<template>
    <div style="margin:2vw; border:5px solid black; padding:2vw;">
      <h2 style="text-align:center; color:green;">Publiez votre article</h2>
      <form @submit.prevent="addPost">
        <input style="margin:4vw;" v-model="title" placeholder="Titre" required /><br>
        <textarea style="width:90%; margin:2vw; height:5vw;" v-model="body" placeholder="Contenu" required></textarea><br>
        <input style="margin:2vw; margin-left:4vw;" v-model="tags" placeholder="Tags (séparés par des virgules)" /><br>
        <button style="width:40%; float:right; margin-right:4vw; background-color:green;" type="submit">Publier</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        posts: [],
        title: "",
        body: "",
        tags: "",
      };
    },
    mounted() {
      fetch("http://localhost:3001/posts")
        .then(response => response.json())
        .then(posts => (this.posts = posts))
        .catch(error => console.error("Erreur de chargement des articles:", error));
    },
    methods: {
      createPost() {
        const newPost = {
          id: Date.now(),
          title: this.title,
          body: this.body,
          tags: this.tags.split(",").map(tag => tag.trim()),
        };
        this.$router.push("/");
        this.title = "";
        this.body = "";
        this.tags = "";
        return newPost;},
        async addPost() {
        const newPost = this.createPost();
        const response = await fetch("http://localhost:3001/posts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newPost)
        });
        if (response.ok) {
          this.$emit("post-added", newPost);
        } else {
          console.error("Erreur de publication de l'article");
        }
        
        
  
        
      },
    },
  };
  </script>
  