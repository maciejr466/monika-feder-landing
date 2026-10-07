import { ArrowDown, ArrowUpRight, Award, MapPin, Phone, Star, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import clinicImage from '@/assets/clinic.jpg';
export function ClinicHero() {
 return <><section className="hero">
  <img src={clinicImage} width={1536} height={1024} alt="Ilustracyjna aranżacja przyjaznego gabinetu terapii" className="hero-photo" fetchPriority="high"/>
  <div className="wrap hero-content reveal"><div className="eyebrow"><MapPin className="size-3.5"/>Zalasewo · okolice Poznania</div>
   <h1>Neurologopeda dla<br className="hidden sm:block"/> dzieci i dorosłych<span className="mt-3 block text-[0.78em]">– pomagam <em>mówić, jeść<br className="hidden sm:block"/> i komunikować się</em> swobodniej</span></h1>
   <p className="hero-description">Ponad 10 lat doświadczenia w terapii zaburzeń mowy, karmienia i połykania. Indywidualne podejście, współpraca z ortodontami i fizjoterapeutami. Gabinet w Zalasewie koło Poznania.</p>
   <div className="mt-8 flex flex-wrap items-center gap-3"><Button asChild className="h-13 px-5"><a href="tel:+48605846554"><Phone/>Umów wizytę – 605 846 554<ArrowUpRight/></a></Button><Button asChild variant="outline" className="h-13 bg-card/75 px-5"><a href="#oferta">Dowiedz się więcej<ArrowDown/></a></Button></div>
   <p className="mt-5 flex items-center gap-2 text-xs text-muted-foreground"><Check className="size-3.5 text-primary"/>Spokojnie, uważnie, w Twoim tempie.</p>
  </div>
 </section><div className="border-y bg-card"><div className="wrap grid gap-6 py-7 sm:grid-cols-3"><div className="flex items-center gap-3 sm:border-r"><Star className="size-6 text-primary"/><div><strong className="text-sm">4,8 w Google</strong><p className="text-xs text-muted-foreground">Na podstawie 20 opinii</p></div></div><div className="flex items-center gap-3 sm:justify-center sm:border-r"><span className="font-display text-3xl text-primary">10+</span><div><strong className="text-sm">lat doświadczenia</strong><p className="text-xs text-muted-foreground">W trosce o małych i dużych</p></div></div><div className="flex items-center gap-3 sm:justify-center"><Award className="size-7 text-primary"/><div><strong className="text-sm">Orły Medycyny</strong><p className="text-xs text-muted-foreground">Laureat plebiscytu</p></div></div></div></div></>;
}
