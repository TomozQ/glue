$(function(){
  function buildHTML(message){
    if (message.image) {
      let html = `
                    <div class="show-lists__chat-main__message-lists__contents__content">
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
                      <div class="show-lists__chat-main__message-lists__contents__content">
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
  $(function(){
    $('.chat-main__message-form__Form').on("submit", function(e){
      
      e.preventDefault();
      let formData = new FormData(this);
      console.log(formData)
      let url = $(this).attr('action');

      $.ajax({
        url: url,  
        type: 'POST',  
        data: formData,  
        dataType: 'json',
        processData: false,
        contentType: false
      })

    .done(function(data){
      let html = buildHTML(data);
      $('.show-lists__chat-main__message-lists__contents').append(html);
      $('form')[0].reset();
      $('.show-lists__chat-main__message-lists').animate({ scrollTop: $('.show-lists__chat-main__message-lists')[0].scrollHeight});
      $('.chat-main__message-form__Form__btn-send').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $('.chat-main__message-form__Form__btn-send').prop('disabled', false);
  });
  })

})
});