export default {
    name: 'sponsor',
    type: 'document',
    title: 'Sponsor',
    fields: [
      {
      title: 'Title',
      name: 'title',
      type: 'string',
      },
      {
        title: 'Sponsor Information',
        name: 'information',
        type: 'array',
        of: [{type: 'block'}]
     },
      {
        title: "Sponsor Order",
        name: "sponsorNumber",
        type: "number"
      }
]
}