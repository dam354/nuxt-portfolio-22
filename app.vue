<script setup>
  import { useDark, useToggle } from "@vueuse/core";
  import IconSun from "~icons/ri/sun-fill";
  import IconMoon from "~icons/ri/moon-clear-fill";
  import IconLink from "~icons/ri/external-link-fill";
  useHead({
    title: "Dan Mennella - Frontend Developer",
    viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    charset: "utf-8",
    meta: [{ name: "Dan Mennella - Frontend Developer", content: "Dan Mennella - Frontend Developer - Portfolio website" }],
    bodyAttrs: {
      class: "bg-white dark:bg-black",
    },
    link: [
      {
        rel: "icon",
        type: "image/png",
        href: "/nuxt.png",
      },
    ],
  });

  const { data } = await useAsyncData("home", () => queryContent("/").find());

  const isDark = useDark();
  const toggleDark = useToggle(isDark);
</script>
<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6">
    <nav class="flex justify-between items-start">
      <div>
        <h1 class="text-3xl">Dan Mennella</h1>
        <h2 class="text-xl">Frontend Developer</h2>
        <p class="tracking-wide"><a href="https://www.linkedin.com/in/dan-mennella/">LinkedIn</a> &bull; <a href="/img/Dan Mennella Resume.pdf">Resume</a></p>
      </div>
      <button @click="toggleDark()">
        <IconSun v-if="isDark"></IconSun>
        <IconMoon v-else></IconMoon>
      </button>
    </nav>

    <section>
      <h2 class="text-2xl my-6">Projects</h2>

      <ul role="list" class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
        <li v-for="project in data[0].body" :key="project.title">
          <div class="space-y-4">
            <div class="aspect-w-16 aspect-h-9">
              <a :href="project.url" class="block no-underline h-full w-full">
                <img class="rounded-lg object-cover shadow-lg" :src="project.cover" alt="" />
              </a>
            </div>
            <div class="space-y-2">
              <div class="space-y-1 font-medium leading-6">
                <a :href="project.url" class="flex justify-start items-baseline no-underline h-full w-full">
                  <h3>{{ project.title }}</h3>
                  <IconLink class="ml-4"></IconLink>
                </a>
                <p>{{ project.description }}</p>
              </div>
              <ul class="flex flex-wrap justify-start">
                <li v-for="tech in project.tech" class="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-teko tracking-wider text-gray-800 mr-1 mb-1 d">
                  {{ tech }}
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<style>
  h1,
  h2,
  h3,
  h4 {
    @apply font-poppins tracking-wider;
  }
  p {
    @apply font-teko tracking-wide text-lg;
  }

  h1,
  h2,
  h3,
  h4,
  p,
  button,
  a {
    @apply text-black dark:text-white;
  }
</style>
