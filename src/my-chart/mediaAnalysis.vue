<template>
  <ve-radar :data="chartData" :settings="chartSettings"></ve-radar>
</template>

<script>
  export default {
    created: function () {
      this.chartData = {
        columns: ['媒体', '销售额-1季度', '销售额-2季度', '占比', '其他'],
        rows: [
          { '媒体': '媒体类型', '销售额-1季度': 1523, '销售额-2季度': 1523, '占比': 0.12, '其他': 100 }
        ]
      }
      this.chartSettings = {
        labelMap: {
          '媒体': 'date',
          '销售额-1季度': 'sales-1',
          '销售额-2季度': 'sales-2',
          '占比': 'percent',
          '其他': 'other'
        }
      }
    }
  }
</script>