import Layout from "../components/Layout"

const github = ({user}) => {
  
  return (
    <Layout footer={false}>
      <div class="row">
        <div class="col-md-4 offset-md-4">
          <div class="card card-body text-center">
            <h1>{user.name}</h1>
            <img src={user.avatar_url} alt=""/>
            <p>{user.bio}</p>
            <a href={user.blog} target='_blank' className="btn btn-outline-secondary my-2">My Blog</a>
            <a href={user.htm_url} target='_blank' className="btn btn-outline-secondary my-2">Profile GitHub</a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps(){

  const res = await fetch('https://api.github.com/users/Valar789')
  const data = await res.json()

  console.log(data);
  return{
    props:{
      user: data
    }
  }
}

export default github