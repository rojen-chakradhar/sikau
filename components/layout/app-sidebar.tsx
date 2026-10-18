import Link from 'next/link';
import {
  LayoutDashboard,
  Map,
  Target,
  Settings2,
  Compass,
  Sparkles,
  Key,
} from "lucide-react";
import { cloneElement } from 'react';

const navigation = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Roadmaps",
    href: "/roadmaps",
    icon: Map,
  },
  {
    label: "My skills",
    href: "/skills",
    icon: Target,
  }
];

export default function AppSidebar() {
  return (
    <aside className='sidebar'>
      <Link href="/dashboard" className='brand'>
        <span className='brand-mark'>
          <Compass size={21}/>
        </span>
        <span>
          <strong>sikau</strong>
        </span>
      </Link>
      <div className="sidebar-label">workspace</div>
      <nav className='sidebar-nav'>
        {navigation.map((item) => {
          const Icon = item.icon;
          return(
            <Link href={item.href} className="nav-link" key={item.href}>
              <Icon size={18} strokeWidth={1.8}/>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="sidebar-bottom">
        <div className="upgrade-card">
          <Sparkles size={19}/>
          <strong>keep moving forward</strong>
          <p>small steps build real skills.</p>
        </div>
        <Link href="/settings" className='nav-link'>
          <Settings2 size={18}/>
          <span>settings</span>
        </Link>
        <div className="profile-row">
          <div className="avatar">s</div>
          <div>
            <strong>learner</strong>
            <small>personal workspace</small>
          </div>
        </div>
      </div>
    </aside>
  );
}