<script setup lang="ts">
import { cn } from '@/lib/utils'
</script>

<template>
  <nav :class="cn('flex items-center space-x-4 lg:space-x-6', $attrs.class ?? '')">
    <router-link to="/" class="text-sm font-medium transition-colors hover:text-primary">
      MGCCPP
    </router-link>
    <router-link to="/mgc" class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
      MGC
    </router-link>
    <router-link to="/analyse" class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
      Analyse
    </router-link>
    <router-link to="/qa" class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
      Q&A
    </router-link>
    <router-link to="/solution" class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
      Details
    </router-link>
  </nav>
</template>
