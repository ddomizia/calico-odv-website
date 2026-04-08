import type {StructureResolver} from 'sanity/structure'
import {CalendarDays, PawPrint} from 'lucide-react'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Contenuti')
    .items([
      S.documentTypeListItem('animal')
        .title('Animali')
        .icon(PawPrint),

      S.documentTypeListItem('event')
        .title('Eventi')
        .icon(CalendarDays),

      ...S.documentTypeListItems().filter(
        (item) => !['animal', 'event'].includes(item.getId() || '')
      ),
    ])