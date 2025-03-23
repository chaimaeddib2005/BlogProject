<template>
    <div>
      <h1 style="color:red;text-align:center;">Bienvenue sur le Blog scientifique</h1>
      <div style="display:grid;grid-template-columns:0.75fr 0.25fr;">
        <div>
          <PostList :posts="posts" :selectedTag="selectedTag" />
        </div>
        <div>
          <TagCloud style="padding-top:2vw;" :tags="allTags" @tag-selected="filterByTag" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import PostList from "../components/PostList.vue";
  import TagCloud from "../components/TagCloud.vue";
  
  export default {
    name: "HomeView",
    components: { PostList, TagCloud },
    data() {
      return {
        posts: [], // ✅ Posts list
        selectedTag: null,
      };
    },
    async created() {
      try {
        const response = await fetch("http://localhost:3001/posts");
        this.posts = await response.json();
      } catch (error) {
        console.error("Erreur de chargement des articles:", error);
      }
    },
    computed: {
      allTags() {
        return [...new Set(this.posts.flatMap(post => post.tags))];
      },
    },
    methods: {
      filterByTag(tag) {
        this.selectedTag = tag;
      },
    
    },
  };
  </script>
  