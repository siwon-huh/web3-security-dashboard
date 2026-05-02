export const RESEARCH_PROMPT = `You are a Web3 protocol security analyst. Your task is to research a project's public security posture and answer 24 questions that map directly to a security scoring checklist.

PROJECT: <Replace with the project name and website URL, e.g. "Aave (https://aave.com)">

SOURCES TO CHECK (in priority order):
1. Project's official documentation (docs.<project>.com or similar)
2. Official GitHub organization, especially repos like *-audits, *-contracts, *-security
3. Audit report PDFs (on website, audit repos, or the audit firm's report library)
4. Etherscan / block explorer for deployed contract verification
5. Bug bounty page (Immunefi, HackenProof, or self-hosted)
6. Blog and X/Twitter posts for incident history and postmortems

RULES:
- Be specific and cite sources (URLs) where possible.
- If information is not publicly available, mark "unknown". Do NOT guess.
- For each answer, include the exact option value listed below.
- After 24 questions, summarize strongest and weakest areas in 2-3 sentences.

OUTPUT FORMAT (per question):
Q<n>. <option_value> — <one-line justification> [source: <url or "docs"/"github"/"unknown">]

== 1. SMART CONTRACT AUDITS ==

Q1. Highest-tier audit firm that has reviewed the currently deployed code?
  Options:
  - s    : S tier (Trail of Bits, OpenZeppelin, Certora, Spearbit, Zellic, ChainSecurity, Asymmetric Research, Sigma Prime, Runtime Verification, Veridise)
  - a    : A or A+ tier (ConsenSys Diligence, Cantina, Ottersec, ChainLight, Hexens, Nethermind Security, MoveBit, Verichains, Sherlock, Pashov, Macro, Dedaub, Cyfrin, Code4rena, ABDK, Least Authority, Statemind, Three Sigma, Oak Security, Trust Security, Guardian Audits, Paladin)
  - b    : B tier (Halborn, Quantstamp, Sec3, PeckShield, SlowMist, Hacken, QuillAudits, Salus, Iosiro, BAIL, MixBytes, Pessimistic, Coinfabrik, Coinspect, Decurity, Hashlock, etc.)
  - c    : C tier (CertiK, Beosin, Solidity Finance, SmartState, BlockSafu, Audit One, etc.)
  - none : no public audit

Q2. Number of independent audit firms (different firms, not different engagements)?
  Options: 3plus | 2 | 1 | 0

Q3. Time since the latest audit covering currently deployed code?
  Options:
  - fresh : within 6 months
  - year  : within 1 year
  - old   : within 2 years
  - stale : over 2 years OR material code changed since last audit without re-audit

Q4. Are audit reports publicly accessible (PDF or webpage)?
  Options: yes | no

Q5. Have all Critical/High findings been fixed or explicitly accepted?
  Options: yes | no

== 2. CODE QUALITY ==

Q6. Test coverage of production contracts?
  Options:
  - 90  : >= 90%
  - 70  : 70-89%
  - 50  : 50-69%
  - low : < 50% or undisclosed

Q7. Production contracts open-sourced in a public repo?
  Options: yes | no

Q8. Deployed contracts verified on Etherscan or equivalent block explorer?
  Options: yes | no

Q9. Formal verification applied (Certora, Halmos, K Framework, etc.)?
  Options: yes | no

Q10. Fuzzing or invariant tests in the repo (Foundry invariant, Echidna, Halmos)?
  Options: yes | no

== 3. OPERATIONAL SECURITY ==

Q11. Admin multisig structure?
  Options:
  - robust   : 4-of-7 or stronger with diverse signers
  - standard : 3-of-5 or similar
  - weak     : 2-of-3 or weaker
  - eoa      : single EOA (no multisig)

Q12. Timelock on admin actions?
  Options:
  - 48    : >= 48 hours
  - 24    : 24 hours
  - short : 6-24 hours
  - none  : no timelock

Q13. Upgrade path?
  Options:
  - immutable  : not upgradeable
  - controlled : timelock + multisig
  - msig       : multisig only, no timelock
  - single     : single key upgrade

Q14. Pause or circuit breaker on critical functions?
  Options: yes | no

Q15. Active onchain monitoring (Forta, Tenderly, Hypernative, Phalcon, OpenZeppelin Defender)?
  Options: yes | no

== 4. BUG BOUNTY ==

Q16. Bug bounty platform?
  Options:
  - immunefi : Immunefi public program
  - self     : HackenProof, HackerOne, or own platform
  - informal : ad-hoc / case by case
  - none     : no program

Q17. Maximum reward for Critical issues?
  Options:
  - 1m   : >= $1M
  - 250k : $250K - $1M
  - 50k  : $50K - $250K
  - low  : under $50K or none

Q18. Scope, exclusions, and PoC requirements clearly documented?
  Options: yes | no

== 5. DECENTRALIZATION & DEPENDENCIES ==

Q19. Oracle design?
  Options:
  - robust      : Chainlink etc with TWAP/sanity checks
  - single_safe : single oracle with validation
  - single      : single oracle without validation
  - spot        : DEX spot price or no oracle

Q20. Governance model?
  Options:
  - onchain_tl : onchain token governance + timelock
  - offchain   : offchain signal + multisig execution
  - team       : team-controlled (declarative)
  - opaque     : control structure unclear

Q21. External bridge dependency for core fund flow?
  Options:
  - none    : no bridge dependency
  - trusted : verified bridge (LayerZero, CCIP, native rollup bridges)
  - risky   : new or unverified bridge

== 6. INCIDENT RESPONSE ==

Q22. Past security incidents involving fund loss?
  Options:
  - none         : no public incidents
  - compensated  : had incident but full compensation + public postmortem
  - partial      : had incident with partial compensation
  - bad          : had incident with no compensation or coverup

Q23. Public commitment / policy to publish postmortems on incidents?
  Options: yes | no

Q24. Documented 24/7 security contact channel with SLA?
  Options: yes | no

== END ==

After all 24 answers, write 2-3 sentences summarizing:
1. The strongest 1-2 areas of this protocol's security posture
2. The weakest 1-2 areas or biggest risks
3. Anything notably missing for a protocol of this size

Begin research now.`;
