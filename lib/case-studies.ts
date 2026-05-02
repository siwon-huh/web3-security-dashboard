import type { Tier } from "./types";

export interface AuditEngagement {
  readonly firm: string;
  readonly date: string;
  readonly tier?: Tier;
  readonly scope?: string;
  readonly reportUrl?: string;
}

export interface SecurityFeature {
  readonly title: string;
  readonly detail: string;
}

export interface FeatureGroup {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly features: ReadonlyArray<SecurityFeature>;
}

export interface CaseStudy {
  readonly slug: string;
  readonly name: string;
  readonly tagline: string;
  readonly summary: string;
  readonly website: string;
  readonly docsUrl?: string;
  readonly githubUrl?: string;
  readonly highlights: ReadonlyArray<string>;
  readonly audits: ReadonlyArray<AuditEngagement>;
  readonly groups: ReadonlyArray<FeatureGroup>;
  readonly takeaway: string;
}

export const CASE_STUDIES: ReadonlyArray<CaseStudy> = [
  {
    slug: "cap",
    name: "Cap",
    tagline: "보안 스택의 4개 레이어를 모두 갖추고 출범한 스테이블코인",
    summary:
      "대부분의 프로토콜은 보안의 한두 레이어만 갖춥니다. 잘하는 프로토콜이 셋. Cap은 네 개를 다 갖췄습니다. 사전 검증(오딧), 변경 단위 검증(연속 보안), 런타임 탐지(모니터링), 그리고 실패 시 사용자 보전(보험). 여기에 $1M 바운티까지 더해 다섯 겹의 방어선을 두고 출시한 사례입니다.",
    website: "https://cap.app",
    docsUrl: "https://docs.cap.app",
    githubUrl: "https://github.com/cap-labs-dev",
    highlights: [
      "Trail of Bits, Zellic, Spearbit, Certora 다중 오딧",
      "분기 단위 오딧 사이클",
      "Octane으로 PR 단위 연속 분석",
      "Hypernative 런타임 탐지",
      "OpenCover 사용자 보험",
      "Sherlock 바운티 $1M",
    ],
    audits: [
      {
        firm: "Zellic",
        date: "2025-02-17",
        tier: "S",
        scope: "Smart Contract",
        reportUrl: "https://github.com/cap-labs-dev/cap-audits",
      },
      {
        firm: "Trail of Bits",
        date: "2025-03-03",
        tier: "S",
        scope: "Smart Contract",
        reportUrl: "https://github.com/cap-labs-dev/cap-audits",
      },
      {
        firm: "Spearbit",
        date: "2025-04-14",
        tier: "A+",
        scope: "Smart Contract",
        reportUrl: "https://github.com/cap-labs-dev/cap-audits",
      },
      {
        firm: "Electisec",
        date: "2025-05-25",
        scope: "LayerZero Vault",
        reportUrl: "https://github.com/cap-labs-dev/cap-audits",
      },
      {
        firm: "Recon",
        date: "2025-05-28",
        scope: "Invariant testing",
        reportUrl: "https://github.com/cap-labs-dev/cap-audits",
      },
      {
        firm: "Sherlock",
        date: "2025-07-10",
        tier: "A",
        scope: "Audit contest",
        reportUrl: "https://github.com/cap-labs-dev/cap-audits",
      },
      {
        firm: "Certora",
        date: "2025-09-15",
        tier: "S",
        scope: "EigenAVS formal verification",
        reportUrl: "https://github.com/cap-labs-dev/cap-audits",
      },
      {
        firm: "Spearbit",
        date: "2025-11-27",
        tier: "A+",
        scope: "PR Review",
        reportUrl: "https://github.com/cap-labs-dev/cap-audits",
      },
    ],
    groups: [
      {
        id: "audits",
        title: "1. 다층 사전 검증 (Smart Contract Audits)",
        description:
          "메이저 펌 한 곳에서 Critical 한 건이라도 놓치면 끝. Cap은 7개 펌의 시각을 겹쳐 단일 펌의 사각지대를 메웠습니다. 거기에 분기 사이클을 약속해 일회성 통과로 끝나지 않게 했습니다.",
        features: [
          {
            title: "S 티어 4곳을 동시에 채택",
            detail:
              "Trail of Bits, Zellic, Certora, Spearbit. 보통은 한 곳만 받아도 충분하다고 보는 펌들을 모두 거쳤습니다. 각 펌의 강점이 다르기 때문에(ToB의 깊은 리서치, Zellic의 CTF 감각, Certora의 정형 증명, Spearbit의 부티크 리뷰) 사각지대가 거의 남지 않습니다.",
          },
          {
            title: "방법론을 일부러 섞었음",
            detail:
              "수동 리뷰(ToB, Zellic, Spearbit), 정형 검증(Certora), 컨테스트(Sherlock), invariant 테스트(Recon). 같은 코드를 서로 다른 도구로 다시 보면 각 도구가 잡지 못하는 카테고리가 다른 도구에서 잡힙니다. 한 가지 방법론에만 의존하는 프로젝트와 결정적으로 갈립니다.",
          },
          {
            title: "분기 단위 오딧 사이클",
            detail:
              "출시 전 일회성 통과가 아니라 분기마다 재오딧을 도는 사이클을 명시. 코드는 살아 있고, 의존하는 외부 프로토콜도 변하기 때문에 한 번의 오딧이 영구히 유효할 수 없습니다.",
          },
          {
            title: "Spearbit PR Review 후속 (2025-11)",
            detail:
              "메인 오딧 이후 6개월 뒤 PR 단위로 다시 들어온 follow-up 리뷰. 출시 후에도 변경사항을 일일이 외부 검증에 거는 운영 방식은 흔치 않습니다.",
          },
        ],
      },
      {
        id: "continuous",
        title: "2. PR 단위 연속 검증 (Continuous Security)",
        description:
          "정기 오딧과 정기 오딧 사이의 변경사항이 가장 위험합니다. Cap은 그 갭을 자동화로 메웠습니다.",
        features: [
          {
            title: "Octane Security가 모든 PR을 분석",
            detail:
              "코드 변경이 PR로 올라오는 순간 Octane의 LLM 오딧 에이전트가 자동으로 분석합니다. 정기 오딧 사이클에 들어가지 않는 작은 변경도 머지 전에 1차 검증을 거치게 됩니다. 사람 오딧 펌에 매번 작은 PR을 보낼 수 없는 현실적 한계를 자동화로 해소한 구조.",
          },
          {
            title: "Slither CI 통합도 별도로 유지",
            detail:
              "Octane이 LLM 추론에 강하다면 Slither는 알려진 패턴 매칭에 강합니다. 두 도구는 보완적이라 동시 운영하는 것이 정상입니다. yarn test:slither 스크립트로 CI에서 정기 실행.",
          },
        ],
      },
      {
        id: "runtime",
        title: "3. 런타임 탐지 (Runtime Monitoring)",
        description:
          "오딧이 아무리 두꺼워도 production 환경의 사용 패턴까지 다 시뮬레이트할 수는 없습니다. 그래서 사고 발생 시점의 자동 탐지가 따로 필요합니다.",
        features: [
          {
            title: "Hypernative 실시간 위협 탐지",
            detail:
              "TVL 급변, 비정상 트랜잭션, 거버넌스 액션, mint 이상치 등을 실시간으로 모니터링. 사람보다 먼저 알아채고 알림이 워룸으로 들어가야 첫 5분이 자동화됩니다. 사고가 시작된 시점부터 대응 시작 시점까지의 지연이 손실 규모를 직접 결정합니다.",
          },
        ],
      },
      {
        id: "bounty",
        title: "4. 외부 화이트햇 인센티브 (Bug Bounty)",
        description:
          "내부 오딧이 끝났다고 해서 외부 시각이 필요 없어지지 않습니다. 오히려 출시 후가 가장 위험하고, 그때 화이트햇이 블랙햇보다 먼저 발견할 인센티브가 충분히 커야 합니다.",
        features: [
          {
            title: "Sherlock 상시 바운티 최대 $1M",
            detail:
              "Critical 한 건당 최대 $1M. 이 규모면 화이트햇이 시간을 들여 분석할 합리적 이유가 됩니다. 더 작은 바운티는 신생 프로토콜의 성의 표시로는 가능하지만 실제 Critical 발견자에게는 동기 부여가 부족합니다.",
          },
        ],
      },
      {
        id: "insurance",
        title: "5. 사용자 단 보험 (Coverage)",
        description:
          "위 네 레이어가 다 뚫려도 사용자 자산은 보전될 수 있어야 합니다. 프로토콜이 자체 treasury에서 사후 보상을 약속하는 것보다, 보험 채널을 사용자에게 미리 열어 두는 것이 신뢰도가 훨씬 높습니다.",
        features: [
          {
            title: "OpenCover 통합으로 사용자 보험 옵션 제공",
            detail:
              "사용자가 Cap 익스플로잇, depeg, 그리고 Cap이 통합한 Pendle 시장 노출에 대해 직접 커버를 가입할 수 있도록 안내. 통합된 외부 프로토콜의 리스크까지 cover하는 설계는 대부분의 프로토콜이 무시하는 디테일입니다.",
          },
        ],
      },
      {
        id: "foundation",
        title: "Foundation: 컨트랙트 단의 방어 회로",
        description:
          "위 5개 레이어를 떠받치는 베이스 레이어. 단일 키 탈취가 즉시 손실로 번지지 않도록 권한 분리, 시간 지연, 정지 회로를 다층으로 둡니다.",
        features: [
          {
            title: "함수 단위 멀티시그",
            detail:
              "owner 한 명이 모든 권한을 갖는 흔한 패턴이 아닙니다. 각 민감 함수마다 별도의 권한 그룹이 있어 한 키 탈취가 모든 액션을 트리거하지 못합니다. 폭발 반경을 의도적으로 좁힌 설계.",
          },
          {
            title: "OpenZeppelin TimelockController, 86,400초 (1일) 최소 지연",
            detail:
              "관리자 액션이 즉시 실행되지 않습니다. 사용자는 변경 전 24시간의 회수 윈도우를 보장받고, 키 탈취가 발생해도 그 24시간 안에 대응할 수 있습니다.",
          },
          {
            title: "Dual Pause + Emergency Withdraw",
            detail:
              "pauseAsset(자산 단위)과 pauseProtocol(전체)을 분리해 일상 운영의 영향과 비상 대응 모두에 유연. 거기에 emergency withdraw가 메인 로직과 분리되어 있어 프로토콜이 멈춰도 사용자가 자기 자산을 회수할 수 있습니다.",
          },
          {
            title: "Oracle: Primary + Backup + Staleness Auto-pause",
            detail:
              "오라클 조작은 디파이 익스플로잇의 가장 흔한 벡터입니다. Cap은 백업 어댑터, staleness validation, 8-decimal normalization을 두고, 가격이 stale이면 mint와 burn이 자동으로 멈춥니다. 인간 개입 없이 안전 모드로 전환되는 설계가 핵심.",
          },
          {
            title: "전체 컨트랙트와 오딧 보고서 GitHub 공개",
            detail:
              "cap-contracts와 cap-audits 저장소가 공개되어 8개 보고서를 누구나 직접 검증할 수 있습니다. 검증 가능성은 신뢰의 베이스라인.",
          },
        ],
      },
    ],
    takeaway:
      "보안의 4개 레이어(사전 검증, 연속 검증, 런타임 탐지, 사용자 보험)를 모두 갖추고, 거기에 $1M 바운티와 컨트랙트 단의 방어 회로까지 붙인 케이스는 매우 드뭅니다. 대부분 프로토콜은 한두 레이어만 갖추고 출시합니다. Cap의 셋업이 특이한 것은 단일 layer의 깊이가 아니라 layer 자체의 개수와 그것을 출시 전에 모두 끝낸 결정입니다. 신생 프로토콜이 베이스라인을 어디까지 끌어올릴 수 있는지의 상한선을 보여주는 레퍼런스.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
