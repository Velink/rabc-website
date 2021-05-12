export default {
    name: 'playerType',
    type: 'document',
    title: 'Player Type',
    fields: [
      {
      title: 'Title',
      name: 'title',
      type: 'string',
      },
      {
        title: 'Information',
        name: 'information',
        type: 'array',
        of: [{type: 'block'}]
     },
      {
        title: "Card Order",
        name: "cardNumber",
        type: "number"
      }
]
}