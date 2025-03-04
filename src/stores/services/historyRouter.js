import { useNavigate } from 'react-router-dom';
import History from "./history";

const HistoryRouter = () => {
  History.navigate = useNavigate();

  return null;
};

export default HistoryRouter;