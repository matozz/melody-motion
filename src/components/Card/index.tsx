import { FC, PropsWithChildren, useRef } from "react";

import { cn } from "@nextui-org/system";

interface CardContainerProps {
  className?: string;
  containerClassName?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

const CardContainer: FC<PropsWithChildren<CardContainerProps>> = ({
  children,
  header,
  footer,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 100;
    const y = (e.clientY - top - height / 2) / 100;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  return (
    <div
      className={cn("flex h-full w-full items-center justify-center")}
      style={{ perspective: "1000px" }}
    >
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        // style={{ transformStyle: "preserve-3d" }}
        className={cn(
          "relative flex h-full w-full items-center justify-center",
          "transition-all duration-200 ease-linear rounded-large",
          "hover:shadow-2xl",
        )}
      >
        {header && <div className="absolute -top-14 z-10">{header}</div>}
        <div className="glassmorphism h-full w-full overflow-hidden rounded-large">
          {children}
        </div>
        {footer && <div className="absolute -bottom-14 z-10">{footer}</div>}
      </div>
    </div>
  );
};
export default CardContainer;
