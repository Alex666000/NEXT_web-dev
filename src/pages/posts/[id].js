import Head from "next/head";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

// определяем сколько страниц должно быть создано с таким id
export const getStaticPaths = async () => {
  // данный путь испольхзуем при локальной разработке
  /* const response = await fetch('https://jsonplaceholder.typicode.com/posts/') */

  // при загрузке на сервер путь станет невалиден  поэтому создаем файл .env.local
  // для храняния переменных среды он не попадает в репозитории и содержит ключи какие-то
  // эти данные используются в Арр но не должны  быть доступны сторонним пользователям
  // const response = await fetch('https://jsonplaceholder.typicode.com/posts/');


  const response = await fetch(`${process.env.API_HOST}/socials/`);

  // если в этот файл вносятся изменения то приложение  наддо перезапускать чтобы они применились -- стопаем проект и стартуем заново


  const data = await response.json();

  const paths = data.map(({ id }) => ({
    // id обязательно строка
    params: { id: id.toString() }
  }));

  return {
    paths,
    // fallback - что в случае ошибки вернется 404 страница
    fallback: false,
  }
};


// getStaticProps - для наполнения контентом нашей страницы...
export const getStaticProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { post: data },
  }
};

function PostInfo(props) {
  return null;
}

const Post = ({ post }) => (
  <>
    <Head>
      <title>Contact page</title>
    </Head>
    <PostInfo post={post} />
  </>
);

export default Post;
