$(function(){
  function appendToList(blocks){
    var list = [];
    var content, block;
    for (var i in blocks){
      block = blocks[i];
      content = '<a href="/blocks/'+ block + '">' + block + '</a>' + '<a href="#" data-block="' + block+ '"><img src="del.jpg"></a>';
      list.push($('<li>', { html: content}));
    }
    $('.block-list').append(list);
  }
  });
  $.get('/blocks', appendToList);
  $('form').on('submit', function (event){
    event.preventDefault();
    var form = $(this);
    var blockData = form.serialize();


    $.ajax({
      type:'POST',
      url: '/blocks',
      data: blockData
    }).done(function (blockName){
      appendToList([blockName]);
      form.trigger('reset');
    });

});
