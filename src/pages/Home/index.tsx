import { Box, Button } from '@mui/material';
import { useRecoilState, useRecoilValue } from 'recoil';
import { counterState, todoListState } from '../../recoils/commonAtoms';

function Home() {
  const counter = useRecoilValue(counterState);
  const [todo, setTodoList] = useRecoilState(todoListState);
  const addTodoList = () => {
    setTodoList([...todo, todo.length]);
  };
  return (
    <Box>
      <Box>홈</Box>
      <Box>
        카운터:
        {counter}
      </Box>

      <Box>
        <Button onClick={addTodoList}>리스트에 값 추가하기</Button>
      </Box>
      <Box>
        {todo.map((item) => (<Box key={item}>{item}</Box>))}
      </Box>
    </Box>
  );
}
export default Home;
