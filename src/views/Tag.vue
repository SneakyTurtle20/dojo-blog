<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="postsWithTag" />
      <TagCloud :posts="posts"/>
    </div>
    <div v-else><Spinner /></div>
  </div>
</template>

<script>
import { computed } from 'vue'
import getPosts from '../composables/getPosts'
import TagCloud from '../components/TagCloud.vue'
import Spinner from '../components/Spinner.vue'
import PostList from '../components/PostList.vue'
import { useRoute } from 'vue-router'
export default {
  props: ['tag'],
  components: { PostList, Spinner, TagCloud },
  setup(props) {
    const route = useRoute()
    const { posts, error, load } = getPosts()

    load()

    const postsWithTag = computed(() => {
      return posts.value.filter(p => p.tags.includes(route.params.tag))
    })

    return {  posts, error, postsWithTag }
  }
}
</script>

<style>
  .tag {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  .layout {
      display: grid;
      grid-template-columns: 3fr 1fr;
      gap: 20px
    }
</style>