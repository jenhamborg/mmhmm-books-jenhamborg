import { useState } from "react";
import Axios from "axios";
import Link from "next/link";
import { Button } from "../components/button";
import Card from "../components/card";
import CloseIcon from "../components/assets/close";
import DeleteIcon from "../components/assets/delete";
import Form from "../components/form";
import { PageWrapper } from "../components/layout/pageWrapper";

const Home = (props) => {
  const [addBook, setAddBook] = useState(false);
  const books = props.data;

  const handleDelete = () => {
    console.log("handle delete hit");
  };

  return (
    <PageWrapper>
      <div className="page-content">
        {!addBook ? (
          <>
            <div className="header-content">
              <h1>Book Shelf</h1>
              <Button onClick={() => setAddBook(true)}>Add book</Button>
            </div>
            <ul>
              {books.map((book) => (
                <li key={book.id}>
                  <Link
                    href={{
                      pathname: "/[id]",
                      query: { id: book.id },
                    }}
                  >
                    {/* <a>{book.title}</a> */}
                    <Card
                      author={book.author}
                      clickFunction={handleDelete}
                      icon={
                        <DeleteIcon width={19} height={21} color={"#929292"} />
                      }
                      id={book.id}
                      image={book.imageUrl}
                      paragraph={book.description}
                      title={book.title}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <Form icon={<CloseIcon width={28} height={28} color={"#AFAFAF"} />} />
        )}
      </div>
    </PageWrapper>
  );
};

export default Home;

export const getStaticProps = async () => {
  const res = await Axios.get(
    "https://us-central1-all-turtles-interview.cloudfunctions.net/books",
    { headers: { Authorization: "jennyhamborg" } }
  );
  return {
    props: { data: res.data },
  };
};
