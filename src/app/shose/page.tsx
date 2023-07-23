import { Metadata } from "next";
import CollapsibleNav from "../../../components/nav-bar";
import GridCard from "../../../components/Card";
import Link from "next/link";



export const metadata: Metadata = {
  title: 'Ashewa-shoses',
  description: 'Ethiopian market place',
}

export default function Home() {
    return (
      <main >
        
        <CollapsibleNav />  
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
          <GridCard />
        <Link href="/shose/kids" replace>Kids</Link>

        <a href="/shose/kids">Go to kids shose</a></div>
        
        
      </main>
    )
  }