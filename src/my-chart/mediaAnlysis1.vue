<template>
  <ve-bar :data="chartData" :settings="chartSettings"></ve-bar>
</template>

<script>
  export default {
    created: function () {
      this.chartData = {
        columns: ['网站名', '成本', '利润'],
        rows: [
          { '网站名': '搜狐网', '成本': 123, '利润': 3 },
          { '网站名': '世界网', '成本': 1223, '利润': 6 },
          { '网站名': '汉网', '成本': 2123, '利润': 90 },
          { '网站名': '华龙网', '成本': 4123, '利润': 12 },
          { '网站名': '和讯网', '成本': 3123, '利润': 15 },
          { '网站名': '长江网', '成本': 7123, '利润': 20 },
          { '网站名': '东方网', '成本': 5223, '利润': 20 }
        ]
      }
      this.chartSettings = {
        metrics: ['利润'],
        dataOrder: {
          label: '利润',
          order: 'desc'
        }
      }
    }
  }
</script>