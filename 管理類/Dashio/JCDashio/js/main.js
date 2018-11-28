function addTab(){
  var idVal = " "+event.timeStamp
  var txt1 = "<li class=\""+idVal+"\"><a data-toggle=\"tab\" href=\"#test3\">test3</a></li>";
  var TabContent = "<div id=\"test\" class=\"tab-pane"+idVal+"\">\n" +
    "              <div class=\"row\">\n" +
    "                <div class=\"col-md-12\">\n" +
    "                  網頁內容_test\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>";
  var closeBtn = "<button type=\"button\" class=\"btn btn-light\" onclick=\"$('."+idVal+"').remove();\"><i class=\"fa fa-times\"></i>關閉分頁</button>";
  $(".jcTabTitle").append(txt1);
  $(".jcTabContent").append(TabContent,closeBtn);
}
