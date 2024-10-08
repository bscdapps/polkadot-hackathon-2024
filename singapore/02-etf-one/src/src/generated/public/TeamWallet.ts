// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import type { ColumnType, Selectable, Insertable, Updateable } from 'kysely';

/** Identifier type for public.team_wallet */
export type TeamWalletId = string & { __brand: 'TeamWalletId' };

/** Represents the table public.team_wallet */
export default interface TeamWalletTable {
  id: ColumnType<TeamWalletId, TeamWalletId, TeamWalletId>;

  team_id: ColumnType<string, string, string>;

  wallet_id: ColumnType<string, string, string>;

  created_at: ColumnType<Date, Date | string | undefined, Date | string>;
}

export type TeamWallet = Selectable<TeamWalletTable>;

export type NewTeamWallet = Insertable<TeamWalletTable>;

export type TeamWalletUpdate = Updateable<TeamWalletTable>;
