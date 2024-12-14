<template>
  <div>
    <h1>首页</h1>
    <button @click="test1">测试</button>
    <el-button type="primary">success</el-button>
  </div>
</template>
<script setup>
import { test } from '@renderer/api/test'

const test1 = async () => {
  const res = await test({keywords:'海阔天空'})
  console.log(res)


}
</script>
