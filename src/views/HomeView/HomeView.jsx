import { Container, Title } from './HomwView.styled';
//-----------------------------------
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

export const HomeView = () => {
  return (
    <CssBaseline>
      <Container>
        <Title>
          <Typography variant="h2" component="h2">
            Wellcome to Phonebook-App
          </Typography>
        </Title>
      </Container>
    </CssBaseline>
  );
};
