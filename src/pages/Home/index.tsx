import { Box } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { counterState } from '../../recoils/commonAtoms';

function Home() {
  const counter = useRecoilValue(counterState);
  return (
    <Box>
      <Box>홈</Box>
      <Box>
        카운터:
        {counter}
      </Box>
    </Box>
  );
}
export default Home;
