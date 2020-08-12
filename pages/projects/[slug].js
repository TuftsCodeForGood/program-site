import styles from '../../components/landing_page.module.css'
import p from '../../components/project_page.module.css'
import slugs from '../../util/project.js'
import { useRouter } from 'next/router'

function Project({ proj }) {
  return (
    <div className={p.body} id={p.bg}>
      <div key={proj.name}>
        <div className={p.head_rect}>
          <h1 className={p.txt} id={p.title}>{proj.name}</h1>
          <a href={proj.src} className={p.txt} id={p.sub}>{proj.website}</a>
        </div>
        <div className={p.row}>
          <div className={p.column}>
              <div className={p.item}>
                <img src={proj.image1} alt={proj.image1title} className={p.image} />
                <h4 className={p.txt} id={p.image_title}>{proj.image1title}</h4>
              </div>
          </div>
          <div className={p.column}>
            <div className={p.details}>
              <p className={p.txt} id={p.detail}>{proj.text1}</p>
            </div>
          </div>
        </div>
        <div className={p.row}>
          <div className={p.column}>
            <div className={p.details}>
              <p className={p.txt} id={p.detail}>{proj.text2}</p>
            </div>
          </div>
          <div className={p.column}>
            <div className={p.item}>
              <img src={proj.image2} alt={proj.image2title} className={p.image} />
              <h4 className={p.txt} id={p.image_title}>{proj.image2title}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project

export async function getStaticProps(context) {
  const { slug } = context.params
  const proj = slugs[slug]

  return {
    props: {
      proj,
    },
  }
}

export async function getStaticPaths() {
  console.log(slugs)
  return {
    paths: Object.values(slugs).map( ({ slug }) => {
      return {params: {slug}};
    }),
    fallback: false
  };
}