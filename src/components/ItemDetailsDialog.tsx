import { MenuItem } from "@/data/menuData";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface ItemDetailsDialogProps {
  item: MenuItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ItemDetailsDialog = ({ item, open, onOpenChange }: ItemDetailsDialogProps) => {
  if (!item) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-card">
        <div className="grid gap-6">
          <div className="aspect-video overflow-hidden rounded-lg bg-muted">
            <img 
              src={item.image} 
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
          <DialogHeader>
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <DialogTitle className="text-2xl font-bold text-foreground mb-2">
                  {item.name}
                </DialogTitle>
                <Badge variant="secondary" className="mb-4">
                  {item.category}
                </Badge>
              </div>
              <span className="text-3xl font-bold text-primary">{item.price}</span>
            </div>
          </DialogHeader>
          <p className="text-muted-foreground leading-relaxed">
            {item.description}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
