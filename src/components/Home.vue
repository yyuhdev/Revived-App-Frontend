<script>
export default {
  name: "Home",
};
</script>

<template>

  <main class="text-white p-5">
    <div class="flex flex-col mx-auto items-center">
      <h1 class="text-2xl font-semibold">Welcome Back</h1>
      <p class="text-slate-400 text-sm">Let’s explore what’s new today!</p>
    </div>

    <div class="mt-10 flex flex-col gap-5">
      <div
          class="bg-white/2 border border-white/10 backdrop-blur-md rounded-xl p-5 flex flex-col items-start"
      >
        <i class="fa-solid fa-bullhorn text-red-500 text-2xl mb-3"></i>
        <h2 class="text-lg font-semibold">Latest News</h2>
        <p class="text-sm text-slate-400 mb-3">Read our latest changelogs and news</p>
        <button class="bg-white text-black font-semibold px-4 py-2 rounded-xl active:scale-95 transition-all">
          View
        </button>
      </div>

      <div
          class="bg-white/2 border border-white/10 backdrop-blur-md rounded-xl p-5 flex flex-col items-start"
      >
        <i class="fa-solid fa-person text-yellow-400 text-2xl mb-3"></i>
        <h2 class="text-lg font-semibold">Support Us</h2>
        <p class="text-sm text-slate-400 mb-3">Support us by spreading the word</p>
        <button class="bg-white text-black font-semibold px-4 py-2 rounded-xl active:scale-95 transition-all">
          View
        </button>
      </div>

      <div
          class="bg-white/2 border border-white/10 backdrop-blur-md rounded-xl p-5 flex flex-col items-start"
      >
        <i class="fa-brands fa-discord text-blue-500 text-2xl mb-3"></i>
        <h2 class="text-lg font-semibold">Join Us</h2>
        <p class="text-sm text-slate-400 mb-3">Join our Community today</p>
        <button class="bg-white text-black font-semibold px-4 py-2 rounded-xl active:scale-95 transition-all">
          Join
        </button>
      </div>
    </div>
  </main>
</template>


<style scoped>
</style>