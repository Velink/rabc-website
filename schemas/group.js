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
          },
          {
            title: "Group image",
            name: "Image",
            type: "image",
            options: {
              hotspot: true // <-- Defaults to false
            }
          },
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
