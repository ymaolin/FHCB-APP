<template>
  <ve-radar :data="chartData"></ve-radar>
</template>

<script>
  export default {
    data () {
      return {
        chartData: {
          columns: ['日期', '核心媒体', '一级媒体', '二级媒体','三级媒体'],
          rows: [
            { '日期': '媒体分布', '核心媒体': 39, '一级媒体': 109, '二级媒体': 32 ,'三级媒体':123}
          ]
        }
      }
    }
  }
</script>