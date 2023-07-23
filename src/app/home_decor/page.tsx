import { Metadata } from "next";
import CollapsibleNav from "../../../components/nav-bar";
import HomeDecorCard from "../../../components/items/home-decor/homeDecoeCard";

export const metadata: Metadata = {
  title: 'Ashewa-home-decor',
  description: 'Ethiopian market place',
}



export default function Home() {
    return (
      <main >
        <CollapsibleNav />  
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <HomeDecorCard />
        </div>
        
        
      </main>
    )
  }