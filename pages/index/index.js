//index.js
import {translate} from '../../utils/baidu-translate-api.js'

//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    curLang: {},
    hideCloseIcon: true,
    query: '',
    translateResult: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('options query', options.query)
    if (options.query) {
      this.setData({
        query: options.query
      })
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (this.data.curLang.lang !== app.globalData.curLang.lang) {
      this.setData({
        curLang: app.globalData.curLang
      })
      this.onConfirm();
    } 
  },

  onInput: function (e) {
    this.setData({
      query: e.detail.value
    })
    if (this.data.query.length > 0) {
      this.setData({
        hideCloseIcon: false
      })
    } else {
      this.setData({
        hideCloseIcon: true
      })
    }
  },
  onConfirm: function () {
    if (!this.data.query) { return }
    translate(
      this.data.query,
      {
        from: 'auto',
        to: this.data.curLang.lang
      }
    ).then(data=> {
      console.log(data)
      let history = wx.getStorageSync('history') || []
      let resultArray = []
      for (let i=0; i<data.trans_result.length; i++) {
        resultArray.push(data.trans_result[i])
      }
      console.log(resultArray)
      let src = []
      let dst = []
      resultArray.forEach(key=> {
        src.push(key['src'])
        dst.push(key['dst'])
      })
      let queryString = src.join('\n')
      let resultString = dst.join('\n')
      console.log(queryString, resultString)

      this.setData({
        translateResult: resultString
      })

      history.push({
        query: queryString,
        result: resultString
      })
      history.length = history.length > 10 ? 10 : history.length
      wx.setStorageSync('history', history)
    }, error=> {
      console.log(error)
    })
  },
  onTapClose: function () {
    this.setData({
      query: '',
      hideCloseIcon: true,
      translateResult: ''
    })
  }
})
