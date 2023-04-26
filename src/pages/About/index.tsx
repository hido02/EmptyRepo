import { Box, Button } from '@mui/material';
import { useSetRecoilState } from 'recoil';
import { counterState } from '../../recoils/commonAtoms';

function About() {
  const setCounter = useSetRecoilState(counterState);
  const increaseCounter = () => setCounter((counter) => counter + 1);
  return (
    <Box>
      <Box>
        상세 페이지
      </Box>
      <Box>
        <Button onClick={increaseCounter}>카운터 증가 시키기</Button>
      </Box>
    </Box>
  );
}
export default About;
