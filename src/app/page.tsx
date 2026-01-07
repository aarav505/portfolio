import { GridPattern } from "../components/ui/grid-pattern"
import { cn } from "@/lib/utils"



export default function Home() {
  return (
    <div className="bg-background min-h-screen relative flex size-full items-center justify-center overflow-hidden rounded-lg border p-20">
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom,white_0%,white_20%,transparent_100%)]"

        )}
      />

      <h1 className="text-4xl font-bold">Hey</h1>
    </div>
  )
}
