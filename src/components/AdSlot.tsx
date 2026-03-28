import { cn } from '@/lib/utils';

interface AdSlotProps {
  className?: string;
  type: 'leaderboard' | 'responsive' | 'rectangle';
}

export function AdSlot({ className, type }: AdSlotProps) {
  return (
    <div
      className={cn(
        'ad-slot',
        type === 'leaderboard' && 'w-full max-w-[728px] h-[90px] mx-auto',
        type === 'responsive' && 'w-full min-h-[120px] md:min-h-[200px]',
        type === 'rectangle' && 'w-[300px] h-[250px] mx-auto',
        className
      )}
      aria-label="Advertisement Placement"
    >
      <div className="text-muted-foreground/40 text-xs font-medium tracking-widest text-center px-4">
        {type === 'leaderboard' ? 'Advertisement - 728×90' : type === 'rectangle' ? 'Advertisement - 300×250' : 'Advertisement - Responsive'}
      </div>
    </div>
  );
}
