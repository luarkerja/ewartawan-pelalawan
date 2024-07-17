import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const CTA2 = () => (
  <div className="w-full py-20 lg:py-16 bg-muted">

    <div className="mx-auto grid w-full max-w-6xl gap-2">
      
      <div className="flex flex-col text-center py-14 gap-4 items-center">
    
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
            Bergabung sekarang juga!
          </h3>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias error atque quibusdam non est maiores sit labore rem tenetur, aperiam doloremque quaerat dicta perspiciatis impedit odit id, facilis cumque illum!
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <Button className="gap-4" variant="outline">
            Kontak kami <PhoneCall className="w-4 h-4" />
          </Button>
          <Button className="gap-4">
            Daftar sekarang <MoveRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  </div>
);
