<script>
export default {
  name: "News",
  data() {
    return {
      news: [
        {
          title: "Test wow wow",
          answer: "test",
        },
        {
          title: "Test wow wow 2",
          answer: "test 2",
        },
        {
          title: "Test wow wow 3",
          answer: "test 3",
        },
        {
          title: "Test wow wow 4",
          answer: "test 4",
        },
      ]
    }
  }
}
</script>

<template>
  <main class="text-white p-5">
    <div class="flex flex-col gap-5">
      <div
          v-for="(post, index) in news"
          :key="index"
          class="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-5 flex flex-col transition-transform duration-300 hover:scale-[1.02] hover:bg-white/10 hover:shadow-lg"
      >
        <h2 class="text-lg font-semibold mb-2">{{ post.title }}</h2>
        <p class="text-sm text-slate-400 line-clamp-3">{{ post.answer }}</p>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>