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
  //获取九宫格数据的方法
  getGridList(){
      wx.request({
        url: 'https://www.escook.cn/categories',
        method:'GET',
        success:(res)=>{
          console.log(res)
          this.setData({
            gridList:res.data
          })
        }
      })
  },
  /**
   * 页面的初始数据
   */
  data: {
    //存放轮播图数据数组
    swiperList:[],
    //存放九宫格的数据数组
    gridList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 页面加载调用方法
    this.getSwiperList()
    this.getGridList()
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