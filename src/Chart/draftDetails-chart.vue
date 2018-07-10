<template>
  <ve-pie :data="chartData"></ve-pie>
</template>

<script>
  export default {
    data () {
      return {
        chartData: {
          columns: ['形式', '访问量'],
          rows: [
            { '形式': '图片', '访问量': 1393 },
            { '形式': '视频', '访问量': 1350 },
            { '形式': '文字', '访问量': 2923 }
          ]
        }
      }
    }
  }
</script>