import './globals.css';
import type { Metadata } from 'next';
import { Inter, Bebas_Neue } from 'next/font/google';
const inter=Inter({subsets:['latin'],variable:'--font-body'}); const bebas=Bebas_Neue({subsets:['latin'],weight:'400',variable:'--font-display'});
export const metadata: Metadata={title:'Asphalt Society | Built By Enthusiasts',description:'Premium automotive culture, parts, builds, and 3D configurator for tuner, JDM, euro, muscle, stance and street culture.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={`${inter.variable} ${bebas.variable} noise font-body`}><>{children}</></body></html>}
