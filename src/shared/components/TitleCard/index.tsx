import { PropsWithChildren, useRef } from "react";

interface TitleCardProps {
  loading?: boolean;
}

export const TitleCard: React.FC<PropsWithChildren<TitleCardProps>> = ({
  children,
  loading = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="w-full bg-ig-profile rounded-md py-8 px-10 shadow-md"
      ref={containerRef}
      style={{
        marginTop: ((containerRef.current?.clientHeight ?? 64) / 2) * -1,
      }}
    >
      {loading ? (
        <div className="flex w-full items-center justify-center">
          Carregando...
        </div>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};
