import Perfil from "../../components/perfil";
import Navbar from "../../components/navbar";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Perfil />;
    </div>
  );
}
