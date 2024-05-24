import './App.css';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './todo/TodoTemplate';
import TodoHead from './todo/TodoHead';
import TodoList from './todo/TodoList';


const GlobalStyle = createGlobalStyle `
    body{
        background: #e9ecef;
    }
`;
function App() {
  return (
    <>
    <GlobalStyle></GlobalStyle>
    <TodoTemplate>
        <TodoHead></TodoHead>
        <TodoList></TodoList>
    </TodoTemplate>
    </>
  );
}

export default App;
