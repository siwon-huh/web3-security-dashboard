export const CHECKLIST_CATEGORIES_EN: Readonly<
  Record<string, { title: string; description: string }>
> = {
  audit: {
    title: "Smart contract audits",
    description:
      "Evaluates whether external security audits exist and how rigorous they are.",
  },
  "code-quality": {
    title: "Code quality",
    description:
      "Engineering maturity: tests, documentation, formal verification.",
  },
  ops: {
    title: "Operational security",
    description:
      "Admin keys, upgrade paths, timelocks, and operational controls.",
  },
  bounty: {
    title: "Bug bounty",
    description: "Size and operation of external whitehat incentives.",
  },
  decentralization: {
    title: "Decentralization & dependencies",
    description: "Oracle, bridge, and governance dependency risks.",
  },
  incident: {
    title: "Incident response",
    description: "Incident history and response transparency.",
  },
};

export const CHECKLIST_ITEMS_EN: Readonly<
  Record<string, { label: string; description: string }>
> = {
  audit_firm_tier: {
    label: "Highest-tier audit firm",
    description: "What is the highest-tier firm that has audited this project?",
  },
  audit_count: {
    label: "Number of independent audits",
    description: "Number of audit reports from different firms.",
  },
  audit_recency: {
    label: "Time since last audit",
    description: "Time since the most recent audit covering deployed code.",
  },
  audit_public: {
    label: "Audit reports public",
    description:
      "PDF reports are accessible at a public, unrestricted location.",
  },
  audit_findings_resolved: {
    label: "Critical/High issues resolved",
    description:
      "All reported Critical/High findings are fixed or explicitly accepted.",
  },
  test_coverage: {
    label: "Test coverage",
    description: "Line and branch coverage levels.",
  },
  open_source: {
    label: "Open-sourced",
    description: "Production contract source is in a public repository.",
  },
  verified_onchain: {
    label: "On-chain source verified",
    description: "Source is verified on Etherscan or equivalent.",
  },
  formal_verification: {
    label: "Formal verification applied",
    description:
      "Core invariants verified with Certora, K, Halmos, or similar tools.",
  },
  fuzzing: {
    label: "Fuzzing / invariant tests",
    description: "Repository contains Foundry or Echidna invariant tests.",
  },
  multisig: {
    label: "Admin multisig",
    description: "Admin keys are operated through a multisig such as Safe.",
  },
  timelock: {
    label: "Timelock",
    description: "Admin actions are gated through a timelock.",
  },
  upgrade_path: {
    label: "Upgrade path",
    description: "Whether and how the contracts can be upgraded.",
  },
  pause_mechanism: {
    label: "Emergency pause",
    description: "Critical functions support a pause or circuit breaker.",
  },
  monitoring: {
    label: "On-chain monitoring",
    description:
      "Real-time monitoring via Forta, Tenderly, Phalcon, or similar.",
  },
  bounty_platform: {
    label: "Bounty platform",
    description: "Where the official bug bounty program runs.",
  },
  bounty_max: {
    label: "Maximum reward",
    description: "Top payout for a Critical issue.",
  },
  bounty_scope_clear: {
    label: "Scope and PoC requirements clear",
    description: "Scope, severity rules, and PoC requirements are documented.",
  },
  oracle: {
    label: "Oracle design",
    description: "Safety and diversity of price feeds.",
  },
  governance: {
    label: "Governance",
    description: "Token power distribution, proposal periods, and quorum.",
  },
  bridge_dep: {
    label: "Bridge dependency",
    description: "Whether external bridges sit in the critical fund flow.",
  },
  past_incidents: {
    label: "Past incidents",
    description: "History of significant fund loss.",
  },
  postmortem: {
    label: "Postmortem policy",
    description:
      "Explicit policy committing to publishing incident postmortems.",
  },
  war_room: {
    label: "War-room / contact channel",
    description: "Documented 24/7 security contact channel and SLA.",
  },
};

export const CHECKLIST_OPTIONS_EN: Readonly<
  Record<string, Readonly<Record<string, string>>>
> = {
  audit_firm_tier: {
    s: "S Tier (Trail of Bits, OpenZeppelin, etc.)",
    a: "A Tier (Halborn, Sigma Prime, etc.)",
    b: "B Tier (Ottersec, BlockSec, etc.)",
    c: "C Tier (CertiK, Beosin, etc.)",
    none: "No audit",
  },
  audit_count: {
    "3plus": "3 or more",
    "2": "2",
    "1": "1",
    "0": "0",
  },
  audit_recency: {
    fresh: "Within 6 months",
    year: "Within 1 year",
    old: "Within 2 years",
    stale: "Over 2 years, or no re-audit after material changes",
  },
  test_coverage: {
    "90": "90% or more",
    "70": "70-89%",
    "50": "50-69%",
    low: "Under 50% or undisclosed",
  },
  multisig: {
    robust: "4-of-7 or stronger with diverse signers",
    standard: "3-of-5 or similar",
    weak: "2-of-3 or weaker",
    eoa: "Single EOA",
  },
  timelock: {
    "48": "48 hours or more",
    "24": "24 hours",
    short: "6-24 hours",
    none: "No timelock",
  },
  upgrade_path: {
    immutable: "Immutable (not upgradeable)",
    controlled: "Timelock + multisig",
    msig: "Multisig only",
    single: "Single key upgrade",
  },
  bounty_platform: {
    immunefi: "Immunefi (public)",
    self: "HackerOne / self-hosted",
    informal: "Informal / case by case",
    none: "No program",
  },
  bounty_max: {
    "1m": "$1M or more",
    "250k": "$250K - $1M",
    "50k": "$50K - $250K",
    low: "Under $50K, or none",
  },
  oracle: {
    robust: "Chainlink etc + TWAP/sanity validation",
    single_safe: "Single oracle with validation",
    single: "Single oracle without validation",
    spot: "No oracle / DEX spot price",
  },
  governance: {
    onchain_tl: "On-chain token governance + timelock",
    offchain: "Off-chain signal + multisig execution",
    team: "Team-controlled (declarative)",
    opaque: "Control structure unclear",
  },
  bridge_dep: {
    none: "No bridge dependency",
    trusted: "Verified bridge (LayerZero, CCIP, etc.)",
    risky: "Newer or unverified bridge",
  },
  past_incidents: {
    none: "No history",
    compensated: "Yes, full compensation + public postmortem",
    partial: "Yes, partial compensation",
    bad: "Yes, no compensation or coverup",
  },
};
