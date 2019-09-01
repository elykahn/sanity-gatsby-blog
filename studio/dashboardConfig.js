export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d6b364846c850b92e756d5f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-422hrys1',
                  apiId: '746fde50-88e7-4146-9ba2-ef633b6bfa19'
                },
                {
                  buildHookId: '5d6b3648126d1eb2cfa154c8',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-z34m259z',
                  apiId: 'b4bdeb3f-a986-40dc-b853-2645848e51ba'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/elykahn/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-z34m259z.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
