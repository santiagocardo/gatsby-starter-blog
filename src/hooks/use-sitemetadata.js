import { graphql, useStaticQuery } from 'gatsby'

const useSiteMedatada = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMedatada
