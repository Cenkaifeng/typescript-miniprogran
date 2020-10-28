"use strict";
Page({
    data: {
        active: "index",
        _app: getApp()
    },
    onLoad: function () {
        this.testLeanCloud();
    },
    testLeanCloud: function () {
        var TestObject = this.data._app.AV.Object.extend('TestObject');
        var testObject = new TestObject();
        testObject.set('words', 'Hello world!');
        testObject.save().then(function (testObject) {
            console.log('保存成功。', testObject);
        });
    },
    onChange: function (e) {
        console.log('hei');
        console.log(e);
        this.setData({ active: e.detail });
        console.log(this.data.active);
        wx.showToast({
            title: "\u70B9\u51FB\u6807\u7B7E " + (e.detail + 1),
            icon: 'none',
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBSUEsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osTUFBTSxFQUFFLE9BQU87UUFDZixJQUFJLEVBQUUsTUFBTSxFQUFjO0tBQzNCO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUV2QixDQUFDO0lBQ0QsYUFBYSxFQUFiO1FBQ0UsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDakUsSUFBTSxVQUFVLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUNwQyxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztRQUN0QyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsVUFBZTtZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRyxVQUFVLENBQUMsQ0FBQTtRQUNuQyxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxRQUFRLEVBQVIsVUFBUyxDQUFNO1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUIsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNYLEtBQUssRUFBRSwrQkFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBRTtZQUM3QixJQUFJLEVBQUUsTUFBTTtTQUNiLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbmRleC50c1xuLy8g6I635Y+W5bqU55So5a6e5L6LXG5cblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBhY3RpdmU6IFwiaW5kZXhcIixcbiAgICBfYXBwOiBnZXRBcHA8SUFwcE9wdGlvbj4oKVxuICB9LFxuICAvLyDkuovku7blpITnkIblh73mlbBcbiAgb25Mb2FkKCkge1xuICAgIHRoaXMudGVzdExlYW5DbG91ZCgpO1xuXG4gIH0sXG4gIHRlc3RMZWFuQ2xvdWQoKSB7XG4gICAgY29uc3QgVGVzdE9iamVjdCA9IHRoaXMuZGF0YS5fYXBwLkFWLk9iamVjdC5leHRlbmQoJ1Rlc3RPYmplY3QnKTtcbiAgICBjb25zdCB0ZXN0T2JqZWN0ID0gbmV3IFRlc3RPYmplY3QoKTtcbiAgICB0ZXN0T2JqZWN0LnNldCgnd29yZHMnLCAnSGVsbG8gd29ybGQhJyk7XG4gICAgICB0ZXN0T2JqZWN0LnNhdmUoKS50aGVuKCh0ZXN0T2JqZWN0OiBhbnkpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCfkv53lrZjmiJDlip/jgIInLCAgdGVzdE9iamVjdClcbiAgICB9KVxuICB9LFxuICBvbkNoYW5nZShlOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdoZWknKVxuICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgIHRoaXMuc2V0RGF0YSh7IGFjdGl2ZTogZS5kZXRhaWx9KTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YS5hY3RpdmUpO1xuICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgdGl0bGU6IGDngrnlh7vmoIfnrb4gJHtlLmRldGFpbCArIDF9YCxcbiAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgfSk7XG4gIH0sXG59KVxuIl19