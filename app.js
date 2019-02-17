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
        'lang': 'English',
        'index': 0,
        'chinese': '英文'
      },
      {
        'lang': 'Chinese',
        'index': 1,
        'chinese': '中文'
      },
      {
        'lang': 'Japanese',
        'index': 2,
        'chinese': '日语'
      },
      {
        'lang': 'Korean',
        'index': 3,
        'chinese': '韩语'
      },
      {
        'lang': 'French',
        'index': 4,
        'chinese': '法语'
      },
      {
        'lang': 'Spanish',
        'index': 5,
        'chinese': '西班牙语'
      },
      {
        'lang': 'Arabic',
        'index': 6,
        'chinese': '阿拉伯语'
      }
    ]
  }
})