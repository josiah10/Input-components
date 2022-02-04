<template>
<div>
    <Leftside/>
    <Rightside/>

</div>

</template>

<script>
import Leftside from "./components/Leftside";
import Rightside from "./components/Rightside";

export default {
  name: 'App',
  components: {
      Leftside,
      Rightside
  }
}
</script>

<style>

</style>
