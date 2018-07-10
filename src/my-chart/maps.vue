<template>
  <ve-map :data="chartData" :settings="chartSettings"></ve-map>
</template>

<script>
  export default {
    created: function () {
      this.chartData = {
        columns: ['位置', 'GDP'],
        rows: [
          { '位置': '延庆区', 'GDP': 123 },
          { '位置': '密云区', 'GDP': 1223 },
          { '位置': '平谷区', 'GDP': 2123 },
          { '位置': '海淀区', 'GDP': 4123 }
        ]
      }
      this.chartSettings = {
        position: 'province/beijing'
      }
    }
  }
</script>