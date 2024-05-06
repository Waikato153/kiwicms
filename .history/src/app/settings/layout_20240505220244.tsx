import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard layout",
}

export default function DashboardLayout({
    children, // will be a page or nested layout
    team: React.ReactNode,
  analytics: React.ReactNode
  }: {
    children: React.ReactNode
    children: React.ReactNode
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav></nav>
   
        {children}
      </section>
    )
  }