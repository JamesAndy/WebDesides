//參數宣告
//新增目標
var tabs = $( "#tabs" ).tabs();
var tabTitle = $( "#tab_title" ),
  tabContent = $( "#tab_content" ),
  tabTemplate = "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>",
  tabCounter = 1;
// Actual addTab function: adds new tab using the input from the form above
function addTab(tabTitleVal,tabContrntUrl) {
  if(tabCounter<20){
    var label = tabTitleVal || "Tab " + tabCounter,
      id = "tabs-" + tabCounter,
      li = $( tabTemplate.replace( /#\{href\}/g, "#" + id ).replace( /#\{label\}/g, label ) ),
      tabContentHtml = tabContent.val() || "Tab " + tabCounter + " content.";

    tabs.find( ".ui-tabs-nav" ).append( li );
    tabs.append( "<div id='" + id + "'><p>" +
    "<iframe class='ifromDataMain'  frameborder='0' src='"+tabContrntUrl+"' ></iframe>"
     + "</p></div>" );
    tabs.tabs( "refresh" );
    tabCounter++;
  }else{
    alert('請關閉一些分頁');
  }
}


  $( function() {
    // Close icon: removing the tab on click
    tabs.on( "click", "span.ui-icon-close", function() {
      var panelId = $( this ).closest( "li" ).remove().attr( "aria-controls" );
      $( "#" + panelId ).remove();
      tabs.tabs( "refresh" );
    });

    tabs.on( "keyup", function( event ) {
      if ( event.altKey && event.keyCode === $.ui.keyCode.BACKSPACE ) {
        var panelId = tabs.find( ".ui-tabs-active" ).remove().attr( "aria-controls" );
        $( "#" + panelId ).remove();
        tabs.tabs( "refresh" );
      }
    });
  });
