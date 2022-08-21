const plain = () => null;

export const getServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('exam', 'Web');
  res.end(JSON.stringify({ date: '2022-08-21'}));
  return { props: {} };
}

export default plain;
