import { createFileRoute } from '@tanstack/react-router';
import { ClinicHeader, MobileCall } from '@/components/clinic/header';
import { ClinicHero } from '@/components/clinic/hero';
import { Audiences, About, Services, Methods, Process } from '@/components/clinic/therapy';
import { Reviews, Faq } from '@/components/clinic/reviews-faq';
import { Contact, Footer } from '@/components/clinic/contact';
const title='Neurologopeda Zalasewo – Monika Feder | Dzieci i dorośli';
const description='Monika Feder – neurologopeda Zalasewo, logopeda Poznań okolice. Terapia miofunkcjonalna, zaburzenia mowy i karmienia, wsparcie przed i po frenotomii. Umów wizytę.';
export const Route = createFileRoute('/')({
 head: () => ({meta:[{title},{name:'description',content:description},{property:'og:title',content:title},{property:'og:description',content:description},{property:'og:type',content:'website'},{property:'og:url',content:'/'},{name:'twitter:card',content:'summary_large_image'}],links:[{rel:'canonical',href:'/'}],scripts:[{type:'application/ld+json',children:JSON.stringify({'@context':'https://schema.org','@type':'MedicalBusiness',name:'Monika Feder – Neurologopeda dla dzieci i dorosłych',telephone:'+48605846554',address:{'@type':'PostalAddress',streetAddress:'Zamoyskiego 1/22',postalCode:'62-020',addressLocality:'Zalasewo',addressCountry:'PL'},aggregateRating:{'@type':'AggregateRating',ratingValue:4.8,reviewCount:20,bestRating:5}})}]}),
 component:Index,
});
function Index() { return <><a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-60 focus:bg-card focus:p-4">Przejdź do treści</a><ClinicHeader/><main id="main"><ClinicHero/><Audiences/><About/><Services/><Methods/><Process/><Reviews/><Faq/><Contact/></main><Footer/><MobileCall/></>; }
