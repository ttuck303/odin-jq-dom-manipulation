$( document ).ready(function(){
  var content_panel = $('#content');
  content_panel.append("<h1>KrayOstrich Kafe</h1><br>");
  content_panel.append("<img src='http://slappedham.com/wp-content/uploads/2014/06/Very-Funny-Animal-Faces-13.jpg'><br>");
  content_panel.append("<button type='button' id='home' style='font-weight:bold'>Home</button>");
  content_panel.append("<button type='button' id='menu'>Menu</button>");
  content_panel.append("<button type='button' id='contact'>Contact</button>");
  content_panel.append("<div id='dynamic'><h3>Welcome</h3></div>");
  var dynamic_panel = $('#dynamic');


  $( 'button' ).click(function(){
    $('button').css("font-weight", "Normal");
    $(this).css("font-weight", "Bold");
    switch ($( this ).attr('id')) {
      case 'home':
        dynamic_panel.empty().append("<h3>Welcome</h3>");
        break;
      case 'menu':
        dynamic_panel.empty().append("<h3>Menu</h3><br><ul><li>Ostrich Omelette</li><li>Road Runner Ribeye</li><li>Falcon Fondue</li></ul>");
        break;
      case 'contact':
        dynamic_panel.empty().append("<h3>Contact</h3><h4>By Phone: 555 eat birds</h4><h4>999 West Fake Street</h4><h4>Billings, MT</h4>");
        break;
      }
  });
});

