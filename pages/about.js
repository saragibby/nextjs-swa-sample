import styles from '../styles/Home.module.css'

export async function getServerSideProps() {
  const data = JSON.stringify({ time: new Date() });
  console.log("This in run on the server, console.log statement not visible in client browser")
  return { props: { data } };
}

export default function About({data}) {
  const serverData = JSON.parse(data);

  return (
    <>
    <h1>About page (pages/about.js)</h1>
      <h2>Current time from getServerSideProps: {serverData.time}</h2>
    </>
  )
}