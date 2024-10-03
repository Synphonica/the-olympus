import { ProtectedRoute } from '../../components/ProtectedRoute';

const AdminPanel = () => {
  return (
    <ProtectedRoute roleRequired="superadmin">
      <h1>Bienvenido al Panel de SuperAdmin</h1>
      <p>Aquí podrás gestionar todas las configuraciones de la aplicación.</p>
      {/* Aquí puedes agregar el contenido específico del panel */}
    </ProtectedRoute>
  );
};

export default AdminPanel;
