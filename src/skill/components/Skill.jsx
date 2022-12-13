import MemoryIcon from "@mui/icons-material/Memory";
import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import  "../styles/Skill.css";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export const Skill = () => {
  return (
    <Box className="Skills">
      <MemoryIcon className="codeIcon" />
      <Typography variant="h3" textAlign="center">Skills & Technologies</Typography>
      <Container>
        <ul>
          <li><CheckCircleOutlineIcon  className="checkCircular" />HTML</li>
          <li><CheckCircleOutlineIcon  className="checkCircular" />CSS</li>
          <li><CheckCircleOutlineIcon  className="checkCircular" />JS</li>
          <li><CheckCircleOutlineIcon  className="checkCircular" />REACT.JS</li>
          <li><CheckCircleOutlineIcon  className="checkCircular" />NEXT.JS</li>
          <li><CheckCircleOutlineIcon  className="checkCircular" />MYSQL</li>
          <li><CheckCircleOutlineIcon  className="checkCircular" />MONGO DB</li>
          <li><CheckCircleOutlineIcon  className="checkCircular" />EXPRESS.JS</li>
          <li><CheckCircleOutlineIcon  className="checkCircular" />PHP</li>
          <li><CheckCircleOutlineIcon  className="checkCircular" />JOOMLA</li>
        </ul>
      </Container>
    </Box>
  );
};
