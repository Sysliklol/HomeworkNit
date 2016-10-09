$(function(){
      var LIST = $('.bl-list');
      var TEMP = $(".bl-row").html();
      var TEMPRIGHT= $("#add").html();
      var LISTRIGHT =$(".bought-container");
      addItem("Помідори");
      $("#addButton").click(function (){
            var log = $(".add_inputer");
            var val = log.val();
            addItem(val);
      });
      function addItem(name) {
          var n = 1;
          var val = name;
          if (val) {
              var node = $(TEMP);
              var nodeRight = $(TEMPRIGHT);
              $(node).find('.b-product').text(val);
              $(node).find('.bl-label').text(n);
              $(nodeRight).find('.item-bought').text(val);
              $(nodeRight).find('.item-bought-count').text(n);
              $(node).find('.bl-x').click(function () {
                  node.remove();
                  nodeRight.remove();
              });
              LIST.append(node);
              LISTRIGHT.append(nodeRight);
              $(node).find('.bl-plus').click(function () {
                  $(node).find('.bl-label').text(n++);
                  n--;
                  $(nodeRight).find('.item-bought-count').text(n++);
              });
              $(node).find('.bl-minus').click(function () {
                  if (n > 1) {
                      $(node).find('.bl-label').text((n - 1));
                      $(nodeRight).find('.item-bought-count').text((n - 1));
                      n--;
                  }
              });
          }
      }
});