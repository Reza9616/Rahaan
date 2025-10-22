import NavigationMenuDemo from "@/components/navbar"
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavigationMenuDemo />
      {children}
    </>
  );
}