$(function(){
      var LIST = $('.bl-list');
      var TEMP = $(".bl-row").html();
      var TEMPRIGHT= $(".bought-container").html();
      var LISTRIGHT =$(".add");
      var TEMPBOUGHT= $(".add-bought-container").html();
      var LISTBOUGHT =$(".addBought");
      addItem("Помідори");
      $("#addButton").click(function (){
            var log = $(".add_inputer");
            var val = log.val();
            addItem(val);
      });
      function addItem(name) {
          var n = 1;
          var check = 1;
          var val = name;
          if (val) {
              var node = $(TEMP);
              node.show();
              var nodeRight = $(TEMPRIGHT);
              nodeRight.show();
              var nodeBought = $(TEMPBOUGHT);
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
              $(node).find('.bl-buy').click(function(){
                  console.log(check);
                  if(check==1) {
                      nodeBought.show();
                      $(node).find('.bl-x').hide();
                      $(node).find('.bl-plus').hide();
                      $(node).find('.bl-minus').hide();
                      $(node).addClass('.state-bought');
                      $(node).find('.bl-buy').text("Не куплене");
                      $(nodeBought).find('.item-bought').text(val);
                      $(nodeBought).find('.item-bought-count').text(n);

                      LISTBOUGHT.append(nodeBought);
                      nodeRight.remove();
                      check = 0;

                  }
                  else{
                      $(node).find('.bl-x').show();
                      $(node).find('.bl-plus').show();
                      $(node).find('.bl-minus').show();
                      nodeBought.hide();
                      $(node).find('.bl-buy').text("Куплене");
                      check = 1;
                      LISTRIGHT.append(nodeRight);
                      nodeBought.remove();
                  }
              })
          }
      }
});