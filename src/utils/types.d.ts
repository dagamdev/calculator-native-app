import { type Dispatch, type SetStateAction } from 'react'

export type FunctionState<State> = Dispatch<SetStateAction<State>>

export type ToggleTheme = 'light' | 'dark'
