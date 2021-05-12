export default {
        name: 'group',
        type: 'document',
        title: 'Group',
        fields: [
          {
          title: 'Group',
          name: 'text',
          type: 'array',
          of: [{type: 'block'}]
          },
          {
            title: "Number",
            name: "groupNumber",
            type: "number"
          }
        ],
        orderings: [
          {
            title: 'Number',
            name: 'groupNumber',
            by: [
              {field: 'groupNumber', direction: 'asc'}
            ]
          }
        ]
}
