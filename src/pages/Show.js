import { useLoaderData, Form } from "react-router-dom";

function Show(props) {
  const movies = useLoaderData();
  console.log(movies);

  return (
    <div className="person">
      <h1>{movies.name}</h1>
      <h2>{movies.title}</h2>
      <img src={movies.image} alt={movies.name} />
    <h2>Update {movies.name}</h2>
    <Form action={`/update/${movies._id}`} method="post">
        <input type="text" name="name" placeholder="person's name" defaultValue={movies.name}/>
        <input type="text" name="title" placeholder="person's title" defaultValue={movies.title}/>
        <input type="text" name="image" placeholder="person's image" defaultValue={movies.image}/>
        <input type="submit" value="Update Person"/>
    </Form>
    <h2>Delete Person</h2>
    <Form action={`/delete/${movies._id}`} method="post">
        <input type="submit" value="Delete Person"/>
    </Form>
    </div>
  );
}

export default Show;