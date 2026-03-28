import { cn } from '@/lib/utils';

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export const ToastViewport = () => {
  return (
    <div className="fixed bottom-0 right-0 z-50 p-4 flex flex-col gap-2">
    </div>
  );
};

export const Toast = ({ title, description }: { title?: string; description?: string }) => {
  return (
    <div className={cn('bg-card border border-border rounded-lg shadow-lg p-4 max-w-sm')}>
      {title && <h4 className="font-semibold text-foreground">{title}</h4>}
      {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
    </div>
  );
};
