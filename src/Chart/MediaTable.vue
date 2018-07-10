<template>
  <ve-radar :data="chartData" :settings="chartSettings"></ve-radar>
</template>

<script>
  module.exports = {
    created: function () {
      this.chartData = {
        columns: ['日期', '销售额-1季度', '销售额-2季度', '占比', '其他'],
        rows: [
          { '日期': '1月1日', '销售额-1季度': 1523, '销售额-2季度': 1523, '占比': 0.12, '其他': 100 },
          { '日期': '1月2日', '销售额-1季度': 1223, '销售额-2季度': 1523, '占比': 0.345, '其他': 100 },
          { '日期': '1月3日', '销售额-1季度': 2123, '销售额-2季度': 1523, '占比': 0.7, '其他': 100 },
          { '日期': '1月4日', '销售额-1季度': 4123, '销售额-2季度': 1523, '占比': 0.31, '其他': 100 }
        ]
      }
      this.chartSettings = {
        dimension: ['日期'],
        metrics: ['销售额-1季度', '销售额-2季度', '占比'],
        dataType: { '占比': 'percent' }
      }
    }
  }
</script>