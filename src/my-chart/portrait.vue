<template>
  <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
</template>

<script>
  export default {
    created: function () {
      this.chartData = {
        columns: ['性别', '人数', '占比'],
        rows: [
          { '性别': '男', '人数': 123, '占比': 7  },
          { '性别': '女', '人数': 1223, '占比': 3 }
        ]
      }
    }
  }
</script>