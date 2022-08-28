import { useEffect } from 'react';
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
const DUMMY_QUOTES = [
  { id: "q1", author: "Yusuf", text: "Learning React is fun!" },
  { id: "q2", author: "Yusuf2", text: "Learning React is great!" },
];

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();
  const { quoteId } = params;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect (() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId])

  if(status === 'pending') {
    return <div className="centered"><LoadingSpinner/></div>
  }

  if(error) {
    return <p className="centered">{error}</p>;
  }
  
  if (!loadedQuote.text) {
    return <p>No Quote Found!</p>;
  }

  return (
    <>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
