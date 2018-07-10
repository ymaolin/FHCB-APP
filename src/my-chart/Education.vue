<template>
  <ve-histogram :data="chartData" :settings="chartSettings"></ve-histogram>
</template>

<script>
  export default {
    created: function () {
      this.chartData = {
        columns: ['education', 'resume'],
        rows: [
          { 'education': '小学', 'resume': 123 },
          { 'education': '初中', 'resume': 1223},
          { 'education': '高中', 'resume': 2123},
          { 'education': '本科', 'resume': 4123},
          { 'education': '硕士', 'resume': 3123},
          { 'education': '博士', 'resume': 1123}
        ]
      }
      this.chartSettings = {
        labelMap: {
          resume: '人数',
        }
      }
    }
  }
</script>