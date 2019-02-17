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
    query: ''
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
