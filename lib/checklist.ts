import type {
  AnswerMap,
  CategoryScore,
  ChecklistCategory,
  ChecklistItem,
  ScoreResult,
} from "./types";

export const CHECKLIST: ReadonlyArray<ChecklistCategory> = [
  {
    id: "audit",
    title: "스마트 컨트랙트 오딧",
    description: "외부 보안 감사 수행 여부와 품질을 평가합니다.",
    items: [
      {
        id: "audit_firm_tier",
        label: "최고 등급의 오딧 펌",
        description: "프로젝트가 받은 가장 높은 티어의 감사 펌은?",
        weight: 12,
        type: "select",
        options: [
          {
            label: "S Tier (Trail of Bits, OpenZeppelin 등)",
            value: "s",
            score: 1,
          },
          {
            label: "A Tier (Halborn, Sigma Prime 등)",
            value: "a",
            score: 0.85,
          },
          { label: "B Tier (Ottersec, BlockSec 등)", value: "b", score: 0.65 },
          { label: "C Tier (CertiK, Beosin 등)", value: "c", score: 0.4 },
          { label: "감사 없음", value: "none", score: 0 },
        ],
      },
      {
        id: "audit_count",
        label: "독립 감사 횟수",
        description: "서로 다른 펌으로부터 받은 감사 보고서 수.",
        weight: 8,
        type: "select",
        options: [
          { label: "3회 이상", value: "3plus", score: 1 },
          { label: "2회", value: "2", score: 0.75 },
          { label: "1회", value: "1", score: 0.45 },
          { label: "0회", value: "0", score: 0 },
        ],
      },
      {
        id: "audit_recency",
        label: "최근 감사 시점",
        description: "현재 배포 코드 기준 가장 최근 감사 기간.",
        weight: 6,
        type: "select",
        options: [
          { label: "6개월 이내", value: "fresh", score: 1 },
          { label: "1년 이내", value: "year", score: 0.7 },
          { label: "2년 이내", value: "old", score: 0.4 },
          { label: "2년 초과 또는 변경 후 미감사", value: "stale", score: 0 },
        ],
      },
      {
        id: "audit_public",
        label: "감사 보고서 공개",
        description: "PDF 보고서가 누구나 접근 가능한 위치에 공개되어 있다.",
        weight: 4,
        type: "boolean",
      },
      {
        id: "audit_findings_resolved",
        label: "Critical/High 이슈 해결",
        description:
          "보고된 Critical/High 이슈가 모두 수정 또는 명시적 수용됨.",
        weight: 6,
        type: "boolean",
      },
    ],
  },
  {
    id: "code-quality",
    title: "코드 품질",
    description: "테스트, 문서화, 정형 검증 등 엔지니어링 성숙도.",
    items: [
      {
        id: "test_coverage",
        label: "테스트 커버리지",
        description: "라인/브랜치 커버리지 수준.",
        weight: 6,
        type: "select",
        options: [
          { label: "90% 이상", value: "90", score: 1 },
          { label: "70–89%", value: "70", score: 0.7 },
          { label: "50–69%", value: "50", score: 0.4 },
          { label: "50% 미만 또는 미공개", value: "low", score: 0 },
        ],
      },
      {
        id: "open_source",
        label: "오픈소스 공개",
        description: "프로덕션 컨트랙트 소스가 공개 저장소에 있다.",
        weight: 5,
        type: "boolean",
      },
      {
        id: "verified_onchain",
        label: "온체인 소스 검증",
        description: "Etherscan 등에서 소스가 verified 상태.",
        weight: 4,
        type: "boolean",
      },
      {
        id: "formal_verification",
        label: "정형 검증 적용",
        description: "Certora, K, Halmos 등으로 핵심 불변식 검증.",
        weight: 4,
        type: "boolean",
      },
      {
        id: "fuzzing",
        label: "퍼징/인바리언트 테스트",
        description: "Foundry/Echidna로 invariant 테스트 보유.",
        weight: 3,
        type: "boolean",
      },
    ],
  },
  {
    id: "ops",
    title: "운영 보안",
    description: "관리자 키, 업그레이드, 타임락 등 거버넌스/운영 통제.",
    items: [
      {
        id: "multisig",
        label: "관리자 권한 멀티시그",
        description: "관리자 키가 멀티시그(Safe 등)로 운영됨.",
        weight: 7,
        type: "select",
        options: [
          {
            label: "다양한 서명자로 구성된 4/7 이상",
            value: "robust",
            score: 1,
          },
          { label: "3/5 또는 유사 구성", value: "standard", score: 0.7 },
          { label: "2/3 또는 그 이하", value: "weak", score: 0.35 },
          { label: "단일 EOA", value: "eoa", score: 0 },
        ],
      },
      {
        id: "timelock",
        label: "타임락",
        description: "관리자 액션에 타임락이 적용된다.",
        weight: 5,
        type: "select",
        options: [
          { label: "48시간 이상", value: "48", score: 1 },
          { label: "24시간", value: "24", score: 0.7 },
          { label: "6–24시간", value: "short", score: 0.4 },
          { label: "타임락 없음", value: "none", score: 0 },
        ],
      },
      {
        id: "upgrade_path",
        label: "업그레이드 경로",
        description: "프록시 업그레이드 가능 여부와 통제.",
        weight: 4,
        type: "select",
        options: [
          {
            label: "Immutable (업그레이드 불가)",
            value: "immutable",
            score: 1,
          },
          { label: "타임락 + 멀티시그 통제", value: "controlled", score: 0.8 },
          { label: "멀티시그만으로 업그레이드", value: "msig", score: 0.4 },
          { label: "단일 키 업그레이드", value: "single", score: 0 },
        ],
      },
      {
        id: "pause_mechanism",
        label: "긴급 일시 정지",
        description: "Critical 함수에 pause/circuit breaker가 있다.",
        weight: 3,
        type: "boolean",
      },
      {
        id: "monitoring",
        label: "온체인 모니터링",
        description: "Forta, Tenderly, Phalcon 등으로 실시간 모니터링.",
        weight: 3,
        type: "boolean",
      },
    ],
  },
  {
    id: "bounty",
    title: "버그 바운티",
    description: "외부 화이트햇 인센티브의 규모와 운영.",
    items: [
      {
        id: "bounty_platform",
        label: "바운티 플랫폼",
        description: "공식 바운티 프로그램이 운영되는 플랫폼.",
        weight: 4,
        type: "select",
        options: [
          { label: "Immunefi (퍼블릭)", value: "immunefi", score: 1 },
          { label: "HackerOne / 자체 운영", value: "self", score: 0.7 },
          { label: "비공식/사례별 보상", value: "informal", score: 0.3 },
          { label: "프로그램 없음", value: "none", score: 0 },
        ],
      },
      {
        id: "bounty_max",
        label: "최대 보상 규모",
        description: "Critical 한 건당 최대 지급액.",
        weight: 5,
        type: "select",
        options: [
          { label: "$1M 이상", value: "1m", score: 1 },
          { label: "$250K – $1M", value: "250k", score: 0.7 },
          { label: "$50K – $250K", value: "50k", score: 0.4 },
          { label: "$50K 미만 또는 없음", value: "low", score: 0 },
        ],
      },
      {
        id: "bounty_scope_clear",
        label: "스코프와 PoC 요구사항 명확",
        description: "범위/심사 기준/PoC 요건이 문서화되어 있다.",
        weight: 2,
        type: "boolean",
      },
    ],
  },
  {
    id: "decentralization",
    title: "탈중앙화 / 의존성",
    description: "오라클, 브릿지, 거버넌스 등 외부 의존성 리스크.",
    items: [
      {
        id: "oracle",
        label: "오라클 설계",
        description: "가격 피드의 안전성과 다양성.",
        weight: 5,
        type: "select",
        options: [
          {
            label: "Chainlink 등 + TWAP/sanity 검증",
            value: "robust",
            score: 1,
          },
          { label: "단일 오라클 + 검증", value: "single_safe", score: 0.7 },
          { label: "단일 오라클, 검증 부재", value: "single", score: 0.3 },
          { label: "오라클 없음 / DEX spot", value: "spot", score: 0 },
        ],
      },
      {
        id: "governance",
        label: "거버넌스",
        description: "토큰 권한 분산, 제안 기간, 정족수.",
        weight: 4,
        type: "select",
        options: [
          {
            label: "온체인 토큰 거버넌스 + 타임락",
            value: "onchain_tl",
            score: 1,
          },
          {
            label: "오프체인 시그널 + 멀티시그 실행",
            value: "offchain",
            score: 0.6,
          },
          { label: "팀 결정 (선언적)", value: "team", score: 0.2 },
          { label: "통제 불투명", value: "opaque", score: 0 },
        ],
      },
      {
        id: "bridge_dep",
        label: "브릿지 의존성",
        description: "외부 브릿지가 핵심 자금 흐름에 관여하는가.",
        weight: 3,
        type: "select",
        options: [
          { label: "브릿지 의존 없음", value: "none", score: 1 },
          {
            label: "검증된 브릿지(LayerZero/CCIP 등)",
            value: "trusted",
            score: 0.7,
          },
          { label: "신생/미검증 브릿지 의존", value: "risky", score: 0.2 },
        ],
      },
    ],
  },
  {
    id: "incident",
    title: "인시던트 대응",
    description: "사고 이력과 대응 투명성.",
    items: [
      {
        id: "past_incidents",
        label: "과거 인시던트",
        description: "심각한 자금 손실 이력.",
        weight: 4,
        type: "select",
        options: [
          { label: "이력 없음", value: "none", score: 1 },
          {
            label: "있음, 전액 보상 + 포스트모템 공개",
            value: "compensated",
            score: 0.7,
          },
          { label: "있음, 부분 보상", value: "partial", score: 0.3 },
          { label: "있음, 미보상 또는 은폐", value: "bad", score: 0 },
        ],
      },
      {
        id: "postmortem",
        label: "포스트모템 공개 정책",
        description: "사고 발생 시 포스트모템을 공개하는 명시적 정책이 있다.",
        weight: 2,
        type: "boolean",
      },
      {
        id: "war_room",
        label: "워룸/연락 체계",
        description: "24/7 보안 연락 채널과 SLA가 문서화되어 있다.",
        weight: 2,
        type: "boolean",
      },
    ],
  },
];

export function maxItemScore(item: ChecklistItem): number {
  return item.weight;
}

function answerScore(
  item: ChecklistItem,
  value: AnswerMap[string] | undefined,
): number {
  if (item.type === "boolean") {
    return value === true ? item.weight : 0;
  }
  const opt = item.options?.find((o) => o.value === value);
  if (!opt) return 0;
  return Math.round(opt.score * item.weight * 100) / 100;
}

export function computeScore(answers: AnswerMap): ScoreResult {
  const categories: CategoryScore[] = CHECKLIST.map((cat) => {
    const earned = cat.items.reduce(
      (acc, item) => acc + answerScore(item, answers[item.id]),
      0,
    );
    const possible = cat.items.reduce(
      (acc, item) => acc + maxItemScore(item),
      0,
    );
    const percent = possible === 0 ? 0 : Math.round((earned / possible) * 100);
    return {
      id: cat.id,
      title: cat.title,
      earned: Math.round(earned * 100) / 100,
      possible,
      percent,
    };
  });

  const totalEarned = categories.reduce((acc, c) => acc + c.earned, 0);
  const totalPossible = categories.reduce((acc, c) => acc + c.possible, 0);
  const percent =
    totalPossible === 0 ? 0 : Math.round((totalEarned / totalPossible) * 100);

  return {
    totalEarned: Math.round(totalEarned * 100) / 100,
    totalPossible,
    percent,
    grade: gradeFor(percent),
    categories,
  };
}

export function gradeFor(percent: number): string {
  if (percent >= 90) return "A+";
  if (percent >= 80) return "A";
  if (percent >= 70) return "B";
  if (percent >= 60) return "C";
  if (percent >= 50) return "D";
  return "F";
}

export function gradeColor(grade: string): string {
  switch (grade) {
    case "A+":
      return "text-emerald-400";
    case "A":
      return "text-emerald-400";
    case "B":
      return "text-lime-400";
    case "C":
      return "text-amber-400";
    case "D":
      return "text-orange-400";
    default:
      return "text-rose-500";
  }
}
