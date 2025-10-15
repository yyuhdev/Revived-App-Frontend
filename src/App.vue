<script>
export default {
  name: "App",
  data() {
    return {
      menuOpen: false,
    };
  },
};
</script>

<template>
  <header class="h-16 p-5 text-white border-b border-white/10 flex items-center">
    <div class="flex flex-row w-full items-center">
      <div class="w-1/2 flex items-center">
        <img src="@/assets/logo.png" alt="logo" class="max-h-10" />
      </div>

      <div class="w-1/2 flex justify-end items-center">
        <button class="active:scale-95 transition-all" @click="menuOpen = !menuOpen">
          <i class="fa-solid fa-bars scale-150"></i>
        </button>
      </div>
    </div>
  </header>

  <transition name="slide">
    <div
        v-if="menuOpen"
        class="absolute right-0 top-0 w-2/3 p-5 bg-black/40 backdrop-blur-xl border-l border-white/10 h-full z-100"
    >
      <div class="flex justify-end">
        <button class="active:scale-95 transition-all" @click="menuOpen = !menuOpen">
          <i class="fa-solid fa-xmark scale-150 text-white"></i>
        </button>
      </div>

      <div class="text-white flex flex-col">
        <router-link
            to="/"
            @click="menuOpen = false"
            class="flex items-center gap-3 py-[0.875rem] px-4 text-slate-200 no-underline text-base font-medium rounded-lg transition-all duration-200 ease-in-out bg-transparent hover:bg-slate-500/10 hover:text-white hover:pl-5 active:bg-slate-500/15 active:scale-95"
        >
          <i class="fa-solid fa-house text-xl w-6 text-center"></i>
          <span>Home</span>
        </router-link>
        <router-link
            to="/news"
            @click="menuOpen = false"
            class="flex items-center gap-3 py-[0.875rem] px-4 text-slate-200 no-underline text-base font-medium rounded-lg transition-all duration-200 ease-in-out bg-transparent hover:bg-slate-500/10 hover:text-white hover:pl-5 active:bg-slate-500/15 active:scale-95"
        >
          <i class="fa-solid fa-newspaper text-xl w-6 text-center"></i>
          <span>News</span>
        </router-link>
        <router-link
            to="/help"
            class="flex items-center gap-3 py-[0.875rem] px-4 text-slate-200 no-underline text-base font-medium rounded-lg transition-all duration-200 ease-in-out bg-transparent hover:bg-slate-500/10 hover:text-white hover:pl-5 active:bg-slate-500/15 active:scale-95"
        >
          <i class="fa-solid fa-circle-question text-xl w-6 text-center"></i>
          <span>Help</span>
        </router-link>
      </div>
    </div>
  </transition>

  <router-view @click="menuOpen = false"></router-view>
</template>


<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from {
  transform: translateX(100%);
}
.slide-enter-to {
  transform: translateX(0%);
}
.slide-leave-from {
  transform: translateX(0%);
}
.slide-leave-to {
  transform: translateX(100%);
}
</style>