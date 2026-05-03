// English translations for incident-response data.
// Lookups are by Korean canonical text (group title, item title, flow phase, action text).

export const PREP_GROUP_EN: Readonly<
  Record<string, { title: string; description: string }>
> = {
  governance: {
    title: "Governance and authority",
    description:
      "Make sure admin keys and upgrade authority cannot be neutralized by a single mistake.",
  },
  "code-defense": {
    title: "Contract-level defenses",
    description:
      "Build in circuits that mechanically cap loss size even when an attack is already underway.",
  },
  monitoring: {
    title: "Monitoring and alerts",
    description:
      "The first five minutes of an incident decide everything. Automated detection has to fire before a human notices.",
  },
  playbook: {
    title: "Incident playbook",
    description: "Teams that build process during an incident are too late.",
  },
  comms: {
    title: "Communication infrastructure",
    description:
      "Time spent creating channels and chasing contacts during an incident converts directly into loss.",
  },
  bounty: {
    title: "Whitehat incentives and coverage",
    description:
      "The chance of recovery and compensation after an incident is mostly determined by the setup before it.",
  },
  "wallet-hygiene": {
    title: "Wallet hygiene",
    description:
      "If one wallet holds all assets, one incident takes everything.",
  },
  "tx-safety": {
    title: "Transaction safety",
    description:
      "The five seconds before signing are the strongest line of defense.",
  },
  "account-security": {
    title: "Account security",
    description:
      "If channels around the wallet are compromised, the wallet eventually follows.",
  },
  "incident-readiness": {
    title: "Incident response readiness",
    description:
      "The first 30 minutes after an incident largely decide recovery odds. Only the people prepared in advance buy that time.",
  },
};

export const PREP_ITEM_EN: Readonly<
  Record<string, { title: string; detail: string }>
> = {
  "메이저 액션은 4/7 이상 멀티시그": {
    title: "Major actions on a 4-of-7 or stronger multisig",
    detail:
      "The standard for upgrade, parameter change, and fund withdrawal authority is 4 or more diverse signers with quorum 7+. A single EOA signature is effectively a single point of failure.",
  },
  "민감 함수에 48시간 이상 타임락": {
    title: "48+ hour timelock on sensitive functions",
    detail:
      "If admin actions execute immediately, key compromise = immediate loss. A timelock guarantees a withdrawal window for users and is the simplest safety net during incidents.",
  },
  "역할 기반 권한 분리": {
    title: "Role-based authority separation",
    detail:
      "Separate OPERATOR, GUARDIAN, and OWNER roles at the contract level, each with a different signer pool. GUARDIAN should be limited to pause only.",
  },
  "관리자 키 회전 정책": {
    title: "Admin key rotation policy",
    detail:
      "Document a regular signer rotation and offboarding procedure. Departed members must not retain signing authority.",
  },
  "Pause / Circuit Breaker": {
    title: "Pause / circuit breaker",
    detail:
      "Add a GUARDIAN-callable pause to fund-flow functions like deposit, swap, and borrow. This is the first action when an attack is detected.",
  },
  "Guarded Launch와 TVL 캡": {
    title: "Guarded launch and TVL caps",
    detail:
      "Set deposit limits, per-user limits, and asset limits right after deployment, then relax them over time. Even if an attack happens, loss has a hard ceiling.",
  },
  "Emergency Withdraw 백업": {
    title: "Emergency withdraw backup path",
    detail:
      "Provide a bypass for users to recover their own assets even if the protocol is paused. It must run on simple validation that is independent of the main logic bug.",
  },
  "업그레이드 가능성 최소화": {
    title: "Minimize upgrade surface",
    detail:
      "Proxy upgrades are an attack surface. Keep core asset-accounting contracts immutable and isolate only peripheral modules as upgradeable.",
  },
  "실시간 위협 탐지": {
    title: "Real-time threat detection",
    detail:
      "Layer alerts for TVL swings, unusually large transactions, governance action attempts, abnormal mints, and unauthorized function calls.",
  },
  "관리자 액션 모니터링": {
    title: "Admin action monitoring",
    detail:
      "Multisig queueing and timelock transactions belong on a separate alert channel. Unauthorized queueing must be detected within five minutes.",
  },
  "온콜 로테이션": {
    title: "On-call rotation",
    detail:
      "Run 24/7 on-call via PagerDuty or equivalent. Alerts must not stop at one person's Slack DM.",
  },
  "사전 작성된 플레이북 문서": {
    title: "Pre-written playbook docs",
    detail:
      "For each scenario (contract exploit, admin key compromise, oracle manipulation, Discord hack), document the step-by-step flow and decision tree.",
  },
  "역할과 책임 매트릭스": {
    title: "Roles and responsibilities matrix",
    detail:
      "Designate Incident Commander, Communications Lead, Tech Lead, and Legal/Comms support roles. During an incident, who decides what must be immediately clear.",
  },
  "테이블탑 훈련과 Wargames": {
    title: "Table-top exercises and Wargames",
    detail:
      "Run table-top scenarios quarterly and participate in events like SEAL Wargames once or twice a year to validate the playbook against real simulations.",
  },
  "워룸 채널 사전 셋업": {
    title: "Pre-built war-room channels",
    detail:
      "Pre-create a private Telegram, Signal, or Discord category dedicated to security incidents. Key personnel must already be members.",
  },
  "스테이크홀더 컨택 시트": {
    title: "Stakeholder contact sheet",
    detail:
      "Pre-collect 24/7 contacts for major CEX compliance teams, whitehat groups, partner protocols, lawyers, and foundation security teams.",
  },
  "공지 템플릿 사전 작성": {
    title: "Pre-written communication templates",
    detail:
      "Pre-write templates for each phase (initial notice: aware and investigating; first update: scope; final postmortem). Saves writing time mid-incident.",
  },
  "SEAL 911 사전 등록": {
    title: "Register with SEAL 911 in advance",
    detail:
      "Sort out SEAL 911 bot contact and Whitehat Safe Harbor adoption ahead of time so you can use them immediately during an incident.",
  },
  "퍼블릭 버그 바운티": {
    title: "Public bug bounty",
    detail:
      "Publishing a bounty of $1M+ per Critical creates an incentive for whitehats to report findings before blackhats exploit them.",
  },
  "Safe Harbor 명시": {
    title: "Make Safe Harbor explicit",
    detail:
      "Use legal disclosure or a governance resolution to make whitehat fund recovery indemnified. Also helps prevent exchanges from freezing funds during recovery.",
  },
  "Treasury 비상 예산": {
    title: "Treasury emergency budget",
    detail:
      "Hold funds in a separate multisig that can be deployed immediately for user or whitehat compensation. Plan for scenarios where there is no time to wait for governance.",
  },
  "보험 또는 커버리지": {
    title: "Insurance or coverage",
    detail:
      "Provide users with an insurable cover option, or have the protocol enroll the pool itself.",
  },
  "자산 분리: Cold / Hot / Burn": {
    title: "Separate assets: Cold / Hot / Burn",
    detail:
      "Three categories: long-term storage (Cold, hardware wallet), daily activity (Hot), and untrusted dApp testing (Burn). The Burn wallet should hold only enough to barely sign.",
  },
  "하드웨어 지갑은 필수": {
    title: "Hardware wallets are mandatory",
    detail:
      "Long-term assets must live on hardware wallets. Once an EOA seed is exposed to a computer even once, that wallet is effectively permanently compromised.",
  },
  "시드 백업은 종이가 아닌 금속": {
    title: "Back up seeds in metal, not paper",
    detail:
      "Steel-plate backups survive fire and flood. Distribute across two locations rather than one.",
  },
  "큰 자산은 개인 멀티시그": {
    title: "Large assets in a personal multisig",
    detail:
      "For amounts of $100K or more, holding in a personal Safe (2/3 or 3/5) means a single key compromise is not immediate loss.",
  },
  "지갑 시뮬레이션 확장": {
    title: "Wallet simulation extensions",
    detail:
      "An extension that simulates the result before signing and shows asset changes is effectively required.",
  },
  "Approval 정기 점검": {
    title: "Periodic approval review",
    detail:
      "Old infinite approvals mean any single approved contract being compromised drains you too. Revoke quarterly.",
  },
  "도메인 검증 습관": {
    title: "Domain verification habit",
    detail:
      "Reach official sites only via bookmarks. Never click Google ad results. Treat Discord and Twitter DM links as suspect by default.",
  },
  "EIP-712 메시지 신중하게": {
    title: "Be careful with EIP-712 messages",
    detail:
      "Gas-less signatures (permit, signature-based trades) are the most dangerous because they are low-visibility. If you do not understand it, do not sign.",
  },
  "이메일과 SNS의 2FA는 하드웨어 키로": {
    title: "Use hardware keys for email and SNS 2FA",
    detail:
      "SMS 2FA is vulnerable to SIM swap. Use a hardware key like YubiKey for 2FA on email, X (Twitter), Discord, and GitHub.",
  },
  "암호 매니저 사용": {
    title: "Use a password manager",
    detail:
      "Strong, unique passwords per site. Apply hardware-key 2FA to the password manager master itself.",
  },
  "이메일 분리": {
    title: "Separate email addresses",
    detail:
      "Use different email addresses for exchanges, wallets, and general SNS accounts. One compromised email should not threaten everything at once.",
  },
  "공유 디바이스 분리": {
    title: "Separate the shared device",
    detail:
      "Keep the wallet device dedicated to crypto work. Separate it from daily browsing, gaming, and downloads.",
  },
  "비상 지갑 사전 준비": {
    title: "Pre-prepare an emergency wallet",
    detail:
      "Write down a clean backup wallet address on paper for moving assets to during an incident. Creating a new wallet mid-incident is too late.",
  },
  "주요 컨택 사전 정리": {
    title: "Sort out key contacts in advance",
    detail:
      "Collect compliance contacts at the exchanges you use, the SEAL 911 bot, and trusted security researcher handles in one page.",
  },
  "트래커 계정 사전 셋업": {
    title: "Pre-set tracker accounts",
    detail:
      "Tools like Etherscan, Arkham, and MistTrack must be familiar before the incident, not in the moment.",
  },
};

export const FLOW_STEP_EN: Readonly<
  Record<string, { phase: string; timing: string; summary: string }>
> = {
  detect: {
    phase: "1. Detect",
    timing: "T+0",
    summary:
      "Verify immediately on alert. Even with a chance of false positive, spin up the war room first.",
  },
  triage: {
    phase: "2. Triage",
    timing: "T+0 ~ 5 min",
    summary:
      "Decide whether the attack is in progress, one-shot, and how far the impact reaches.",
  },
  contain: {
    phase: "3. Contain",
    timing: "T+5 ~ 30 min",
    summary:
      "Stopping further loss is the top priority. Block first, preserve later.",
  },
  investigate: {
    phase: "4. Investigate",
    timing: "T+15 min onward",
    summary:
      "Track the attack vector, attacker addresses, and fund flow in parallel.",
  },
  communicate: {
    phase: "5. Communicate",
    timing: "T+15 min onward, in parallel",
    summary:
      "Run internal and external communications in parallel. Silence breeds fear.",
  },
  recover: {
    phase: "6. Recover",
    timing: "Hours to days",
    summary:
      "Recovery odds decay with time. The 24-72 hour window is the golden window.",
  },
  postmortem: {
    phase: "7. Post-mortem",
    timing: "24h short notice / 7d detailed",
    summary:
      "Transparency is almost the only tool for rebuilding trust.",
  },
  // Individual flow
  "1. 인지": {
    phase: "1. Detect",
    timing: "T+0",
    summary:
      "An alert came in, the balance is wrong, or there is a transaction you do not recognize.",
  },
  "2. 잔여 자산 이동": {
    phase: "2. Sweep remaining assets",
    timing: "T+0 ~ 5 min",
    summary:
      "There is no guarantee the attacker took everything. Move what is left to a safe wallet immediately.",
  },
  "3. 신고와 자금 freeze 요청": {
    phase: "3. Report and request fund freeze",
    timing: "T+5 ~ 30 min",
    summary:
      "These 30 minutes are nearly all of the recovery odds.",
  },
  "4. 자금 추적": {
    phase: "4. Fund tracking",
    timing: "From 30 min onward",
    summary:
      "There is visibility until the attacker funds enter a mixer.",
  },
  "5. 침해 경로 분석": {
    phase: "5. Compromise analysis",
    timing: "After urgent actions complete",
    summary:
      "Without knowing how it happened, a new wallet gets drained the same way.",
  },
  "6. 공식 신고": {
    phase: "6. Formal report",
    timing: "Day-of to within 48h",
    summary:
      "Legal procedure is less about recovery itself and more about future exchange cooperation and insurance claims.",
  },
};

export const FLOW_ACTION_EN: Readonly<Record<string, string>> = {
  // Project flow
  "온콜이 알림 수신 즉시 워룸 채널 활성화":
    "On-call activates the war-room channel the moment the alert is received",
  "트랜잭션 해시와 영향 컨트랙트를 워룸에 즉시 공유":
    "Share the transaction hash and impacted contracts to the war room immediately",
  "Tenderly나 Phalcon으로 트랜잭션 재현":
    "Reproduce the transaction with Tenderly or Phalcon",
  "Incident Commander 지정": "Designate an Incident Commander",
  "공격이 계속 가능한 상태인지 확인 (재호출 가능성)":
    "Confirm whether the attack is still callable (replay potential)",
  "영향 받은 풀, 자산, 사용자 수 추정":
    "Estimate affected pools, assets, and user count",
  "GUARDIAN으로 영향 함수 즉시 pause":
    "Immediately pause affected functions via GUARDIAN",
  "필요시 멀티시그 정족수 모집해 emergency upgrade 또는 권한 회수":
    "If needed, gather multisig quorum for emergency upgrade or authority revocation",
  "추가 자금이 흘러들어갈 수 있는 외부 통합 파트너에게 통지":
    "Notify external integration partners where additional funds could flow in",
  "공격자 트랜잭션과 상위 funder 추적":
    "Trace attacker transactions and upstream funders",
  "취약점이 컨트랙트 코드 vs 권한 키 vs 외부 의존성 중 어디인지 분리":
    "Determine whether the vulnerability is in contract code, an authority key, or an external dependency",
  "MistTrack, Chainalysis, Arkham 등으로 자금 흐름 모니터링":
    "Monitor fund flow via MistTrack, Chainalysis, Arkham, etc.",
  "Twitter, Discord에 1차 공지 (인지함, 조사 중, 자금 어디까지 안전)":
    "First notice on Twitter and Discord (aware, investigating, what funds are safe)",
  "메이저 CEX 컴플라이언스 팀에 자금 freeze 요청":
    "Request fund freeze from major CEX compliance teams",
  "SEAL 911에 컨택해 화이트햇 풀 동원 요청":
    "Contact SEAL 911 to mobilize the whitehat pool",
  "파트너 프로토콜과 통합 dApp에 통지":
    "Notify partner protocols and integrated dApps",
  "공격자에게 화이트햇 협상 메시지 (퍼블릭 트랜잭션의 inputData로 전달)":
    "Send a whitehat negotiation message to the attacker (delivered via inputData of a public transaction)",
  "회수 가능 자금을 안전한 컨트랙트나 멀티시그로 이전":
    "Move recoverable funds to a safe contract or multisig",
  "사용자 보상 플랜 결정 (treasury, 토큰 발행, 커버리지)":
    "Decide the user compensation plan (treasury, token issuance, coverage)",
  "패치된 컨트랙트 배포와 마이그레이션 가이드 공시":
    "Deploy patched contracts and publish a migration guide",
  "24~48시간 내 짧은 사고 요약 공지":
    "Publish a short incident summary within 24-48 hours",
  "7일 내 root cause, 영향 범위, 보상 플랜, 재발 방지책을 담은 상세 포스트모템":
    "Within 7 days, publish a full postmortem with root cause, impact scope, compensation plan, and remediation",
  "타임라인을 분 단위로 공개해 신뢰 회복":
    "Publish a minute-level timeline to rebuild trust",
  "외부 오딧 펌의 이후 점검 결과 같이 공시":
    "Publish follow-up review results from an external audit firm",
  // Individual flow
  "당황하지 말고 사고 발생 시각과 트랜잭션 해시 즉시 메모":
    "Do not panic; record the incident time and transaction hash immediately",
  "어떤 디바이스, 어떤 지갑, 어떤 액션 직후였는지 기억해 둔다":
    "Remember which device, which wallet, and which action it followed",
  "사전 준비된 비상 지갑으로 모든 잔여 자산 전송":
    "Transfer all remaining assets to the pre-prepared emergency wallet",
  "스테이킹과 LP 포지션 우선순위로 풀어내기":
    "Unwind staking and LP positions by priority",
  "다른 체인의 자산도 같은 시드라면 모두 이동":
    "If assets on other chains share the same seed, move them all",
  "SEAL 911 봇에 사고 보고 (Telegram에서 t.me/seal_911_bot)":
    "Report the incident to the SEAL 911 bot (Telegram: t.me/seal_911_bot)",
  "자금이 흘러간 거래소의 컴플라이언스 팀에 freeze 요청":
    "Request a freeze from the compliance team of the exchange the funds went to",
  "Chainabuse에 공격자 주소 신고":
    "Report the attacker address on Chainabuse",
  "ZachXBT 등 신뢰 가능한 트래커 핸들에 정보 공유":
    "Share information with trusted tracker handles like ZachXBT",
  "Etherscan, Arkham, MistTrack으로 공격자 주소 모니터링":
    "Monitor the attacker address on Etherscan, Arkham, and MistTrack",
  "거래소로 흘러간 트랜잭션은 캡쳐해 컴플라이언스 팀에 추가 제출":
    "Capture transactions reaching exchanges and submit them to compliance teams",
  "Tornado Cash, Railgun, FixedFloat 등 믹서 진입 시각 기록":
    "Record the time funds enter mixers like Tornado Cash, Railgun, or FixedFloat",
  "최근 서명한 트랜잭션 전체 점검 (특히 permit, approve)":
    "Audit all recently signed transactions (especially permit, approve)",
  "사용 중인 브라우저 확장 모두 점검, 의심되는 것 즉시 제거":
    "Audit all installed browser extensions; remove anything suspicious immediately",
  "디바이스 자체가 침해됐는지 의심되면 OS 재설치까지 고려":
    "If the device itself may be compromised, consider reinstalling the OS",
  "시드 노출 의심이면 그 시드의 모든 파생 지갑은 영구 오염으로 간주":
    "If seed exposure is suspected, treat every derived wallet as permanently tainted",
  "현지 사이버 수사대 또는 IC3(미국)에 신고":
    "File a report with local cyber crime authorities or IC3 (US)",
  "거래 내역, 트랜잭션 해시, 공격자 주소를 정리한 사고 리포트 작성":
    "Compile an incident report with transaction history, hashes, and attacker addresses",
  "보험에 가입돼 있다면 즉시 청구 (Fairside, Nexus Mutual 등 가입 상품 기준)":
    "If you have coverage, file the claim immediately (Fairside, Nexus Mutual, etc., per the policy)",
};
