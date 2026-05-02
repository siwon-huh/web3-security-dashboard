export type Tier = "S" | "A+" | "A" | "B" | "C";

export type FirmCategory =
  | "smart-contract"
  | "cryptography"
  | "formal-verification";

export interface AuditFirm {
  readonly name: string;
  readonly tier: Tier;
  readonly category: FirmCategory;
  readonly specialty: ReadonlyArray<string>;
  readonly notableClients: ReadonlyArray<string>;
  readonly website: string;
  readonly notes: string;
}

export type CheckType = "boolean" | "select";

export interface SelectOption {
  readonly label: string;
  readonly value: string;
  readonly score: number;
}

export interface ChecklistItem {
  readonly id: string;
  readonly label: string;
  readonly description: string;
  readonly weight: number;
  readonly type: CheckType;
  readonly options?: ReadonlyArray<SelectOption>;
}

export interface ChecklistCategory {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly items: ReadonlyArray<ChecklistItem>;
}

export type AnswerValue = boolean | string;

export type AnswerMap = Readonly<Record<string, AnswerValue>>;

export interface CategoryScore {
  readonly id: string;
  readonly title: string;
  readonly earned: number;
  readonly possible: number;
  readonly percent: number;
}

export interface ScoreResult {
  readonly totalEarned: number;
  readonly totalPossible: number;
  readonly percent: number;
  readonly grade: string;
  readonly categories: ReadonlyArray<CategoryScore>;
}
