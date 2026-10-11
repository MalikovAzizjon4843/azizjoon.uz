import { useI18n } from 'vue-i18n'
import { formatYears } from '@/utils/format'

// Locale-aware accessors for entries of src/data/projects.js.
export function useProjectText() {
  const { t, locale } = useI18n()

  // Field in the current language, falling back to Uzbek when left empty.
  function text(project, field) {
    const value = project.content[locale.value]?.[field]
    const empty = Array.isArray(value) ? !value.length : !value
    return empty ? project.content.uz[field] : value
  }

  function years(project) {
    return formatYears(project.year, t('experience.present'))
  }

  function caption(shot) {
    return shot.caption?.[locale.value] || shot.caption?.uz || ''
  }

  return { text, years, caption }
}
