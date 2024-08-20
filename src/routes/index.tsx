import { createBrowserRouter } from 'react-router-dom';
import Catalog from '../pages/Catalog';
import { NotFound } from '../pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    // ao entrar em uma rota que não existe ele cai nesse errorElement exibindo a página de erro
    errorElement: <NotFound />,
    element: <Catalog />,
  },
]);

export default router;
