// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
    use: 'gridsome-source-google-sheets',
    options: {
      sheetId: '1QHesjk_ZWuRsBl4qx-BOX_XGjlncK-ny49IoAsfeo98', 
      apiKey: 'AIzaSyDiqvRvAseB083qJ7JxQlmA_S4yAjw0Lvc' 
   //   route: 'OPTIONAL_ROUTE', //Optional - omit if not using routes
   //   type: 'TYPE_NAME', //Optional - default is googleSheet. Used for graphql queries.
      }
    }
  ]
}
