export default {
    name: 'tournamentInfo',
    type: 'document',
    title: 'Tournament Information',
    fields: [
      {
      title: 'Title',
      name: 'title',
      type: 'string',
      },
      {
        title: 'Tournament Information',
        name: 'information',
        type: 'array',
        of: [{type: 'block'}]
     }
]
}
