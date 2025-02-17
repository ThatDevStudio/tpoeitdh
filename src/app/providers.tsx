import { TRPCReactProvider } from "@/trpc/react";
import { HydrateClient } from "@/trpc/server";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers: React.FC<Readonly<ProvidersProps>> = ({ children }) => {
  return (
    <TRPCReactProvider>
      <HydrateClient>{children}</HydrateClient>
    </TRPCReactProvider>
  );
};
