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
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      curLang: app.globalData.curLang
    })
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
      this.setData({
        translateResult: data.trans_result[0].dst
      })
      let history = wx.getStorageSync('history') || []
      history.push(data.trans_result[0])
      history.length = history.length > 10 ? 10 : history.length
      wx.setStorageSync('history', history)
    }, error=> {
      console.log(error)
    })
  },
  onTapClose: function () {
    this.setData({
      query: '',
      hideCloseIcon: true
    })
  }
})
