export default {
    name: 'playingCard',
    type: 'document',
    title: 'Playing Card',
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