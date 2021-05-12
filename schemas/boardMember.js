export default {
    title: "Board Member",

    //Identifier
    name:"person",
    type: "document",

    fields: [
      {
        title: "Member image",
        name: "Image",
        type: "image",
        options: {
          hotspot: true // <-- Defaults to false
        }
      },
      {
        title: "Position",
        name: "position",
        type: "string",
      },
      {
        title: "Name",
        name: "name",
        type: "string",
      },
      {
        title: "Email",
        name: "email",
        type: "string",
      },
      {
        title: "Mobile",
        name: "mobile",
        type: "string",
      },
      {
        title: "Number",
        name: "positionNumber",
        type: "number"
      },
    ]
  }