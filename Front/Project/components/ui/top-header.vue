<template>
  <header >
    <logo></logo>
  </header>
</template>

<script>
import logo from "@/components/ui/logo";

export default {
  name: "top-header",
  components: {
    logo
  }
}
</script>

<style lang="scss" scoped>
header{
  width: 100%;
  background: #2ABBB6;
  padding: 10px 20px;

}
</style>
