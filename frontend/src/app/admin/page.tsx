import { ProtectedRoute } from '../../components/ProtectedRoute';

const AdminDashboard = () => {
  return (
    <ProtectedRoute roleRequired="admin">
      <h1>Panel de Administración</h1>
      {/* Contenido del panel */}
    </ProtectedRoute>
  );
};

export default AdminDashboard;
