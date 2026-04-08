import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Contenuti')
    .items([
      S.documentTypeListItem('animal').title('Animali'),
      S.documentTypeListItem('event').title('Eventi'),
      ...S.documentTypeListItems().filter(
        (item) => !['animal', 'event'].includes(item.getId() || '')
      ),
    ])