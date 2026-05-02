export type EcosystemCategory =
  | "monitoring"
  | "bounty"
  | "insurance"
  | "llm-agent"
  | "tooling"
  | "wallet"
  | "incident"
  | "forensics";

export interface SecurityEntity {
  readonly name: string;
  readonly category: EcosystemCategory;
  readonly tags: ReadonlyArray<string>;
  readonly website: string;
  readonly notes: string;
  readonly openSource?: boolean;
}

export const ECOSYSTEM_CATEGORY_META: Readonly<
  Record<EcosystemCategory, { label: string; description: string }>
> = {
  monitoring: {
    label: "Monitoring & Detection",
    description: "온체인 트랜잭션 실시간 모니터링과 위협 탐지를 제공.",
  },
  "llm-agent": {
    label: "LLM Audit Agent",
    description: "LLM과 AI 기반의 자동 또는 보조 오딧 에이전트.",
  },
  tooling: {
    label: "Open-source Tools",
    description: "정형 분석, 퍼징, 심볼릭 실행 등 오픈소스 보안 도구.",
  },
  bounty: {
    label: "Bug Bounty Platform",
    description: "외부 화이트햇과의 협업을 중개하는 바운티 플랫폼.",
  },
  insurance: {
    label: "Coverage & Insurance",
    description: "스마트 컨트랙트 익스플로잇에 대한 보험 또는 커버리지.",
  },
  wallet: {
    label: "Wallet & UX Security",
    description: "지갑 사용자 보호, 피싱 차단, 트랜잭션 시뮬레이션.",
  },
  incident: {
    label: "Incident Response",
    description: "사고 대응 전용 조직과 화이트햇 연합.",
  },
  forensics: {
    label: "Forensics & Compliance",
    description: "온체인 자금 추적, 컴플라이언스, 자금세탁 분석.",
  },
};

export const ORDERED_ECOSYSTEM_CATEGORIES: ReadonlyArray<EcosystemCategory> = [
  "monitoring",
  "llm-agent",
  "tooling",
  "bounty",
  "insurance",
  "wallet",
  "incident",
  "forensics",
];

export const SECURITY_ENTITIES: ReadonlyArray<SecurityEntity> = [
  {
    name: "Hypernative",
    category: "monitoring",
    tags: ["Real-time", "DeFi", "Detection"],
    website: "https://www.hypernative.io",
    notes: "AI 기반 실시간 위협 탐지. 자금 이탈 직전 알림과 자동 차단 기능.",
  },
  {
    name: "Hexagate",
    category: "monitoring",
    tags: ["Chainalysis", "Real-time"],
    website: "https://www.chainalysis.com/product/hexagate",
    notes: "Chainalysis 산하. 머신러닝 기반 트랜잭션 위협 탐지.",
  },
  {
    name: "Forta",
    category: "monitoring",
    tags: ["Decentralized", "Bot Network"],
    website: "https://forta.org",
    notes: "탈중앙화 모니터링 네트워크. 봇 작성/배포로 임의 룰 정의 가능.",
    openSource: true,
  },
  {
    name: "Cube3",
    category: "monitoring",
    tags: ["Risk Scoring", "API"],
    website: "https://www.cube3.ai",
    notes: "트랜잭션 단위의 실시간 리스크 스코어 API.",
  },
  {
    name: "Ironblocks",
    category: "monitoring",
    tags: ["Firewall", "Real-time"],
    website: "https://www.ironblocks.com",
    notes: "스마트컨트랙트용 실시간 트랜잭션 방화벽.",
  },
  {
    name: "Tenderly",
    category: "monitoring",
    tags: ["Simulation", "DevTools", "Alerts"],
    website: "https://tenderly.co",
    notes: "트랜잭션 시뮬레이션 표준. 알림과 자동화 기능 포함.",
  },
  {
    name: "OpenZeppelin Defender",
    category: "monitoring",
    tags: ["Ops", "Automation"],
    website: "https://www.openzeppelin.com/defender",
    notes: "관리자 액션 자동화, 모니터링, 인시던트 대응 통합 플랫폼.",
  },
  {
    name: "Phalcon",
    category: "monitoring",
    tags: ["BlockSec", "Debugging", "Alerts"],
    website: "https://phalcon.xyz",
    notes: "BlockSec 산하. 트랜잭션 디버깅과 익스플로잇 분석에 강하다.",
  },

  {
    name: "Zellic V12",
    category: "llm-agent",
    tags: ["Zellic", "Autonomous", "LLM"],
    website: "https://v12.zellic.io",
    notes:
      "Zellic이 만든 자율 Solidity 오딧 에이전트. Cantina/Sherlock 컨테스트에서 실제 High/Critical 발견.",
  },
  {
    name: "Nethermind AuditAgent",
    category: "llm-agent",
    tags: ["Nethermind", "AI Pair", "Continuous"],
    website: "https://auditagent.nethermind.io",
    notes:
      "Nethermind Security가 운영하는 AI 페어 오딧. 평균 30% 이슈 재현, 보조용으로 권장.",
  },
  {
    name: "Almanax",
    category: "llm-agent",
    tags: ["AI", "Logical Bugs", "AuditLLM"],
    website: "https://almanax.ai",
    notes:
      "ex-Coinbase, Ripple, AnChain 출신이 설립. Web3 Security Atlas 데이터셋도 운영.",
  },
  {
    name: "QuillShield",
    category: "llm-agent",
    tags: ["QuillAI", "RL", "Skills"],
    website: "https://shield.quillai.network",
    notes:
      "QuillAI의 강화학습 기반 에이전트. Claude Skills 형태로도 오픈소스 공개.",
  },
  {
    name: "Sherlock AI",
    category: "llm-agent",
    tags: ["Sherlock", "Pre-contest"],
    website: "https://sherlock.xyz/solutions/ai",
    notes: "Sherlock의 AI 사전 분석. 컨테스트 진입 전 1차 자동 패스로 활용.",
  },
  {
    name: "Frosty",
    category: "llm-agent",
    tags: ["Coinbase", "Internal", "Multi-phase"],
    website:
      "https://www.coinbase.com/blog/consumer-protection-tuesday-ai-powered-smart-contract-auditing-at-coinbase",
    notes:
      "Coinbase 내부 AI 오딧 도구. 자체 평가에서 F1 점수 타 도구 1.5배. 외부 미공개.",
  },
  {
    name: "Octane Security",
    category: "llm-agent",
    tags: ["AI", "Auto-audit", "Pre-deploy"],
    website: "https://www.octane.security",
    notes: "AI 기반 자동 보안 스캐닝. CI에 통합해 PR 단위로 분석.",
  },
  {
    name: "Olympix",
    category: "llm-agent",
    tags: ["AI", "Static Analysis"],
    website: "https://www.olympix.ai",
    notes: "AI 보조 정적 분석과 테스트 자동 생성.",
  },

  {
    name: "Slither",
    category: "tooling",
    tags: ["Static Analysis", "Trail of Bits"],
    website: "https://github.com/crytic/slither",
    notes: "Solidity 정적 분석기 표준. CI 통합 흔함.",
    openSource: true,
  },
  {
    name: "Mythril",
    category: "tooling",
    tags: ["Symbolic Execution", "ConsenSys"],
    website: "https://github.com/Consensys/mythril",
    notes: "EVM 바이트코드 심볼릭 실행 분석기.",
    openSource: true,
  },
  {
    name: "Echidna",
    category: "tooling",
    tags: ["Fuzzing", "Trail of Bits"],
    website: "https://github.com/crytic/echidna",
    notes: "Solidity 컨트랙트용 프로퍼티 기반 퍼저.",
    openSource: true,
  },
  {
    name: "Halmos",
    category: "tooling",
    tags: ["Symbolic Testing", "a16z"],
    website: "https://github.com/a16z/halmos",
    notes: "심볼릭 테스팅으로 Foundry 테스트를 검증으로 확장.",
    openSource: true,
  },
  {
    name: "Aderyn",
    category: "tooling",
    tags: ["Static Analysis", "Cyfrin", "Rust"],
    website: "https://github.com/Cyfrin/aderyn",
    notes: "Cyfrin이 메인테인하는 Rust 기반 Solidity 정적 분석기.",
    openSource: true,
  },
  {
    name: "Wake",
    category: "tooling",
    tags: ["Multi-tool", "Ackee"],
    website: "https://getwake.io",
    notes: "Ackee 산하의 Solidity 분석/디버깅 통합 프레임워크.",
    openSource: true,
  },
  {
    name: "Foundry",
    category: "tooling",
    tags: ["Test", "Fuzz", "Toolkit"],
    website: "https://getfoundry.sh",
    notes: "Forge/Cast/Anvil 통합. invariant와 fuzz 테스트의 사실상 표준.",
    openSource: true,
  },
  {
    name: "Manticore",
    category: "tooling",
    tags: ["Symbolic Execution", "Trail of Bits"],
    website: "https://github.com/trailofbits/manticore",
    notes: "EVM과 일반 바이너리를 동시에 다루는 심볼릭 분석 엔진.",
    openSource: true,
  },
  {
    name: "AuditWizard",
    category: "tooling",
    tags: ["IDE", "Workspace"],
    website: "https://auditwizard.io",
    notes: "오딧 협업용 IDE. Slither, Aderyn 등 도구 통합 워크스페이스.",
  },

  {
    name: "Immunefi",
    category: "bounty",
    tags: ["Largest", "DeFi"],
    website: "https://immunefi.com",
    notes: "Web3 최대 규모 바운티 플랫폼. 다수의 메이저 프로토콜 보유.",
  },
  {
    name: "HackenProof",
    category: "bounty",
    tags: ["Hacken"],
    website: "https://hackenproof.com",
    notes: "Hacken 산하. 거래소, 지갑, 디파이 광범위 커버.",
  },
  {
    name: "Code4rena Bounty",
    category: "bounty",
    tags: ["Contest-based"],
    website: "https://code4rena.com/bug-bounty",
    notes: "Code4rena의 상시 바운티 트랙. 컨테스트와 분리 운영.",
  },

  {
    name: "Nexus Mutual",
    category: "insurance",
    tags: ["Mutual", "Onchain Cover"],
    website: "https://nexusmutual.io",
    notes: "스마트컨트랙트 커버 분야의 표준. 풀 기반 상호 보험 모델.",
  },
  {
    name: "Sherlock Coverage",
    category: "insurance",
    tags: ["Audit + Cover"],
    website: "https://www.sherlock.xyz",
    notes: "오딧 컨테스트 + 자동 커버리지 통합 모델.",
  },
  {
    name: "Neptune Mutual",
    category: "insurance",
    tags: ["Parametric", "Multi-chain"],
    website: "https://neptunemutual.com",
    notes: "거버넌스 합의 기반 파라메트릭 커버 상품.",
  },
  {
    name: "OpenCover",
    category: "insurance",
    tags: ["Distribution", "Coinbase Base"],
    website: "https://opencover.com",
    notes:
      "프로토콜이 사용자에게 직접 보험을 제공할 수 있도록 하는 분산 보험 디스트리뷰터. Coinbase, Jump 투자.",
  },
  {
    name: "Fairside",
    category: "insurance",
    tags: ["Wallet Theft", "Cost-sharing"],
    website: "https://fairside.io",
    notes:
      "지갑 도용, 피싱, 악성 서명 등 사용자 단위 분실에 대한 cost-sharing 커버.",
  },

  {
    name: "Blockaid",
    category: "wallet",
    tags: ["Wallet API", "Simulation"],
    website: "https://www.blockaid.io",
    notes: "MetaMask, Rainbow 등 메이저 지갑이 채택한 트랜잭션 보안 API.",
  },
  {
    name: "Pocket Universe",
    category: "wallet",
    tags: ["Browser Ext", "Anti-scam"],
    website: "https://www.pocketuniverse.app",
    notes: "지갑 시뮬레이션과 피싱 차단 브라우저 확장.",
  },
  {
    name: "Wallet Guard",
    category: "wallet",
    tags: ["Browser Ext", "Anti-phishing"],
    website: "https://www.walletguard.app",
    notes: "지갑 보호 확장. 피싱 사이트와 위험 트랜잭션 경고.",
  },
  {
    name: "Web3 Antivirus",
    category: "wallet",
    tags: ["Browser Ext", "Risk Detection"],
    website: "https://web3antivirus.io",
    notes: "지갑과 도메인 위험을 평가하는 확장 프로그램.",
  },

  {
    name: "Security Alliance (SEAL)",
    category: "incident",
    tags: ["Whitehat Coalition", "SEAL 911"],
    website: "https://securityalliance.org",
    notes: "samczsun 주축의 화이트햇 연합. SEAL 911로 24/7 인시던트 대응.",
  },
  {
    name: "ChainPatrol",
    category: "incident",
    tags: ["Anti-phishing", "Reporting"],
    website: "https://chainpatrol.io",
    notes: "피싱과 스캠 사이트를 상시 모니터링하고 다운 처리를 지원.",
  },

  {
    name: "Chainalysis",
    category: "forensics",
    tags: ["Compliance", "Forensics"],
    website: "https://www.chainalysis.com",
    notes: "온체인 포렌식과 컴플라이언스 표준. 정부와 거래소 다수가 사용.",
  },
  {
    name: "Elliptic",
    category: "forensics",
    tags: ["Compliance", "Risk Scoring"],
    website: "https://www.elliptic.co",
    notes: "트랜잭션 모니터링과 자금세탁 리스크 스코어링.",
  },
  {
    name: "TRM Labs",
    category: "forensics",
    tags: ["Investigations", "Compliance"],
    website: "https://www.trmlabs.com",
    notes: "자금 추적과 수사 지원에 강점. 정부 협력 프로젝트 다수.",
  },
  {
    name: "Merkle Science",
    category: "forensics",
    tags: ["Compliance", "Predictive"],
    website: "https://www.merklescience.com",
    notes: "행동 기반 예측 분석. 트랜잭션 모니터링 SaaS.",
  },
];

export function entitiesByCategory(
  category: EcosystemCategory,
): ReadonlyArray<SecurityEntity> {
  return SECURITY_ENTITIES.filter((e) => e.category === category);
}
