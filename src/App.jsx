import React, {useState} from "react";
import {
  Card,
  Text,
  OrderedList,
  ListItem,
  Heading,
  FormControl,
  Input,
  Textarea,
  Button
} from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { useFetch } from "./utils/use-fetch";
import { postAPI } from "./service/posts";

const App = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const posts = useFetch("POSTS", postAPI.get);

  const mutation = useMutation({
    mutationFn: (state)=> postAPI.create(state),
    onSuccess: () => {
      setTitle("")
      setContent("")
      posts.refetch()

    },
    onError: (error) => console.log(error.message)
  })

  if (posts.isLoading) return <Text>Loading...</Text>;
  if (posts.error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Card m={10} mb={10} p={4} bgColor={'indigo-400'}>
        <p>Title: {title}</p>
        <p>Content: {content}</p>
        <Heading my={4}>ADD TODOS</Heading>
        <FormControl>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Add a new post"/>
          <Textarea value={content} onChange={(e) => setContent(e.target.value)} my={6} placeholder="Contetnt" />
          <Button onClick={()=> mutation.mutate({title, content})}>ADD POST</Button>
        </FormControl>
      </Card>

      <Card m={10} mb={10} p={4}>
        <Heading className="mt-8 mb-4">TODOS</Heading>

        <OrderedList>
          {posts.data?.map((item) => (
            <ListItem className="bg-indigo-400 rounded mb-2 p-2" key={item.id}>
              <h2 className="text-white text-[18px] font-[700]">
                {item.title}
              </h2>
              <p className="text-white text-[14px] font-[400]">
                {item.content}
              </p>
            </ListItem>
          ))}
        </OrderedList>
      </Card>
    </>
  );
};

export default App;
