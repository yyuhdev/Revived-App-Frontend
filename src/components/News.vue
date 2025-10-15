<script>
export default {
  name: "News",
  data() {
    return {
      news: [
        {
          title: "Test wow wow",
          text: "test",
          link: "",
        },
        {
          title: "Test wow wow 2",
          text: "test 2",
          link: "",
        },
        {
          title: "Test wow wow 3",
          answer: "test 3",
          link: "",
        },
        {
          title: "Test wow wow 4",
          text: "test 4",
          link: "",
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
          class=" active:scale-95 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-5 flex flex-col transition-transform duration-300 hover:scale-[1.02] hover:bg-white/10 hover:shadow-lg"
      >
        <div class="flex flex-row gap-3">
          <div class="bg-amber-600/20 h-9 w-9 rounded-xl flex items-center justify-center border-2 border-amber-700/20">
            <i class="fa-solid fa-bullhorn m-auto text-amber-600 text-2xl"></i>
          </div>
          <h2 class="text-lg font-semibold my-auto">{{ post.title }}</h2>
        </div>
        <div class="min-w-full min-h-[1px] bg-white/10 mt-3 mb-3">
        </div>
        <p class="text-sm text-slate-400 line-clamp-3">{{ post.text }}</p>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>