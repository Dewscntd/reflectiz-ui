export type SortAction = {sortBy: string}
export const ALERTS_SORT_ACTIONS = [
  {
    sortBy: 'Date',
  },
  {
    sortBy: 'Severity',
  },
  {
    sortBy: 'Source',
  },
]

export enum AlertSort {
  date = 'Date',
  severity ='Severity',
  source = 'Source'
}
