<template>
  <ve-map :data="chartData" :settings="chartSettings"></ve-map>
</template>

<script>
  export default {
    created: function () {
      this.chartData = {
        columns: ['位置', 'GDP'],
        rows: [
          { '位置': '吉林', 'GDP': 123 },
          { '位置': '北京', 'GDP': 1223 },
          { '位置': '上海', 'GDP': 2123 },
          { '位置': '浙江', 'GDP': 4123 },
          { '位置': '湖南', 'GDP': 1123 }
        ]
      }
      this.chartSettings = {
        position: 'china',
        label: false,
        itemStyle: {
          normal: {
            borderColor: '#00f'
          }
        },
        zoom: 1.2
      }
    }
  }
</script>