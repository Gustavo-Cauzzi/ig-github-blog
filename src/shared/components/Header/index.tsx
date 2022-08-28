import coverImg from "../../assets/cover.png";

export const Header: React.FC = () => {
  return (
    <header className="w-full">
      <img src={coverImg} className="w-full object-cover" />
    </header>
  );
};
