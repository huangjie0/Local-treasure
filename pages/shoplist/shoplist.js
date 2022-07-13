// pages/shoplist/shoplist.js
Page({
  //获取商品方法
  getshoplist(cb){
    this.setData({
      //打开节流阀
      isloading:true
    })
    //展示loading效果，发请求之前开启效果
    wx.showLoading({
      title: '正在加载中',
    })
    wx.request({
      url: `https://www.escook.cn/categories/${this.data.query.id}/shops`,
      method:'GET',
      data:{
        _page:this.data.page,
        _limit:this.data.pagesize
      },
      success:(res)=>{
        //成功的回调函数
        //将成功的结果保存到shoplist中存储
        this.setData({
          shopList:[...this.data.shopList,...res.data],
          //总数量
          total:res.header['X-Total-Count'] - 0
        })
      },
      //完成时候所调用的关闭loading效果
      complete:()=>{
        //隐藏弹框效果
        wx.hideLoading()
        //完成之后关闭节流阀
        this.setData({
          isloading:false
        })
        // wx.stopPullDownRefresh()
        cb && cb()
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    query:{},
    //初始化数据
    shopList:[],
    // 请求第几页
    page:1,
    //一页多少条数据
    pagesize:10,
    //总数据
    total:0,
    //定义节流阀
    isloading:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      query:options
    }),
    this.getshoplist()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    //设置页面标题
    wx.setNavigationBarTitle({
      title: this.data.query.title,
    })
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
    //重置一些页数
    this.setData({
      page:1,
      shopList:[],
      total:0
    })
    //重新发请求渲染页面
    this.getshoplist(()=>{
      wx.stopPullDownRefresh()
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    if(this.data.page*this.data.pagesize >= this.data.total){
      //如果没有下一页的数据了
      return wx.showToast({
        title: '已经到顶啦！',
        icon:'none'
      })
    }
    if(this.data.isloading) return
    this.setData({
      //让其页码+1
      page:this.data.page + 1
    })
    //重新发请求
    this.getshoplist()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})