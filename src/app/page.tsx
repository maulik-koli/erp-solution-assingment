import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Button variant="outline" className="mb-4">
        Outline Button
      </Button>
      <Button className="mb-4">
        Default Button
      </Button>
    </div>
  );
}
