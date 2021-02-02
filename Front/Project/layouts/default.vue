<template>
  <div>
    <topHeader></topHeader>
    <Nuxt></Nuxt>
  </div>
</template>

<script>
import topHeader from '@/components/ui/top-header'

export default {
  name: "default",
  data() {
    return {}
  },
  components: {
    topHeader
  }
}
</script>
