import { FormEvent, ChangeEvent, useState } from "react";
import Axios from "axios";
import { InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import { Button } from "../components/button";
import Card from "../components/card";
import CloseIcon from "../components/assets/close";
import DeleteIcon from "../components/assets/delete";
import Form from "../components/form";
import { PageWrapper } from "../components/layout/pageWrapper";

const baseUrl = "https://us-central1-all-turtles-interview.cloudfunctions.net";

const Home = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [addBook, setAddBook] = useState(false);
  const [formData, setFormData] = useState({
    author: "",
    description: "",
    imageUrl: "",
    title: "",
  });
  const router = useRouter();

  function refreshData() {
    router.replace(router.asPath);
  }

  function handleChange(
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  }

  function handleSubmit(e: FormEvent<HTMLInputElement>) {
    e.preventDefault();
    const headers = {
      Authorization: "jennyhamborg",
    };
    Axios.post(`${baseUrl}/books`, formData, { headers }).then((res) => {
      if (res.data) {
        setAddBook(false);
        refreshData();
      }
    });
  }

  function handleDelete(bookId: string) {
    const headers = {
      Authorization: "jennyhamborg",
    };
    Axios.delete(`${baseUrl}/books/${bookId}`, { headers }).then((res) => {
      if (res.data) {
        refreshData();
      }
    });
  }

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
              {data.map((book: any) => (
                <li key={book.id}>
                  <Card
                    author={book.author}
                    clickFunction={() => handleDelete(book.id)}
                    icon={
                      <DeleteIcon width={19} height={21} color={"#929292"} />
                    }
                    id={book.id}
                    image={book.imageUrl}
                    paragraph={book.description}
                    title={book.title}
                  />
                </li>
              ))}
            </ul>
          </>
        ) : (
          <Form
            handleChange={handleChange}
            formData={formData}
            iconFunction={() => setAddBook(false)}
            icon={<CloseIcon width={28} height={28} color={"#AFAFAF"} />}
            submit={handleSubmit}
          />
        )}
      </div>
    </PageWrapper>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const res = await Axios.get(`${baseUrl}/books`, {
    headers: { Authorization: "jennyhamborg" },
  });
  return {
    props: { data: res.data },
  };
};
