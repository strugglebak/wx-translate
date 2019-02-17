//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    this.globalData.curLang = wx.getStorageSync('curLang') 
    || this.globalData.langList[0]
  },
  globalData: {
    curLang: {},
    langList: [
      {
        'lang': 'en',
        'index': 0,
        'chinese': '英文'
      },
      {
        'lang': 'zh',
        'index': 1,
        'chinese': '中文'
      },
      {
        'lang': 'jp',
        'index': 2,
        'chinese': '日语'
      },
      {
        'lang': 'kor',
        'index': 3,
        'chinese': '韩语'
      },
      {
        'lang': 'fra',
        'index': 4,
        'chinese': '法语'
      },
      {
        'lang': 'spa',
        'index': 5,
        'chinese': '西班牙语'
      },
      {
        'lang': 'ara',
        'index': 6,
        'chinese': '阿拉伯语'
      }
    ]
  }
})