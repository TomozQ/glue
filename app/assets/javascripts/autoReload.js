$(function(){
  function buildHTML(message){
    if (message.image) {
      let html = `
                    <div class="show-lists__chat-main__message-lists__contents__content" data-message-id=${message.id}>
                      <div class="show-lists__chat-main__message-lists__contents__content__left">
                        <div class="show-lists__chat-main__message-lists__contents__content__left__name">
                          ${message.user_name}
                        </div>
                        <div class="show-lists__chat-main__message-lists__contents__content__left__text">
                          ${message.content}
                          <img class=".show-lists__chat-main__message-lists__contents__content__left__text__img" src="${message.image}">
                        </div>
                      </div>
                      <div class="show-lists__chat-main__message-lists__contents__content__right">
                        <div class="show-lists__chat-main__message-lists__contents__content__right__time-stamp">
                          ${message.created_at}
                        </div>
                      </div>
                    </div>
                  `
      return html;
    } else {
      let html = `
                      <div class="show-lists__chat-main__message-lists__contents__content" data-message-id=${message.id}>
                        <div class="show-lists__chat-main__message-lists__contents__content__left">
                          <div class="show-lists__chat-main__message-lists__contents__content__left__name">
                            ${message.user_name}
                          </div>
                          <div class="show-lists__chat-main__message-lists__contents__content__left__text">
                            ${message.content}
                          </div>
                        </div>
                        <div class="show-lists__chat-main__message-lists__contents__content__right">
                          <div class="show-lists__chat-main__message-lists__contents__content__right__time-stamp">
                            ${message.created_at}
                          </div>
                        </div>
                      </div>
                  `
      return html
    }
}

  let reloadMessages = function() {
    let last_message_id = $('.show-lists__chat-main__message-lists__contents__content:last').data("message-id") || 0;
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
        let insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.show-lists__chat-main__message-lists__contents').append(insertHTML);
        $('.show-lists__chat-main__message-lists').animate({ scrollTop: $('.show-lists__chat-main__message-lists')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  };
setInterval(reloadMessages, 7000);
});