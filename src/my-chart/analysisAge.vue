<template>
  <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
</template>

<script>
  export default {
    created: function () {
      this.chartData = {
        columns: ['age', '人数'],
        rows: [
          { 'age': '13岁以下', '人数': 1123},
          { 'age': '13-18岁', '人数': 1223},
          { 'age': '19-24岁', '人数': 2123},
          { 'age': '25-34岁', '人数': 4123},
          { 'age': '35-50岁', '人数': 3123},
          { 'age': '50岁以上', '人数': 7123}
        ]
      }
      this.chartSettings = {
        labelMap: {
        }
      }
    }
  }
</script>