import React,{useState} from 'react'
import "./Question.css"
import { Add} from '@material-ui/icons';
import SearchEmail from './SearchEmail';
function Question() {
    const [ques,setQues]=useState(0)
    console.log(ques)
    const showaccord=(s)=>
    {
        if(ques===s)
        setQues(0);
        else
        setQues(s);
    }
  return (
    <div className="question">
      <h1>Frequently Asked Questions</h1>
      <div className="accordation">
        <div
          className={ques === 1 ? "acclist showQuestion" : "acclist"}
          onClick={() => showaccord(1)}
        >
          <div>
            <h3>What is Netflix?</h3>
            <Add  className="spin"   fontSize="x-large"></Add>
          </div>
          <div>
            <p>
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries and more – on
              thousands of internet-connected devices.
            </p>
            <p>
              You can watch as much as you want, whenever you want, without a
              single ad – all for one low monthly price. There's always
              something new to discover, and new TV shows and movies are added
              every week!
            </p>
          </div>
        </div>
        <div
          className={ques === 2 ? "acclist showQuestion" : "acclist"}
          onClick={() => showaccord(2)}
        >
          <div>
            <h3>How much does Netflix cost?</h3>
            <Add  className="spin"  ></Add>
          </div>
          <div>
            <p>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
            </p>
          </div>
        </div>
        <div
          className={ques === 3 ? "acclist showQuestion" : "acclist"}
          onClick={() => showaccord(3)}
        >
          <div>
            <h3>Where can I watch?</h3>
            <Add  className="spin"  ></Add>
          </div>
          <div>
            <p>
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles.
            </p>
            <p>
              You can also download your favourite shows with the iOS, Android,
              or Windows 10 app. Use downloads to watch while you're on the go
              and without an internet connection. Take Netflix with you
              anywhere.
            </p>
          </div>
        </div>
        <div
          className={ques === 4 ? "acclist showQuestion" : "acclist"}
          onClick={() => showaccord(4)}
        >
          <div>
            <h3>How do I cancel?</h3>
            <Add  className="spin"  ></Add>
          </div>
          <div>
            <p>
              Netflix is flexible. There are no annoying contracts and no
              commitments. You can easily cancel your account online in two
              clicks. There are no cancellation fees – start or stop your
              account anytime.
            </p>
          </div>
        </div>
        <div
          className={ques === 5 ? "acclist showQuestion" : "acclist"}
          onClick={() => showaccord(5)}
        >
          <div>
            <h3>What can I watch in Netflix?</h3>
            <Add  className="spin"  ></Add>
          </div>
          <div>
            <p>
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. Watch
              as much as you want, anytime you want.
            </p>
          </div>
        </div>
        <div
          className={ques === 6 ? "acclist showQuestion" : "acclist"}
          onClick={() => showaccord(6)}
        >
          <div>
            <h3>Is Netflix good for kids?</h3>
            <Add  className="spin"  ></Add>
          </div>
          <div>
            <p>
              The Netflix Kids experience is included in your membership to give
              parents control while kids enjoy family-friendly TV shows and
              films in their own space.
            </p>
            <p>
              Kids profiles come with PIN-protected parental controls that let
              you restrict the maturity rating of content kids can watch and
              block specific titles you don’t want kids to see.
            </p>
          </div>
        </div>
      </div>
      <SearchEmail/>
    </div>
  );
}

export default Question