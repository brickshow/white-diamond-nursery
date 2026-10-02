import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import NurseryWebsite from '@/components/nursery-website';
const sections=['plants','flowers','palms','pottery','about','contact','collections'];
export const dynamicParams=false;
export function generateStaticParams(){return sections.map(section=>({section}));}
export async function generateMetadata({params}:{params:Promise<{section:string}>}):Promise<Metadata>{const {section}=await params;const title=section==='about'?'Our Story':section==='contact'?'Visit & Contact':section.charAt(0).toUpperCase()+section.slice(1);return {title:`${title} | White Diamond Nursery`,description:`Explore ${title.toLowerCase()} at White Diamond Nursery in Palmetto, Florida.`};}
export default async function SectionPage({params}:{params:Promise<{section:string}>}){const {section}=await params;if(!sections.includes(section))notFound();return <NurseryWebsite key={section} currentPage={section}/>;}
