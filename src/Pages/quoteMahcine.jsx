import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  height: 250px;
  margin-top: 255px;
  margin-left: 20%;
  margin-right: 20%;
  background: #e7e0d5ee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Wrapper = styled.div`
  height: 75%;
  width: 75%;
  padding: 20px;
  display: flex;
`;
const Quote = styled.div`
  width: 100%;
  text-align: center;
  color: #e025a2;
  font-size: 25px;
}

`;
const Author = styled.div`
  width: 100%;
  text-align: right;
  color: green;
`;
const Button = styled.button`
  padding: 9px;
  margin-bottom: 5px;
  text-align: center;
  background-color: #14a740ee;
`;

function QuoteMahcine() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 1000);
    axios
      .get("https://type.fit/api/quotes")
      .then((resp) => {
        let newQuote = resp.data[randomNumber].text;
        let author = resp.data[randomNumber].author;
        let data = [newQuote, author];
        return data;
      })
      .then((data) => {
        setQuote(data[0]);
        setAuthor(data[1]);
      });
  }, []);

  function generateQuote() {
    const randomNumber = Math.floor(Math.random() * 1000);
    axios
      .get("https://type.fit/api/quotes")
      .then((resp) => {
        let newQuote = resp.data[randomNumber].text;
        let author = resp.data[randomNumber].author;
        let data = [newQuote, author];
        return data;
      })
      .then((data) => {
        setQuote(data[0]);
        setAuthor(data[1]);
      });
  }

  return (
    <Container>
      <Wrapper>
        <Quote>{quote}</Quote>
      </Wrapper>
      <Wrapper>
        <Author>~ {author}</Author>
      </Wrapper>
      <Button
        onClick={() => {
          generateQuote();
        }}
      >
        New Quote
      </Button>
      {/* <Twitter>Post on Twitter..</Twitter> */}
    </Container>
  );
}

export default QuoteMahcine;
