exports.vdSourceClean = {
  name: 'vdSourceClean',
  displayName: '网址参数清理 - vd_source',
  setup: ({ addData }) => {
    addData('urlParamsClean.params', params => params.push('vd_source'))
  },
}
