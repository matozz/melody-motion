import { FC, PropsWithChildren } from "react";

import { cn } from "@nextui-org/system";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className={cn(
        "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10",
        "max-h-[600px] w-[80%] max-w-[800px]",
      )}
    >
      {children}
    </div>
  );
};

export default Layout;
