export interface IAccountColumn {
  name: string
  value: string
  ref: string
  content: string
  label?: string
  width?: string | number
  classes?: string[]
  props?: {
    placeholder?: string
    type?: string
    clearable?: boolean
    required?: boolean
    maxlength?: string
    showPassword?: boolean
    filterable?: boolean
    optionLabel?: string
    optionKey?: string
    optionValue?: string
    options?: Array<Record<string, unknown>>
    symbolId?: string
    fixed?: 'left' | 'right'
  }
}
