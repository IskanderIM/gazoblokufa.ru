
  $(document).ready(function(){
       $("#submit").click(function(){

//скрипт проверка заполнения формы и отправка через ajax-form.php

	/*Валидация полей формы*/
	$('#form').validate({
	//Правила валидации
	rules: {
        name: {
            required: true,
        },
		    Email: {
            required: true,
			Email: true
        },
    },
	//Сообщения об ошибках
    messages: {
		name: {
            required: "Обязательно укажите имя",
        },
		Email: {
            required: "Обязательно укажите Email",
        },
    },

	/*Отправка формы в случае успеха валидации*/
    submitHandler: function(){
         sendAjaxForm('form', 'ajax-form.php'); //Вызываем функцию отправки формы
		 return false;
    }
	});
});

	function sendAjaxForm(form, url) {
					$.ajax({
						url:     url = "php/ajax-form2.php" , //url страницы (ajax-form.php)
						type:     "POST", //метод отправки
						dataType: "html", //формат данных
						data: $("#"+form).serialize(),  // Сеарилизуем объекты формы
						success: function(response) { //Данные отправлены успешно

							//Ваш код если успешно отправлено
							alert('Успешно отправлено!');
						},
						error: function(response) { // Данные не отправлены

							//Ваш код если ошибка
							alert('Ошибка отправления');
						}
					});

};
});



// Пример стартера JavaScript для отключения отправки форм, Если есть недопустимые поля
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Извлеките все формы, к которым мы хотим применить пользовательские стили проверки начальной загрузки
    var forms = document.getElementsByClassName('needs-validation');
    // Цикл над ними и предотвратить представление
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('#submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
