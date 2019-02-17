// pages/history/history.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    history: [],
    state: ''
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      history: wx.getStorageSync('history')
    })
    let history = this.data.history
    if (history && history.length > 0) {
      this.setData({
        state: 'stiky'
      })
    } else {
      this.setData({
        state: ''
      })
    }
  },

  onTapReLaunch: function (e) {
    console.log('data-set', e.currentTarget.dataset)
    let url = `/pages/index/index?query=${e.currentTarget.dataset.query}`
    wx.reLaunch({
      url
    })
  }
})