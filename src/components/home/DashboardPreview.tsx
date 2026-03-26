import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import locusWordmark from "@/assets/locus-logo-white.png";
import {
  AreaChart, Area,
  BarChart, Bar,
  PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  LayoutDashboard,
  BarChart3,
  GitBranch,
  Briefcase,
  Users,
  Zap,
  ShieldCheck,
  DollarSign,
  Bot,
  Settings,
  Bell,
  Search,
  TrendingUp,
  Clock,
  AlertTriangle,
  Send,
} from "lucide-react";

const DM = "'DM Sans', sans-serif";
const W = "#F5F5F5";

// ─── Nav ──────────────────────────────────────────────────────────────────────

const NAV = [
  { id: "dashboard",    label: "Command Center",          icon: LayoutDashboard },
  { id: "analytics",   label: "Revenue Intelligence",    icon: BarChart3 },
  { id: "pipeline",    label: "Pipeline Activity",       icon: GitBranch },
  { id: "deals",       label: "Deals & Opportunities",   icon: Briefcase },
  { id: "accounts",    label: "Accounts & Contacts",     icon: Users },
  { id: "sequences",   label: "Sequences & Automations", icon: Zap },
  { id: "retention",   label: "Retention & CS Health",   icon: ShieldCheck },
  { id: "revenue",     label: "Revenue & MRR",           icon: DollarSign },
  { id: "ai",          label: "AI Revenue Agent",        icon: Bot },
  { id: "settings",    label: "Settings",                icon: Settings },
];

// ─── Shared mini components ────────────────────────────────────────────────────

function MiniCard({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 8, ...style }}>
      {children}
    </div>
  );
}

function MiniKPIs({ items }: { items: { label: string; value: string; delta: string; green?: boolean }[] }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${items.length}, 1fr)`, gap: 6 }}>
      {items.map((k) => (
        <MiniCard key={k.label} style={{ padding: "10px 12px" }}>
          <p style={{ fontSize: 8, color: "rgba(245,245,245,0.35)", fontFamily: DM, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>{k.label}</p>
          <p style={{ fontSize: 15, fontWeight: 700, color: W, fontFamily: DM, lineHeight: 1, marginBottom: 3 }}>{k.value}</p>
          <p style={{ fontSize: 8, color: k.green !== false ? "#0D9373" : "#FF5040", fontFamily: DM }}>{k.delta}</p>
        </MiniCard>
      ))}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: 8, color: "rgba(245,245,245,0.30)", fontFamily: DM, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>{children}</p>;
}

// ─── Live Feed ─────────────────────────────────────────────────────────────────

const ALL_EVENTS = [
  { dot: "#0D9373", label: "New lead: Acme Corp (Marketing Ops)" },
  { dot: "#0D9373", label: "Deal moved to Proposal: TechFlow Inc — $42K" },
  { dot: "#0D9373", label: "Sequence triggered: SaaS Onboarding v2 → 14 contacts" },
  { dot: "#FF5040", label: "Churn risk flagged: Meridian Analytics" },
  { dot: "#EF9F27", label: "Email opened: Re-engagement → DataSync Co" },
  { dot: "#0D9373", label: "Deal closed won: Vortex Systems — $18K" },
  { dot: "#0D9373", label: "New contact added: Jamie Chen, Dir. of Ops @ Nexus" },
  { dot: "#0D9373", label: "MRR milestone: $125K crossed" },
  { dot: "#EF9F27", label: "Sequence reply: Post-Demo Follow-up → TechFlow" },
  { dot: "#FF5040", label: "No login 14 days: DriftLabs — re-engagement queued" },
];

function LiveFeed() {
  const [events, setEvents] = useState(() =>
    ALL_EVENTS.slice(0, 5).map((e, i) => ({ ...e, id: i, age: i * 4 }))
  );
  const counter = useRef(ALL_EVENTS.length);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = ALL_EVENTS[counter.current % ALL_EVENTS.length];
      counter.current += 1;
      setEvents((prev) => [
        { ...next, id: counter.current, age: 0 },
        ...prev.map((e) => ({ ...e, age: e.age + 4 })).slice(0, 4),
      ]);
    }, 3600);
    return () => clearInterval(interval);
  }, []);

  const formatAge = (age: number) => {
    if (age === 0) return "just now";
    if (age < 60) return `${age}m ago`;
    return `${Math.floor(age / 60)}h ago`;
  };

  return (
    <div>
      {events.map((event, i) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1 - i * 0.14, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex items-start gap-2 py-2 border-b border-white/[0.05] last:border-0"
        >
          <span className="flex-shrink-0 mt-[5px] rounded-full" style={{ width: 6, height: 6, background: event.dot, minWidth: 6 }} />
          <span style={{ fontSize: 10, color: "rgba(245,245,245,0.60)", flex: 1, lineHeight: 1.5, fontFamily: DM }}>{event.label}</span>
          <span style={{ fontSize: 9, color: "rgba(245,245,245,0.25)", flexShrink: 0, fontFamily: DM, fontVariantNumeric: "tabular-nums" }}>{formatAge(event.age)}</span>
        </motion.div>
      ))}
    </div>
  );
}

// ─── Pipeline Bars ────────────────────────────────────────────────────────────

const pipeline = [
  { label: "Leads",      count: 847, pct: 100 },
  { label: "Qualified",  count: 412, pct: 49 },
  { label: "Demo",       count: 189, pct: 22 },
  { label: "Proposal",   count: 94,  pct: 11 },
  { label: "Closed Won", count: 38,  pct: 4.5 },
];

function PipelineBars({ inView }: { inView: boolean }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {pipeline.map((stage, i) => (
        <div key={stage.label}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
            <span style={{ fontSize: 10, color: "rgba(245,245,245,0.45)", fontFamily: DM }}>{stage.label}</span>
            <span style={{ fontSize: 10, color: W, fontFamily: DM, fontVariantNumeric: "tabular-nums" }}>{stage.count.toLocaleString()}</span>
          </div>
          <div style={{ height: 5, background: "rgba(255,255,255,0.06)", borderRadius: 99, overflow: "hidden" }}>
            <motion.div
              style={{ height: "100%", borderRadius: 99, background: i === 4 ? "#0D9373" : `rgba(13,147,115,${0.85 - i * 0.13})` }}
              initial={{ width: 0 }}
              animate={{ width: inView ? `${stage.pct}%` : 0 }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
          </div>
          {i < pipeline.length - 1 && (
            <p style={{ fontSize: 9, color: "rgba(245,245,245,0.20)", marginTop: 2, fontFamily: DM }}>
              {Math.round((pipeline[i + 1].count / stage.count) * 100)}% conversion
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Page: Command Center ─────────────────────────────────────────────────────

const kpis = [
  { label: "Speed to Lead",     value: "4.2 min", delta: "↑ 38% vs last month",   green: true },
  { label: "Pipeline Velocity", value: "$847K",   delta: "↑ 12% vs last month",   green: true },
  { label: "Active Sequences",  value: "24",      delta: "↑ 3 new this week",      green: true },
  { label: "Churn Risk",        value: "7",       delta: "↓ 2 resolved this week", green: false },
];

const atRisk = [
  { name: "Meridian Analytics", mrr: "$4,200", risk: "High",   riskColor: "#FF5040", lastTouch: "18d ago" },
  { name: "CloudBase Inc",      mrr: "$2,800", risk: "Medium", riskColor: "#EF9F27", lastTouch: "9d ago"  },
  { name: "Synterra Labs",      mrr: "$1,600", risk: "Medium", riskColor: "#EF9F27", lastTouch: "12d ago" },
];

const sequences = [
  { name: "SaaS Onboarding v2",    contacts: 147, openRate: "64%", status: "active" },
  { name: "Re-engagement Q1",      contacts: 89,  openRate: "41%", status: "active" },
  { name: "Trial → Paid Nurture",  contacts: 52,  openRate: "58%", status: "active" },
  { name: "Cold Outbound Batch 7", contacts: 203, openRate: "22%", status: "paused" },
];

function CommandCenter({ inView }: { inView: boolean }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <MiniKPIs items={kpis} />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 240px", gap: 8 }}>
        <MiniCard style={{ padding: 12 }}>
          <SectionLabel>Pipeline Funnel</SectionLabel>
          <PipelineBars inView={inView} />
        </MiniCard>
        <MiniCard style={{ padding: 12 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
            <SectionLabel>Live Activity</SectionLabel>
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <span className="relative flex" style={{ width: 6, height: 6 }}>
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0D9373] opacity-60" />
                <span className="relative inline-flex rounded-full bg-[#0D9373]" style={{ width: 6, height: 6 }} />
              </span>
              <span style={{ fontSize: 9, color: "rgba(245,245,245,0.25)", fontFamily: DM }}>streaming</span>
            </div>
          </div>
          <LiveFeed />
        </MiniCard>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        <MiniCard style={{ padding: 12 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
            <SectionLabel>At-Risk Accounts</SectionLabel>
            <span style={{ fontSize: 8, padding: "2px 6px", borderRadius: 4, background: "rgba(239,159,39,0.12)", color: "#EF9F27", fontFamily: DM }}>{atRisk.length} flagged</span>
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              {atRisk.map((row) => (
                <tr key={row.name} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <td style={{ padding: "6px 0" }}>
                    <p style={{ fontSize: 10, fontWeight: 500, color: W, fontFamily: DM }}>{row.name}</p>
                    <p style={{ fontSize: 9, color: "rgba(245,245,245,0.30)", fontFamily: DM }}>{row.mrr} · {row.lastTouch}</p>
                  </td>
                  <td style={{ padding: "6px 0", textAlign: "right" }}>
                    <span style={{ fontSize: 8, padding: "2px 6px", borderRadius: 4, background: `${row.riskColor}1a`, color: row.riskColor, fontFamily: DM }}>{row.risk}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </MiniCard>
        <MiniCard style={{ padding: 12 }}>
          <SectionLabel>Active Sequences</SectionLabel>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {sequences.map((seq) => (
              <div key={seq.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "6px 8px", borderRadius: 6, border: "1px solid rgba(255,255,255,0.05)" }}>
                <div style={{ minWidth: 0 }}>
                  <p style={{ fontSize: 10, color: W, fontFamily: DM, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{seq.name}</p>
                  <p style={{ fontSize: 9, color: "rgba(245,245,245,0.30)", fontFamily: DM }}>{seq.contacts} contacts · {seq.openRate} open</p>
                </div>
                <span style={{ fontSize: 8, padding: "2px 6px", borderRadius: 4, flexShrink: 0, background: seq.status === "active" ? "rgba(13,147,115,0.12)" : "rgba(255,255,255,0.06)", color: seq.status === "active" ? "#0D9373" : "rgba(245,245,245,0.3)", fontFamily: DM }}>{seq.status}</span>
              </div>
            ))}
          </div>
        </MiniCard>
      </div>
    </div>
  );
}

// ─── Page: Revenue Intelligence ───────────────────────────────────────────────

const mrrTrendData = [
  { month: "Apr", mrr: 98200 }, { month: "May", mrr: 101400 }, { month: "Jun", mrr: 99800 },
  { month: "Jul", mrr: 104600 }, { month: "Aug", mrr: 107200 }, { month: "Sep", mrr: 106100 },
  { month: "Oct", mrr: 110500 }, { month: "Nov", mrr: 113800 }, { month: "Dec", mrr: 112400 },
  { month: "Jan", mrr: 118700 }, { month: "Feb", mrr: 123100 }, { month: "Mar", mrr: 127400 },
];

const revenueSegments = [
  { name: "SaaS",       value: 68400 },
  { name: "Agency",     value: 31200 },
  { name: "Consulting", value: 17800 },
  { name: "Other",      value: 10000 },
];
const SEG_COLORS = ["#0D9373", "#0A6E57", "#34D3A9", "#6EE7C7"];

const pipelineStageData = [
  { stage: "Qualified",   deals: 47 },
  { stage: "Demo",        deals: 31 },
  { stage: "Proposal",    deals: 18 },
  { stage: "Negotiation", deals: 9  },
  { stage: "Closed Won",  deals: 12 },
];

const seqPerfData = [
  { week: "W1", open: 38, reply: 8  }, { week: "W2", open: 44, reply: 11 },
  { week: "W3", open: 51, reply: 14 }, { week: "W4", open: 47, reply: 12 },
  { week: "W5", open: 55, reply: 17 }, { week: "W6", open: 59, reply: 19 },
  { week: "W7", open: 57, reply: 18 }, { week: "W8", open: 64, reply: 22 },
];

const TICK = { fontSize: 9, fill: "rgba(245,245,245,0.35)", fontFamily: DM };
const GRID_C = "rgba(255,255,255,0.06)";
const TT_STYLE = { backgroundColor: "#0B0F13", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 6, fontFamily: DM, fontSize: 11, color: W, padding: "6px 10px" };

function MiniTooltip({ active, payload, label, money }: { active?: boolean; payload?: Array<{ name: string; value: number; color: string }>; label?: string; money?: boolean }) {
  if (!active || !payload?.length) return null;
  return (
    <div style={TT_STYLE}>
      <p style={{ color: "rgba(245,245,245,0.5)", marginBottom: 4, fontSize: 9 }}>{label}</p>
      {payload.map((e, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: e.color }} />
          <span style={{ color: W }}>{money ? `$${(e.value / 1000).toFixed(0)}K` : e.value}</span>
        </div>
      ))}
    </div>
  );
}

const analyticsKPIs = [
  { label: "Current MRR",      value: "$127.4K", delta: "↑ 29.7% (12mo)", green: true },
  { label: "Pipeline Value",    value: "$2.498K", delta: "47 open deals",  green: true },
  { label: "Avg Open Rate",     value: "52%",     delta: "↑ 14pts over 8 weeks", green: true },
  { label: "Active Owners",     value: "3",       delta: "$288K total pipeline", green: true },
];

function RevenueIntelligence() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <MiniKPIs items={analyticsKPIs} />

      {/* Row 1: MRR Area + Pie */}
      <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 8 }}>
        <MiniCard style={{ padding: 12 }}>
          <SectionLabel>MRR Trend — Last 12 Months</SectionLabel>
          <ResponsiveContainer width="100%" height={110}>
            <AreaChart data={mrrTrendData} margin={{ top: 4, right: 4, left: -22, bottom: 0 }}>
              <defs>
                <linearGradient id="mrrGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor="#0D9373" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#0D9373" stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={GRID_C} vertical={false} />
              <XAxis dataKey="month" tick={TICK} axisLine={false} tickLine={false} interval={1} />
              <YAxis tickFormatter={v => `$${(v/1000).toFixed(0)}K`} tick={TICK} axisLine={false} tickLine={false} />
              <Tooltip content={<MiniTooltip money />} cursor={{ stroke: "rgba(255,255,255,0.08)" }} />
              <Area type="monotone" dataKey="mrr" name="MRR" stroke="#0D9373" strokeWidth={1.5} fill="url(#mrrGrad)" dot={false} activeDot={{ r: 3, fill: "#0D9373" }} />
            </AreaChart>
          </ResponsiveContainer>
        </MiniCard>

        <MiniCard style={{ padding: 12 }}>
          <SectionLabel>Revenue by Segment</SectionLabel>
          <ResponsiveContainer width="100%" height={80}>
            <PieChart>
              <Pie data={revenueSegments} cx="50%" cy="50%" innerRadius={26} outerRadius={38} paddingAngle={2} dataKey="value">
                {revenueSegments.map((_, i) => <Cell key={i} fill={SEG_COLORS[i]} stroke="transparent" />)}
              </Pie>
              <Tooltip content={<MiniTooltip money />} />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {revenueSegments.map((s, i) => (
              <div key={s.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <span style={{ width: 6, height: 6, borderRadius: 2, background: SEG_COLORS[i], flexShrink: 0 }} />
                  <span style={{ fontSize: 9, color: "rgba(245,245,245,0.60)", fontFamily: DM }}>{s.name}</span>
                </div>
                <span style={{ fontSize: 9, color: W, fontFamily: DM }}>${(s.value / 1000).toFixed(1)}K</span>
              </div>
            ))}
          </div>
        </MiniCard>
      </div>

      {/* Row 2: Bar chart + Sequence area */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        <MiniCard style={{ padding: 12 }}>
          <SectionLabel>Pipeline by Stage</SectionLabel>
          <ResponsiveContainer width="100%" height={100}>
            <BarChart data={pipelineStageData} margin={{ top: 4, right: 4, left: -22, bottom: 0 }} barSize={18}>
              <CartesianGrid strokeDasharray="3 3" stroke={GRID_C} vertical={false} />
              <XAxis dataKey="stage" tick={{ ...TICK, fontSize: 8 }} axisLine={false} tickLine={false} />
              <YAxis tick={TICK} axisLine={false} tickLine={false} />
              <Tooltip content={<MiniTooltip />} cursor={{ fill: "rgba(255,255,255,0.04)" }} />
              <Bar dataKey="deals" name="Deals" radius={[3, 3, 0, 0]}>
                {pipelineStageData.map((_, i) => (
                  <Cell key={i} fill={i === pipelineStageData.length - 1 ? "#0D9373" : `rgba(13,147,115,${0.85 - i * 0.12})`} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </MiniCard>

        <MiniCard style={{ padding: 12 }}>
          <SectionLabel>Sequence Performance</SectionLabel>
          <ResponsiveContainer width="100%" height={100}>
            <AreaChart data={seqPerfData} margin={{ top: 4, right: 4, left: -22, bottom: 0 }}>
              <defs>
                <linearGradient id="openGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor="#0D9373" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#0D9373" stopOpacity={0.01} />
                </linearGradient>
                <linearGradient id="replyGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor="#34D3A9" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#34D3A9" stopOpacity={0.01} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={GRID_C} vertical={false} />
              <XAxis dataKey="week" tick={TICK} axisLine={false} tickLine={false} />
              <YAxis tick={TICK} axisLine={false} tickLine={false} tickFormatter={v => `${v}%`} />
              <Tooltip content={<MiniTooltip />} cursor={{ stroke: "rgba(255,255,255,0.08)" }} />
              <Area type="monotone" dataKey="open"  name="Open Rate"  stroke="#0D9373" strokeWidth={1.5} fill="url(#openGrad)"  dot={false} />
              <Area type="monotone" dataKey="reply" name="Reply Rate" stroke="#34D3A9" strokeWidth={1.5} fill="url(#replyGrad)" dot={false} />
            </AreaChart>
          </ResponsiveContainer>
        </MiniCard>
      </div>
    </div>
  );
}

// ─── Page: Pipeline Activity ──────────────────────────────────────────────────

const pipelineKPIs = [
  { label: "Total Pipeline", value: "$2.4M", delta: "↑ 14% QoQ",  green: true },
  { label: "Avg Deal Size",  value: "$38.4K",delta: "↑ 6% QoQ",   green: true },
  { label: "Win Rate",       value: "41%",   delta: "↑ 3pts",      green: true },
  { label: "Avg Cycle",      value: "28d",   delta: "↓ 4 days",    green: true },
];

const pipelineStages = [
  { label: "Qualified",       deals: 47, value: "$892K", pct: 100 },
  { label: "Demo Scheduled",  deals: 31, value: "$621K", pct: 66 },
  { label: "Proposal Sent",   deals: 18, value: "$487K", pct: 38 },
  { label: "Negotiation",     deals: 9,  value: "$312K", pct: 19 },
  { label: "Closed Won",      deals: 12, value: "$186K", pct: 26, highlight: true },
];

const recentDeals = [
  { deal: "Enterprise Suite", company: "Acme Corp",     value: "$42K", stage: "→ Proposal",      stageColor: "#0D9373", changed: "Today" },
  { deal: "Growth Package",   company: "TechFlow Inc",  value: "$28K", stage: "→ Demo",           stageColor: "#EF9F27", changed: "Yesterday" },
  { deal: "Platform License", company: "Vortex Systems",value: "$86K", stage: "✓ Closed Won",    stageColor: "#0D9373", changed: "3d ago" },
  { deal: "Ops Bundle",       company: "DataSync Co",   value: "$19K", stage: "→ Negotiation",    stageColor: "#EF9F27", changed: "4d ago" },
];

function PipelineActivityPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <MiniKPIs items={pipelineKPIs} />
      <MiniCard style={{ padding: 12 }}>
        <SectionLabel>Pipeline Stages</SectionLabel>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {pipelineStages.map((s) => (
            <div key={s.label} style={{ display: "grid", gridTemplateColumns: "110px 1fr 50px 60px", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 10, color: s.highlight ? "#0D9373" : W, fontFamily: DM }}>{s.label}</span>
              <div style={{ height: 5, background: "rgba(255,255,255,0.06)", borderRadius: 99 }}>
                <motion.div style={{ height: "100%", width: `${s.pct}%`, borderRadius: 99, background: s.highlight ? "#0D9373" : "rgba(13,147,115,0.5)" }} initial={{ width: 0 }} animate={{ width: `${s.pct}%` }} transition={{ duration: 0.7 }} />
              </div>
              <span style={{ fontSize: 9, color: "rgba(245,245,245,0.45)", fontFamily: DM, textAlign: "right" }}>{s.deals}d</span>
              <span style={{ fontSize: 9, color: "rgba(245,245,245,0.45)", fontFamily: DM, textAlign: "right" }}>{s.value}</span>
            </div>
          ))}
        </div>
      </MiniCard>
      <MiniCard style={{ padding: 12 }}>
        <SectionLabel>Recent Activity</SectionLabel>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            {recentDeals.map((d) => (
              <tr key={d.deal} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <td style={{ padding: "5px 0", fontFamily: DM }}>
                  <p style={{ fontSize: 10, color: W }}>{d.deal}</p>
                  <p style={{ fontSize: 9, color: "rgba(245,245,245,0.35)" }}>{d.company}</p>
                </td>
                <td style={{ padding: "5px 8px", textAlign: "center" }}>
                  <span style={{ fontSize: 9, color: d.stageColor, fontFamily: DM }}>{d.stage}</span>
                </td>
                <td style={{ padding: "5px 0", textAlign: "right" }}>
                  <p style={{ fontSize: 10, color: W, fontFamily: DM }}>{d.value}</p>
                  <p style={{ fontSize: 9, color: "rgba(245,245,245,0.30)", fontFamily: DM }}>{d.changed}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </MiniCard>
    </div>
  );
}

// ─── Page: Deals & Opportunities ─────────────────────────────────────────────

const allDeals = [
  { deal: "Enterprise Suite",  company: "Acme Corp",      value: "$42,000", stage: "Proposal",     prob: "70%",  owner: "Sarah K.",  stageColor: "#0D9373" },
  { deal: "Platform License",  company: "Vortex Systems", value: "$86,000", stage: "Negotiation",  prob: "85%",  owner: "Sarah K.",  stageColor: "#EF9F27" },
  { deal: "Growth Package",    company: "TechFlow Inc",   value: "$28,000", stage: "Demo",          prob: "55%",  owner: "Marcus R.", stageColor: "#EF9F27" },
  { deal: "Agency Plan",       company: "Prism Digital",  value: "$7,200",  stage: "Qualified",     prob: "40%",  owner: "Jordan T.", stageColor: "rgba(245,245,245,0.35)" },
  { deal: "Ops Bundle",        company: "DataSync Co",    value: "$19,200", stage: "Closed Won",    prob: "100%", owner: "Marcus R.", stageColor: "#0D9373" },
  { deal: "Starter Add-ons",   company: "Nexus Group",    value: "$14,400", stage: "Qualified",     prob: "35%",  owner: "Jordan T.", stageColor: "rgba(245,245,245,0.35)" },
];

function DealsPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <MiniKPIs items={[
        { label: "Open Pipeline",  value: "$196K", delta: "6 open deals",   green: true },
        { label: "Closed Won MTD", value: "$19.2K",delta: "1 this month",   green: true },
        { label: "Avg Probability",value: "61%",   delta: "↑ vs last month",green: true },
      ]} />
      <MiniCard style={{ padding: 12 }}>
        <SectionLabel>All Deals</SectionLabel>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              {["Deal", "Stage", "Value", "Prob.", "Owner"].map(h => (
                <th key={h} style={{ fontSize: 8, color: "rgba(245,245,245,0.30)", fontFamily: DM, fontWeight: 500, textAlign: "left", paddingBottom: 6, paddingRight: 8 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {allDeals.map((d) => (
              <tr key={d.deal} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                <td style={{ padding: "5px 8px 5px 0", fontFamily: DM }}>
                  <p style={{ fontSize: 10, color: W }}>{d.deal}</p>
                  <p style={{ fontSize: 8, color: "rgba(245,245,245,0.30)" }}>{d.company}</p>
                </td>
                <td style={{ padding: "5px 8px 5px 0" }}>
                  <span style={{ fontSize: 8, color: d.stageColor, fontFamily: DM }}>{d.stage}</span>
                </td>
                <td style={{ padding: "5px 8px 5px 0", fontSize: 10, color: W, fontFamily: DM, fontVariantNumeric: "tabular-nums" }}>{d.value}</td>
                <td style={{ padding: "5px 8px 5px 0", fontSize: 10, color: "rgba(245,245,245,0.55)", fontFamily: DM }}>{d.prob}</td>
                <td style={{ padding: "5px 0", fontSize: 9, color: "rgba(245,245,245,0.40)", fontFamily: DM }}>{d.owner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </MiniCard>
    </div>
  );
}

// ─── Page: Accounts & Contacts ────────────────────────────────────────────────

const accounts = [
  { name: "Acme Corp",          mrr: "$8,400",  health: "Healthy",        healthColor: "#0D9373", since: "Jan 2024" },
  { name: "TechFlow Inc",       mrr: "$5,200",  health: "Healthy",        healthColor: "#0D9373", since: "Mar 2024" },
  { name: "Meridian Analytics", mrr: "$4,200",  health: "At Risk",        healthColor: "#FF5040", since: "Aug 2023" },
  { name: "Vortex Systems",     mrr: "$3,800",  health: "Healthy",        healthColor: "#0D9373", since: "Nov 2023" },
  { name: "CloudBase Inc",      mrr: "$2,800",  health: "Needs Attention",healthColor: "#EF9F27", since: "Feb 2024" },
  { name: "Synterra Labs",      mrr: "$1,600",  health: "At Risk",        healthColor: "#FF5040", since: "Apr 2024" },
  { name: "Prism Digital",      mrr: "$900",    health: "New",            healthColor: "#0D9373", since: "Mar 2025" },
];

function AccountsPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <MiniKPIs items={[
        { label: "Total Accounts", value: "269",    delta: "+7 this month",    green: true },
        { label: "Total MRR",      value: "$127K",  delta: "↑ 8.3% MoM",      green: true },
        { label: "Avg Health",     value: "74/100", delta: "Above threshold",  green: true },
      ]} />
      <MiniCard style={{ padding: 12 }}>
        <SectionLabel>Accounts</SectionLabel>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              {["Account", "MRR", "Health", "Since"].map(h => (
                <th key={h} style={{ fontSize: 8, color: "rgba(245,245,245,0.30)", fontFamily: DM, fontWeight: 500, textAlign: "left", paddingBottom: 6, paddingRight: 8 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {accounts.map((a) => (
              <tr key={a.name} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                <td style={{ padding: "5px 8px 5px 0", fontSize: 10, color: W, fontFamily: DM }}>{a.name}</td>
                <td style={{ padding: "5px 8px 5px 0", fontSize: 10, color: W, fontFamily: DM, fontVariantNumeric: "tabular-nums" }}>{a.mrr}</td>
                <td style={{ padding: "5px 8px 5px 0" }}>
                  <span style={{ fontSize: 8, padding: "2px 6px", borderRadius: 4, background: `${a.healthColor}1a`, color: a.healthColor, fontFamily: DM }}>{a.health}</span>
                </td>
                <td style={{ padding: "5px 0", fontSize: 9, color: "rgba(245,245,245,0.35)", fontFamily: DM }}>{a.since}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </MiniCard>
    </div>
  );
}

// ─── Page: Sequences & Automations ───────────────────────────────────────────

const seqData = [
  { name: "SaaS Onboarding v2",     enrolled: 147, open: "64%", reply: "12%", status: "active",  statusColor: "#0D9373" },
  { name: "Re-engagement Q1",       enrolled: 89,  open: "41%", reply: "8%",  status: "active",  statusColor: "#0D9373" },
  { name: "Trial → Paid Nurture",   enrolled: 52,  open: "58%", reply: "15%", status: "active",  statusColor: "#0D9373" },
  { name: "Cold Outbound Batch 7",  enrolled: 203, open: "22%", reply: "3%",  status: "paused",  statusColor: "#EF9F27" },
  { name: "Post-Demo Follow-up",    enrolled: 38,  open: "71%", reply: "22%", status: "active",  statusColor: "#0D9373" },
  { name: "Winback Campaign",       enrolled: 64,  open: "35%", reply: "6%",  status: "draft",   statusColor: "rgba(245,245,245,0.3)" },
];

function SequencesPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <MiniKPIs items={[
        { label: "Active Sequences", value: "4",    delta: "Running now",   green: true },
        { label: "Total Enrolled",   value: "593",  delta: "Across all seqs",green: true },
        { label: "Avg Open Rate",    value: "48.5%",delta: "↑ vs benchmark",green: true },
        { label: "Avg Reply Rate",   value: "11.0%",delta: "↑ 1.2pts",      green: true },
      ]} />
      <MiniCard style={{ padding: 12 }}>
        <SectionLabel>All Sequences</SectionLabel>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              {["Sequence", "Enrolled", "Open", "Reply", "Status"].map(h => (
                <th key={h} style={{ fontSize: 8, color: "rgba(245,245,245,0.30)", fontFamily: DM, fontWeight: 500, textAlign: "left", paddingBottom: 6, paddingRight: 8 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {seqData.map((s) => (
              <tr key={s.name} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                <td style={{ padding: "5px 8px 5px 0", fontSize: 10, color: W, fontFamily: DM, maxWidth: 140 }}>
                  <span style={{ display: "block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{s.name}</span>
                </td>
                <td style={{ padding: "5px 8px 5px 0", fontSize: 10, color: "rgba(245,245,245,0.55)", fontFamily: DM }}>{s.enrolled}</td>
                <td style={{ padding: "5px 8px 5px 0", fontSize: 10, color: "#0D9373", fontFamily: DM }}>{s.open}</td>
                <td style={{ padding: "5px 8px 5px 0", fontSize: 10, color: "rgba(245,245,245,0.55)", fontFamily: DM }}>{s.reply}</td>
                <td style={{ padding: "5px 0" }}>
                  <span style={{ fontSize: 8, padding: "2px 6px", borderRadius: 4, background: `${s.statusColor}1a`, color: s.statusColor, fontFamily: DM }}>{s.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </MiniCard>
    </div>
  );
}

// ─── Page: Retention & CS Health ─────────────────────────────────────────────

const healthBands = [
  { label: "Healthy (80–100)",        count: 142, pct: 100, color: "#0D9373" },
  { label: "Needs Attention (60–79)", count: 89,  pct: 63,  color: "#EF9F27" },
  { label: "At Risk (40–59)",         count: 31,  pct: 22,  color: "#FF8040" },
  { label: "Critical (<40)",          count: 7,   pct: 5,   color: "#FF5040" },
];

const atRiskAccounts = [
  { account: "Meridian Analytics", mrr: "$4,200", score: 38, factors: "Low usage, no QBR",    action: "Schedule QBR",  scoreColor: "#FF5040" },
  { account: "CloudBase Inc",      mrr: "$2,800", score: 52, factors: "Support tickets up",   action: "Review tickets",scoreColor: "#FF5040" },
  { account: "Synterra Labs",      mrr: "$1,600", score: 47, factors: "Champion left",         action: "Re-engage",      scoreColor: "#FF5040" },
  { account: "LoopStream",         mrr: "$900",   score: 61, factors: "Renewal in 30 days",   action: "Send renewal",  scoreColor: "#EF9F27" },
];

function RetentionPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <MiniKPIs items={[
        { label: "Avg Health Score",  value: "74/100", delta: "Above threshold",  green: true },
        { label: "At-Risk Accounts",  value: "7",      delta: "2 critical",       green: false },
        { label: "NPS Score",         value: "42",     delta: "+4 vs last qtr",   green: true },
        { label: "Renewed MTD",       value: "6",      delta: "$28.4K MRR saved", green: true },
      ]} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 8 }}>
        <MiniCard style={{ padding: 12 }}>
          <SectionLabel>Health Distribution</SectionLabel>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {healthBands.map((b) => (
              <div key={b.label}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                  <span style={{ fontSize: 8, color: "rgba(245,245,245,0.50)", fontFamily: DM }}>{b.label}</span>
                  <span style={{ fontSize: 8, color: b.color, fontFamily: DM }}>{b.count}</span>
                </div>
                <div style={{ height: 4, background: "rgba(255,255,255,0.06)", borderRadius: 99 }}>
                  <motion.div style={{ height: "100%", width: `${b.pct}%`, borderRadius: 99, background: b.color, opacity: 0.8 }} initial={{ width: 0 }} animate={{ width: `${b.pct}%` }} transition={{ duration: 0.7 }} />
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 8, color: "rgba(245,245,245,0.25)", marginTop: 10, fontFamily: DM }}>269 accounts tracked</p>
        </MiniCard>
        <MiniCard style={{ padding: 12 }}>
          <SectionLabel>At-Risk Accounts</SectionLabel>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              {atRiskAccounts.map((a) => (
                <tr key={a.account} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                  <td style={{ padding: "5px 8px 5px 0", fontFamily: DM }}>
                    <p style={{ fontSize: 10, color: W }}>{a.account}</p>
                    <p style={{ fontSize: 8, color: "rgba(245,245,245,0.30)" }}>{a.factors}</p>
                  </td>
                  <td style={{ padding: "5px 8px 5px 0" }}>
                    <span style={{ fontSize: 10, color: a.scoreColor, fontFamily: DM, fontWeight: 600 }}>{a.score}</span>
                  </td>
                  <td style={{ padding: "5px 8px 5px 0", fontSize: 9, color: "rgba(245,245,245,0.30)", fontFamily: DM }}>{a.mrr}</td>
                  <td style={{ padding: "5px 0" }}>
                    <span style={{ fontSize: 8, padding: "2px 6px", borderRadius: 4, background: "rgba(13,147,115,0.10)", color: "#0D9373", fontFamily: DM, cursor: "pointer" }}>{a.action}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </MiniCard>
      </div>
    </div>
  );
}

// ─── Page: Revenue & MRR ─────────────────────────────────────────────────────

const mrrMovement = [
  { category: "New Business", accounts: "+8", impact: "+$14,200", positive: true },
  { category: "Expansion",    accounts: "+5", impact: "+$3,800",  positive: true },
  { category: "Contraction",  accounts: "-2", impact: "-$1,400",  positive: false },
  { category: "Churned",      accounts: "-1", impact: "-$2,100",  positive: false },
  { category: "Net New MRR",  accounts: "",   impact: "+$14,500", positive: true, highlight: true },
];

const topAccounts = [
  { account: "Acme Corp",           mrr: "$8,400", nrr: "124%", nrrColor: "#0D9373" },
  { account: "TechFlow Inc",        mrr: "$5,200", nrr: "112%", nrrColor: "#0D9373" },
  { account: "Meridian Analytics",  mrr: "$4,200", nrr: "89%",  nrrColor: "#FF5040" },
  { account: "Vortex Systems",      mrr: "$3,800", nrr: "118%", nrrColor: "#0D9373" },
  { account: "CloudBase Inc",       mrr: "$2,800", nrr: "95%",  nrrColor: "#EF9F27" },
];

function RevenuePage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <MiniKPIs items={[
        { label: "Current MRR",  value: "$127.4K", delta: "↑ 8.3% MoM",    green: true },
        { label: "ARR Run Rate", value: "$1.53M",  delta: "↑ 8.3% ann.",   green: true },
        { label: "NRR",          value: "108%",    delta: "↑ 3pts",         green: true },
        { label: "Churn Rate",   value: "1.8%",    delta: "↓ 0.4pts",       green: true },
      ]} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        <MiniCard style={{ padding: 12 }}>
          <SectionLabel>MRR Movement This Month</SectionLabel>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              {mrrMovement.map((m) => (
                <tr key={m.category} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)", fontWeight: m.highlight ? 600 : 400 }}>
                  <td style={{ padding: "5px 8px 5px 0", fontSize: 10, color: m.highlight ? W : "rgba(245,245,245,0.65)", fontFamily: DM }}>{m.category}</td>
                  <td style={{ padding: "5px 8px 5px 0", fontSize: 9, color: "rgba(245,245,245,0.35)", fontFamily: DM }}>{m.accounts}</td>
                  <td style={{ padding: "5px 0", fontSize: 10, color: m.highlight ? "#0D9373" : m.positive ? "#0D9373" : "#FF5040", fontFamily: DM, textAlign: "right", fontVariantNumeric: "tabular-nums" }}>{m.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </MiniCard>
        <MiniCard style={{ padding: 12 }}>
          <SectionLabel>Top Accounts by MRR</SectionLabel>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              {topAccounts.map((a) => (
                <tr key={a.account} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                  <td style={{ padding: "5px 8px 5px 0", fontSize: 10, color: W, fontFamily: DM }}>{a.account}</td>
                  <td style={{ padding: "5px 8px 5px 0", fontSize: 10, color: "rgba(245,245,245,0.55)", fontFamily: DM, fontVariantNumeric: "tabular-nums" }}>{a.mrr}</td>
                  <td style={{ padding: "5px 0", textAlign: "right" }}>
                    <span style={{ fontSize: 9, color: a.nrrColor, fontFamily: DM }}>NRR {a.nrr}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </MiniCard>
      </div>
    </div>
  );
}

// ─── Page: AI Revenue Agent ───────────────────────────────────────────────────

interface ChatMessage {
  id: number;
  from: "user" | "ai";
  text: string;
  suggestions?: string[];
}

const AI_RESPONSES: Record<string, string> = {
  pipeline: "Current pipeline health:\n• Total value: $2.4M across 47 open deals\n• Biggest drop-off: Qualified → Demo (34% conv., benchmark 50%)\n• 9 deals stalled 14+ days — Negotiation is the bottleneck\n• Win rate: 41% (↑ 3pts vs last quarter)\n\nRecommendation: The 9 stalled Negotiation deals are $312K at risk of going cold.",
  leads: "Unworked leads (48h+ no contact):\n• 14 leads, zero touch in 48 hours\n• 6 inbound — avg response time: 3.2 hours (benchmark: <5 min)\n• Top unworked: Acme Corp (2d ago), DataSync Co (18h ago)\n\nRecommendation: Trigger speed-to-lead sequence on all 14 now. Every hour past 5 min drops conversion ~8%.",
  churn: "Churn risk — current flags:\n• 7 accounts health score < 60\n• Meridian Analytics (38) — no QBR 60 days, usage ↓40%\n• DriftLabs (39) — no login 21 days, renewal in 45 days\n• CloudBase Inc (52) — support tickets ↑3x this month\n\nRecommendation: Meridian and DriftLabs need human outreach this week, not automation.",
  sequence: "Sequence performance:\n• Churn Prevention Flow: 71% open, 34% reply — best performer\n• SaaS Onboarding v2: 64% open, 18% reply — solid\n• Cold Outbound Batch 7: 22% open, 6% reply — review the copy\n• Re-engagement Q1: 41% open, 9% reply — A/B test subject line\n\nAvg across active: 47% open, 12% reply.",
  forecast: "Revenue forecast — next 30 days:\n• Current MRR: $127,400\n• Projected new business: +$18,200 (8 deals at 70%+ prob.)\n• Expansion pipeline: +$4,100\n• Churn risk: -$7,300 (3 at-risk accounts)\n• Net projected MRR: ~$142,400 (+11.8%)\n\nUpside: $156K if stalled deals close. Downside: $134K if churn materializes.",
  speed: "Speed to lead:\n• Avg response time: 4.2 minutes ✓ (benchmark <5 min)\n• Best: Inbound form → sequence trigger (1.8 min)\n• Slowest: Demo request → rep assignment (11.4 min)\n• Leads reached in <5 min: 73% (↑ from 54% last month)\n\nRecommendation: Automate the demo request first-touch — that's the gap.",
  default: "I can pull data on your pipeline, leads, sequences, or client health. Try:\n• Which accounts are at risk of churning?\n• What's our projected MRR next month?\n• Where are deals stalling in the funnel?\n• Which sequences are underperforming?",
};

const QUICK_ACTIONS = [
  { icon: GitBranch,    label: "Pipeline Health",         desc: "Funnel drop-off & stalls",    key: "pipeline" },
  { icon: Users,        label: "Unworked Leads",          desc: "No contact in 48+ hours",     key: "leads"    },
  { icon: AlertTriangle,label: "Churn Risk",              desc: "Early warning accounts",      key: "churn"    },
  { icon: Zap,          label: "Sequence Performance",    desc: "Open & reply rates",          key: "sequence" },
  { icon: TrendingUp,   label: "Revenue Forecast",        desc: "Projected MRR next 30 days", key: "forecast" },
  { icon: Clock,        label: "Speed to Lead",           desc: "Avg response vs benchmark",  key: "speed"    },
];

const SUGGESTIONS = [
  "What does projected revenue look like?",
  "Which leads haven't been touched in 3+ days?",
  "Where are deals stalling?",
  "What's driving churn risk?",
];

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 1,
    from: "ai",
    text: "I have live access to your pipeline, sequences, lead activity, and client health data. Ask me anything — I'll pull the numbers and tell you what they mean.",
    suggestions: SUGGESTIONS,
  },
];

function getAIResponse(input: string): string {
  const m = input.toLowerCase();
  if (m.includes("pipeline") || m.includes("funnel") || m.includes("drop") || m.includes("stall")) return AI_RESPONSES.pipeline;
  if (m.includes("lead") || m.includes("unworked") || m.includes("48")) return AI_RESPONSES.leads;
  if (m.includes("churn") || m.includes("risk") || m.includes("health")) return AI_RESPONSES.churn;
  if (m.includes("sequence") || m.includes("open rate") || m.includes("reply")) return AI_RESPONSES.sequence;
  if (m.includes("forecast") || m.includes("projected") || m.includes("revenue") || m.includes("mrr")) return AI_RESPONSES.forecast;
  if (m.includes("speed") || m.includes("response time") || m.includes("benchmark")) return AI_RESPONSES.speed;
  return AI_RESPONSES.default;
}

function AIAgentPage() {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const send = (text: string) => {
    if (!text.trim()) return;
    const userMsg: ChatMessage = { id: Date.now(), from: "user", text };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      const aiMsg: ChatMessage = {
        id: Date.now() + 1,
        from: "ai",
        text: getAIResponse(text),
        suggestions: SUGGESTIONS,
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1200);
  };

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "190px 1fr", gap: 8, height: 380 }}>

      {/* Quick Actions */}
      <MiniCard style={{ padding: 10, display: "flex", flexDirection: "column", gap: 4, overflowY: "auto" }}>
        <SectionLabel>Quick Actions</SectionLabel>
        {QUICK_ACTIONS.map(({ icon: Icon, label, desc, key }) => (
          <button
            key={key}
            onClick={() => send(`Show me ${label.toLowerCase()}`)}
            style={{
              display: "flex", alignItems: "flex-start", gap: 7, padding: "6px 8px", borderRadius: 6,
              border: "1px solid rgba(255,255,255,0.06)", background: "transparent", cursor: "pointer",
              textAlign: "left", width: "100%", transition: "background 0.15s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(13,147,115,0.08)")}
            onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
          >
            <div style={{ padding: 4, borderRadius: 5, background: "rgba(13,147,115,0.12)", flexShrink: 0, marginTop: 1 }}>
              <Icon style={{ width: 10, height: 10, color: "#0D9373" }} />
            </div>
            <div>
              <p style={{ fontSize: 10, color: W, fontFamily: DM, lineHeight: 1.3 }}>{label}</p>
              <p style={{ fontSize: 8, color: "rgba(245,245,245,0.35)", fontFamily: DM, lineHeight: 1.3 }}>{desc}</p>
            </div>
          </button>
        ))}
      </MiniCard>

      {/* Chat */}
      <MiniCard style={{ padding: 10, display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, paddingBottom: 8, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ width: 20, height: 20, borderRadius: 5, background: "rgba(13,147,115,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <Bot style={{ width: 11, height: 11, color: "#0D9373" }} />
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 10, fontWeight: 600, color: W, fontFamily: DM, lineHeight: 1.2 }}>AI Revenue Agent</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <span className="relative flex" style={{ width: 5, height: 5 }}>
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0D9373] opacity-60" />
              <span className="relative inline-flex rounded-full bg-[#0D9373]" style={{ width: 5, height: 5 }} />
            </span>
            <span style={{ fontSize: 8, color: "#0D9373", fontFamily: DM }}>Live</span>
          </div>
        </div>

        {/* Messages */}
        <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: 8 }}>
          {messages.map((msg) => (
            <div key={msg.id}>
              <div style={{ display: "flex", justifyContent: msg.from === "user" ? "flex-end" : "flex-start" }}>
                <div style={{
                  maxWidth: "88%", padding: "6px 9px",
                  borderRadius: msg.from === "user" ? "9px 9px 3px 9px" : "9px 9px 9px 3px",
                  background: msg.from === "user" ? "rgba(13,147,115,0.20)" : "rgba(255,255,255,0.04)",
                  border: `1px solid ${msg.from === "user" ? "rgba(13,147,115,0.25)" : "rgba(255,255,255,0.07)"}`,
                }}>
                  <p style={{ fontSize: 9, color: msg.from === "user" ? "#34D3A9" : W, fontFamily: DM, lineHeight: 1.6, whiteSpace: "pre-line" }}>
                    {msg.text}
                  </p>
                </div>
              </div>
              {/* Suggestion chips */}
              {msg.suggestions && msg.from === "ai" && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 6 }}>
                  {msg.suggestions.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      style={{
                        fontSize: 8, padding: "3px 7px", borderRadius: 99, cursor: "pointer",
                        background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)",
                        color: "rgba(245,245,245,0.60)", fontFamily: DM, transition: "all 0.15s",
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = "rgba(13,147,115,0.12)"; e.currentTarget.style.color = "#0D9373"; e.currentTarget.style.borderColor = "rgba(13,147,115,0.3)"; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "rgba(245,245,245,0.60)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)"; }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <div style={{ padding: "7px 10px", borderRadius: "9px 9px 9px 3px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", display: "flex", gap: 4, alignItems: "center" }}>
                {[0, 0.15, 0.3].map((delay, i) => (
                  <span key={i} className="inline-block w-1.5 h-1.5 rounded-full bg-white/30 animate-bounce" style={{ animationDelay: `${delay}s` }} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div style={{ display: "flex", gap: 6, marginTop: 8, paddingTop: 8, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && send(input)}
            placeholder="Ask about your revenue ops..."
            style={{
              flex: 1, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 6, padding: "5px 9px", fontSize: 9, color: W, fontFamily: DM, outline: "none",
            }}
            onFocus={e => (e.currentTarget.style.borderColor = "rgba(13,147,115,0.4)")}
            onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
          />
          <button
            onClick={() => send(input)}
            disabled={!input.trim() || isTyping}
            style={{
              padding: "5px 9px", borderRadius: 6, border: "none", cursor: input.trim() && !isTyping ? "pointer" : "default",
              background: input.trim() && !isTyping ? "rgba(13,147,115,0.80)" : "rgba(255,255,255,0.05)",
              display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.15s",
            }}
          >
            <Send style={{ width: 10, height: 10, color: input.trim() && !isTyping ? W : "rgba(245,245,245,0.25)" }} />
          </button>
        </div>
      </MiniCard>
    </div>
  );
}

// ─── Page: Settings ───────────────────────────────────────────────────────────

const integrations = [
  { name: "HubSpot CRM",   connected: true  },
  { name: "Instantly AI",  connected: true  },
  { name: "Clay",          connected: true  },
  { name: "Stripe",        connected: true  },
  { name: "Slack",         connected: true  },
  { name: "n8n",           connected: false },
  { name: "Pipedrive",     connected: false },
  { name: "Salesforce",    connected: false },
];

function SettingsPageMini() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        <MiniCard style={{ padding: 12 }}>
          <SectionLabel>Profile</SectionLabel>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { label: "Name", value: "Chadwick" },
              { label: "Email", value: "chad@locusops.com" },
              { label: "Role", value: "Admin" },
              { label: "Workspace", value: "Locus Operations" },
            ].map((f) => (
              <div key={f.label}>
                <p style={{ fontSize: 8, color: "rgba(245,245,245,0.30)", fontFamily: DM, marginBottom: 3 }}>{f.label}</p>
                <div style={{ padding: "5px 8px", borderRadius: 5, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <span style={{ fontSize: 10, color: W, fontFamily: DM }}>{f.value}</span>
                </div>
              </div>
            ))}
          </div>
        </MiniCard>
        <MiniCard style={{ padding: 12 }}>
          <SectionLabel>Integrations</SectionLabel>
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            {integrations.map((int) => (
              <div key={int.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "5px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                <span style={{ fontSize: 10, color: W, fontFamily: DM }}>{int.name}</span>
                <span style={{ fontSize: 8, padding: "2px 6px", borderRadius: 4, background: int.connected ? "rgba(13,147,115,0.12)" : "rgba(255,255,255,0.05)", color: int.connected ? "#0D9373" : "rgba(245,245,245,0.35)", fontFamily: DM }}>
                  {int.connected ? "Connected" : "Not connected"}
                </span>
              </div>
            ))}
          </div>
        </MiniCard>
      </div>
    </div>
  );
}

// ─── Tab content switcher ─────────────────────────────────────────────────────

function TabContent({ tab, inView }: { tab: string; inView: boolean }) {
  switch (tab) {
    case "dashboard":  return <CommandCenter inView={inView} />;
    case "analytics":  return <RevenueIntelligence />;
    case "pipeline":   return <PipelineActivityPage />;
    case "deals":      return <DealsPage />;
    case "accounts":   return <AccountsPage />;
    case "sequences":  return <SequencesPage />;
    case "retention":  return <RetentionPage />;
    case "revenue":    return <RevenuePage />;
    case "ai":         return <AIAgentPage />;
    case "settings":   return <SettingsPageMini />;
    default:           return <CommandCenter inView={inView} />;
  }
}

// ─── Main Component ────────────────────────────────────────────────────────────

const DashboardPreview = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("dashboard");

  const activeLabel = NAV.find((n) => n.id === activeTab)?.label ?? "Command Center";

  return (
    <section className="section-spacing relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-[#0D9373]/5 blur-[130px] pointer-events-none" />

      <div className="container-main relative z-10">

        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#0D9373] mb-4">
            The Locus of your Revenue Motion
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Your revenue motion.{" "}
            <span className="text-muted-foreground">Live and accounted for.</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Every lead, sequence, handoff, and risk. Visible in one place. Not a slide deck. The actual system.
          </p>
        </div>

        {/* Mobile teaser — shown below md */}
        <div className="md:hidden">
          <div
            className="rounded-xl border border-white/10 overflow-hidden"
            style={{ boxShadow: "0 0 60px -20px rgba(13,147,115,0.25)" }}
          >
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-2.5 bg-[#06090C] border-b border-white/[0.07]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF5F57" }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#FEBC2E" }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#28C840" }} />
              </div>
              <span className="text-[10px] text-white/25 ml-1" style={{ fontFamily: DM }}>locus / revenue-ops</span>
            </div>
            {/* Preview tiles */}
            <div className="bg-[#04080C] p-4 space-y-3">
              <div className="grid grid-cols-2 gap-2">
                {kpis.map((k) => (
                  <div key={k.label} className="rounded-lg p-3" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <p style={{ fontSize: 8, color: "rgba(245,245,245,0.35)", fontFamily: DM, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>{k.label}</p>
                    <p style={{ fontSize: 18, fontWeight: 700, color: "#F5F5F5", fontFamily: DM, lineHeight: 1 }}>{k.value}</p>
                    <p style={{ fontSize: 9, color: k.green !== false ? "#0D9373" : "#FF5040", fontFamily: DM, marginTop: 3 }}>{k.delta}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-lg p-3 flex items-center justify-center gap-3" style={{ background: "rgba(13,147,115,0.06)", border: "1px solid rgba(13,147,115,0.15)" }}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0D9373] opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0D9373]" />
                </span>
                <p style={{ fontSize: 11, color: "#0D9373", fontFamily: DM, fontWeight: 500 }}>View full interactive dashboard on desktop</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard window — full interactive, desktop only */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-6xl mx-auto hidden md:block"
        >
          {/* Outer chrome with glow */}
          <div
            className="rounded-xl overflow-hidden border border-white/10"
            style={{ boxShadow: "0 0 90px -20px rgba(13,147,115,0.30), 0 0 0 1px rgba(255,255,255,0.06)" }}
          >

            {/* Title bar — macOS window chrome */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#06090C] border-b border-white/[0.07]">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: "#FEBC2E" }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: "#28C840" }} />
                </div>
                <span className="text-[11px] text-white/25 ml-2 tracking-wide" style={{ fontFamily: DM }}>
                  locus / revenue-ops / {activeTab === "dashboard" ? "command-center" : activeTab.replace("-", "/")}
                </span>
              </div>
            </div>

            {/* App shell: sidebar + main */}
            <div className="flex bg-[#04080C]" style={{ minHeight: 500 }}>

              {/* Sidebar */}
              <div
                className="hidden lg:flex flex-col flex-shrink-0 border-r border-white/[0.05]"
                style={{ width: 188, background: "#06090C" }}
              >
                {/* Logo */}
                <div className="px-4 py-3 border-b border-white/[0.05]">
                  <img src={locusWordmark} alt="Locus" style={{ height: 22, width: "auto", objectFit: "contain" }} />
                </div>

                {/* Nav */}
                <div className="flex-1 py-2 px-2 space-y-0.5 overflow-hidden">
                  {NAV.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className="w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-left"
                        style={{
                          background: isActive ? "rgba(13,147,115,0.10)" : "transparent",
                          borderLeft: isActive ? "2px solid #0D9373" : "2px solid transparent",
                          border: "none",
                          cursor: "pointer",
                          transition: "all 0.15s ease",
                        }}
                      >
                        <Icon style={{ width: 12, height: 12, flexShrink: 0, color: isActive ? "#0D9373" : "rgba(245,245,245,0.35)" }} />
                        <span
                          className="text-[10px] truncate"
                          style={{ fontFamily: DM, color: isActive ? "#0D9373" : W, fontWeight: isActive ? 500 : 400 }}
                        >
                          {item.label}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Avatar */}
                <div className="px-3 py-3 border-t border-white/[0.05] flex items-center gap-2">
                  <div className="rounded flex items-center justify-center flex-shrink-0" style={{ width: 22, height: 22, background: "rgba(13,147,115,0.15)" }}>
                    <span className="text-[8px] font-bold text-[#0D9373]">LO</span>
                  </div>
                  <div>
                    <p style={{ fontSize: 10, fontWeight: 500, color: W, fontFamily: DM }}>Locus Ops</p>
                    <p style={{ fontSize: 9, color: "rgba(245,245,245,0.30)", fontFamily: DM }}>Admin</p>
                  </div>
                </div>
              </div>

              {/* Main content */}
              <div className="flex-1 flex flex-col min-w-0">

                {/* Top header bar */}
                <div
                  className="flex items-center justify-between px-4 border-b border-white/[0.06] flex-shrink-0"
                  style={{ height: 40, background: "rgba(4,8,12,0.90)" }}
                >
                  <span style={{ fontSize: 12, fontWeight: 500, color: W, fontFamily: DM }}>{activeLabel}</span>
                  <div className="flex items-center gap-3">
                    <div
                      className="hidden sm:flex items-center gap-1.5 px-2 py-1 rounded-md"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                    >
                      <Search style={{ width: 10, height: 10, color: "rgba(245,245,245,0.3)" }} />
                      <span style={{ fontSize: 10, color: "rgba(245,245,245,0.25)", fontFamily: DM }}>Search...</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-1.5">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0D9373] opacity-60" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#0D9373]" />
                      </span>
                      <span style={{ fontSize: 10, color: "#0D9373", fontFamily: DM, fontWeight: 500 }}>All systems live</span>
                    </div>
                    <div className="relative">
                      <Bell style={{ width: 13, height: 13, color: "rgba(245,245,245,0.4)" }} />
                      <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-[#FF5040]" />
                    </div>
                  </div>
                </div>

                {/* Page content */}
                <div className="flex-1 p-3 sm:p-4 overflow-hidden" style={{ overflowY: "auto", maxHeight: 460 }}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <TabContent tab={activeTab} inView={inView} />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <p className="text-center text-xs text-muted-foreground/50 mt-5">
          Simulated dashboard — actual metrics vary by client engagement and stack configuration.
        </p>
      </div>
    </section>
  );
};

export default DashboardPreview;
