<script>
export default {
  name: "Help",
}
</script>

<template>
  <main class="text-white p-5">
    <div class="flex flex-col mx-auto items-center mb-8">
      <h1 class="text-2xl font-semibold">Help Center</h1>
      <p class="text-slate-400 text-sm">Find answers and get support</p>
    </div>

    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Get Support</h2>
      <div class="flex flex-col gap-5">
        <div
            class="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-5 flex flex-col"
        >
          <div class="flex flex-row gap-3">
            <div class="bg-yellow-600/20 h-9 w-9 rounded-xl flex items-center justify-center border-2 border-yellow-700/20">
              <i class="fa-solid fa-ticket m-auto text-yellow-600 text-2xl"></i>
            </div>
            <h2 class="text-lg font-semibold my-auto">Ticket</h2>
          </div>
          <div class="min-w-full min-h-[1px] bg-white/10 mt-3 mb-3">
          </div>
          <p class="text-sm text-slate-400 line-clamp-3">Create a Ticket on our Discord Server</p>
        </div>
        <div
            class="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-5 flex flex-col"
        >
          <div class="flex flex-row gap-3">
            <div class="bg-pink-600/20 h-9 w-9 rounded-xl flex items-center justify-center border-2 border-pink-700/20">
              <i class="fa-solid fa-envelope m-auto text-pink-600 text-2xl"></i>
            </div>
            <h2 class="text-lg font-semibold my-auto">Email</h2>
          </div>
          <div class="min-w-full min-h-[1px] bg-white/10 mt-3 mb-3">
          </div>
          <p class="text-sm text-slate-400 line-clamp-3">
            Got a question or need help? Reach out to us at <span class="text-slate-300 font-medium">support@revived.club</span>!
          </p>

        </div>
        <div
            class="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-5 flex flex-col"
        >
          <div class="flex flex-row gap-3">
            <div class="bg-blue-600/20 h-9 w-9 rounded-xl flex items-center justify-center border-2 border-blue-700/20">
              <i class="fa-brands fa-discord m-auto text-blue-600 text-2xl"></i>
            </div>
            <h2 class="text-lg font-semibold my-auto">Discord</h2>
          </div>
          <div class="min-w-full min-h-[1px] bg-white/10 mt-3 mb-3">
          </div>
          <p class="text-sm text-slate-400 line-clamp-3">Create a Ticket on our Discord Server</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
</style>