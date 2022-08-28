import { FiChevronLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export const GoBackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <span className="text-ig-brand cursor-pointer" onClick={() => navigate(-1)}>
      <FiChevronLeft className="inline" /> Voltar
    </span>
  );
};
