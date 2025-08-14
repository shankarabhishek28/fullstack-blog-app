export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of blog article',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of your blog article',
      options: {
        source: 'title',
      },
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Title Image',
    },
    {
      name: 'smallDescription',
      type: 'text',
      title: 'Small Description',
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          {title: 'Good News', value: 'Good News'},
          {title: 'Our Picks', value: 'Our Picks'},
          {title: 'Business', value: 'Business'},
          {title: 'Analysis', value: 'Analysis'},
          {title: 'World', value: 'World'},
          {title: 'Politics', value: 'Politics'},
          {title: 'Climate', value: 'Climate'},
          {title: 'Entertainment', value: 'Entertainment'},
          {title: 'Sport', value: 'Sport'},
          {title: 'Technology', value: 'Technology'},
          {title: 'Science', value: 'Science'},
        ],
        layout: 'dropdown',
      },
    },

    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{type: 'block'}],
    },
  ],
}
