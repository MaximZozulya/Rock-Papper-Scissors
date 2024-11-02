'use strict';

    // Извлечение значения из глобального хранилища
    let score = (JSON.parse(localStorage.getItem('score'))) // Преобразование строки из хранилища в обьект 
      || {
        wins: 0,
        losses: 0,
        ties: 0,
      };
    
    updateScoreElement();

    function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';

    // Сравнение ходов 
    if (playerMove === 'Ножницы') {
      if (computerMove === 'Камень') {
        result = 'Ты проиграл !!!';
      } else if (computerMove === 'Бумага') {
        result = 'Ты выйграл !!!';
      } else if (computerMove === 'Ножницы') {
        result = 'Нечия !!!';
      }

    } else if (playerMove === 'Бумага') {
      if (computerMove === 'Камень') {
        result = 'Ты выйграл !!!';
      } else if (computerMove === 'Бумага') {
        result = 'Нечия !!!';
      } else if (computerMove === 'Ножницы') {
        result = 'Ты проиграл !!!';
      }

    } else if (playerMove === 'Камень') {
      if (computerMove === 'Камень') {
        result = 'Нечия !!!';
      } else if (computerMove === 'Бумага') {
        result = 'Ты проиграл !!!';
      } else if (computerMove === 'Ножницы') {
        result = 'Ты выйграл !!!';
      }
    }

    // Сохранение результата в обьекте score 
      if (result === 'Ты выйграл !!!') {
        score.wins += 1;
      } else if (result === 'Ты проиграл !!!') {
        score.losses += 1;
      } else if (result === 'Нечия !!!') {
        score.ties += 1;
      }
    
    // Сохранение значения в локальном хранилище
      localStorage.setItem('score', JSON.stringify(score)); // Преобразование обьекта в строку
    
    // Вывод результата
    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-move').innerHTML = `Ты ${playerMove} - Компьютер ${computerMove}.`;

}

    function updateScoreElement() {
      document.querySelector('.js-score')
        .innerHTML = `Ты выйграл : ${score.wins}, Ты проиграл: ${score.losses}, Нечия: ${score.ties}.`;
    }


    function pickComputerMove() {
    // Генерация случайного числа
      const randomNumber = Math.random();
      
      let computerMove = '';

    // Выбор компьютерного хода
      if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Камень';

      } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Бумага';

      } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'Ножницы';
      }

      return computerMove;
  }