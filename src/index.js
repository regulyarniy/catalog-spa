import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import createServer from "./helpers/server";
import * as serviceWorker from './serviceWorker';
import "semantic-ui-css/semantic.min.css";


const server = createServer();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/** REVIEW: Можно лучше:
*   Если тебе не нужен serviceWorker, то удали код который с ним связан. Это мертвый код, он ничего не делает
**/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/** REVIEW: общие замечания:
*   1. Было бы хорошо оформить README - о чем проект, что использовал, как запустить, ссылка на демо на github pages, как запустить тесты и т.д.
 *  2. При загрузке данных с сети желательно показывать её пользователю (спиннер или полоска сверху) и блокировать интерфейс
 *  3. Компоненты контейнеров показались мне лишней абстракцией
 *  4. Все что связано со стором лучше сложить в одну общую папку, а то экшены наверху, редьюсеры внизу, не сразу нашел
**/