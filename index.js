$("#form").validate({
  errorClass: (style = "error"),
  rules: {
    secondNameChildren: {
        required: function limit(obj) {
        obj.value = obj.value.replace(/[^а-яА-ЯёЁ -]/gi, "");
      },
    },
    secondNameParent: {
        required: function limit(obj) {
        obj.value = obj.value.replace(/[^а-яА-ЯёЁ -]/gi, "");
      },
    },
    nameChildren: {
      required: true,
      minlength: 6,
      equalTo: function limit(obj) {
        obj.value = obj.value.replace(/[^а-яА-ЯёЁ -]/gi, "");
      },
    },
    familyChildren: {
      required: true,
      minlength: 6,
      equalTo: function limit(obj) {
        obj.value = obj.value.replace(/[^а-яА-ЯёЁ -]/gi, "");
      },
    },
    familyParent: {
      required: true,
      minlength: 6,
      equalTo: function limit(obj) {
        obj.value = obj.value.replace(/[^а-яА-ЯёЁ -]/gi, "");
      },
    },
    nameParent: {
      required: true,
      minlength: 6,
      equalTo: function limit(obj) {
        obj.value = obj.value.replace(/[^а-яА-ЯёЁ -]/gi, "");
      },
    },
    emailChildren: {
      required: true,
      minlength: 1,
      email: true,
    },
    emailParent: {
      required: true,
      minlength: 1,
      email: true,
    },
    phoneParent: {
      required: true,
      minlength: 1,
      number: true,
    },
  },
  messages: {
    secondNameParent: {
        required: "Только кириллица",
    },
    secondNameChildren: {
        required: "Только кириллица",
    },
    nameChildren: {
      required: "Поля обязательно для заполнение и только кириллица",
      minlength: jQuery.validator.format("Длина не менее {0}-х символов"),
    },
    familyChildren: {
      required: "Поле обязательное для заполнения и только кириллица",
      minlength: jQuery.validator.format("Длина не менее {0}-х символов"),
    },
    familyParent: {
      required: "Поле обязательное для заполнения и только кириллица",
      minlength: jQuery.validator.format("Длина не менее {0}-х символов"),
    },
    nameParent: {
      required: "Поле обязательное для заполнения и только кириллица",
      minlength: jQuery.validator.format("Длина не менее {0}-х символов"),
    },
    emailParent: {
      required: "Поле обязательное для заполнения",
      email: "Введите корректный email",
    },
    emailChildren: {
      required: "Поле обязательное для заполнения",
      email: "Введите корректный email",
    },
    phoneParent: {
      required: "Поле обязательное для заполнения",
      number: "Введите правильно номер",
    },
  },
});
$("#form").on("submit", function (e) {
  $.ajax({
    url: "https://hssc-exam.ru/test/getTestData.php",
    method: "POST",
    dataType: "jsonp",
    data: $(this).serialize(),
    success: function () {
      alert("yes");
    },
  });
  event.preventDefault();
});
