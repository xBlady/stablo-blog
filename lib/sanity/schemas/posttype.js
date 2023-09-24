export default {
    name: "postType",
    title: "Post Type",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
        options: {
          list: [
            { title: "Project", value: "project" },
            { title: "Blog", value: "blog" }
          ],
          layout: 'radio', // if you want to display options as radio buttons
        },
        validation: Rule => Rule.required()
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "title",
          maxLength: 96
        },
        validation: Rule => Rule.required()
      },
      {
        name: "description",
        title: "Description",
        type: "text"
      }
    ]
  };
  