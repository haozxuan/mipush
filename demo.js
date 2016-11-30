/**
 * Created by yiban on 2016/10/14.
 */

var MiPush = require('./index');

var message = new MiPush.Message();
message.title = '这是一条测试推送的title';
message.description = '这是一条测试推送的消息';
message.passThrough = 0;
message.notifyType = -1;
message.payload = JSON.stringify({
  name: 'zhaoxuan',
  age : 12
});
message.extra('badge', 3);
// message.extra('ticker', 'this is a ticker text');
// message.extra('notify_effect', 1);//通知栏点击后打开app的Launcher Activity。
// message.extra('notify_effect', 3);//通知栏点击后打开网页（开发者还需要传入extra.web_uri）。
// message.extra('web_uri', 'http://www.yiban.cn');//通知栏点击后打开app的Launcher Activity。
// message.extra('Constants.EXTRA_PARAM_NOTIFY_FOREGROUND', '0');//关闭app在前台时的通知弹出
// message.extra('callback', 'http://117.135.145.208/devMessageCallback');//TODO
// message.extra('callback.param', 123);//noticeId

//send message
var MiPushSender = new MiPush.Sender({
  appSecret: 'fBJLWSRtnogZTe9wLAAEYg=='
});
MiPushSender.sendToAlias(5002286, message, function (err, res, body) {
  console.log('err , res, body is', err, body);
});

//get stats
// var MiPushStats = new MiPush.Stats({
//   appSecret: 'fBJLWSRtnogZTe9wLAAEYg==',
//   packageName: 'com.yiban.app'
// });
//
// var start = 20161103;
// var end = 20161104;
// MiPushStats.getStats(start, end, function (err, res, data) {
//   console.log('err , res, data is', err, data);
// });

// get tracer
// var MiPushTracer = new MiPush.Tracer({
//   appSecret: 'fBJLWSRtnogZTe9wLAAEYg=='
// });
//
// var msgId = 'acm36b354786731498506K';
// MiPushTracer.getMessageStatus(msgId, function (err, res, data) {
//   console.log('err , res, data', err, data);
// });

//get Feedback
// var MiPushFeedback = new MiPush.Feedback({
//     appSecret: 'fBJLWSRtnogZTe9wLAAEYg=='
// });
//
// MiPushFeedback.getInvalidRegIds(function (err, res, data) {
//   console.log('err, data is', err, data);
// });
//
// MiPushFeedback.getInvalidAlias('FtOQ1DLIiAhk4/qDv8Ylo3ZR6HOiSZURbcy85zwwfE0=',function (err, res, data) {
//   console.log('err, data is', err, data);
// });