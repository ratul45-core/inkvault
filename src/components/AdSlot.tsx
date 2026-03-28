import { cn } from '@/lib/utils';

interface AdSlotProps {
  className?: string;
  type: 'leaderboard' | 'responsive' | 'rectangle';
}

export function AdSlot({ className, type }: AdSlotProps) {
  return (
    <div
      className={cn(
        'ad-slot bg-muted/40',
        type === 'leaderboard' && 'w-full max-w-[728px] h-[90px] mx-auto',
        type === 'responsive' && 'w-full min-h-[120px] md:min-h-[200px]',
        type === 'rectangle' && 'w-[300px] h-[250px] mx-auto',
        className
      )}
      aria-label="Advertisement Placement"
    >
      <div className="text-muted-foreground/30 text-xs font-medium tracking-widest text-center px-4">
        AdSense {type} placeholder
      </div>
    </div>
  );
}
