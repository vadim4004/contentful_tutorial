const contentfulManagement = require("contentful-management")

module.exports = function() {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: 'CFPAT-4dL-_nDQJvLCUn2if9YQOD7ToHZXxRBV7IiBrrx8gis',
  })

  return contentfulClient
    .getSpace('35vgya6ccc7o')
    .then(space => space.getEnvironment('master'))
}