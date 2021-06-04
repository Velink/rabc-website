export default {
    name: 'introInformation',
    type: 'document',
    title: 'Introduction',
    fields: [
      {
      title: 'Title',
      name: 'title',
      type: 'string',
      },
      {
        title: 'Introduction Information',
        name: 'information',
        type: 'array',
        of: [{type: 'block'}]
     },
      {
        title: "Paragraph Order",
        name: "ParagraphNumber",
        type: "number"
      }
]
}