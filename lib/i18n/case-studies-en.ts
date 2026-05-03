export const CASE_STUDY_EN: Readonly<
  Record<
    string,
    {
      tagline: string;
      summary: string;
      highlights: ReadonlyArray<string>;
      takeaway: string;
      groups: Readonly<
        Record<
          string,
          {
            title: string;
            description: string;
            features: Readonly<Record<string, { title: string; detail: string }>>;
          }
        >
      >;
      audits: Readonly<Record<string, { scope?: string }>>;
    }
  >
> = {
  cap: {
    tagline:
      "A stablecoin that launched with all four layers of the security stack in place",
    summary:
      "Most protocols ship one or two layers of security. The good ones ship three. Cap shipped four. Pre-deployment review (audits), per-change review (continuous security), runtime detection (monitoring), and user-side recovery (insurance). On top of that, a $1M bounty closes a fifth layer of defense.",
    highlights: [
      "Multi-firm audits: Trail of Bits, Zellic, Spearbit, Certora",
      "Quarterly audit cycle",
      "PR-level continuous analysis with Octane",
      "Hypernative runtime detection",
      "OpenCover end-user insurance",
      "Sherlock $1M bug bounty",
    ],
    takeaway:
      "Shipping all four security layers (pre-deployment review, continuous review, runtime detection, user insurance) on top of a $1M bounty and contract-level defenses is rare. Most protocols launch with only one or two. What is unusual about Cap is not the depth of any single layer but the number of layers and the decision to land all of them before launch. A reference for the upper bound of what new protocols can realistically achieve as a baseline.",
    audits: {
      Zellic: { scope: "Smart contract" },
      "Trail of Bits": { scope: "Smart contract" },
      Spearbit: { scope: "Smart contract" },
      Electisec: { scope: "LayerZero vault" },
      Recon: { scope: "Invariant testing" },
      Sherlock: { scope: "Audit contest" },
      Certora: { scope: "EigenAVS formal verification" },
    },
    groups: {
      audits: {
        title: "1. Multi-layer pre-deployment review (audits)",
        description:
          "If a single major firm misses one Critical, you are done. Cap stacked seven firms so each one's blind spots are covered by the others. A quarterly cycle ensures it is not a one-shot pass.",
        features: {
          "S 티어 4곳을 동시에 채택": {
            title: "Four S-tier firms in parallel",
            detail:
              "Trail of Bits, Zellic, Certora, and Spearbit. Each is normally considered enough on its own. Their strengths are complementary (ToB's research depth, Zellic's CTF instinct, Certora's formal proofs, Spearbit's boutique reviews) so very little blind spot remains.",
          },
          "방법론을 일부러 섞었음": {
            title: "Mixed methodologies on purpose",
            detail:
              "Manual review (ToB, Zellic, Spearbit), formal verification (Certora), contest (Sherlock), and invariant testing (Recon). Re-examining the same code with different tools means each tool's blind spots get caught by the next. Decisively different from projects that lean on a single methodology.",
          },
          "분기 단위 오딧 사이클": {
            title: "Quarterly audit cycle",
            detail:
              "Not a one-time pre-launch pass: Cap commits to recurring quarterly audits. Code is alive and external dependencies change, so a single audit can not stay valid forever.",
          },
          "Spearbit PR Review 후속 (2025-11)": {
            title: "Spearbit PR review follow-up (Nov 2025)",
            detail:
              "Six months after the main audit, Spearbit returned to review changes at PR granularity. Putting every post-launch change through external review is unusual.",
          },
        },
      },
      continuous: {
        title: "2. Per-change continuous review",
        description:
          "Code changes between scheduled audits are the highest-risk window. Cap closes that gap with automation.",
        features: {
          "Octane Security가 모든 PR을 분석": {
            title: "Octane Security analyzes every PR",
            detail:
              "Octane's LLM audit agent analyzes pull requests automatically as they land. Small changes that would not warrant a fresh formal audit still get a first pass before merge. Resolves the practical limit that you can not send every small PR back to a human audit firm.",
          },
          "Slither CI 통합도 별도로 유지": {
            title: "Slither also runs in CI",
            detail:
              "If Octane is strong on LLM reasoning, Slither is strong on known-pattern matching. The two are complementary, so running them in parallel is the normal posture. Triggered via the yarn test:slither script in CI.",
          },
        },
      },
      runtime: {
        title: "3. Runtime detection",
        description:
          "No matter how thick the audits, no audit fully simulates production usage. So independent runtime detection is required.",
        features: {
          "Hypernative 실시간 위협 탐지": {
            title: "Hypernative real-time threat detection",
            detail:
              "Real-time monitoring of TVL swings, anomalous transactions, governance actions, and mint outliers. Automated alerts must reach the war room before humans notice. The lag between incident start and response start translates directly into loss size.",
          },
        },
      },
      bounty: {
        title: "4. External whitehat incentives",
        description:
          "Internal audits ending does not remove the need for external eyes. Post-launch is when risk is highest, and that is when the whitehat incentive must be large enough to outpace blackhats.",
        features: {
          "Sherlock 상시 바운티 최대 $1M": {
            title: "Sherlock standing bounty up to $1M",
            detail:
              "Up to $1M per Critical. At that scale, whitehats have a reasonable case for spending time on review. Smaller bounties may signal good faith for new projects but rarely move the needle for someone who can find a real Critical.",
          },
        },
      },
      insurance: {
        title: "5. End-user coverage",
        description:
          "Even if all four layers above are bypassed, user funds should still be recoverable. A pre-arranged insurance channel for users is far more credible than ad-hoc post-incident treasury commitments.",
        features: {
          "OpenCover 통합으로 사용자 보험 옵션 제공": {
            title: "OpenCover integration provides user-side insurance options",
            detail:
              "Users can directly purchase coverage for Cap exploits, depegs, and exposure to integrated Pendle markets. Designing coverage that includes risk from integrated external protocols is a detail most teams skip.",
          },
        },
      },
      foundation: {
        title: "Foundation: contract-level defensive circuits",
        description:
          "The base layer underneath all five layers. Authority separation, time delays, and pause circuits so a single key compromise does not immediately become loss.",
        features: {
          "함수 단위 멀티시그": {
            title: "Function-level multisig",
            detail:
              "Not the common owner-everything pattern. Each sensitive function has its own permission group, so a single key compromise can not trigger every action. Blast radius is intentionally narrow by design.",
          },
          "OpenZeppelin TimelockController, 86,400초 (1일) 최소 지연": {
            title: "OpenZeppelin TimelockController, 86,400 second (1 day) minimum delay",
            detail:
              "Admin actions never execute immediately. Users get a 24-hour withdrawal window before any change, and even a key compromise is responded to within those 24 hours.",
          },
          "Dual Pause + Emergency Withdraw": {
            title: "Dual pause + emergency withdraw",
            detail:
              "pauseAsset (per-asset) and pauseProtocol (whole protocol) are separated, giving flexibility for both day-to-day operation and emergency response. emergency withdraw is decoupled from main logic so users can recover their assets even when the protocol is paused.",
          },
          "Oracle: Primary + Backup + Staleness Auto-pause": {
            title: "Oracle: primary + backup + staleness auto-pause",
            detail:
              "Oracle manipulation is the most common DeFi exploit vector. Cap layers a backup adapter, staleness validation, and 8-decimal normalization, and mint and burn auto-pause when the price is stale. The key design choice is automatically falling into safe mode without human intervention.",
          },
          "전체 컨트랙트와 오딧 보고서 GitHub 공개": {
            title: "Full contracts and audit reports published on GitHub",
            detail:
              "cap-contracts and cap-audits repositories are public, and all eight reports can be verified directly. Verifiability is the baseline of trust.",
          },
        },
      },
    },
  },
};
