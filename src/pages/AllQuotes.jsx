import QuoteList from "../components/quotes/QuoteList";
const DUMMY_QUOTES = [
  { id: "q1", author: "Yusuf", text: "Learning React is fun!" },
  { id: "q2", author: "Yusuf2", text: "Learning React is great!" },
];

const AllQuotes = () => {
  return (
    <>
      <QuoteList quotes={DUMMY_QUOTES}/>
    </>
  );
};

export default AllQuotes;
