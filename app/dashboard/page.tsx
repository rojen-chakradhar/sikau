import Link from "next/link";
import { ArrowUpRight, Flame, Trophy, Zap } from "lucide-react";
import AppSidebar from "@/components/layout/app-sidebar";
import ProgressCard from "./progress-card";
import CurrentQuests from "./current-quest";

const skills = [
  {name:"html & css", progress: 80},
  {name:"javascript", progress: 60},
  {name:"react.js", progress: 5},
  {name:"next.js", progress: 2},
]

export default function DashboardPage() {
  return(
    <div className="app-shell">
      <AppSidebar/>
      <main className="main-area">
        <header className="page-heading">
          <div>
            <div className="eyebrow">your workspace</div>
            <h1>Welcome Back, birdhyathi</h1>
            <p className="muted">A little progress everyday adds up. Keep going.</p>
          </div>
          <Link className="primary-button" href="/roadmaps">explore roadmaps <ArrowUpRight size={17}/></Link>
        </header>
        <div className="stats-grid">
          <ProgressCard label="Skills in progress" value="4" note="across your learning journey"/>
          <ProgressCard label="Quests completed" value="12" note="keep building momentum"/>
          <ProgressCard label="Learning streak" value="3 days" note="consistency beats intensity"/>
        </div>
        <div className="dashboard-grid">
          <CurrentQuests title="name"/>
          <section className="panel">
            <div className="section-heading">
              <h2>your skils</h2>
              <Link href="/roadmaps">view all</Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}