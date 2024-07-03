import Image from "next/image"
import styles from "./singlePost.module.css"
const getData = async ({slug}) => {
  const res  = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)

  if(!res.ok){
    throw new Error("Something went wrong")
  }

  return res.json()
}

const SinglePostPage = async ({params}) => {

  
  const slug = params
  
  const post = await getData(slug)
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/26626436/pexels-photo-26626436/free-photo-of-ahsap-tahta-peyzaj-manzara.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.detail}>
              <Image width={50} height={50} src="https://images.pexels.com/photos/26626436/pexels-photo-26626436/free-photo-of-ahsap-tahta-peyzaj-manzara.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""   className={styles.avatar}/>
            <div className={styles.detailtext}>
              <span className={styles.detailTitle}>Author</span>
              <span className={styles.detailValue}>Terry jefferson</span>
            </div>
            <div className={styles.detailtext}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>01.07.2024</span>
            </div>
          </div>
        <div className={styles.content}>
          {post.body}
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage