<script setup lang="ts">
import { ref } from 'vue'
import { Button } from 'MR/ui'

</script>

<template>
  <div class="grid grid-cols-3" style="grid: row 100px;">
    <Button></Button>
    <div class="card">
      <div class="title">这是一段测试标题</div>
    </div>
    <div class="card2">这是测试2</div>
  </div>
</template>

<style lang="less" scoped>
@primary-color: #408fff;

.hoverstyle(@color: red) {
  background-color: @color;

  &:hover {
    background-color: lighten(@color, 10%);
  }
}

.card {
  .hoverstyle(@primary-color);

  .title {
    color: red;
  }
}

.card2 {
  .hoverstyle();
}
</style>