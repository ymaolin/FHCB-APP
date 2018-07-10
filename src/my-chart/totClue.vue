<template>
  <ve-bar :data="chartData" :settings="chartSettings"></ve-bar>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        dimension: ['媒体'],
        metrics: ['报道量']
      }
      return {
        chartData: {
          columns: ['媒体', '报道量'],
          rows: [
            { '媒体': '中国经济网', '报道量': 13},
            { '媒体': '西部网', '报道量': 30},
            { '媒体': '东方网', '报道量': 23},
            { '媒体': '长江网', '报道量': 13},
            { '媒体': '汉网', '报道量': 37},
            { '媒体': '搜狐网', '报道量': 43}
          ]
        }
      }
    }
  }
</script>