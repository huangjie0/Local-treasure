// pages/home/home.js
Page({
  // 获取轮播图数据方法
  getSwiperList(){
    wx.request({
      url: 'https://www.escook.cn/slides',
      method:'GET',
      success:(res)=>{
        this.setData({
          swiperList:res.data
        })
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    //存放轮播图数据数组
    swiperList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 页面加载调用方法
    this.getSwiperList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})