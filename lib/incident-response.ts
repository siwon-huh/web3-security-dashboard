export type ResponderView = "project" | "individual";

export interface PrepItem {
  readonly title: string;
  readonly detail: string;
  readonly tools?: ReadonlyArray<{ name: string; url: string }>;
}

export interface PrepGroup {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly items: ReadonlyArray<PrepItem>;
}

export interface FlowAction {
  readonly text: string;
  readonly emphasis?: boolean;
}

export interface FlowStep {
  readonly id: string;
  readonly phase: string;
  readonly timing: string;
  readonly summary: string;
  readonly actions: ReadonlyArray<FlowAction>;
}

export interface ViewContent {
  readonly preparation: ReadonlyArray<PrepGroup>;
  readonly flow: ReadonlyArray<FlowStep>;
}

export const SEAL_PROGRAMS: ReadonlyArray<{
  name: string;
  audience: ResponderView | "both";
  description: string;
  url: string;
  logoLight: string;
  logoDark: string;
}> = [
  {
    name: "SEAL 911",
    audience: "both",
    description:
      "24/7 화이트햇 핫라인. Telegram 봇으로 신고하면 익명 화이트햇 풀이 즉시 트리아지하고 프로젝트 또는 거래소 컨택을 연결합니다. 개인 도용 사고와 프로토콜 인시던트 양쪽에서 가장 빠른 진입점.",
    url: "https://t.me/seal_911_bot",
    logoLight: "https://static.securityalliance.org/logos/seal-911-blue.svg",
    logoDark: "https://static.securityalliance.org/logos/seal-911-white.svg",
  },
  {
    name: "SEAL Whitehat Safe Harbor",
    audience: "project",
    description:
      "프로토콜이 사전에 채택할 수 있는 표준 화이트햇 면책 조항. 사고 발생 시 화이트햇이 자금을 회수해 반환하는 행위에 대한 법적 안전망을 제공합니다. 가입은 거버넌스 또는 권한 보유자의 채택 선언으로 진행.",
    url: "https://github.com/security-alliance/safe-harbor",
    logoLight: "https://static.securityalliance.org/logos/safe-harbor-blue.svg",
    logoDark: "https://static.securityalliance.org/logos/safe-harbor-white.svg",
  },
  {
    name: "SEAL Wargames",
    audience: "project",
    description:
      "프로토콜 팀을 대상으로 한 인시던트 대응 시뮬레이션. 가상의 익스플로잇 시나리오에서 팀의 워룸, 멀티시그 동원, 커뮤니케이션 전 과정을 평가합니다. 메이저 프로토콜이 정기적으로 참여.",
    url: "https://securityalliance.org/wargames",
    logoLight:
      "https://static.securityalliance.org/logos/seal-wargames-blue.svg",
    logoDark:
      "https://static.securityalliance.org/logos/seal-wargames-white.svg",
  },
  {
    name: "SEAL Frameworks",
    audience: "both",
    description:
      "전통 인포섹과 Web3 보안 리서치의 검증된 프랙티스를 단일 오픈소스 라이브러리로 정리한 벤더 중립 표준 모음. 운영 보안, 지갑 관리, 인시던트 대응, DPRK 위협 대응 등 12개 이상의 프레임워크를 제공하며 모듈식으로 점진 도입할 수 있어 신생 프로젝트와 개인 모두에게 베이스라인이 됩니다. 메이저 프로토콜 다수가 채택 중.",
    url: "https://frameworks.securityalliance.org",
    logoLight:
      "https://static.securityalliance.org/logos/seal-frameworks-blue.svg",
    logoDark:
      "https://static.securityalliance.org/logos/seal-frameworks-white.svg",
  },
  {
    name: "SEAL Certifications",
    audience: "project",
    description:
      "크립토 조직이 실제로 마주하는 위협을 기준으로 설계된 모듈형 인증 프로그램. 인시던트 대응, 멀티시그 운영, 트레저리 보안, 워크스페이스 보안, DNS 관리 등 5개 도메인을 커버합니다. 인증된 오딧터가 평가하고 결과는 EAS(Ethereum Attestation Service)로 온체인에 영구 기록되어 누구나 검증 가능. 현재 베타로 15개 이상의 조직이 파일럿 참여 중.",
    url: "https://securityalliance.org/our-work/certifications",
    logoLight:
      "https://static.securityalliance.org/logos/seal-certifications-blue.svg",
    logoDark:
      "https://static.securityalliance.org/logos/seal-certifications-white.svg",
  },
  {
    name: "SEAL Intel",
    audience: "both",
    description:
      "크립토 생태계 전반의 위협 인텔리전스. 피싱 캠페인, 지갑 드레이너 멀웨어, 국가 단위 공격 등에 대한 실시간 알림을 제공합니다. 300개 이상의 위협 리포트와 20만 개 이상의 악성 도메인 데이터베이스를 운영하며 SDK도 공개. MetaMask, Phantom, WalletConnect 같은 메이저 지갑이 이 인텔을 직접 통합해 사용자에게 노출되는 위협을 차단합니다.",
    url: "https://securityalliance.org/our-work/seal-intel",
    logoLight: "https://static.securityalliance.org/logos/seal-intel-blue.svg",
    logoDark: "https://static.securityalliance.org/logos/seal-intel-white.svg",
  },
  {
    name: "Lazarus Group Tracker",
    audience: "both",
    description:
      "북한(DPRK) 공작원이 크립토 업계에 IT 워커로 침투하는 패턴을 추적하고 공개하는 리소스. 60명 이상의 운영자 프로파일과 알려진 별칭을 정리해 놓았으며, 누적 $6B 이상의 자금 탈취가 연결됐다고 추정됩니다. 거래소, 프로토콜, 법집행기관이 채용 단계에서 스크리닝 자료로 활용 중. 채용 직전 후보 신원은 반드시 이 데이터베이스에 대조해 보는 것이 표준이 되어 가는 추세입니다.",
    url: "https://securityalliance.org/our-work/lazarus-group",
    logoLight:
      "https://static.securityalliance.org/logos/lazarus-group-light.png",
    logoDark:
      "https://static.securityalliance.org/logos/lazarus-group-dark.png",
  },
];

export const SEAL_BRAND = {
  logoLight: "https://static.securityalliance.org/logos/seal-blue.svg",
  logoDark: "https://static.securityalliance.org/logos/seal-white.svg",
};

export const SEAL_LINKS: ReadonlyArray<{
  label: string;
  url: string;
}> = [
  { label: "securityalliance.org", url: "https://securityalliance.org" },
  { label: "X (@seal_911)", url: "https://x.com/seal_911" },
  { label: "Telegram bot", url: "https://t.me/seal_911_bot" },
  { label: "GitHub", url: "https://github.com/security-alliance" },
];

export const AFFILIATION_URLS: Readonly<Record<string, string>> = {
  "Security Alliance": "https://securityalliance.org",
  OtterSec: "https://osec.io",
  Tracelon: "https://tracelon.com",
  "Cryptoforensic Investigators": "https://cryptoforensic.com",
  zeroShadow: "https://www.zeroshadow.io",
  DefiHackLabs: "https://defihacklabs.io",
  Hexagate: "https://www.chainalysis.com/product/hexagate",
  Hypernative: "https://www.hypernative.io",
  OpenZeppelin: "https://www.openzeppelin.com",
  Monad: "https://www.monad.xyz",
  Privy: "https://www.privy.io",
  Wintermute: "https://www.wintermute.com",
  Binance: "https://www.binance.com",
  Pump: "https://pump.fun",
  Elliptic: "https://www.elliptic.co",
  "Sui Foundation": "https://sui.io",
  StarkWare: "https://starkware.co",
};

export const SEAL_MEMBERS: ReadonlyArray<{
  name: string;
  affiliation: string;
  twitter?: string;
}> = [
  { name: "samczsun", affiliation: "Security Alliance", twitter: "samczsun" },
  { name: "0xc0ffeebabe", affiliation: "Independent" },
  {
    name: "pcaversaccio",
    affiliation: "Independent",
    twitter: "pcaversaccio",
  },
  { name: "Nick", affiliation: "Independent" },
  { name: "Ross", affiliation: "Independent" },
  { name: "Tay", affiliation: "Independent", twitter: "tayvano_" },
  { name: "tanuki_42", affiliation: "Independent", twitter: "tanuki_42_" },
  { name: "Robert", affiliation: "OtterSec" },
  { name: "Michael", affiliation: "OtterSec" },
  { name: "Miguel", affiliation: "Tracelon" },
  { name: "Lauren", affiliation: "Tracelon" },
  { name: "Josh", affiliation: "Cryptoforensic Investigators" },
  { name: "Julia", affiliation: "zeroShadow" },
  { name: "SunSec", affiliation: "DefiHackLabs", twitter: "1nf0s3cpt" },
  { name: "Niv", affiliation: "Hexagate" },
  { name: "Dan", affiliation: "Hypernative" },
  { name: "Vazi", affiliation: "Hypernative" },
  { name: "monsoon", affiliation: "OpenZeppelin" },
  { name: "Daniel", affiliation: "Monad" },
  { name: "Andrew", affiliation: "Privy" },
  { name: "Igor", affiliation: "Wintermute" },
  { name: "Fade", affiliation: "Wintermute" },
  { name: "Gabru", affiliation: "Binance" },
  { name: "Zollua", affiliation: "Binance" },
  { name: "Oussama", affiliation: "Pump" },
  { name: "Simon", affiliation: "Elliptic" },
  { name: "Alex", affiliation: "Sui Foundation" },
  { name: "Lotem", affiliation: "StarkWare" },
];

export const PROJECT_CONTENT: ViewContent = {
  preparation: [
    {
      id: "governance",
      title: "거버넌스와 권한",
      description:
        "관리자 키와 업그레이드 권한이 단일 실수로 무력화되지 않도록 합니다.",
      items: [
        {
          title: "메이저 액션은 4/7 이상 멀티시그",
          detail:
            "업그레이드, 파라미터 변경, 자금 인출 권한은 분산된 서명자 4명 이상 + 정족수 7 이상이 표준. EOA 단일 서명은 사실상 단일 장애점입니다.",
          tools: [
            { name: "Safe", url: "https://safe.global" },
            { name: "Den", url: "https://onchainden.com" },
          ],
        },
        {
          title: "민감 함수에 48시간 이상 타임락",
          detail:
            "관리자 액션이 즉시 실행되면 키 탈취 = 즉시 손실입니다. 타임락은 사용자 자금 인출 시간을 보장해 인시던트의 단순한 안전장치가 됩니다.",
          tools: [
            {
              name: "OpenZeppelin TimelockController",
              url: "https://docs.openzeppelin.com/contracts/governor",
            },
          ],
        },
        {
          title: "역할 기반 권한 분리",
          detail:
            "OPERATOR, GUARDIAN, OWNER 역할을 컨트랙트 레벨에서 분리하고 각각 다른 서명자 풀로 구성합니다. GUARDIAN은 pause만 가능하도록 권한 최소화.",
        },
        {
          title: "관리자 키 회전 정책",
          detail:
            "정기적인 서명자 교체와 이탈자 제거 절차를 문서화합니다. 퇴사한 인원의 서명 권한이 남아 있으면 안 됩니다.",
        },
      ],
    },
    {
      id: "code-defense",
      title: "코드 단의 방어선",
      description: "공격이 시작돼도 피해 규모를 강제로 줄이는 회로를 둡니다.",
      items: [
        {
          title: "Pause / Circuit Breaker",
          detail:
            "deposit, swap, borrow 등 자금 흐름 함수에 GUARDIAN이 호출 가능한 pause를 둡니다. 공격 탐지 시 첫 번째 행동이 됩니다.",
          tools: [
            {
              name: "OpenZeppelin Pausable",
              url: "https://docs.openzeppelin.com/contracts/access-control",
            },
          ],
        },
        {
          title: "Guarded Launch와 TVL 캡",
          detail:
            "초기 배포 직후에는 입금 한도, 사용자 한도, 자산 한도를 두고 시간이 지나며 풀어 줍니다. 공격이 발생해도 손실 상한이 보장됩니다.",
        },
        {
          title: "Emergency Withdraw 백업",
          detail:
            "프로토콜이 멈춰도 사용자가 자기 자산을 회수할 수 있는 우회 경로를 둡니다. 메인 로직 버그와 분리된 단순한 검증으로 작동해야 합니다.",
        },
        {
          title: "업그레이드 가능성 최소화",
          detail:
            "프록시 업그레이드는 공격 표면입니다. 핵심 자산 회계 컨트랙트는 immutable로 두고, 주변 모듈만 업그레이드 가능하도록 분리합니다.",
        },
      ],
    },
    {
      id: "monitoring",
      title: "모니터링과 알림",
      description:
        "인시던트의 첫 5분이 가장 중요합니다. 자동 탐지가 사람보다 먼저 알아채야 합니다.",
      items: [
        {
          title: "실시간 위협 탐지",
          detail:
            "TVL 급변, 큰 단일 트랜잭션, 거버넌스 액션 시도, 비정상 mint, 비인가 함수 호출에 대한 알림을 다층으로 둡니다.",
          tools: [
            { name: "Hypernative", url: "https://www.hypernative.io" },
            { name: "Forta", url: "https://forta.org" },
            {
              name: "Hexagate",
              url: "https://www.chainalysis.com/product/hexagate",
            },
            { name: "Tenderly Alerts", url: "https://tenderly.co" },
          ],
        },
        {
          title: "관리자 액션 모니터링",
          detail:
            "멀티시그 큐잉과 타임락 트랜잭션은 별도의 알림 채널로 모읍니다. 비인가 큐잉은 5분 안에 감지되어야 합니다.",
        },
        {
          title: "온콜 로테이션",
          detail:
            "PagerDuty 또는 동등한 방식으로 24/7 온콜을 운영합니다. 알림이 한 사람의 슬랙 DM에 머물러서는 안 됩니다.",
          tools: [{ name: "PagerDuty", url: "https://www.pagerduty.com" }],
        },
      ],
    },
    {
      id: "playbook",
      title: "사고 플레이북",
      description: "사고가 터지고 나서 절차를 만드는 팀은 늦습니다.",
      items: [
        {
          title: "사전 작성된 플레이북 문서",
          detail:
            "각 시나리오별(컨트랙트 익스플로잇, 관리자 키 탈취, 오라클 조작, 디스코드 해킹)로 단계별 플로우와 결정 트리를 문서화합니다.",
        },
        {
          title: "역할과 책임 매트릭스",
          detail:
            "Incident Commander, Communications Lead, Tech Lead, Legal/Comms 보조 역할을 명시합니다. 사고 시 누가 무엇을 결정하는지가 즉시 명확해야 합니다.",
        },
        {
          title: "테이블탑 훈련과 Wargames",
          detail:
            "분기마다 테이블탑 시나리오를 돌리고, 연 1~2회는 SEAL Wargames 등에 참여해 실제 시뮬레이션으로 플레이북을 검증합니다.",
          tools: [
            {
              name: "SEAL Wargames",
              url: "https://securityalliance.org/wargames",
            },
          ],
        },
      ],
    },
    {
      id: "comms",
      title: "커뮤니케이션 인프라",
      description:
        "사고 중에 채널을 만들고 컨택을 찾는 시간이 손실로 직결됩니다.",
      items: [
        {
          title: "워룸 채널 사전 셋업",
          detail:
            "보안 인시던트 전용 비공개 Telegram, Signal, 또는 Discord 카테고리를 미리 만들어 둡니다. 핵심 인원이 이미 가입돼 있어야 합니다.",
        },
        {
          title: "스테이크홀더 컨택 시트",
          detail:
            "메이저 CEX 컴플라이언스 팀, 화이트햇 그룹, 파트너 프로토콜, 변호사, 재단 보안팀의 24/7 연락처를 사전 정리합니다.",
        },
        {
          title: "공지 템플릿 사전 작성",
          detail:
            "초기 공지(우리는 인지했고 조사 중), 1차 업데이트(영향 범위), 최종 포스트모템 등 단계별 템플릿을 미리 작성해 두어야 사고 중 작문 시간을 절약합니다.",
        },
        {
          title: "SEAL 911 사전 등록",
          detail:
            "SEAL 911 봇과 Whitehat Safe Harbor 채택 여부를 사전에 정리해두면 사고 시 즉시 활용 가능합니다.",
          tools: [
            { name: "SEAL 911", url: "https://t.me/seal_911_bot" },
            {
              name: "Safe Harbor",
              url: "https://github.com/security-alliance/safe-harbor",
            },
          ],
        },
      ],
    },
    {
      id: "bounty",
      title: "화이트햇 인센티브와 커버리지",
      description:
        "사고 후 회수와 보상의 가능성은 사고 전 셋업으로 거의 결정됩니다.",
      items: [
        {
          title: "퍼블릭 버그 바운티",
          detail:
            "Critical 한 건당 $1M 이상의 바운티를 공시하면 화이트햇이 블랙햇보다 먼저 발견해 신고할 인센티브가 생깁니다.",
          tools: [
            { name: "Immunefi", url: "https://immunefi.com" },
            { name: "HackenProof", url: "https://hackenproof.com" },
          ],
        },
        {
          title: "Safe Harbor 명시",
          detail:
            "법적 공시 또는 거버넌스 결의로 화이트햇이 자금을 회수해 반환하는 행위에 대한 면책을 명시합니다. 회수 시 거래소가 자금을 freeze하지 않게 하는 효과도 있습니다.",
          tools: [
            {
              name: "SEAL Safe Harbor",
              url: "https://github.com/security-alliance/safe-harbor",
            },
          ],
        },
        {
          title: "Treasury 비상 예산",
          detail:
            "사용자 보상 또는 화이트햇 보상에 즉시 사용 가능한 자금을 별도 멀티시그에 분리해 둡니다. 거버넌스 통과를 기다릴 시간이 없는 시나리오를 대비합니다.",
        },
        {
          title: "보험 또는 커버리지",
          detail:
            "사용자가 직접 가입할 수 있는 커버 옵션을 안내하거나 프로토콜이 풀 단위로 가입합니다.",
          tools: [
            { name: "Nexus Mutual", url: "https://nexusmutual.io" },
            { name: "Sherlock Coverage", url: "https://www.sherlock.xyz" },
            { name: "Neptune Mutual", url: "https://neptunemutual.com" },
          ],
        },
      ],
    },
  ],
  flow: [
    {
      id: "detect",
      phase: "1. Detect",
      timing: "T+0",
      summary:
        "알림 수신 후 즉시 검증합니다. False positive 가능성이 있어도 우선 워룸을 띄웁니다.",
      actions: [
        { text: "온콜이 알림 수신 즉시 워룸 채널 활성화", emphasis: true },
        { text: "트랜잭션 해시와 영향 컨트랙트를 워룸에 즉시 공유" },
        { text: "Tenderly나 Phalcon으로 트랜잭션 재현" },
      ],
    },
    {
      id: "triage",
      phase: "2. Triage",
      timing: "T+0 ~ 5분",
      summary:
        "공격이 진행 중인지, 일회성인지, 영향 범위가 어디까지인지 결정합니다.",
      actions: [
        { text: "Incident Commander 지정" },
        { text: "공격이 계속 가능한 상태인지 확인 (재호출 가능성)" },
        { text: "영향 받은 풀, 자산, 사용자 수 추정" },
      ],
    },
    {
      id: "contain",
      phase: "3. Contain",
      timing: "T+5 ~ 30분",
      summary: "추가 손실을 막는 것이 최우선. 보존보다 차단이 먼저입니다.",
      actions: [
        { text: "GUARDIAN으로 영향 함수 즉시 pause", emphasis: true },
        {
          text: "필요시 멀티시그 정족수 모집해 emergency upgrade 또는 권한 회수",
        },
        { text: "추가 자금이 흘러들어갈 수 있는 외부 통합 파트너에게 통지" },
      ],
    },
    {
      id: "investigate",
      phase: "4. Investigate",
      timing: "T+15분 이후",
      summary: "공격 벡터, 공격자 주소, 자금 흐름을 동시에 추적합니다.",
      actions: [
        { text: "공격자 트랜잭션과 상위 funder 추적" },
        {
          text: "취약점이 컨트랙트 코드 vs 권한 키 vs 외부 의존성 중 어디인지 분리",
        },
        { text: "MistTrack, Chainalysis, Arkham 등으로 자금 흐름 모니터링" },
      ],
    },
    {
      id: "communicate",
      phase: "5. Communicate",
      timing: "T+15분 이후 병렬",
      summary:
        "내부와 외부 커뮤니케이션을 동시에 진행합니다. 침묵은 두려움을 키웁니다.",
      actions: [
        {
          text: "Twitter, Discord에 1차 공지 (인지함, 조사 중, 자금 어디까지 안전)",
          emphasis: true,
        },
        { text: "메이저 CEX 컴플라이언스 팀에 자금 freeze 요청" },
        { text: "SEAL 911에 컨택해 화이트햇 풀 동원 요청" },
        { text: "파트너 프로토콜과 통합 dApp에 통지" },
      ],
    },
    {
      id: "recover",
      phase: "6. Recover",
      timing: "수 시간 ~ 수 일",
      summary:
        "회수 가능성은 시간에 비례해 줄어듭니다. 24~72시간 내가 골든 윈도우.",
      actions: [
        {
          text: "공격자에게 화이트햇 협상 메시지 (퍼블릭 트랜잭션의 inputData로 전달)",
          emphasis: true,
        },
        { text: "회수 가능 자금을 안전한 컨트랙트나 멀티시그로 이전" },
        { text: "사용자 보상 플랜 결정 (treasury, 토큰 발행, 커버리지)" },
        { text: "패치된 컨트랙트 배포와 마이그레이션 가이드 공시" },
      ],
    },
    {
      id: "postmortem",
      phase: "7. Post-mortem",
      timing: "24시간 짧은 공지 / 7일 상세",
      summary: "투명성은 신뢰 회복의 거의 유일한 도구입니다.",
      actions: [
        { text: "24~48시간 내 짧은 사고 요약 공지" },
        {
          text: "7일 내 root cause, 영향 범위, 보상 플랜, 재발 방지책을 담은 상세 포스트모템",
        },
        { text: "타임라인을 분 단위로 공개해 신뢰 회복" },
        { text: "외부 오딧 펌의 이후 점검 결과 같이 공시" },
      ],
    },
  ],
};

export const INDIVIDUAL_CONTENT: ViewContent = {
  preparation: [
    {
      id: "wallet-hygiene",
      title: "지갑 위생",
      description:
        "한 지갑이 모든 자산을 들고 있으면 사고 한 번에 전부 잃습니다.",
      items: [
        {
          title: "자산 분리: Cold / Hot / Burn",
          detail:
            "장기 보관(Cold, 하드웨어 지갑), 일상 거래(Hot), 신뢰 안 된 dApp 테스트(Burn) 세 종류로 분리합니다. Burn에는 서명만 시도해도 되는 정도의 잔액만 둡니다.",
        },
        {
          title: "하드웨어 지갑은 필수",
          detail:
            "장기 보관 자산은 반드시 하드웨어 지갑으로. EOA의 시드가 컴퓨터에 한 번이라도 노출되면 그 지갑은 사실상 영구적으로 손상되었다고 봐야합니다.",
          tools: [
            { name: "Ledger", url: "https://www.ledger.com" },
            { name: "Trezor", url: "https://trezor.io" },
            { name: "GridPlus Lattice1", url: "https://gridplus.io" },
          ],
        },
        {
          title: "시드 백업은 종이가 아닌 금속",
          detail:
            "Steel plate 백업으로 화재나 침수에서도 살아남게 합니다. 한 곳이 아닌 두 위치에 분산 보관.",
        },
        {
          title: "큰 자산은 개인 멀티시그",
          detail:
            "$100K 이상의 자산은 본인 명의 Safe(2/3 또는 3/5)로 보관하면 단일 키 도난 시에도 즉시 손실이 되지 않습니다.",
          tools: [{ name: "Safe", url: "https://safe.global" }],
        },
      ],
    },
    {
      id: "tx-safety",
      title: "트랜잭션 안전",
      description: "서명하기 직전 5초가 가장 큰 방어선입니다.",
      items: [
        {
          title: "지갑 시뮬레이션 확장",
          detail:
            "트랜잭션 서명 직전에 결과를 시뮬레이션해 자산 변화를 보여주는 확장이 사실상 필수.",
          tools: [
            { name: "Blockaid", url: "https://www.blockaid.io" },
            { name: "Pocket Universe", url: "https://www.pocketuniverse.app" },
            { name: "Wallet Guard", url: "https://www.walletguard.app" },
          ],
        },
        {
          title: "Approval 정기 점검",
          detail:
            "오래된 무한 approval은 권한이 있는 컨트랙트 단 한 곳이 털리면 함께 털립니다. 분기에 한 번 회수.",
          tools: [{ name: "Revoke.cash", url: "https://revoke.cash" }],
        },
        {
          title: "도메인 검증 습관",
          detail:
            "오피셜 사이트는 북마크에서만 접근. 구글 광고 결과는 절대 클릭하지 않습니다. Discord나 Twitter DM의 링크는 기본적으로 의심합니다.",
          tools: [{ name: "Web3 Antivirus", url: "https://web3antivirus.io" }],
        },
        {
          title: "EIP-712 메시지 신중하게",
          detail:
            "permit, signature 기반 거래 등 가스 없는 서명은 가시성이 낮아 가장 위험합니다. 모르면 서명하지 않습니다.",
        },
      ],
    },
    {
      id: "account-security",
      title: "계정 보안",
      description: "지갑 외 채널이 침해되면 결국 지갑까지 도달합니다.",
      items: [
        {
          title: "이메일과 SNS의 2FA는 하드웨어 키로",
          detail:
            "SMS 2FA는 SIM swap에 취약. 이메일과 X(Twitter), Discord, GitHub의 2FA는 YubiKey 같은 하드웨어 키로 합니다.",
          tools: [{ name: "YubiKey", url: "https://www.yubico.com" }],
        },
        {
          title: "암호 매니저 사용",
          detail:
            "사이트마다 다른 강한 패스워드. 암호 매니저 마스터 키 자체에도 하드웨어 키 2FA를 적용합니다.",
        },
        {
          title: "이메일 분리",
          detail:
            "거래소, 지갑, 일반 SNS 계정의 이메일을 서로 다르게 둡니다. 이메일 한 개 털려도 모든 계정이 동시에 위협받지 않게.",
        },
        {
          title: "공유 디바이스 분리",
          detail:
            "지갑 사용 디바이스는 암호화폐 작업 전용으로 둡니다. 일상 브라우징, 게임, 다운로드와 분리.",
        },
      ],
    },
    {
      id: "incident-readiness",
      title: "사고 대응 준비",
      description:
        "사고 직후 30분이 회수 가능성을 거의 결정합니다. 미리 준비된 사람만 그 시간을 삽니다.",
      items: [
        {
          title: "비상 지갑 사전 준비",
          detail:
            "사고 시 자산을 즉시 옮길 깨끗한 백업 지갑 주소를 종이에 적어 둡니다. 사고 중에 새 지갑을 만들면 너무 늦습니다.",
        },
        {
          title: "주요 컨택 사전 정리",
          detail:
            "사용 중인 거래소 컴플라이언스 컨택, SEAL 911 봇, 신뢰하는 보안 리서처 핸들을 한 페이지에 모아 둡니다.",
          tools: [
            { name: "SEAL 911", url: "https://t.me/seal_911_bot" },
            { name: "Chainabuse", url: "https://www.chainabuse.com" },
          ],
        },
        {
          title: "트래커 계정 사전 셋업",
          detail:
            "Etherscan, Arkham, MistTrack 같은 도구는 사고 직후가 아니라 평소에 익숙해져 있어야 합니다.",
          tools: [
            { name: "Arkham", url: "https://www.arkhamintelligence.com" },
            { name: "MistTrack", url: "https://misttrack.io" },
          ],
        },
      ],
    },
  ],
  flow: [
    {
      id: "detect",
      phase: "1. 인지",
      timing: "T+0",
      summary: "알림이 왔거나, 잔액이 다르거나, 본 적 없는 트랜잭션이 보일 때.",
      actions: [
        {
          text: "당황하지 말고 사고 발생 시각과 트랜잭션 해시 즉시 메모",
          emphasis: true,
        },
        { text: "어떤 디바이스, 어떤 지갑, 어떤 액션 직후였는지 기억해 둔다" },
      ],
    },
    {
      id: "sweep",
      phase: "2. 잔여 자산 이동",
      timing: "T+0 ~ 5분",
      summary:
        "공격자가 모든 자산을 가져갔다는 보장이 없습니다. 남은 것을 즉시 안전한 지갑으로 옮깁니다.",
      actions: [
        {
          text: "사전 준비된 비상 지갑으로 모든 잔여 자산 전송",
          emphasis: true,
        },
        { text: "스테이킹과 LP 포지션 우선순위로 풀어내기" },
        { text: "다른 체인의 자산도 같은 시드라면 모두 이동" },
      ],
    },
    {
      id: "report",
      phase: "3. 신고와 자금 freeze 요청",
      timing: "T+5 ~ 30분",
      summary: "이 30분이 회수 가능성의 거의 전부.",
      actions: [
        {
          text: "SEAL 911 봇에 사고 보고 (Telegram에서 t.me/seal_911_bot)",
          emphasis: true,
        },
        { text: "자금이 흘러간 거래소의 컴플라이언스 팀에 freeze 요청" },
        { text: "Chainabuse에 공격자 주소 신고" },
        { text: "ZachXBT 등 신뢰 가능한 트래커 핸들에 정보 공유" },
      ],
    },
    {
      id: "track",
      phase: "4. 자금 추적",
      timing: "30분 이후 지속",
      summary: "공격자 자금이 믹서로 들어가기 전까지 가시성이 있습니다.",
      actions: [
        { text: "Etherscan, Arkham, MistTrack으로 공격자 주소 모니터링" },
        {
          text: "거래소로 흘러간 트랜잭션은 캡쳐해 컴플라이언스 팀에 추가 제출",
        },
        { text: "Tornado Cash, Railgun, FixedFloat 등 믹서 진입 시각 기록" },
      ],
    },
    {
      id: "forensics",
      phase: "5. 침해 경로 분석",
      timing: "급한 액션 종료 후",
      summary: "왜 털렸는지 모르면 새 지갑도 같은 방식으로 다시 털립니다.",
      actions: [
        { text: "최근 서명한 트랜잭션 전체 점검 (특히 permit, approve)" },
        { text: "사용 중인 브라우저 확장 모두 점검, 의심되는 것 즉시 제거" },
        { text: "디바이스 자체가 침해됐는지 의심되면 OS 재설치까지 고려" },
        {
          text: "시드 노출 의심이면 그 시드의 모든 파생 지갑은 영구 오염으로 간주",
        },
      ],
    },
    {
      id: "report-formal",
      phase: "6. 공식 신고",
      timing: "당일 ~ 48시간 내",
      summary: "법적 절차는 회수 자체보다 향후 거래소 협조와 보험 청구를 위해.",
      actions: [
        { text: "현지 사이버 수사대 또는 IC3(미국)에 신고" },
        {
          text: "거래 내역, 트랜잭션 해시, 공격자 주소를 정리한 사고 리포트 작성",
        },
        {
          text: "보험에 가입돼 있다면 즉시 청구 (Fairside, Nexus Mutual 등 가입 상품 기준)",
        },
      ],
    },
  ],
};

export function getContent(view: ResponderView): ViewContent {
  return view === "project" ? PROJECT_CONTENT : INDIVIDUAL_CONTENT;
}
