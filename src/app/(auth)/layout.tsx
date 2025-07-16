import { DarkModeToggle } from "@/components/common/darkmode-toggle";
import { ChefHat } from "lucide-react";
import { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};
export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="relative bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="absolute top-4 right-4">
        <DarkModeToggle />
      </div>
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className="flex items-center gap-2 self-center font-medium">
          <div className="bg-teal-500 flex items-center justify-center rounded-full p-2">
            <ChefHat className="size-4" />
          </div>
          NS Store
        </div>
        {children}
      </div>
    </div>
  );
}
