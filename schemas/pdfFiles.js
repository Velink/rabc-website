export default {
    title: 'Brochure',
    name: 'pdfFiles',
    type: 'document',
    fields: [
      {
        name: 'description',
        type: 'string',
        title: 'Description'
      },
      {
        name: 'pdfFile',
        type: 'file',
        title: 'PDF File',
        options: {
          accept: ".pdf"
        },
      }
    ]
  }