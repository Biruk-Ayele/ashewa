import { Metadata } from "next"
import CollapsibleNav from "../../../../components/nav-bar"


export const metadata: Metadata = {
  title: 'Ashewa-kids-shoses',
  description: 'Ethiopian market place',
}


export default function Home() {
    return (
      <main>
           <CollapsibleNav />
           <div className="flex min-h-screen flex-col items-center justify-between p-24">
           <h1>Wellcome to kids shose. shop know with discount. </h1>        
          </div>
      </main>
    )
  }