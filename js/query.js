$(function(){
    $.ajax({
        "url":"https://m.shanzhen.me/sz/index/smsverifyp?phone=17773464969",
        "type":"post",
        "success":callBack,
        "xhrFields": {
          withCredentials: true    // 此字段标识要跨域传数据
        },
        "error":function(){
           alert("error");
        }
      });

      function callBack(data){
        alert(data);
      }

});