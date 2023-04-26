/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box } from '@mui/material';
import { useRecoilState } from 'recoil';
import { todoListState } from '../../recoils/commonAtoms';

function MyPage() {
  const [todo, setTodoList] = useRecoilState(todoListState);

  return (
    <Box>
      <Box>
        마이 페이지
      </Box>
      <Box>
        {todo.map((item) => (
          <Box>{item}</Box>
        ))}
      </Box>
    </Box>

  );
}
export default MyPage;
