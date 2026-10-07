import { useState } from 'react';
import { Menu, X, Phone, Flower2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
export const navigation = [['O mnie', 'o-mnie'], ['Oferta', 'oferta'], ['Metody', 'metody'], ['Opinie', 'opinie'], ['Kontakt', 'kontakt']];
export function ClinicHeader() {
 const [open, setOpen] = useState(false);
 return <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur-md">
  <div className="wrap flex h-22 items-center justify-between gap-5">
   <a href="#" aria-label="Monika Feder — początek strony" className="flex items-center gap-3"><Flower2 className="size-9 text-primary" strokeWidth={1}/><span><span className="block font-display text-2xl leading-tight">Monika Feder</span><span className="block text-[10px] uppercase tracking-[2px] text-muted-foreground">Neurologopeda</span></span></a>
   <nav aria-label="Nawigacja główna" className="hidden items-center gap-7 lg:flex">{navigation.map(([label,id]) => <a className="text-sm transition-colors hover:text-primary" href={`#${id}`} key={id}>{label}</a>)}</nav>
   <div className="flex items-center gap-2"><Button asChild className="h-11 px-5"><a href="tel:+48605846554" aria-label="Zadzwoń: 605 846 554"><Phone/><span className="hidden sm:inline">Zadzwoń: 605 846 554</span></a></Button><Button variant="ghost" size="icon" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? 'Zamknij menu' : 'Otwórz menu'} onClick={() => setOpen(!open)} className="lg:hidden">{open ? <X/> : <Menu/>}</Button></div>
  </div>
  {open && <nav id="mobile-nav" aria-label="Nawigacja mobilna" className="wrap flex flex-col gap-3 border-t py-5 lg:hidden">{navigation.map(([label,id]) => <a href={`#${id}`} key={id} onClick={() => setOpen(false)}>{label}</a>)}</nav>}
 </header>;
}
export function MobileCall() { return <div className="fixed inset-x-0 bottom-0 z-40 border-t bg-background p-3 md:hidden"><Button asChild className="h-12 w-full"><a href="tel:+48605846554"><Phone/>Zadzwoń i umów wizytę</a></Button></div>; }
