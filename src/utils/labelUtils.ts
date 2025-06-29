export type LabelText = { text: string }

export const labelTransformer = {
  toArray(label: unknown): LabelText[] {
    if (Array.isArray(label)) {
      return label
        .map((l) => (typeof l === 'string' ? { text: l } : l))
        .filter((l): l is LabelText => !!l && typeof l.text === 'string' && l.text.trim().length > 0)
    }

    if (typeof label === 'string') {
      return label
        .split(';')
        .map((text) => text.trim())
        .filter((text) => text.length > 0)
        .map((text) => ({ text }))
    }

    return []
  },

  toString(label: unknown): string {
    if (Array.isArray(label)) {
      const joined = label
        .map((l) => l?.text?.trim())
        .filter((text) => text?.length > 0)
        .join(';')
      return joined ? joined + ';' : ''
    }

    return typeof label === 'string' ? label : ''
  },
}
