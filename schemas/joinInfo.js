export default {
        name: 'joinInformation',
        type: 'document',
        title: 'Join Information',
        fields: [
          {
          title: 'Title',
          name: 'title',
          type: 'string',
          },
          {
            title: 'Join Information',
            name: 'information',
            type: 'array',
            of: [{type: 'block'}]
         },
         {
          title: "Paragraph Order",
          name: "paragraphNumber",
          type: "number"
        }
    ]
}
