

<!-- components/ThemeToggle.vue -->
<template>
  <button
    @click="toggleTheme" class="focus:outline-none"
    :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <span v-if="theme === 'dark'"><Icon name="material-symbols:mode-night-rounded" style="color: gold;"/>️</span>
    <span v-else><Icon name="material-symbols:sunny" style="color: skyblue;"/>️</span>
  </button>
</template>

<script setup>

const theme = ref('dark');

const setTheme = (newTheme) => {
  theme.value = newTheme;
  if (newTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  // Optionally, save the preference to localStorage
  localStorage.setItem('theme', newTheme);
};

const toggleTheme = () => {
  setTheme(theme.value === 'dark' ? 'light' : 'dark');
};

onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    // Optional: Use system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }
});

// Watch for changes in the theme and apply them
watch(theme, (newTheme) => {
  setTheme(newTheme);
});
</script>

<style scoped>
/* Optional: Add transition for smooth theme changes */
html {
  transition: background-color 0.3s, color 0.3s;
}
</style>

