import { useParams, Route } from "react-router-dom";
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import Comments from "../components/comments/Comments";

const DUMMY_QUOTES = [
  { id: "q1", author: "Yusuf", text: "Learning React is fun!" },
  { id: "q2", author: "Yusuf2", text: "Learning React is great!" },
];

const QuoteDetail = () => {
const params = useParams();

const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

if(!quote){
  return <p>No Quote Found!</p>
}

  return (
<>
<HighlightedQuote text={quote.text} author = {quote.author}/>
<Route path = {`/quotes/:${params.quoteId}/comments`}>
  <Comments />
</Route>
</>
  
)}

export default QuoteDetail;