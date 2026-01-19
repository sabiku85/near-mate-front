<script setup
        lang="ts">
        // const appConfig = useAppConfig();
        // const title = appConfig.title;

        useHead({
          htmlAttrs: {
            lang: "pl",
          },
          // title,
        });
</script>

<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <UMain as="main">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>
  </UApp>
</template>