// pages/change/change.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    curLang: {},
    langList: app.globalData.langList
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      curLang: app.globalData.curLang
    })
  },

  /**
   * onTapItem--监听 change 页 item 项被 tap
   */
  onTapItem: function (e) {
    let langObject = e.currentTarget.dataset
    // 本地设置
    this.setData({
      curLang: langObject
    })
    // 全局设置
    app.globalData.curLang = langObject
    wx.switchTab({
      url: '/pages/index/index'
    })
  }
})
