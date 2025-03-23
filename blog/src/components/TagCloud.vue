<template>
    <div v-if="tags.length">
      <h3 style="margin-left:2vw;color:blue;">Les thématiques les plus discutées</h3>
      <div class="tags-container">
        <button style="margin: 0.5rem;"
          v-for="tag in tags" 
          :key="tag" 
          @click="selectTag(tag)" 
          :class="{ active: selectedTag === tag }"
        >
          {{ tag }}
        </button>
      </div>
    </div>
    <p v-else>Chargement des tags...</p>
  </template>
  
  <script>
  export default {
    props: ["tags"], // ✅ Receive tags from parent
    data() {
      return {
        selectedTag: null, // ✅ Store the selected tag
      };
    },
    methods: {
      selectTag(tag) {
        this.selectedTag = tag;
        this.$emit("tag-selected", tag); // ✅ Emit to HomeView
      },
    },
  };
  </script>
  