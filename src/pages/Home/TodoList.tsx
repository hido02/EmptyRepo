import { Box, Button } from '@mui/material';
import { useRecoilState } from 'recoil';
import { todoListState } from '../../recoils/commonAtoms';

function TodoList() {
  const [todo, setTodoList] = useRecoilState(todoListState);
  const addTodoList = () => {
    setTodoList([...todo, todo.length]);
  };
  return (
    <Box>
      <Box>
        <Button variant="contained" onClick={addTodoList}>리스트에 값 추가하기</Button>
      </Box>
      <Box>
        {todo.map((item) => (<Box key={item}>{item}</Box>))}
      </Box>
    </Box>
  );
}

export default TodoList;
